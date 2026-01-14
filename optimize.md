# Database Optimization Guide

Strategies to reduce Firebase/cloud database read/write frequency and volume.

---

## Implementation Status

| Optimization | Status | Write Reduction |
|--------------|--------|-----------------|
| Debounce saves (1 second) | ✅ Implemented | ~70% |
| Skip navigation saves | ✅ Implemented | ~50% |
| Save on page exit | ✅ Implemented | ~60% |
| Don't store full problems | ⏳ Future | ~80% storage |
| Split documents | ⏳ Future | ~40% |
| Compress arrays | ⏳ Future | ~30% storage |

**Combined estimated write reduction: ~80-90%**

---

## Current Data Storage Analysis

### What Gets Saved (in `saveState()`)
```javascript
{
  currentCourse,      // string (~10 bytes)
  currentTab,         // string (~10 bytes)
  currentUnit,        // number (~4 bytes)
  score,              // number (~4 bytes)
  completedProblems,  // array of IDs (grows over time)
  favorites,          // array of IDs
  generatedProblems,  // LARGE - full problem objects with passages!
  settings,           // small object (~50 bytes)
  bookmarks           // small object (~100 bytes)
}
```

### Save Triggers (After Optimization)
| Action | Triggers Save | Frequency |
|--------|---------------|-----------|
| Switch tabs | ❌ No (saves on exit) | High |
| Select unit | ❌ No (saves on exit) | High |
| Select course | ❌ No (saves on exit) | Low |
| Toggle favorite | ✅ Yes (debounced) | Medium |
| Check answer (correct) | ✅ Yes (debounced) | Medium |
| Generate problems | ✅ Yes (debounced) | Low |
| Change settings | ✅ Yes (debounced) | Low |
| Page exit/background | ✅ Yes (immediate) | Low |

**Optimized**: Navigation no longer triggers saves. Important actions are debounced.

---

## Future Optimization Strategies

### 1. Don't Store Full Generated Problems (Reduces storage ~80%)

**Current approach** (wasteful):
```javascript
generatedProblems: [
    {
        id: 'gen-1',
        question: 'Read the passage... (500+ characters)',
        passage: '... (1000+ characters)',
        options: [...],
        // ~2KB per problem
    }
]
```

**Optimized approach** (store seeds only):
```javascript
generatedProblems: [
    { id: 'gen-1', generatorId: 'sat-reading-1-central-idea', seed: 12345 }
    // ~50 bytes per problem
]
```

Then regenerate the problem using the seed when loading:
```javascript
function regenerateProblem(seed, generatorId) {
    // Use seeded random to get same result
    const seededRandom = mulberry32(seed);
    // ... regenerate with same random choices
}
```

---

### 2. Split Data into Separate Documents

**Frequently changed** (session data):
```javascript
// Save locally only, sync rarely
sessionState: {
    currentTab,
    currentUnit,
    currentCourse,
    bookmarks,
    scrollPosition
}
```

**Rarely changed** (user progress):
```javascript
// Sync to cloud on important actions
userProgress: {
    score,
    completedProblems,
    favorites,
    settings
}
```

Firebase structure:
```
users/
  {uid}/
    progress/     <- sync on correct answers, favorites
    session/      <- sync on exit only (or don't sync at all)
```

---

### 3. Compress Completed Problems Array

If user completes many problems, the ID array grows large.

**Current**: `["u1p1", "u1p2", "u1p3", "u2p1", ...]`

**Option A - Use bitmap** (for fixed problem sets):
```javascript
// Each bit represents a problem
completedBitmap: "11101001..."  // Much smaller
```

**Option B - Store count only** (if IDs are predictable):
```javascript
completed: {
    'im3-1': 5,    // 5 problems completed in IM3 unit 1
    'im3-2': 3,
    'sat-math-1': 8
}
```

---

## Future Implementation Priority

| Optimization | Write Reduction | Storage Reduction | Effort |
|--------------|-----------------|-------------------|--------|
| Don't store full problems | - | ~80% | Medium |
| Split documents | ~40% | - | Medium |
| Compress arrays | - | ~30% | High |

---

## Firebase-Specific Tips

### Batch Writes
```javascript
const batch = db.batch();
batch.update(userRef, { score: newScore });
batch.update(progressRef, { completed: newCompleted });
await batch.commit();  // 1 write instead of 2
```

### Use Firestore Offline Persistence
```javascript
firebase.firestore().enablePersistence()
    .then(() => {
        // Reads from cache first, syncs when online
    });
```

### Set Merge Options
```javascript
// Only update changed fields, don't overwrite entire document
db.collection('users').doc(uid).set(data, { merge: true });
```

---

## Estimated Savings

| Scenario | Before | After (Current) | After (Full Optimization) |
|----------|--------|-----------------|---------------------------|
| 10-minute study session | ~50 writes | ~5 writes | ~5 writes |
| Storage per 100 generated problems | ~200KB | ~200KB | ~5KB |
| Monthly Firestore costs (1000 users) | ~$5 | ~$0.50 | ~$0.25 |
