// IM3 Unit 1: Polynomials & Polynomial Functions
// This file contains lessons, exercises, and problem generators for Unit 1

const unit1 = {
    id: 1,
    name: 'Unit 1',
    title: 'Polynomials & Polynomial Functions',

    lessons: [
        {
            title: '1.1 Polynomial Basics & Operations',
            content: `
                <p>A <strong>polynomial</strong> is an expression with terms of the form $ax^n$ where $n$ is a non-negative integer.</p>
                <ul>
                    <li><strong>Degree:</strong> The highest power of $x$ (e.g., $x^3 + 2x - 1$ has degree 3)</li>
                    <li><strong>Leading coefficient:</strong> The coefficient of the highest degree term</li>
                    <li><strong>Standard form:</strong> Terms arranged from highest to lowest degree</li>
                </ul>
                <div class="formula-box">
                    <strong>Polynomial Operations:</strong><br>
                    • Add/Subtract: Combine like terms<br>
                    • Multiply: Use distributive property (FOIL for binomials)<br>
                    • $(a + b)^2 = a^2 + 2ab + b^2$<br>
                    • $(a - b)^2 = a^2 - 2ab + b^2$<br>
                    • $(a + b)(a - b) = a^2 - b^2$
                </div>
            `
        },
        {
            title: '1.2 Factoring Polynomials',
            content: `
                <p>Key factoring techniques:</p>
                <ul>
                    <li><strong>GCF:</strong> Always factor out the greatest common factor first</li>
                    <li><strong>Grouping:</strong> For 4+ terms, group and factor each group</li>
                    <li><strong>Difference of squares:</strong> $a^2 - b^2 = (a+b)(a-b)$</li>
                    <li><strong>Sum/Difference of cubes:</strong><br>
                        $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$<br>
                        $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$</li>
                </ul>
                <div class="formula-box">
                    <strong>Remember SOAP for cubes:</strong><br>
                    S = Same sign, O = Opposite sign, AP = Always Positive<br>
                    $a^3 \\pm b^3 = (a \\text{ [S] } b)(a^2 \\text{ [O] } ab \\text{ [AP] } b^2)$
                </div>
            `
        },
        {
            title: '1.3 Polynomial Division & Remainder Theorem',
            content: `
                <p><strong>Synthetic Division:</strong> Shortcut when dividing by $(x - c)$.</p>
                <div class="formula-box">
                    <strong>Remainder Theorem:</strong><br>
                    When $P(x)$ is divided by $(x - c)$, the remainder equals $P(c)$.<br><br>
                    <strong>Factor Theorem:</strong><br>
                    $(x - c)$ is a factor of $P(x)$ if and only if $P(c) = 0$.
                </div>
            `
        },
        {
            title: '1.4 Finding Zeros & Graphing',
            content: `
                <p><strong>Rational Root Theorem:</strong> Possible rational zeros $= \\pm\\frac{\\text{factors of constant}}{\\text{factors of leading coeff}}$</p>
                <div class="formula-box">
                    <strong>End Behavior:</strong><br>
                    • Even degree, positive leading coeff: $\\nearrow \\cdots \\nearrow$<br>
                    • Even degree, negative leading coeff: $\\searrow \\cdots \\searrow$<br>
                    • Odd degree, positive leading coeff: $\\searrow \\cdots \\nearrow$<br>
                    • Odd degree, negative leading coeff: $\\nearrow \\cdots \\searrow$<br><br>
                    <strong>Multiplicity of zeros:</strong><br>
                    • Odd multiplicity: graph crosses $x$-axis<br>
                    • Even multiplicity: graph touches and bounces
                </div>
            `
        }
    ],

    exercises: [
        {
            id: 'u1-1',
            unit: 1,
            question: 'Expand and simplify: $(3x - 2)^2 - (x + 4)^2$',
            answer: '$8x^2-20x-12$',
            hint: 'Use the perfect square formulas: $(a-b)^2 = a^2 - 2ab + b^2$ and $(a+b)^2 = a^2 + 2ab + b^2$. Expand each separately, then subtract.',
            solution: `<strong>Step 1: Expand $(3x - 2)^2$</strong><br>
                Using $(a - b)^2 = a^2 - 2ab + b^2$:<br>
                $(3x - 2)^2 = 9x^2 - 12x + 4$<br><br>
                <strong>Step 2: Expand $(x + 4)^2$</strong><br>
                Using $(a + b)^2 = a^2 + 2ab + b^2$:<br>
                $(x + 4)^2 = x^2 + 8x + 16$<br><br>
                <strong>Step 3: Subtract (watch the signs!)</strong><br>
                $9x^2 - 12x + 4 - (x^2 + 8x + 16)$<br>
                $= 9x^2 - 12x + 4 - x^2 - 8x - 16$<br>
                $= $ <strong>$8x^2 - 20x - 12$</strong>`,
            hard: false
        },
        {
            id: 'u1-2',
            unit: 1,
            question: 'Factor completely: $x^3 + 8$',
            answer: '$(x+2)(x^2-2x+4)$',
            hint: 'Recognize $8 = 2^3$, so this is a sum of cubes. Use: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$',
            solution: `<strong>Step 1: Recognize the pattern</strong><br>
                $x^3 + 8 = x^3 + 2^3$ (sum of cubes)<br><br>
                <strong>Step 2: Apply the formula</strong><br>
                $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$<br>
                where $a = x$ and $b = 2$<br><br>
                <strong>Step 3: Substitute</strong><br>
                $= (x + 2)(x^2 - 2x + 4)$<br><br>
                <strong>Answer: $(x + 2)(x^2 - 2x + 4)$</strong>`,
            hard: false
        },
        {
            id: 'u1-3',
            unit: 1,
            question: 'Factor completely: $2x^4 - 32$',
            answer: '$2(x-2)(x+2)(x^2+4)$',
            hint: 'First factor out GCF, then recognize the difference of squares pattern.',
            solution: `<strong>Step 1: Factor out GCF</strong><br>
                $2x^4 - 32 = 2(x^4 - 16)$<br><br>
                <strong>Step 2: Recognize difference of squares</strong><br>
                $x^4 - 16 = (x^2)^2 - 4^2$<br>
                $= (x^2 - 4)(x^2 + 4)$<br><br>
                <strong>Step 3: Factor again</strong><br>
                $x^2 - 4 = (x - 2)(x + 2)$<br>
                $x^2 + 4$ cannot be factored over reals<br><br>
                <strong>Answer: $2(x - 2)(x + 2)(x^2 + 4)$</strong>`,
            hard: true
        },
        {
            id: 'u1-4',
            unit: 1,
            question: 'Find the remainder when $(3x^3 - 2x^2 + x - 5) \\div (x - 1)$',
            answer: '$-3$',
            hint: 'By the Remainder Theorem, when dividing $P(x)$ by $(x - c)$, the remainder equals $P(c)$.',
            solution: `<strong>Using Remainder Theorem:</strong><br>
                When dividing by $(x - 1)$, $c = 1$<br>
                Remainder $= P(1)$<br><br>
                $P(1) = 3(1)^3 - 2(1)^2 + (1) - 5$<br>
                $= 3 - 2 + 1 - 5$<br>
                $= $ <strong>$-3$</strong>`,
            hard: false
        },
        {
            id: 'u1-5',
            unit: 1,
            question: 'Find all rational zeros of $P(x) = x^3 - 4x^2 - 7x + 10$',
            answer: '-2,1,5',
            answerType: 'zeros',
            zeros: [-2, 1, 5],
            hint: 'Use Rational Root Theorem: possible zeros are $\\pm$(factors of 10)/(factors of 1). Test candidates.',
            solution: `<strong>Step 1: Find candidates</strong><br>
                Possible zeros: $\\pm 1, \\pm 2, \\pm 5, \\pm 10$<br><br>
                <strong>Step 2: Test $x = 1$</strong><br>
                $P(1) = 1 - 4 - 7 + 10 = 0$ ✓<br><br>
                <strong>Step 3: Factor out $(x - 1)$</strong><br>
                Using synthetic division, get $x^2 - 3x - 10$<br><br>
                <strong>Step 4: Factor quadratic</strong><br>
                $x^2 - 3x - 10 = (x - 5)(x + 2)$<br><br>
                <strong>Zeros: $x = -2, 1, 5$</strong>`,
            hard: true
        },
        {
            id: 'u1-6',
            unit: 1,
            question: 'If $(x - 2)$ is a factor of $x^3 + kx^2 - 8x + 12$, find the value of $k$.',
            answer: '$-1$',
            hint: 'If $(x - 2)$ is a factor, then $P(2) = 0$ by the Factor Theorem.',
            solution: `<strong>Using Factor Theorem:</strong><br>
                If $(x - 2)$ is a factor, then $P(2) = 0$<br><br>
                $P(2) = (2)^3 + k(2)^2 - 8(2) + 12 = 0$<br>
                $8 + 4k - 16 + 12 = 0$<br>
                $4k + 4 = 0$<br>
                <strong>$k = -1$</strong>`,
            hard: true
        }
    ],

    generators: [
        // Type 1: Expand (ax + b)² - (cx + d)²
        function() {
            const a = randInt(2, 5);
            const b = randChoice([-4, -3, -2, 2, 3, 4]);
            const c = randInt(1, 3);
            const d = randChoice([-5, -4, -3, 3, 4, 5]);

            const x2 = a*a - c*c;
            const x1 = 2*a*b - 2*c*d;
            const x0 = b*b - d*d;

            const bSign = b > 0 ? '+' : '-';
            const dSign = d > 0 ? '+' : '-';

            return {
                unit: 1,
                question: `Expand and simplify: $(${a}x ${bSign} ${Math.abs(b)})^2 - (${c === 1 ? '' : c}x ${dSign} ${Math.abs(d)})^2$`,
                answer: `$${x2}x^2${x1 >= 0 ? '+' : ''}${x1}x${x0 >= 0 ? '+' : ''}${x0}$`,
                hint: `Use $(a\\pm b)^2 = a^2 \\pm 2ab + b^2$ for each, then subtract carefully.`,
                solution: `<strong>Step 1: Expand $(${a}x ${bSign} ${Math.abs(b)})^2$</strong><br>
                    $= ${a*a}x^2 ${2*a*b >= 0 ? '+' : '-'} ${Math.abs(2*a*b)}x + ${b*b}$<br><br>
                    <strong>Step 2: Expand $(${c === 1 ? '' : c}x ${dSign} ${Math.abs(d)})^2$</strong><br>
                    $= ${c*c}x^2 ${2*c*d >= 0 ? '+' : '-'} ${Math.abs(2*c*d)}x + ${d*d}$<br><br>
                    <strong>Step 3: Subtract</strong><br>
                    $= ${a*a}x^2 ${2*a*b >= 0 ? '+' : '-'} ${Math.abs(2*a*b)}x + ${b*b} - (${c*c}x^2 ${2*c*d >= 0 ? '+' : '-'} ${Math.abs(2*c*d)}x + ${d*d})$<br><br>
                    <strong>Step 4: Combine like terms</strong><br>
                    $= $ <strong>$${x2}x^2 ${x1 >= 0 ? '+' : '-'} ${Math.abs(x1)}x ${x0 >= 0 ? '+' : '-'} ${Math.abs(x0)}$</strong>`,
                hard: false
            };
        },
        // Type 2: Factor sum/difference of cubes
        function() {
            const a = randChoice([1, 2, 3]);
            const b = randChoice([1, 2, 3, 4, 5]);
            const isSum = Math.random() > 0.5;
            const a3 = a * a * a;
            const b3 = b * b * b;

            const sign = isSum ? '+' : '-';
            const oppSign = isSum ? '-' : '+';

            return {
                unit: 1,
                question: `Factor completely: $${a === 1 ? '' : a3}x^3 ${sign} ${b3}$`,
                answer: `$(${a === 1 ? '' : a}x${sign}${b})(${a === 1 ? '' : a*a}x^2${oppSign}${a*b}x+${b*b})$`,
                hint: `This is a ${isSum ? 'sum' : 'difference'} of cubes. Use: $a^3 ${sign} b^3 = (a ${sign} b)(a^2 ${oppSign} ab + b^2)$`,
                solution: `<strong>Step 1: Recognize the pattern</strong><br>
                    $${a === 1 ? '' : a3}x^3 ${sign} ${b3} = (${a === 1 ? '' : a}x)^3 ${sign} ${b}^3$<br><br>
                    <strong>Step 2: Identify $a$ and $b$</strong><br>
                    $a = ${a === 1 ? '' : a}x$, $b = ${b}$<br><br>
                    <strong>Step 3: Apply ${isSum ? 'sum' : 'difference'} of cubes formula</strong><br>
                    $a^3 ${sign} b^3 = (a ${sign} b)(a^2 ${oppSign} ab + b^2)$<br><br>
                    <strong>Step 4: Substitute</strong><br>
                    $= $ <strong>$(${a === 1 ? '' : a}x ${sign} ${b})(${a*a === 1 ? '' : a*a}x^2 ${oppSign} ${a*b}x + ${b*b})$</strong>`,
                hard: false
            };
        },
        // Type 3: Factor with GCF and difference of squares
        function() {
            const gcf = randChoice([2, 3, 4]);
            const b = randChoice([2, 3, 4]);

            return {
                unit: 1,
                question: `Factor completely: $${gcf}x^4 - ${gcf * b * b * b * b}$`,
                answer: `$${gcf}(x-${b})(x+${b})(x^2+${b*b})$`,
                hint: `First factor out the GCF, then recognize difference of squares pattern: $a^2 - b^2 = (a-b)(a+b)$`,
                solution: `<strong>Step 1: Factor out GCF</strong><br>
                    $${gcf}x^4 - ${gcf * b*b*b*b} = ${gcf}(x^4 - ${b*b*b*b})$<br><br>
                    <strong>Step 2: Recognize $x^4 - ${b*b*b*b}$ as difference of squares</strong><br>
                    $x^4 - ${b*b*b*b} = (x^2)^2 - (${b*b})^2$<br>
                    $= (x^2 - ${b*b})(x^2 + ${b*b})$<br><br>
                    <strong>Step 3: Factor $x^2 - ${b*b}$ further</strong><br>
                    $x^2 - ${b*b} = (x - ${b})(x + ${b})$<br><br>
                    <strong>Step 4: Note $x^2 + ${b*b}$ cannot be factored over reals</strong><br><br>
                    <strong>Answer: $${gcf}(x - ${b})(x + ${b})(x^2 + ${b*b})$</strong>`,
                hard: true
            };
        },
        // Type 4: Remainder Theorem
        function() {
            const a = randInt(1, 4);
            const b = randChoice([-3, -2, -1, 1, 2, 3]);
            const c = randChoice([-4, -3, -2, 2, 3, 4]);
            const d = randChoice([-6, -5, -4, 4, 5, 6]);
            const r = randChoice([-2, -1, 1, 2, 3]);

            const remainder = a*r*r*r + b*r*r + c*r + d;

            const bSign = b >= 0 ? '+' : '-';
            const cSign = c >= 0 ? '+' : '-';
            const dSign = d >= 0 ? '+' : '-';

            return {
                unit: 1,
                question: `Find the remainder when $P(x) = ${a === 1 ? '' : a}x^3 ${bSign} ${Math.abs(b)}x^2 ${cSign} ${Math.abs(c)}x ${dSign} ${Math.abs(d)}$ is divided by $(x ${r >= 0 ? '-' : '+'} ${Math.abs(r)})$`,
                answer: `$${remainder}$`,
                hint: `By the Remainder Theorem, when dividing $P(x)$ by $(x - c)$, the remainder equals $P(c)$. Here $c = ${r}$.`,
                solution: `<strong>Using Remainder Theorem:</strong><br>
                    When dividing by $(x ${r >= 0 ? '-' : '+'} ${Math.abs(r)})$, $c = ${r}$<br>
                    Remainder $= P(${r})$<br><br>
                    <strong>Calculate $P(${r})$:</strong><br>
                    $P(${r}) = ${a}(${r})^3 ${bSign} ${Math.abs(b)}(${r})^2 ${cSign} ${Math.abs(c)}(${r}) ${dSign} ${Math.abs(d)}$<br>
                    $= ${a*r*r*r} ${b*r*r >= 0 ? '+' : '-'} ${Math.abs(b*r*r)} ${c*r >= 0 ? '+' : '-'} ${Math.abs(c*r)} ${dSign} ${Math.abs(d)}$<br>
                    $= $ <strong>$${remainder}$</strong>`,
                hard: false
            };
        },
        // Type 5: Find k given factor
        function() {
            const r = randChoice([1, 2, 3, -1, -2]);
            const k = randChoice([-4, -3, -2, -1, 1, 2, 3, 4]);
            const b = randChoice([-5, -4, -3, 3, 4, 5]);
            const c = -(r*r*r + k*r*r + b*r);

            return {
                unit: 1,
                question: `If $(x ${r >= 0 ? '-' : '+'} ${Math.abs(r)})$ is a factor of $x^3 + kx^2 ${b >= 0 ? '+' : '-'} ${Math.abs(b)}x ${c >= 0 ? '+' : '-'} ${Math.abs(c)}$, find $k$.`,
                answer: `$${k}$`,
                hint: `If $(x ${r >= 0 ? '-' : '+'} ${Math.abs(r)})$ is a factor, then $P(${r}) = 0$ by the Factor Theorem.`,
                solution: `<strong>Step 1: Apply Factor Theorem</strong><br>
                    If $(x ${r >= 0 ? '-' : '+'} ${Math.abs(r)})$ is a factor, then $P(${r}) = 0$<br><br>
                    <strong>Step 2: Substitute $x = ${r}$</strong><br>
                    $(${r})^3 + k(${r})^2 ${b >= 0 ? '+' : '-'} ${Math.abs(b)}(${r}) ${c >= 0 ? '+' : '-'} ${Math.abs(c)} = 0$<br>
                    $${r*r*r} + ${r*r}k ${b*r >= 0 ? '+' : '-'} ${Math.abs(b*r)} ${c >= 0 ? '+' : '-'} ${Math.abs(c)} = 0$<br><br>
                    <strong>Step 3: Solve for $k$</strong><br>
                    $${r*r}k = ${-(r*r*r + b*r + c)}$<br>
                    <strong>$k = ${k}$</strong>`,
                hard: true
            };
        },
        // Type 6: Find zeros of cubic
        function() {
            const r1 = randChoice([-3, -2, -1, 1, 2, 3]);
            const r2 = randChoice([-2, -1, 1, 2]);
            const r3 = randChoice([-4, -3, 3, 4]);

            if (r1 === r2 || r1 === r3 || r2 === r3) {
                return unit1.generators[0](); // Retry with different generator
            }

            const a = -(r1 + r2 + r3);
            const b = r1*r2 + r1*r3 + r2*r3;
            const c = -r1*r2*r3;

            const zeros = [r1, r2, r3].sort((a,b) => a-b);

            return {
                unit: 1,
                question: `Find all rational zeros of $P(x) = x^3 ${a >= 0 ? '+' : '-'} ${Math.abs(a)}x^2 ${b >= 0 ? '+' : '-'} ${Math.abs(b)}x ${c >= 0 ? '+' : '-'} ${Math.abs(c)}$`,
                answer: zeros.join(','),
                answerType: 'zeros',
                zeros: zeros,
                hint: `Use Rational Root Theorem: possible zeros are $\\pm$(factors of ${Math.abs(c)})/(factors of 1). Test candidates.`,
                solution: `<strong>Step 1: Apply Rational Root Theorem</strong><br>
                    Possible zeros: $\\pm$(factors of ${Math.abs(c)})<br><br>
                    <strong>Step 2: Test candidates</strong><br>
                    $P(${r1}) = 0$ ✓<br><br>
                    <strong>Step 3: Factor out $(x ${r1 >= 0 ? '-' : '+'} ${Math.abs(r1)})$</strong><br>
                    Use synthetic division to get quadratic<br><br>
                    <strong>Step 4: Factor or solve quadratic</strong><br>
                    Find remaining zeros: $${r2}, ${r3}$<br><br>
                    <strong>Zeros: $x = ${zeros.join(', ')}$</strong>`,
                hard: true
            };
        }
    ]
};

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('im3', unit1);
}
