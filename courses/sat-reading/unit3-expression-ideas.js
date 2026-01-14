// SAT Reading Unit 3: Expression of Ideas
// Transitions, organization, and effective language use

const satReadingUnit3 = {
    id: 3,
    name: 'Unit 3',
    title: 'Expression of Ideas',

    lessons: [
        {
            title: '3.1 Logical Transitions',
            content: `
                <p>Transitions connect ideas and show relationships between sentences and paragraphs.</p>
                <div class="formula-box">
                    <strong>Transition Types:</strong><br>
                    • Addition: furthermore, moreover, also, in addition<br>
                    • Contrast: however, nevertheless, on the other hand, yet<br>
                    • Cause/Effect: therefore, consequently, as a result, thus<br>
                    • Example: for instance, specifically, to illustrate<br>
                    • Sequence: first, next, finally, meanwhile
                </div>
                <div class="example">
                    <h4>SAT Strategy:</h4>
                    <p>Read the sentences BEFORE and AFTER the blank. What relationship exists between them? Choose the transition that reflects that relationship.</p>
                </div>
            `
        },
        {
            title: '3.2 Sentence Placement',
            content: `
                <p>Some questions ask where a sentence should be placed for best flow and logic.</p>
                <div class="formula-box">
                    <strong>Key Considerations:</strong><br>
                    • Does the sentence introduce a new idea or elaborate on an existing one?<br>
                    • Are there pronoun references that need antecedents?<br>
                    • Does it logically follow from what comes before?<br>
                    • Does the next sentence logically follow from it?
                </div>
                <p><strong>SAT Tip:</strong> If a sentence mentions "this theory" or "these results," it must come AFTER the theory or results are introduced.</p>
            `
        },
        {
            title: '3.3 Relevance & Focus',
            content: `
                <p>Writers must include relevant information and omit what doesn't serve the purpose.</p>
                <div class="formula-box">
                    <strong>Ask These Questions:</strong><br>
                    • Does this information support the main point?<br>
                    • Does it add something new and valuable?<br>
                    • Would removing it weaken the argument?<br>
                    • Is it in the right place in the passage?
                </div>
                <div class="example">
                    <h4>Red Flags for Irrelevant Information:</h4>
                    <p>• Tangents that don't connect back to the main topic</p>
                    <p>• Details that repeat information already stated</p>
                    <p>• Information that contradicts the passage's purpose</p>
                </div>
            `
        },
        {
            title: '3.4 Precision & Concision',
            content: `
                <p>Good writing is both precise (exactly the right word) and concise (no unnecessary words).</p>
                <div class="formula-box">
                    <strong>Precision:</strong> Choose words that convey exact meaning<br>
                    "Walk" vs. "stroll" vs. "march" vs. "trudge"<br><br>
                    <strong>Concision:</strong> Eliminate redundancy<br>
                    ✗ "past history" → ✓ "history"<br>
                    ✗ "basic fundamentals" → ✓ "fundamentals"<br>
                    ✗ "completely eliminate" → ✓ "eliminate"
                </div>
                <p><strong>SAT Tip:</strong> The shortest answer is often correct—but only if it maintains the full meaning!</p>
            `
        }
    ],

    exercises: [
        {
            id: 'satr3-1',
            unit: 3,
            question: `Choose the best transition for the blank:<br><br>
                <em>"The city invested millions in its new subway system. _______, ridership has remained lower than projected, with many residents still preferring to drive."</em>`,
            answer: 'B',
            hint: 'The first sentence describes an investment (positive action). The second describes disappointing results. What relationship is this?',
            solution: `<strong>Analysis:</strong><br>
                • Sentence 1: Positive action (investment)<br>
                • Sentence 2: Unexpected/disappointing result (low ridership)<br><br>
                This is a CONTRAST relationship—the result doesn't match expectations.<br><br>
                <strong>Answer: B</strong> - However<br><br>
                <em>Options: A) Therefore B) However C) Furthermore D) For example</em>`,
            hard: false
        },
        {
            id: 'satr3-2',
            unit: 3,
            question: `Choose the best transition for the blank:<br><br>
                <em>"Sleep deprivation impairs judgment and slows reaction time. _______, studies show that drowsy driving causes as many accidents as drunk driving."</em>`,
            answer: 'C',
            hint: 'The second sentence provides specific evidence supporting the first. What kind of transition introduces evidence?',
            solution: `<strong>Analysis:</strong><br>
                • Sentence 1: General claim (sleep deprivation impairs)<br>
                • Sentence 2: Specific evidence (drowsy driving statistics)<br><br>
                The second sentence shows a RESULT/CONSEQUENCE of the first.<br><br>
                <strong>Answer: C</strong> - In fact<br><br>
                <em>Options: A) On the other hand B) Nevertheless C) In fact D) Meanwhile</em>`,
            hard: false
        },
        {
            id: 'satr3-3',
            unit: 3,
            question: `Which sentence should be DELETED to improve focus?<br><br>
                <em>"(1) Urban gardens provide fresh produce to food-insecure neighborhoods. (2) The first community garden in the US was established in 1893. (3) These spaces also create opportunities for neighbors to connect and build community. (4) Research shows that access to green space improves mental health."</em>`,
            answer: 'B',
            hint: 'Which sentence doesn\'t connect to the main point about benefits of urban gardens?',
            solution: `<strong>Analysis:</strong><br>
                Main point: Benefits of urban gardens<br>
                • Sentence 1: Benefit (fresh produce) ✓<br>
                • Sentence 2: Historical fact (not a benefit) ✗<br>
                • Sentence 3: Benefit (community building) ✓<br>
                • Sentence 4: Benefit (mental health) ✓<br><br>
                <strong>Answer: B</strong> - Sentence 2 (historical tangent doesn't support the theme of benefits)<br><br>
                <em>Options: A) Sentence 1 B) Sentence 2 C) Sentence 3 D) Sentence 4</em>`,
            hard: false
        },
        {
            id: 'satr3-4',
            unit: 3,
            question: `Choose the most concise option that maintains meaning:<br><br>
                <em>"The scientist made the important discovery that was significant of the fact that the virus could mutate rapidly."</em>`,
            answer: 'A',
            hint: 'Eliminate redundant words while keeping the essential meaning.',
            solution: `<strong>Original Problems:</strong><br>
                • "important discovery that was significant" - redundant<br>
                • "the fact that" - wordy filler<br><br>
                <strong>Answer: A</strong> - "The scientist discovered that the virus could mutate rapidly."<br><br>
                <em>Options: A) The scientist discovered that the virus could mutate rapidly B) The scientist made the discovery of the virus's rapid mutation C) The important discovery made by the scientist was that the virus mutated rapidly D) The scientist made the important and significant discovery about rapid mutation</em>`,
            hard: false
        },
        {
            id: 'satr3-5',
            unit: 3,
            question: `Where should the following sentence be placed?<br><br>
                <strong>Sentence to add:</strong> "This technique, known as 'spaced repetition,' has been validated by numerous cognitive studies."<br><br>
                <em>"(A) Memory research suggests that we retain information better when we review it at increasing intervals. (B) Rather than cramming all at once, students should revisit material after one day, then three days, then a week. (C) Many language-learning apps now incorporate this approach into their design. (D)"</em>`,
            answer: 'C',
            hint: 'The sentence refers to "this technique." Where has the technique been described?',
            solution: `<strong>Analysis:</strong><br>
                The sentence mentions "this technique" - needs to follow the technique's description.<br><br>
                • Position A: No technique described yet ✗<br>
                • Position B: Technique just described (increasing intervals) ✓<br>
                • Position C: Possible, but B is better since "this technique" directly references the description<br><br>
                Wait - the sentence NAMES the technique. It should come after the description but before the apps example.<br><br>
                <strong>Answer: C</strong> - After position B (after the technique is described, before moving to applications)<br><br>
                <em>Options: A) Position A B) Position B C) Position C D) Position D</em>`,
            hard: true
        },
        {
            id: 'satr3-6',
            unit: 3,
            question: `Which choice most precisely describes the action?<br><br>
                <em>"The detective _______ the crime scene, noting every detail from the position of the furniture to the angle of the shadows."</em>`,
            answer: 'D',
            hint: 'The context shows careful, thorough attention to detail. Which word best captures that?',
            solution: `<strong>Context Clues:</strong><br>
                • "noting every detail"<br>
                • Specific observations (furniture position, shadow angles)<br><br>
                This suggests careful, methodical examination.<br><br>
                <strong>Answer: D</strong> - scrutinized (means examined very carefully)<br><br>
                <em>Options: A) looked at B) saw C) checked D) scrutinized</em>`,
            hard: false
        }
    ],

    generators: [
        // Type 1: Transition questions
        function() {
            const topics = [
                {
                    before: 'Electric vehicles produce zero direct emissions.',
                    after: 'the electricity used to charge them often comes from fossil fuel power plants.',
                    correct: 'B',
                    options: ['A) Therefore', 'B) However', 'C) Similarly', 'D) For example'],
                    relationship: 'contrast',
                    explanation: 'The first sentence is positive (zero emissions), but the second complicates it (electricity from fossil fuels)—a contrast relationship.'
                },
                {
                    before: 'Regular exercise strengthens the cardiovascular system.',
                    after: 'it releases endorphins that improve mood and reduce stress.',
                    correct: 'C',
                    options: ['A) However', 'B) Instead', 'C) Additionally', 'D) Nevertheless'],
                    relationship: 'addition',
                    explanation: 'Both sentences present benefits of exercise—the second adds another benefit to the first.'
                },
                {
                    before: 'The company failed to meet its quarterly targets.',
                    after: 'the board decided to replace the CEO.',
                    correct: 'A',
                    options: ['A) Consequently', 'B) However', 'C) Meanwhile', 'D) Similarly'],
                    relationship: 'cause/effect',
                    explanation: 'The failed targets caused the board\'s decision—a cause-and-effect relationship.'
                },
                {
                    before: 'Many birds migrate thousands of miles each year.',
                    after: 'the Arctic tern travels from pole to pole, covering about 44,000 miles annually.',
                    correct: 'D',
                    options: ['A) However', 'B) Therefore', 'C) Instead', 'D) For instance'],
                    relationship: 'example',
                    explanation: 'The Arctic tern is a specific example of the general statement about bird migration.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 3,
                question: `Choose the best transition for the blank:<br><br><em>"${topic.before} _______, ${topic.after}"</em>`,
                answer: topic.correct,
                hint: `Identify the relationship between the sentences: addition, contrast, cause/effect, or example?`,
                solution: `<strong>Relationship:</strong> ${topic.relationship}<br><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong><br><br><em>Options: ${topic.options.join(' ')}</em>`,
                hard: false
            };
        },
        // Type 2: Relevance/Delete questions
        function() {
            const topics = [
                {
                    passage: `(1) Coffee shops have become popular workspaces for freelancers and remote workers. (2) The founder of Starbucks, Howard Schultz, grew up in Brooklyn. (3) The ambient noise and social atmosphere can boost creativity and productivity. (4) Many cafes now offer fast Wi-Fi and power outlets to accommodate this trend.`,
                    question: 'Which sentence should be deleted to improve the passage\'s focus?',
                    correct: 'B',
                    options: ['A) Sentence 1', 'B) Sentence 2', 'C) Sentence 3', 'D) Sentence 4'],
                    explanation: 'The passage focuses on coffee shops as workspaces. Sentence 2 about Schultz\'s childhood is irrelevant to this topic.'
                },
                {
                    passage: `(1) Honeybees communicate through an intricate "waggle dance." (2) The dance indicates the direction and distance to food sources. (3) Bees also produce honey, which humans have harvested for thousands of years. (4) Other bees follow the dancer to locate the flowers.`,
                    question: 'Which sentence disrupts the paragraph\'s focus on bee communication?',
                    correct: 'C',
                    options: ['A) Sentence 1', 'B) Sentence 2', 'C) Sentence 3', 'D) Sentence 4'],
                    explanation: 'Sentences 1, 2, and 4 all discuss the waggle dance communication. Sentence 3 about honey production is a tangent.'
                },
                {
                    passage: `(1) The Great Pacific Garbage Patch contains millions of tons of plastic debris. (2) Plastic was first developed in the early 20th century. (3) Ocean currents concentrate this waste into a massive floating collection. (4) Marine animals often mistake plastic fragments for food, with fatal consequences.`,
                    question: 'Which sentence is least relevant to the passage\'s main topic?',
                    correct: 'B',
                    options: ['A) Sentence 1', 'B) Sentence 2', 'C) Sentence 3', 'D) Sentence 4'],
                    explanation: 'The passage discusses the garbage patch and its effects. The history of plastic invention doesn\'t contribute to this discussion.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 3,
                question: `Read the passage and answer:<br><br><em>"${topic.passage}"</em><br><br>${topic.question}`,
                answer: topic.correct,
                hint: 'Identify the main topic and find the sentence that doesn\'t support it.',
                solution: `<strong>Analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong><br><br><em>Options: ${topic.options.join(' ')}</em>`,
                hard: false
            };
        },
        // Type 3: Concision questions
        function() {
            const topics = [
                {
                    wordy: 'Due to the fact that the weather was bad, the game was cancelled.',
                    question: 'Which is the most concise revision?',
                    correct: 'A',
                    options: ['A) Because of bad weather, the game was cancelled.', 'B) The game was cancelled due to the fact that weather was bad.', 'C) Due to the bad weather conditions, the game was cancelled from happening.', 'D) The cancellation of the game was because of bad weather conditions.'],
                    explanation: '"Due to the fact that" = "because of." Option A is direct and clear.'
                },
                {
                    wordy: 'In my opinion, I think that students should be allowed to use calculators.',
                    question: 'Which revision eliminates redundancy while maintaining meaning?',
                    correct: 'B',
                    options: ['A) In my opinion, I believe students should be allowed to use calculators.', 'B) Students should be allowed to use calculators.', 'C) I think in my opinion that students should use calculators.', 'D) It is my opinion that I think students should be allowed calculators.'],
                    explanation: '"In my opinion, I think" is redundant—both express opinion. Option B conveys the same idea directly.'
                },
                {
                    wordy: 'The book that was written by the author who is famous was published last year.',
                    question: 'Which is the clearest, most concise revision?',
                    correct: 'C',
                    options: ['A) The book written by the famous author who wrote it was published last year.', 'B) Last year, the book was published that the famous author had written.', 'C) The famous author\'s book was published last year.', 'D) Published last year was the book that was written by the famous author.'],
                    explanation: 'Option C is direct: subject (book) + verb (was published) + time (last year), with "famous author\'s" efficiently attributing ownership.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 3,
                question: `Original sentence: <em>"${topic.wordy}"</em><br><br>${topic.question}`,
                answer: topic.correct,
                hint: 'Look for the option that says the same thing with fewer words.',
                solution: `<strong>Analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong><br><br><em>Options: ${topic.options.join(' ')}</em>`,
                hard: false
            };
        },
        // Type 4: Sentence placement questions
        function() {
            const topics = [
                {
                    sentence: 'These findings challenged decades of established research.',
                    passage: '(A) Dr. Martinez published her study on sleep patterns in 2019. (B) She discovered that the brain remains highly active during what was previously considered "rest" periods. (C) Her work has since been replicated by labs around the world. (D)',
                    correct: 'C',
                    options: ['A) Position A', 'B) Position B', 'C) Position C', 'D) Position D'],
                    explanation: '"These findings" must refer to something already mentioned. Position C comes after the discovery is described (B), and logically precedes the replication news (which confirms the challenging findings).'
                },
                {
                    sentence: 'The material, however, proved too expensive for mass production.',
                    passage: '(A) Engineers developed a new type of flexible solar cell in 2018. (B) Early tests showed it could generate electricity even on cloudy days. (C) The technology remains in the research phase today. (D)',
                    correct: 'C',
                    options: ['A) Position A', 'B) Position B', 'C) Position C', 'D) Position D'],
                    explanation: '"However" signals contrast. Position C creates logical flow: positive development → positive test → but too expensive → still in research phase.'
                },
                {
                    sentence: 'This migration pattern has remained unchanged for thousands of years.',
                    passage: '(A) Every autumn, millions of monarch butterflies travel from Canada to Mexico. (B) They cover up to 3,000 miles during their journey. (C) Scientists use satellite tracking to monitor their routes. (D)',
                    correct: 'C',
                    options: ['A) Position A', 'B) Position B', 'C) Position C', 'D) Position D'],
                    explanation: '"This migration pattern" needs to follow the pattern\'s description. After B (the journey description), C is ideal—it adds context about the pattern\'s history before moving to modern tracking methods.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 3,
                question: `Where should this sentence be placed?<br><br><strong>Sentence:</strong> "${topic.sentence}"<br><br><em>"${topic.passage}"</em>`,
                answer: topic.correct,
                hint: 'Look for reference words ("this," "these," "however") that connect to surrounding content.',
                solution: `<strong>Analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong><br><br><em>Options: ${topic.options.join(' ')}</em>`,
                hard: true
            };
        },
        // Type 5: Precision questions
        function() {
            const topics = [
                {
                    context: 'The protestors _______ through the streets, their voices raised in unison.',
                    correct: 'C',
                    options: ['A) walked', 'B) went', 'C) marched', 'D) moved'],
                    explanation: '"Marched" precisely captures the organized, purposeful movement of protestors, unlike generic alternatives.'
                },
                {
                    context: 'The comedian\'s jokes fell flat, and the audience sat in _______ silence.',
                    correct: 'B',
                    options: ['A) complete', 'B) uncomfortable', 'C) total', 'D) big'],
                    explanation: '"Uncomfortable" precisely describes the awkward social situation of failed comedy, while "complete/total" are too neutral.'
                },
                {
                    context: 'After reviewing the evidence, the jury reached a _______ verdict.',
                    correct: 'D',
                    options: ['A) fast', 'B) good', 'C) nice', 'D) unanimous'],
                    explanation: '"Unanimous" is the precise legal term meaning all jurors agreed, conveying specific information the other options lack.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 3,
                question: `Choose the most precise word for the context:<br><br><em>"${topic.context}"</em>`,
                answer: topic.correct,
                hint: 'Which word most specifically fits the situation described?',
                solution: `<strong>Analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong><br><br><em>Options: ${topic.options.join(' ')}</em>`,
                hard: false
            };
        },
        // Type 6: Add/Keep questions
        function() {
            const topics = [
                {
                    passage: `Urban beekeeping has grown increasingly popular in recent years. Rooftop hives now dot the skylines of major cities, from New York to Los Angeles.`,
                    proposed: 'Honey has been used as a sweetener since ancient Egyptian times.',
                    question: 'Should the writer add the proposed sentence?',
                    correct: 'B',
                    options: ['A) Yes, because it provides important historical context.', 'B) No, because it shifts focus away from urban beekeeping.', 'C) Yes, because readers need to understand honey production.', 'D) No, because the information is factually incorrect.'],
                    explanation: 'The passage focuses on modern urban beekeeping. Ancient Egyptian honey use, while interesting, is a tangent that disrupts this focus.'
                },
                {
                    passage: `The new train line will connect downtown to the airport. Currently, the journey requires two bus transfers and takes over an hour.`,
                    proposed: 'The direct rail connection will reduce travel time to just 25 minutes.',
                    question: 'Should the writer add the proposed sentence?',
                    correct: 'A',
                    options: ['A) Yes, because it provides a specific benefit that supports the main point.', 'B) No, because it repeats information already stated.', 'C) Yes, because readers enjoy learning about trains.', 'D) No, because the passage is about buses, not trains.'],
                    explanation: 'The sentence adds concrete data (25 minutes vs. over an hour) that strengthens the contrast and supports the implied benefit of the new train line.'
                },
                {
                    passage: `The museum\'s new exhibit features works by local artists. Each piece explores themes of community and belonging.`,
                    proposed: 'The museum was founded in 1952 by philanthropist Margaret Chen.',
                    question: 'Should the writer add the proposed sentence?',
                    correct: 'B',
                    options: ['A) Yes, because it honors the museum\'s founder.', 'B) No, because it doesn\'t relate to the exhibit being discussed.', 'C) Yes, because historical context is always valuable.', 'D) No, because 1952 is too long ago to be relevant.'],
                    explanation: 'The passage focuses on a specific exhibit and its themes. The founding date and founder don\'t contribute to understanding the exhibit.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 3,
                question: `Read the passage:<br><br><em>"${topic.passage}"</em><br><br><strong>Proposed addition:</strong> "${topic.proposed}"<br><br>${topic.question}`,
                answer: topic.correct,
                hint: 'Ask: Does the proposed sentence support the main point of the passage?',
                solution: `<strong>Analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong><br><br><em>Options: ${topic.options.join(' ')}</em>`,
                hard: true
            };
        }
    ]
};

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('sat-reading', satReadingUnit3);
}
