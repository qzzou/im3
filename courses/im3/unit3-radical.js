// IM3 Unit 3: Radical Functions & Equations
// This file contains lessons, exercises, and problem generators for Unit 3

const unit3 = {
    id: 3,
    name: 'Unit 3',
    title: 'Radical Functions & Equations',

    lessons: [
        {
            title: '3.1 Simplifying Radicals',
            content: `
                <p>A <strong>radical expression</strong> contains a root (√, ∛, etc.).</p>
                <div class="formula-box">
                    <strong>Key Properties:</strong><br>
                    • √(ab) = √a · √b<br>
                    • √(a/b) = √a / √b<br>
                    • ⁿ√(aᵐ) = a^(m/n)<br>
                    • √a · √a = a (for a ≥ 0)<br>
                    • (√a)² = a
                </div>
                <div class="example">
                    <h4>Example: Simplify √72</h4>
                    <div class="solution">
                        √72 = √(36 · 2) = √36 · √2 = <strong>6√2</strong>
                    </div>
                </div>
            `
        },
        {
            title: '3.2 Operations with Radicals',
            content: `
                <div class="formula-box">
                    <strong>Adding/Subtracting:</strong><br>
                    Only combine like radicals (same index and radicand)<br>
                    3√5 + 7√5 = 10√5 ✓<br>
                    3√5 + 7√3 = cannot combine ✗<br><br>
                    <strong>Multiplying:</strong><br>
                    √a · √b = √(ab)<br>
                    (a + √b)(a - √b) = a² - b (conjugates!)<br><br>
                    <strong>Rationalizing Denominators:</strong><br>
                    • Simple: 1/√a = √a/a<br>
                    • Conjugate: 1/(a + √b) = (a - √b)/(a² - b)
                </div>
            `
        },
        {
            title: '3.3 Solving Radical Equations',
            content: `
                <div class="formula-box">
                    <strong>Steps to solve:</strong><br>
                    1. Isolate the radical on one side<br>
                    2. Raise both sides to the appropriate power<br>
                    3. Solve the resulting equation<br>
                    4. CHECK all solutions (squaring can introduce extraneous solutions!)
                </div>
                <div class="example">
                    <h4>Example: Solve √(x + 3) = x - 1</h4>
                    <div class="solution">
                        Square both sides: x + 3 = (x - 1)²<br>
                        x + 3 = x² - 2x + 1<br>
                        0 = x² - 3x - 2<br>
                        Check both solutions in original!
                    </div>
                </div>
            `
        },
        {
            title: '3.4 Graphing Radical Functions',
            content: `
                <div class="formula-box">
                    <strong>Parent Functions:</strong><br>
                    • f(x) = √x : Domain [0, ∞), starts at origin<br>
                    • f(x) = ∛x : Domain (-∞, ∞), passes through origin<br><br>
                    <strong>Transformations y = a√(x - h) + k:</strong><br>
                    • h: horizontal shift (right if h > 0)<br>
                    • k: vertical shift (up if k > 0)<br>
                    • a: vertical stretch/compression, reflection if negative<br><br>
                    <strong>Domain:</strong> For √(expression), set expression ≥ 0
                </div>
            `
        }
    ],

    exercises: [
        {
            id: 'u3-1',
            unit: 3,
            question: 'Simplify: √128',
            answer: '8√2',
            hint: 'Find the largest perfect square that divides 128. Try 64.',
            solution: `<strong>Step 1: Find perfect square factor</strong><br>
                128 = 64 × 2<br>
                64 is a perfect square (8²)<br><br>
                <strong>Step 2: Apply √(ab) = √a · √b</strong><br>
                √128 = √(64 × 2)<br>
                = √64 · √2<br>
                = <strong>8√2</strong>`,
            hard: false
        },
        {
            id: 'u3-2',
            unit: 3,
            question: 'Simplify: 3√20 + 2√45',
            answer: '12√5',
            hint: 'Simplify each radical first, then combine like terms.',
            solution: `<strong>Step 1: Simplify √20</strong><br>
                √20 = √(4 × 5) = 2√5<br><br>
                <strong>Step 2: Simplify √45</strong><br>
                √45 = √(9 × 5) = 3√5<br><br>
                <strong>Step 3: Substitute and combine</strong><br>
                3√20 + 2√45 = 3(2√5) + 2(3√5)<br>
                = 6√5 + 6√5<br>
                = <strong>12√5</strong>`,
            hard: false
        },
        {
            id: 'u3-3',
            unit: 3,
            question: 'Rationalize the denominator: 6/(√3 + 1)',
            answer: '3√3-3',
            hint: 'Multiply by the conjugate (√3 - 1)/(√3 - 1).',
            solution: `<strong>Step 1: Multiply by conjugate</strong><br>
                6/(√3 + 1) × (√3 - 1)/(√3 - 1)<br><br>
                <strong>Step 2: Expand</strong><br>
                Numerator: 6(√3 - 1) = 6√3 - 6<br>
                Denominator: (√3)² - 1² = 3 - 1 = 2<br><br>
                <strong>Step 3: Simplify</strong><br>
                (6√3 - 6)/2 = <strong>3√3 - 3</strong>`,
            hard: true
        },
        {
            id: 'u3-4',
            unit: 3,
            question: 'Solve: √(2x + 1) = 5',
            answer: '12',
            hint: 'Square both sides and solve for x.',
            solution: `<strong>Step 1: Square both sides</strong><br>
                (√(2x + 1))² = 5²<br>
                2x + 1 = 25<br><br>
                <strong>Step 2: Solve</strong><br>
                2x = 24<br>
                x = 12<br><br>
                <strong>Step 3: Check</strong><br>
                √(2(12) + 1) = √25 = 5 ✓<br>
                <strong>x = 12</strong>`,
            hard: false
        },
        {
            id: 'u3-5',
            unit: 3,
            question: 'Solve: √(x + 7) = x + 1',
            answer: '2',
            hint: 'Square both sides, solve the quadratic, then check for extraneous solutions!',
            solution: `<strong>Step 1: Square both sides</strong><br>
                x + 7 = (x + 1)²<br>
                x + 7 = x² + 2x + 1<br><br>
                <strong>Step 2: Rearrange</strong><br>
                0 = x² + x - 6<br>
                0 = (x + 3)(x - 2)<br>
                x = -3 or x = 2<br><br>
                <strong>Step 3: Check both</strong><br>
                x = -3: √(-3+7) = √4 = 2, but -3+1 = -2 ✗<br>
                x = 2: √(2+7) = √9 = 3, and 2+1 = 3 ✓<br><br>
                <strong>x = 2</strong> (x = -3 is extraneous)`,
            hard: true
        },
        {
            id: 'u3-6',
            unit: 3,
            question: 'Find the domain of f(x) = √(3x - 12)',
            answer: 'x≥4',
            hint: 'For √(expression) to be real, the expression must be ≥ 0.',
            solution: `<strong>Step 1: Set radicand ≥ 0</strong><br>
                3x - 12 ≥ 0<br><br>
                <strong>Step 2: Solve inequality</strong><br>
                3x ≥ 12<br>
                x ≥ 4<br><br>
                <strong>Domain: x ≥ 4</strong> or [4, ∞)`,
            hard: false
        }
    ],

    generators: [
        // Type 1: Simplify radical
        function() {
            const bases = [2, 3, 5, 6, 7];
            const base = randChoice(bases);
            const mult = randChoice([2, 3, 4, 5, 6]);
            const n = mult * mult * base;

            return {
                unit: 3,
                question: `Simplify: √${n}`,
                answer: `${mult}√${base}`,
                hint: `Find the largest perfect square that divides ${n}.`,
                solution: `<strong>Step 1: Find perfect square factor</strong><br>
                    ${n} = ${mult*mult} × ${base}<br>
                    ${mult*mult} is a perfect square (${mult}²)<br><br>
                    <strong>Step 2: Apply √(ab) = √a · √b</strong><br>
                    √${n} = √(${mult*mult} × ${base})<br>
                    = √${mult*mult} · √${base}<br>
                    = <strong>${mult}√${base}</strong>`,
                hard: false
            };
        },
        // Type 2: Add radicals
        function() {
            const base = randChoice([2, 3, 5, 7]);
            const m1 = randChoice([2, 3, 4]);
            const m2 = randChoice([2, 3, 4]);
            const c1 = randChoice([2, 3, 4, 5]);
            const c2 = randChoice([2, 3, 4, 5]);

            const n1 = m1 * m1 * base;
            const n2 = m2 * m2 * base;
            const result = c1 * m1 + c2 * m2;

            return {
                unit: 3,
                question: `Simplify: ${c1}√${n1} + ${c2}√${n2}`,
                answer: `${result}√${base}`,
                hint: `Simplify each radical first to get like radicals, then combine.`,
                solution: `<strong>Step 1: Simplify √${n1}</strong><br>
                    √${n1} = √(${m1*m1} × ${base}) = ${m1}√${base}<br><br>
                    <strong>Step 2: Simplify √${n2}</strong><br>
                    √${n2} = √(${m2*m2} × ${base}) = ${m2}√${base}<br><br>
                    <strong>Step 3: Substitute and combine</strong><br>
                    ${c1}√${n1} + ${c2}√${n2} = ${c1}(${m1}√${base}) + ${c2}(${m2}√${base})<br>
                    = ${c1*m1}√${base} + ${c2*m2}√${base}<br>
                    = <strong>${result}√${base}</strong>`,
                hard: false
            };
        },
        // Type 3: Rationalize denominator with conjugate
        function() {
            const a = randChoice([2, 3, 4, 5, 6]);
            const b = randChoice([2, 3, 5]);
            const c = randChoice([1, 2, 3]);
            const isPlus = Math.random() > 0.5;

            const denom = b - c * c;
            const sign = isPlus ? '+' : '-';
            const oppSign = isPlus ? '-' : '+';

            if (denom === 0) return unit3.generators[0](); // Avoid division by zero

            const numCoeff = a / Math.abs(denom);
            const constCoeff = a * c / Math.abs(denom);

            if (!Number.isInteger(numCoeff) || !Number.isInteger(constCoeff)) {
                return unit3.generators[0](); // Need clean answer
            }

            const signResult = denom > 0 ? oppSign : sign;

            return {
                unit: 3,
                question: `Rationalize: ${a}/(√${b} ${sign} ${c})`,
                answer: `${Math.abs(numCoeff)}√${b}${signResult}${Math.abs(constCoeff)}`,
                hint: `Multiply by the conjugate (√${b} ${oppSign} ${c})/(√${b} ${oppSign} ${c}).`,
                solution: `<strong>Step 1: Multiply by conjugate</strong><br>
                    ${a}/(√${b} ${sign} ${c}) × (√${b} ${oppSign} ${c})/(√${b} ${oppSign} ${c})<br><br>
                    <strong>Step 2: Expand</strong><br>
                    Numerator: ${a}(√${b} ${oppSign} ${c}) = ${a}√${b} ${oppSign} ${a*c}<br>
                    Denominator: (√${b})² - ${c}² = ${b} - ${c*c} = ${denom}<br><br>
                    <strong>Step 3: Simplify</strong><br>
                    = <strong>${Math.abs(numCoeff)}√${b} ${signResult} ${Math.abs(constCoeff)}</strong>`,
                hard: true
            };
        },
        // Type 4: Solve simple radical equation
        function() {
            const a = randChoice([2, 3, 4, 5]);
            const b = randChoice([-8, -5, -3, 3, 5, 8]);
            const c = randChoice([3, 4, 5, 6, 7]);

            // √(ax + b) = c, so ax + b = c², x = (c² - b)/a
            const result = (c * c - b) / a;

            if (!Number.isInteger(result) || result < 0) return unit3.generators[0]();

            const bSign = b >= 0 ? '+' : '-';

            return {
                unit: 3,
                question: `Solve: √(${a}x ${bSign} ${Math.abs(b)}) = ${c}`,
                answer: `${result}`,
                hint: `Square both sides and solve for x. Don't forget to check!`,
                solution: `<strong>Step 1: Square both sides</strong><br>
                    (√(${a}x ${bSign} ${Math.abs(b)}))² = ${c}²<br>
                    ${a}x ${bSign} ${Math.abs(b)} = ${c*c}<br><br>
                    <strong>Step 2: Solve</strong><br>
                    ${a}x = ${c*c - b}<br>
                    x = ${result}<br><br>
                    <strong>Step 3: Check</strong><br>
                    √(${a}(${result}) ${bSign} ${Math.abs(b)}) = √${c*c} = ${c} ✓<br>
                    <strong>x = ${result}</strong>`,
                hard: false
            };
        },
        // Type 5: Solve radical equation with extraneous solution
        function() {
            // √(x + a) = x + b where we engineer one extraneous solution
            const a = randChoice([3, 5, 7, 11]);
            const validRoot = randChoice([2, 3, 4]);

            // If √(x+a) = x+b and x = validRoot is solution:
            // √(validRoot + a) = validRoot + b
            // Let's pick a so validRoot + a is perfect square
            const sqVal = validRoot + a;
            const sqrtVal = Math.sqrt(sqVal);
            if (!Number.isInteger(sqrtVal)) return unit3.generators[4](); // Retry

            const b = sqrtVal - validRoot;

            // Quadratic: x + a = (x+b)², x + a = x² + 2bx + b²
            // x² + (2b-1)x + (b² - a) = 0
            // Other root: product = b² - a, so other root = (b² - a) / validRoot

            const otherRoot = (b * b - a) / validRoot;

            if (b >= 0) return unit3.generators[0](); // Need extraneous, b should be negative for this setup

            return {
                unit: 3,
                question: `Solve: √(x + ${a}) = x ${b >= 0 ? '+' : '-'} ${Math.abs(b)}`,
                answer: `${validRoot}`,
                hint: `Square both sides, solve the quadratic, and check BOTH solutions. One may be extraneous!`,
                solution: `<strong>Step 1: Square both sides</strong><br>
                    x + ${a} = (x ${b >= 0 ? '+' : '-'} ${Math.abs(b)})²<br>
                    x + ${a} = x² ${2*b >= 0 ? '+' : '-'} ${Math.abs(2*b)}x + ${b*b}<br><br>
                    <strong>Step 2: Rearrange</strong><br>
                    0 = x² ${2*b - 1 >= 0 ? '+' : '-'} ${Math.abs(2*b - 1)}x ${b*b - a >= 0 ? '+' : '-'} ${Math.abs(b*b - a)}<br><br>
                    <strong>Step 3: Solve and check both roots</strong><br>
                    x = ${validRoot}: √(${validRoot}+${a}) = ${sqrtVal}, ${validRoot}${b >= 0 ? '+' : ''}${b} = ${sqrtVal} ✓<br>
                    Check other root: extraneous (negative under radical or sides don't match)<br><br>
                    <strong>x = ${validRoot}</strong>`,
                hard: true
            };
        },
        // Type 6: Find domain
        function() {
            const a = randChoice([2, 3, 4, 5]);
            const b = randChoice([4, 6, 8, 10, 12, 15, 20]);

            const result = b / a;

            if (!Number.isInteger(result)) return unit3.generators[5]();

            return {
                unit: 3,
                question: `Find the domain of f(x) = √(${a}x - ${b})`,
                answer: `x≥${result}`,
                hint: `For the square root to be real, the radicand must be ≥ 0.`,
                solution: `<strong>Step 1: Set radicand ≥ 0</strong><br>
                    ${a}x - ${b} ≥ 0<br><br>
                    <strong>Step 2: Solve inequality</strong><br>
                    ${a}x ≥ ${b}<br>
                    x ≥ ${result}<br><br>
                    <strong>Domain: x ≥ ${result}</strong> or [${result}, ∞)`,
                hard: false
            };
        }
    ]
};

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('im3', unit3);
}
