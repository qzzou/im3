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
                <p>An <strong>exponential function</strong> has the form $f(x) = a \\cdot b^x$ where $b > 0$, $b \\neq 1$.</p>
                <div class="formula-box">
                    <strong>Key Properties:</strong><br>
                    • If $b > 1$: exponential growth<br>
                    • If $0 < b < 1$: exponential decay<br>
                    • y-intercept is always $(0, a)$<br>
                    • Horizontal asymptote: $y = 0$<br>
                    • Domain: all real numbers<br>
                    • Range: $y > 0$ (if $a > 0$)
                </div>
                <div class="formula-box">
                    <strong>Exponent Rules:</strong><br>
                    • $a^m \\cdot a^n = a^{m+n}$<br>
                    • $\\frac{a^m}{a^n} = a^{m-n}$<br>
                    • $(a^m)^n = a^{mn}$<br>
                    • $a^0 = 1$<br>
                    • $a^{-n} = \\frac{1}{a^n}$
                </div>
            `
        },
        {
            title: '4.2 Logarithmic Functions',
            content: `
                <p>A <strong>logarithm</strong> answers: "What power do I raise $b$ to, to get $x$?"</p>
                <div class="formula-box">
                    <strong>Definition:</strong><br>
                    $\\log_b(x) = y$ &nbsp;$\\Leftrightarrow$&nbsp; $b^y = x$<br><br>
                    <strong>Special Logs:</strong><br>
                    • $\\log(x) = \\log_{10}(x)$ (common log)<br>
                    • $\\ln(x) = \\log_e(x)$ (natural log, $e \\approx 2.718$)
                </div>
                <div class="formula-box">
                    <strong>Log Properties:</strong><br>
                    • $\\log_b(1) = 0$<br>
                    • $\\log_b(b) = 1$<br>
                    • $\\log_b(b^x) = x$<br>
                    • $b^{\\log_b(x)} = x$
                </div>
            `
        },
        {
            title: '4.3 Properties of Logarithms',
            content: `
                <div class="formula-box">
                    <strong>Product Rule:</strong> $\\log_b(MN) = \\log_b(M) + \\log_b(N)$<br><br>
                    <strong>Quotient Rule:</strong> $\\log_b\\left(\\frac{M}{N}\\right) = \\log_b(M) - \\log_b(N)$<br><br>
                    <strong>Power Rule:</strong> $\\log_b(M^n) = n \\cdot \\log_b(M)$<br><br>
                    <strong>Change of Base:</strong> $\\log_b(x) = \\frac{\\log(x)}{\\log(b)} = \\frac{\\ln(x)}{\\ln(b)}$
                </div>
                <div class="example">
                    <h4>Example: Expand $\\log_2\\left(\\frac{8x^3}{y}\\right)$</h4>
                    <div class="solution">
                        $= \\log_2(8x^3) - \\log_2(y)$<br>
                        $= \\log_2(8) + \\log_2(x^3) - \\log_2(y)$<br>
                        $= 3 + 3\\log_2(x) - \\log_2(y)$
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
                    3. Solve and CHECK (domain: argument $> 0$)
                </div>
                <div class="example">
                    <h4>Example: Solve $2^x = 5$</h4>
                    <div class="solution">
                        $\\log(2^x) = \\log(5)$<br>
                        $x \\cdot \\log(2) = \\log(5)$<br>
                        $x = \\frac{\\log(5)}{\\log(2)} \\approx 2.32$
                    </div>
                </div>
            `
        }
    ],

    exercises: [
        {
            id: 'u4-1',
            unit: 4,
            question: 'Evaluate: $\\log_3(81)$',
            answer: '4',
            hint: 'Ask yourself: $3$ to what power equals $81$?',
            solution: `<strong>Method: Convert to exponential</strong><br>
                $\\log_3(81) = x$ means $3^x = 81$<br><br>
                <strong>Find the power:</strong><br>
                $3^1 = 3$<br>
                $3^2 = 9$<br>
                $3^3 = 27$<br>
                $3^4 = 81$ ✓<br><br>
                <strong>$\\log_3(81) = 4$</strong>`,
            hard: false
        },
        {
            id: 'u4-2',
            unit: 4,
            question: 'Evaluate: $\\log_2\\left(\\frac{1}{32}\\right)$',
            answer: '-5',
            hint: 'Remember: $\\log_b\\left(\\frac{1}{x}\\right) = -\\log_b(x)$. Also, $32 = 2^5$.',
            solution: `<strong>Method 1: Direct</strong><br>
                $\\log_2\\left(\\frac{1}{32}\\right) = x$ means $2^x = \\frac{1}{32}$<br>
                $2^x = 2^{-5}$<br>
                $x = -5$<br><br>
                <strong>Method 2: Using properties</strong><br>
                $\\log_2\\left(\\frac{1}{32}\\right) = \\log_2(1) - \\log_2(32)$<br>
                $= 0 - 5 = $ <strong>$-5$</strong>`,
            hard: false
        },
        {
            id: 'u4-3',
            unit: 4,
            question: 'Expand: $\\log_2\\left(\\frac{x^4 y^3}{z^2}\\right)$',
            answer: '$4\\log_2(x) + 3\\log_2(y) - 2\\log_2(z)$',
            hint: 'Use quotient rule first, then product rule, then power rule.',
            solution: `<strong>Step 1: Quotient rule</strong><br>
                $\\log_2\\left(\\frac{x^4 y^3}{z^2}\\right) = \\log_2(x^4 y^3) - \\log_2(z^2)$<br><br>
                <strong>Step 2: Product rule</strong><br>
                $= \\log_2(x^4) + \\log_2(y^3) - \\log_2(z^2)$<br><br>
                <strong>Step 3: Power rule</strong><br>
                $= $ <strong>$4\\log_2(x) + 3\\log_2(y) - 2\\log_2(z)$</strong>`,
            hard: false
        },
        {
            id: 'u4-4',
            unit: 4,
            question: 'Condense: $2\\log(x) + \\log(y) - 3\\log(z)$',
            answer: '$\\log\\left(\\frac{x^2 y}{z^3}\\right)$',
            hint: 'Use power rule to move coefficients, then product/quotient rules.',
            solution: `<strong>Step 1: Power rule</strong><br>
                $2\\log(x) = \\log(x^2)$<br>
                $3\\log(z) = \\log(z^3)$<br><br>
                <strong>Step 2: Rewrite</strong><br>
                $= \\log(x^2) + \\log(y) - \\log(z^3)$<br><br>
                <strong>Step 3: Product & Quotient rules</strong><br>
                $= $ <strong>$\\log\\left(\\frac{x^2 y}{z^3}\\right)$</strong>`,
            hard: true
        },
        {
            id: 'u4-5',
            unit: 4,
            question: 'Solve: $3^x = 27$',
            answer: '3',
            hint: 'Express $27$ as a power of $3$, then match exponents.',
            solution: `<strong>Method: Match bases</strong><br>
                $3^x = 27$<br>
                $3^x = 3^3$<br><br>
                <strong>Match exponents:</strong><br>
                <strong>$x = 3$</strong>`,
            hard: false
        },
        {
            id: 'u4-6',
            unit: 4,
            question: 'Solve: $\\log_2(x - 3) + \\log_2(x + 3) = 4$',
            answer: '5',
            hint: 'Combine logs using product rule, convert to exponential form, then solve.',
            solution: `<strong>Step 1: Product rule</strong><br>
                $\\log_2((x-3)(x+3)) = 4$<br>
                $\\log_2(x^2 - 9) = 4$<br><br>
                <strong>Step 2: Convert to exponential</strong><br>
                $x^2 - 9 = 2^4 = 16$<br>
                $x^2 = 25$<br>
                $x = \\pm 5$<br><br>
                <strong>Step 3: Check domain</strong><br>
                $x = 5$: $\\log_2(2) + \\log_2(8) = 1 + 3 = 4$ ✓<br>
                $x = -5$: $\\log_2(-8)$ undefined ✗<br><br>
                <strong>$x = 5$</strong>`,
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
                question: `Evaluate: $\\log_${b}(${n})$`,
                answer: `${exp}`,
                hint: `Ask yourself: $${b}$ to what power equals $${n}$?`,
                solution: `<strong>Method: Convert to exponential</strong><br>
                    $\\log_${b}(${n}) = x$ means $${b}^x = ${n}$<br><br>
                    <strong>Find the power:</strong><br>
                    $${b}^1 = ${b}$<br>
                    $${b}^2 = ${b*b}$<br>
                    ${exp >= 3 ? `$${b}^3 = ${b*b*b}$<br>` : ''}
                    ${exp >= 4 ? `$${b}^4 = ${b*b*b*b}$<br>` : ''}
                    $${b}^{${exp}} = ${n}$ ✓<br><br>
                    <strong>$\\log_${b}(${n}) = ${exp}$</strong>`,
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
                question: `Evaluate: $\\log_${b}\\left(\\frac{1}{${n}}\\right)$`,
                answer: `${-exp}`,
                hint: `Remember: $\\log_b\\left(\\frac{1}{x}\\right) = -\\log_b(x)$. Also, $${n} = ${b}^{${exp}}$.`,
                solution: `<strong>Method 1: Direct</strong><br>
                    $\\log_${b}\\left(\\frac{1}{${n}}\\right) = x$ means $${b}^x = \\frac{1}{${n}}$<br>
                    $${b}^x = ${b}^{-${exp}}$<br>
                    $x = -${exp}$<br><br>
                    <strong>Method 2: Using properties</strong><br>
                    $\\log_${b}\\left(\\frac{1}{${n}}\\right) = \\log_${b}(1) - \\log_${b}(${n})$<br>
                    $= 0 - ${exp} = $ <strong>$-${exp}$</strong>`,
                hard: false
            };
        },
        // Type 3: Expand logarithm
        function() {
            const b = randChoice([2, 3, 10]);
            const p = randChoice([2, 3, 4]);
            const q = randChoice([2, 3]);
            const r = randChoice([2, 3]);

            const bStr = b === 10 ? '' : `_${b}`;

            return {
                unit: 4,
                question: `Expand: $\\log${bStr}\\left(\\frac{x^{${p}} y^{${q}}}{z^{${r}}}\\right)$`,
                answer: `$${p}\\log${bStr}(x) + ${q}\\log${bStr}(y) - ${r}\\log${bStr}(z)$`,
                hint: `Use quotient rule first, then product rule, then power rule.`,
                solution: `<strong>Step 1: Quotient rule</strong><br>
                    $\\log${bStr}\\left(\\frac{x^{${p}} y^{${q}}}{z^{${r}}}\\right) = \\log${bStr}(x^{${p}} y^{${q}}) - \\log${bStr}(z^{${r}})$<br><br>
                    <strong>Step 2: Product rule</strong><br>
                    $= \\log${bStr}(x^{${p}}) + \\log${bStr}(y^{${q}}) - \\log${bStr}(z^{${r}})$<br><br>
                    <strong>Step 3: Power rule</strong><br>
                    $= $ <strong>$${p}\\log${bStr}(x) + ${q}\\log${bStr}(y) - ${r}\\log${bStr}(z)$</strong>`,
                hard: false
            };
        },
        // Type 4: Condense logarithm
        function() {
            const b = randChoice([2, 3, 10]);
            const p = randChoice([2, 3, 4]);
            const q = randChoice([1, 2]);
            const r = randChoice([2, 3]);

            const bStr = b === 10 ? '' : `_${b}`;
            const qCoef = q === 1 ? '' : q;
            const qExp = q === 1 ? '' : `^{${q}}`;

            return {
                unit: 4,
                question: `Condense: $${p}\\log${bStr}(x) + ${qCoef}\\log${bStr}(y) - ${r}\\log${bStr}(z)$`,
                answer: `$\\log${bStr}\\left(\\frac{x^{${p}} y${qExp}}{z^{${r}}}\\right)$`,
                hint: `Use power rule to move coefficients inside, then product/quotient rules.`,
                solution: `<strong>Step 1: Power rule</strong><br>
                    $${p}\\log${bStr}(x) = \\log${bStr}(x^{${p}})$<br>
                    $${qCoef}\\log${bStr}(y) = \\log${bStr}(y${qExp})$<br>
                    $${r}\\log${bStr}(z) = \\log${bStr}(z^{${r}})$<br><br>
                    <strong>Step 2: Rewrite</strong><br>
                    $= \\log${bStr}(x^{${p}}) + \\log${bStr}(y${qExp}) - \\log${bStr}(z^{${r}})$<br><br>
                    <strong>Step 3: Product & Quotient rules</strong><br>
                    $= $ <strong>$\\log${bStr}\\left(\\frac{x^{${p}} y${qExp}}{z^{${r}}}\\right)$</strong>`,
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
                question: `Solve: $${b}^x = ${n}$`,
                answer: `${exp}`,
                hint: `Express $${n}$ as a power of $${b}$, then match exponents.`,
                solution: `<strong>Method: Match bases</strong><br>
                    $${b}^x = ${n}$<br>
                    $${b}^x = ${b}^{${exp}}$<br><br>
                    <strong>Match exponents:</strong><br>
                    <strong>$x = ${exp}$</strong>`,
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
                question: `Solve: $\\log_${b}(x - ${a}) + \\log_${b}(x + ${a}) = ${exp}$`,
                answer: `${x}`,
                hint: `Combine logs using product rule, convert to exponential form, then solve.`,
                solution: `<strong>Step 1: Product rule</strong><br>
                    $\\log_${b}((x-${a})(x+${a})) = ${exp}$<br>
                    $\\log_${b}(x^2 - ${a*a}) = ${exp}$<br><br>
                    <strong>Step 2: Convert to exponential</strong><br>
                    $x^2 - ${a*a} = ${b}^{${exp}} = ${target}$<br>
                    $x^2 = ${target + a*a}$<br>
                    $x = \\pm ${x}$<br><br>
                    <strong>Step 3: Check domain</strong><br>
                    $x = ${x}$: $\\log_${b}(${x-a}) + \\log_${b}(${x+a})$ valid ✓<br>
                    $x = -${x}$: $\\log_${b}(${-x-a})$ undefined ✗<br><br>
                    <strong>$x = ${x}$</strong>`,
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
