// IM3 Unit 4: Exponentials & Logarithms
// This file contains lessons, exercises, and problem generators for Unit 4

const unit4 = {
    id: 4,
    name: 'Unit 4',
    title: 'Exponentials & Logarithms',

    lessons: [
        {
            title: '4.1 Exponential Functions',
            content: `
                <p>An <strong>exponential function</strong> has the form f(x) = a · bˣ where b > 0, b ≠ 1.</p>
                <div class="formula-box">
                    <strong>Key Properties:</strong><br>
                    • If b > 1: exponential growth<br>
                    • If 0 < b < 1: exponential decay<br>
                    • y-intercept is always (0, a)<br>
                    • Horizontal asymptote: y = 0<br>
                    • Domain: all real numbers<br>
                    • Range: y > 0 (if a > 0)
                </div>
                <div class="formula-box">
                    <strong>Exponent Rules:</strong><br>
                    • aᵐ · aⁿ = aᵐ⁺ⁿ<br>
                    • aᵐ / aⁿ = aᵐ⁻ⁿ<br>
                    • (aᵐ)ⁿ = aᵐⁿ<br>
                    • a⁰ = 1<br>
                    • a⁻ⁿ = 1/aⁿ
                </div>
            `
        },
        {
            title: '4.2 Logarithmic Functions',
            content: `
                <p>A <strong>logarithm</strong> answers: "What power do I raise b to, to get x?"</p>
                <div class="formula-box">
                    <strong>Definition:</strong><br>
                    log_b(x) = y &nbsp;⟺&nbsp; bʸ = x<br><br>
                    <strong>Special Logs:</strong><br>
                    • log(x) = log₁₀(x) (common log)<br>
                    • ln(x) = logₑ(x) (natural log, e ≈ 2.718)
                </div>
                <div class="formula-box">
                    <strong>Log Properties:</strong><br>
                    • log_b(1) = 0<br>
                    • log_b(b) = 1<br>
                    • log_b(bˣ) = x<br>
                    • b^(log_b(x)) = x
                </div>
            `
        },
        {
            title: '4.3 Properties of Logarithms',
            content: `
                <div class="formula-box">
                    <strong>Product Rule:</strong> log_b(MN) = log_b(M) + log_b(N)<br><br>
                    <strong>Quotient Rule:</strong> log_b(M/N) = log_b(M) - log_b(N)<br><br>
                    <strong>Power Rule:</strong> log_b(Mⁿ) = n · log_b(M)<br><br>
                    <strong>Change of Base:</strong> log_b(x) = log(x)/log(b) = ln(x)/ln(b)
                </div>
                <div class="example">
                    <h4>Example: Expand log₂(8x³/y)</h4>
                    <div class="solution">
                        = log₂(8x³) - log₂(y)<br>
                        = log₂(8) + log₂(x³) - log₂(y)<br>
                        = 3 + 3log₂(x) - log₂(y)
                    </div>
                </div>
            `
        },
        {
            title: '4.4 Solving Exponential & Log Equations',
            content: `
                <div class="formula-box">
                    <strong>Solving Exponential Equations:</strong><br>
                    1. Isolate the exponential term<br>
                    2. Take log of both sides (or match bases)<br>
                    3. Use log properties to solve<br><br>
                    <strong>Solving Log Equations:</strong><br>
                    1. Isolate the log term (or combine logs)<br>
                    2. Convert to exponential form<br>
                    3. Solve and CHECK (domain: argument > 0)
                </div>
                <div class="example">
                    <h4>Example: Solve 2ˣ = 5</h4>
                    <div class="solution">
                        log(2ˣ) = log(5)<br>
                        x · log(2) = log(5)<br>
                        x = log(5)/log(2) ≈ 2.32
                    </div>
                </div>
            `
        }
    ],

    exercises: [
        {
            id: 'u4-1',
            unit: 4,
            question: 'Evaluate: log₃(81)',
            answer: '4',
            hint: 'Ask yourself: 3 to what power equals 81?',
            solution: `<strong>Method: Convert to exponential</strong><br>
                log₃(81) = x means 3ˣ = 81<br><br>
                <strong>Find the power:</strong><br>
                3¹ = 3<br>
                3² = 9<br>
                3³ = 27<br>
                3⁴ = 81 ✓<br><br>
                <strong>log₃(81) = 4</strong>`,
            hard: false
        },
        {
            id: 'u4-2',
            unit: 4,
            question: 'Evaluate: log₂(1/32)',
            answer: '-5',
            hint: 'Remember: log_b(1/x) = -log_b(x). Also, 32 = 2⁵.',
            solution: `<strong>Method 1: Direct</strong><br>
                log₂(1/32) = x means 2ˣ = 1/32<br>
                2ˣ = 2⁻⁵<br>
                x = -5<br><br>
                <strong>Method 2: Using properties</strong><br>
                log₂(1/32) = log₂(1) - log₂(32)<br>
                = 0 - 5 = <strong>-5</strong>`,
            hard: false
        },
        {
            id: 'u4-3',
            unit: 4,
            question: 'Expand: log₂(x⁴y³/z²)',
            answer: '4log₂(x)+3log₂(y)-2log₂(z)',
            hint: 'Use quotient rule first, then product rule, then power rule.',
            solution: `<strong>Step 1: Quotient rule</strong><br>
                log₂(x⁴y³/z²) = log₂(x⁴y³) - log₂(z²)<br><br>
                <strong>Step 2: Product rule</strong><br>
                = log₂(x⁴) + log₂(y³) - log₂(z²)<br><br>
                <strong>Step 3: Power rule</strong><br>
                = <strong>4log₂(x) + 3log₂(y) - 2log₂(z)</strong>`,
            hard: false
        },
        {
            id: 'u4-4',
            unit: 4,
            question: 'Condense: 2log(x) + log(y) - 3log(z)',
            answer: 'log(x²y/z³)',
            hint: 'Use power rule to move coefficients, then product/quotient rules.',
            solution: `<strong>Step 1: Power rule</strong><br>
                2log(x) = log(x²)<br>
                3log(z) = log(z³)<br><br>
                <strong>Step 2: Rewrite</strong><br>
                = log(x²) + log(y) - log(z³)<br><br>
                <strong>Step 3: Product & Quotient rules</strong><br>
                = <strong>log(x²y/z³)</strong>`,
            hard: true
        },
        {
            id: 'u4-5',
            unit: 4,
            question: 'Solve: 3ˣ = 27',
            answer: '3',
            hint: 'Express 27 as a power of 3, then match exponents.',
            solution: `<strong>Method: Match bases</strong><br>
                3ˣ = 27<br>
                3ˣ = 3³<br><br>
                <strong>Match exponents:</strong><br>
                <strong>x = 3</strong>`,
            hard: false
        },
        {
            id: 'u4-6',
            unit: 4,
            question: 'Solve: log₂(x - 3) + log₂(x + 3) = 4',
            answer: '5',
            hint: 'Combine logs using product rule, convert to exponential form, then solve.',
            solution: `<strong>Step 1: Product rule</strong><br>
                log₂((x-3)(x+3)) = 4<br>
                log₂(x² - 9) = 4<br><br>
                <strong>Step 2: Convert to exponential</strong><br>
                x² - 9 = 2⁴ = 16<br>
                x² = 25<br>
                x = ±5<br><br>
                <strong>Step 3: Check domain</strong><br>
                x = 5: log₂(2) + log₂(8) = 1 + 3 = 4 ✓<br>
                x = -5: log₂(-8) undefined ✗<br><br>
                <strong>x = 5</strong>`,
            hard: true
        }
    ],

    generators: [
        // Type 1: Evaluate log_b(n) where n is a power of b
        function() {
            const b = randChoice([2, 3, 4, 5]);
            const exp = randChoice([2, 3, 4, 5]);
            const n = Math.pow(b, exp);

            return {
                unit: 4,
                question: `Evaluate: log${subscript(b)}(${n})`,
                answer: `${exp}`,
                hint: `Ask yourself: ${b} to what power equals ${n}?`,
                solution: `<strong>Method: Convert to exponential</strong><br>
                    log${subscript(b)}(${n}) = x means ${b}ˣ = ${n}<br><br>
                    <strong>Find the power:</strong><br>
                    ${b}¹ = ${b}<br>
                    ${b}² = ${b*b}<br>
                    ${exp >= 3 ? `${b}³ = ${b*b*b}<br>` : ''}
                    ${exp >= 4 ? `${b}⁴ = ${b*b*b*b}<br>` : ''}
                    ${b}^${exp} = ${n} ✓<br><br>
                    <strong>log${subscript(b)}(${n}) = ${exp}</strong>`,
                hard: false
            };
        },
        // Type 2: Evaluate log_b(1/n) (negative result)
        function() {
            const b = randChoice([2, 3, 4, 5]);
            const exp = randChoice([2, 3, 4]);
            const n = Math.pow(b, exp);

            return {
                unit: 4,
                question: `Evaluate: log${subscript(b)}(1/${n})`,
                answer: `${-exp}`,
                hint: `Remember: log_b(1/x) = -log_b(x). Also, ${n} = ${b}^${exp}.`,
                solution: `<strong>Method 1: Direct</strong><br>
                    log${subscript(b)}(1/${n}) = x means ${b}ˣ = 1/${n}<br>
                    ${b}ˣ = ${b}^(-${exp})<br>
                    x = -${exp}<br><br>
                    <strong>Method 2: Using properties</strong><br>
                    log${subscript(b)}(1/${n}) = log${subscript(b)}(1) - log${subscript(b)}(${n})<br>
                    = 0 - ${exp} = <strong>-${exp}</strong>`,
                hard: false
            };
        },
        // Type 3: Expand logarithm
        function() {
            const b = randChoice([2, 3, 10]);
            const p = randChoice([2, 3, 4]);
            const q = randChoice([2, 3]);
            const r = randChoice([2, 3]);

            const bStr = b === 10 ? '' : subscript(b);

            return {
                unit: 4,
                question: `Expand: log${bStr}(x^${p}y^${q}/z^${r})`,
                answer: `${p}log${bStr}(x)+${q}log${bStr}(y)-${r}log${bStr}(z)`,
                hint: `Use quotient rule first, then product rule, then power rule.`,
                solution: `<strong>Step 1: Quotient rule</strong><br>
                    log${bStr}(x^${p}y^${q}/z^${r}) = log${bStr}(x^${p}y^${q}) - log${bStr}(z^${r})<br><br>
                    <strong>Step 2: Product rule</strong><br>
                    = log${bStr}(x^${p}) + log${bStr}(y^${q}) - log${bStr}(z^${r})<br><br>
                    <strong>Step 3: Power rule</strong><br>
                    = <strong>${p}log${bStr}(x) + ${q}log${bStr}(y) - ${r}log${bStr}(z)</strong>`,
                hard: false
            };
        },
        // Type 4: Condense logarithm
        function() {
            const b = randChoice([2, 3, 10]);
            const p = randChoice([2, 3, 4]);
            const q = randChoice([1, 2]);
            const r = randChoice([2, 3]);

            const bStr = b === 10 ? '' : subscript(b);

            return {
                unit: 4,
                question: `Condense: ${p}log${bStr}(x) + ${q === 1 ? '' : q}log${bStr}(y) - ${r}log${bStr}(z)`,
                answer: `log${bStr}(x^${p}y${q === 1 ? '' : '^' + q}/z^${r})`,
                hint: `Use power rule to move coefficients inside, then product/quotient rules.`,
                solution: `<strong>Step 1: Power rule</strong><br>
                    ${p}log${bStr}(x) = log${bStr}(x^${p})<br>
                    ${q === 1 ? '' : q}log${bStr}(y) = log${bStr}(y${q === 1 ? '' : '^' + q})<br>
                    ${r}log${bStr}(z) = log${bStr}(z^${r})<br><br>
                    <strong>Step 2: Rewrite</strong><br>
                    = log${bStr}(x^${p}) + log${bStr}(y${q === 1 ? '' : '^' + q}) - log${bStr}(z^${r})<br><br>
                    <strong>Step 3: Product & Quotient rules</strong><br>
                    = <strong>log${bStr}(x^${p}y${q === 1 ? '' : '^' + q}/z^${r})</strong>`,
                hard: true
            };
        },
        // Type 5: Solve exponential equation (same base)
        function() {
            const b = randChoice([2, 3, 4, 5]);
            const exp = randChoice([2, 3, 4, 5]);
            const n = Math.pow(b, exp);

            return {
                unit: 4,
                question: `Solve: ${b}ˣ = ${n}`,
                answer: `${exp}`,
                hint: `Express ${n} as a power of ${b}, then match exponents.`,
                solution: `<strong>Method: Match bases</strong><br>
                    ${b}ˣ = ${n}<br>
                    ${b}ˣ = ${b}^${exp}<br><br>
                    <strong>Match exponents:</strong><br>
                    <strong>x = ${exp}</strong>`,
                hard: false
            };
        },
        // Type 6: Solve log equation with product rule
        function() {
            const b = randChoice([2, 3]);
            const exp = randChoice([3, 4, 5]);
            const target = Math.pow(b, exp);

            // log_b(x-a) + log_b(x+a) = exp, means x² - a² = target
            // Pick a such that x² = target + a², and x is nice integer
            const validSolutions = [];
            for (let a = 1; a <= 10; a++) {
                const xSquared = target + a * a;
                const x = Math.sqrt(xSquared);
                if (Number.isInteger(x) && x > a) {
                    validSolutions.push({ a, x });
                }
            }

            if (validSolutions.length === 0) return unit4.generators[4]();

            const { a, x } = randChoice(validSolutions);

            return {
                unit: 4,
                question: `Solve: log${subscript(b)}(x - ${a}) + log${subscript(b)}(x + ${a}) = ${exp}`,
                answer: `${x}`,
                hint: `Combine logs using product rule, convert to exponential form, then solve.`,
                solution: `<strong>Step 1: Product rule</strong><br>
                    log${subscript(b)}((x-${a})(x+${a})) = ${exp}<br>
                    log${subscript(b)}(x² - ${a*a}) = ${exp}<br><br>
                    <strong>Step 2: Convert to exponential</strong><br>
                    x² - ${a*a} = ${b}^${exp} = ${target}<br>
                    x² = ${target + a*a}<br>
                    x = ±${x}<br><br>
                    <strong>Step 3: Check domain</strong><br>
                    x = ${x}: log${subscript(b)}(${x-a}) + log${subscript(b)}(${x+a}) valid ✓<br>
                    x = -${x}: log${subscript(b)}(${-x-a}) undefined ✗<br><br>
                    <strong>x = ${x}</strong>`,
                hard: true
            };
        }
    ]
};

// Helper function for subscript
function subscript(n) {
    const subs = {'0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'};
    return String(n).split('').map(d => subs[d] || d).join('');
}

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('im3', unit4);
}
