// IM3 Unit 5: Trigonometry & Unit Circle
// This file contains lessons, exercises, and problem generators for Unit 5

const unit5 = {
    id: 5,
    name: 'Unit 5',
    title: 'Trigonometry & Unit Circle',

    lessons: [
        {
            title: '5.1 Angles and Radian Measure',
            content: `
                <p>Angles can be measured in <strong>degrees</strong> or <strong>radians</strong>.</p>
                <div class="formula-box">
                    <strong>Conversion Formulas:</strong><br>
                    • Degrees to Radians: $\\text{rad} = \\text{deg} \\times \\frac{\\pi}{180}$<br>
                    • Radians to Degrees: $\\text{deg} = \\text{rad} \\times \\frac{180}{\\pi}$<br><br>
                    <strong>Key Angles:</strong><br>
                    • $360° = 2\\pi$ rad (full circle)<br>
                    • $180° = \\pi$ rad (half circle)<br>
                    • $90° = \\frac{\\pi}{2}$ rad (quarter circle)<br>
                    • $60° = \\frac{\\pi}{3}$ rad<br>
                    • $45° = \\frac{\\pi}{4}$ rad<br>
                    • $30° = \\frac{\\pi}{6}$ rad
                </div>
            `
        },
        {
            title: '5.2 The Unit Circle',
            content: `
                <p>The <strong>unit circle</strong> has radius 1, centered at origin. Point $(x, y)$ on the circle: $x = \\cos(\\theta)$, $y = \\sin(\\theta)$.</p>
                <div class="formula-box">
                    <strong>Special Values (memorize!):</strong><br>
                    <table style="width:100%; text-align:center;">
                        <tr><td>$\\theta$</td><td>$0$</td><td>$\\frac{\\pi}{6}$</td><td>$\\frac{\\pi}{4}$</td><td>$\\frac{\\pi}{3}$</td><td>$\\frac{\\pi}{2}$</td></tr>
                        <tr><td>$\\sin$</td><td>$0$</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt{2}}{2}$</td><td>$\\frac{\\sqrt{3}}{2}$</td><td>$1$</td></tr>
                        <tr><td>$\\cos$</td><td>$1$</td><td>$\\frac{\\sqrt{3}}{2}$</td><td>$\\frac{\\sqrt{2}}{2}$</td><td>$\\frac{1}{2}$</td><td>$0$</td></tr>
                    </table>
                </div>
                <div class="formula-box">
                    <strong>Signs by Quadrant (All Students Take Calculus):</strong><br>
                    • Q1: All positive<br>
                    • Q2: Sin positive<br>
                    • Q3: Tan positive<br>
                    • Q4: Cos positive
                </div>
            `
        },
        {
            title: '5.3 Trigonometric Functions',
            content: `
                <div class="formula-box">
                    <strong>The Six Trig Functions:</strong><br>
                    • $\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{y}{r}$<br>
                    • $\\cos(\\theta) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{x}{r}$<br>
                    • $\\tan(\\theta) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{y}{x} = \\frac{\\sin}{\\cos}$<br><br>
                    • $\\csc(\\theta) = \\frac{1}{\\sin(\\theta)} = \\frac{r}{y}$<br>
                    • $\\sec(\\theta) = \\frac{1}{\\cos(\\theta)} = \\frac{r}{x}$<br>
                    • $\\cot(\\theta) = \\frac{1}{\\tan(\\theta)} = \\frac{x}{y} = \\frac{\\cos}{\\sin}$
                </div>
                <div class="formula-box">
                    <strong>Pythagorean Identity:</strong><br>
                    $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$
                </div>
            `
        },
        {
            title: '5.4 Graphing Trig Functions',
            content: `
                <div class="formula-box">
                    <strong>$y = A \\cdot \\sin(B(x - C)) + D$</strong><br><br>
                    • $|A|$ = Amplitude (height from midline)<br>
                    • Period $= \\frac{2\\pi}{|B|}$<br>
                    • $C$ = Phase shift (horizontal shift)<br>
                    • $D$ = Vertical shift (midline)<br><br>
                    <strong>Parent Functions:</strong><br>
                    • $\\sin(x)$: starts at 0, goes up<br>
                    • $\\cos(x)$: starts at 1, goes down<br>
                    • Both have period $2\\pi$, amplitude 1
                </div>
            `
        }
    ],

    exercises: [
        {
            id: 'u5-1',
            unit: 5,
            question: 'Convert $120°$ to radians.',
            answer: '$\\frac{2\\pi}{3}$',
            hint: 'Multiply by $\\frac{\\pi}{180}$ and simplify.',
            solution: `<strong>Formula:</strong> $\\text{rad} = \\text{deg} \\times \\frac{\\pi}{180}$<br><br>
                $120° \\times \\frac{\\pi}{180}$<br>
                $= \\frac{120\\pi}{180}$<br>
                $= \\frac{2\\pi}{3}$`,
            hard: false
        },
        {
            id: 'u5-2',
            unit: 5,
            question: 'Convert $\\frac{5\\pi}{4}$ radians to degrees.',
            answer: '$225°$',
            hint: 'Multiply by $\\frac{180}{\\pi}$.',
            solution: `<strong>Formula:</strong> $\\text{deg} = \\text{rad} \\times \\frac{180}{\\pi}$<br><br>
                $\\frac{5\\pi}{4} \\times \\frac{180}{\\pi}$<br>
                $= \\frac{5 \\times 180}{4}$<br>
                $= \\frac{900}{4}$<br>
                $= 225°$`,
            hard: false
        },
        {
            id: 'u5-3',
            unit: 5,
            question: 'Find $\\sin\\left(\\frac{5\\pi}{6}\\right)$.',
            answer: '$\\frac{1}{2}$',
            hint: '$\\frac{5\\pi}{6}$ is in Q2. Reference angle is $\\frac{\\pi}{6}$. Sin is positive in Q2.',
            solution: `<strong>Step 1: Find quadrant</strong><br>
                $\\frac{5\\pi}{6}$ is between $\\frac{\\pi}{2}$ and $\\pi$ → Q2<br><br>
                <strong>Step 2: Find reference angle</strong><br>
                $\\pi - \\frac{5\\pi}{6} = \\frac{\\pi}{6}$<br><br>
                <strong>Step 3: Apply sign</strong><br>
                Sin is positive in Q2<br>
                $\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$<br><br>
                $\\sin\\left(\\frac{5\\pi}{6}\\right) = \\frac{1}{2}$`,
            hard: false
        },
        {
            id: 'u5-4',
            unit: 5,
            question: 'Find $\\cos\\left(\\frac{7\\pi}{4}\\right)$.',
            answer: '$\\frac{\\sqrt{2}}{2}$',
            hint: '$\\frac{7\\pi}{4}$ is in Q4. Reference angle is $\\frac{\\pi}{4}$. Cos is positive in Q4.',
            solution: `<strong>Step 1: Find quadrant</strong><br>
                $\\frac{7\\pi}{4}$ is between $\\frac{3\\pi}{2}$ and $2\\pi$ → Q4<br><br>
                <strong>Step 2: Find reference angle</strong><br>
                $2\\pi - \\frac{7\\pi}{4} = \\frac{\\pi}{4}$<br><br>
                <strong>Step 3: Apply sign</strong><br>
                Cos is positive in Q4<br>
                $\\cos\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$<br><br>
                $\\cos\\left(\\frac{7\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$`,
            hard: false
        },
        {
            id: 'u5-5',
            unit: 5,
            question: 'Find the amplitude and period of $y = 3\\sin(2x)$.',
            answer: 'amplitude $= 3$, period $= \\pi$',
            hint: 'For $y = A \\cdot \\sin(Bx)$, amplitude $= |A|$ and period $= \\frac{2\\pi}{|B|}$.',
            solution: `<strong>Compare to $y = A \\cdot \\sin(Bx)$</strong><br>
                $A = 3$, $B = 2$<br><br>
                <strong>Amplitude:</strong> $|A| = |3| = 3$<br><br>
                <strong>Period:</strong> $\\frac{2\\pi}{|B|} = \\frac{2\\pi}{2} = \\pi$`,
            hard: false
        },
        {
            id: 'u5-6',
            unit: 5,
            question: 'If $\\sin(\\theta) = \\frac{3}{5}$ and $\\theta$ is in Q2, find $\\cos(\\theta)$.',
            answer: '$-\\frac{4}{5}$',
            hint: 'Use $\\sin^2\\theta + \\cos^2\\theta = 1$ to find $|\\cos(\\theta)|$, then apply the correct sign for Q2.',
            solution: `<strong>Step 1: Use Pythagorean Identity</strong><br>
                $\\sin^2\\theta + \\cos^2\\theta = 1$<br>
                $\\left(\\frac{3}{5}\\right)^2 + \\cos^2\\theta = 1$<br>
                $\\frac{9}{25} + \\cos^2\\theta = 1$<br>
                $\\cos^2\\theta = \\frac{16}{25}$<br>
                $|\\cos\\theta| = \\frac{4}{5}$<br><br>
                <strong>Step 2: Determine sign</strong><br>
                $\\theta$ is in Q2, so cos is negative<br><br>
                $\\cos(\\theta) = -\\frac{4}{5}$`,
            hard: true
        }
    ],

    generators: [
        // Type 1: Convert degrees to radians
        function() {
            const degs = [30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];
            const deg = randChoice(degs);

            const gcd = (a, b) => b ? gcd(b, a % b) : a;
            const num = deg;
            const den = 180;
            const g = gcd(num, den);

            const ansNum = num / g;
            const ansDen = den / g;

            let answer;
            if (ansDen === 1) {
                answer = ansNum === 1 ? '$\\pi$' : `$${ansNum}\\pi$`;
            } else {
                answer = ansNum === 1 ? `$\\frac{\\pi}{${ansDen}}$` : `$\\frac{${ansNum}\\pi}{${ansDen}}$`;
            }

            let answerSimple;
            if (ansDen === 1) {
                answerSimple = ansNum === 1 ? '\\pi' : `${ansNum}\\pi`;
            } else {
                answerSimple = ansNum === 1 ? `\\frac{\\pi}{${ansDen}}` : `\\frac{${ansNum}\\pi}{${ansDen}}`;
            }

            return {
                unit: 5,
                question: `Convert $${deg}°$ to radians.`,
                answer: answer,
                hint: `Multiply by $\\frac{\\pi}{180}$ and simplify.`,
                solution: `<strong>Formula:</strong> $\\text{rad} = \\text{deg} \\times \\frac{\\pi}{180}$<br><br>
                    $${deg}° \\times \\frac{\\pi}{180}$<br>
                    $= \\frac{${deg}\\pi}{180}$<br>
                    $= ${answerSimple}$`,
                hard: false
            };
        },
        // Type 2: Convert radians to degrees
        function() {
            const fractions = [
                {num: 1, den: 6}, {num: 1, den: 4}, {num: 1, den: 3}, {num: 1, den: 2},
                {num: 2, den: 3}, {num: 3, den: 4}, {num: 5, den: 6},
                {num: 5, den: 4}, {num: 4, den: 3}, {num: 3, den: 2}, {num: 5, den: 3}, {num: 7, den: 4}
            ];
            const frac = randChoice(fractions);

            const deg = frac.num * 180 / frac.den;

            const radStr = frac.num === 1 ? `\\frac{\\pi}{${frac.den}}` : `\\frac{${frac.num}\\pi}{${frac.den}}`;

            return {
                unit: 5,
                question: `Convert $${radStr}$ radians to degrees.`,
                answer: `$${deg}°$`,
                hint: `Multiply by $\\frac{180}{\\pi}$.`,
                solution: `<strong>Formula:</strong> $\\text{deg} = \\text{rad} \\times \\frac{180}{\\pi}$<br><br>
                    $${radStr} \\times \\frac{180}{\\pi}$<br>
                    $= \\frac{${frac.num} \\times 180}{${frac.den}}$<br>
                    $= ${deg}°$`,
                hard: false
            };
        },
        // Type 3: Find sin of special angle
        function() {
            const angles = [
                {rad: '\\frac{\\pi}{6}', ref: '\\frac{\\pi}{6}', quad: 1, sin: '\\frac{1}{2}'},
                {rad: '\\frac{\\pi}{4}', ref: '\\frac{\\pi}{4}', quad: 1, sin: '\\frac{\\sqrt{2}}{2}'},
                {rad: '\\frac{\\pi}{3}', ref: '\\frac{\\pi}{3}', quad: 1, sin: '\\frac{\\sqrt{3}}{2}'},
                {rad: '\\frac{2\\pi}{3}', ref: '\\frac{\\pi}{3}', quad: 2, sin: '\\frac{\\sqrt{3}}{2}'},
                {rad: '\\frac{3\\pi}{4}', ref: '\\frac{\\pi}{4}', quad: 2, sin: '\\frac{\\sqrt{2}}{2}'},
                {rad: '\\frac{5\\pi}{6}', ref: '\\frac{\\pi}{6}', quad: 2, sin: '\\frac{1}{2}'},
                {rad: '\\frac{7\\pi}{6}', ref: '\\frac{\\pi}{6}', quad: 3, sin: '-\\frac{1}{2}'},
                {rad: '\\frac{5\\pi}{4}', ref: '\\frac{\\pi}{4}', quad: 3, sin: '-\\frac{\\sqrt{2}}{2}'},
                {rad: '\\frac{4\\pi}{3}', ref: '\\frac{\\pi}{3}', quad: 3, sin: '-\\frac{\\sqrt{3}}{2}'},
                {rad: '\\frac{5\\pi}{3}', ref: '\\frac{\\pi}{3}', quad: 4, sin: '-\\frac{\\sqrt{3}}{2}'},
                {rad: '\\frac{7\\pi}{4}', ref: '\\frac{\\pi}{4}', quad: 4, sin: '-\\frac{\\sqrt{2}}{2}'},
                {rad: '\\frac{11\\pi}{6}', ref: '\\frac{\\pi}{6}', quad: 4, sin: '-\\frac{1}{2}'}
            ];

            const angle = randChoice(angles);
            const signWord = angle.quad <= 2 ? 'positive' : 'negative';
            const absSin = angle.sin.replace('-', '');

            return {
                unit: 5,
                question: `Find $\\sin\\left(${angle.rad}\\right)$.`,
                answer: `$${angle.sin}$`,
                hint: `$${angle.rad}$ is in Q${angle.quad}. Reference angle is $${angle.ref}$. Sin is ${signWord} in Q${angle.quad}.`,
                solution: `<strong>Step 1: Find quadrant</strong><br>
                    $${angle.rad}$ is in Quadrant ${angle.quad}<br><br>
                    <strong>Step 2: Find reference angle</strong><br>
                    Reference angle $= ${angle.ref}$<br><br>
                    <strong>Step 3: Apply sign</strong><br>
                    Sin is ${signWord} in Q${angle.quad}<br>
                    $\\sin\\left(${angle.ref}\\right) = ${absSin}$<br><br>
                    $\\sin\\left(${angle.rad}\\right) = ${angle.sin}$`,
                hard: false
            };
        },
        // Type 4: Find cos of special angle
        function() {
            const angles = [
                {rad: '\\frac{\\pi}{6}', ref: '\\frac{\\pi}{6}', quad: 1, cos: '\\frac{\\sqrt{3}}{2}'},
                {rad: '\\frac{\\pi}{4}', ref: '\\frac{\\pi}{4}', quad: 1, cos: '\\frac{\\sqrt{2}}{2}'},
                {rad: '\\frac{\\pi}{3}', ref: '\\frac{\\pi}{3}', quad: 1, cos: '\\frac{1}{2}'},
                {rad: '\\frac{2\\pi}{3}', ref: '\\frac{\\pi}{3}', quad: 2, cos: '-\\frac{1}{2}'},
                {rad: '\\frac{3\\pi}{4}', ref: '\\frac{\\pi}{4}', quad: 2, cos: '-\\frac{\\sqrt{2}}{2}'},
                {rad: '\\frac{5\\pi}{6}', ref: '\\frac{\\pi}{6}', quad: 2, cos: '-\\frac{\\sqrt{3}}{2}'},
                {rad: '\\frac{7\\pi}{6}', ref: '\\frac{\\pi}{6}', quad: 3, cos: '-\\frac{\\sqrt{3}}{2}'},
                {rad: '\\frac{5\\pi}{4}', ref: '\\frac{\\pi}{4}', quad: 3, cos: '-\\frac{\\sqrt{2}}{2}'},
                {rad: '\\frac{4\\pi}{3}', ref: '\\frac{\\pi}{3}', quad: 3, cos: '-\\frac{1}{2}'},
                {rad: '\\frac{5\\pi}{3}', ref: '\\frac{\\pi}{3}', quad: 4, cos: '\\frac{1}{2}'},
                {rad: '\\frac{7\\pi}{4}', ref: '\\frac{\\pi}{4}', quad: 4, cos: '\\frac{\\sqrt{2}}{2}'},
                {rad: '\\frac{11\\pi}{6}', ref: '\\frac{\\pi}{6}', quad: 4, cos: '\\frac{\\sqrt{3}}{2}'}
            ];

            const angle = randChoice(angles);
            const signWord = (angle.quad === 1 || angle.quad === 4) ? 'positive' : 'negative';
            const absCos = angle.cos.replace('-', '');

            return {
                unit: 5,
                question: `Find $\\cos\\left(${angle.rad}\\right)$.`,
                answer: `$${angle.cos}$`,
                hint: `$${angle.rad}$ is in Q${angle.quad}. Reference angle is $${angle.ref}$. Cos is ${signWord} in Q${angle.quad}.`,
                solution: `<strong>Step 1: Find quadrant</strong><br>
                    $${angle.rad}$ is in Quadrant ${angle.quad}<br><br>
                    <strong>Step 2: Find reference angle</strong><br>
                    Reference angle $= ${angle.ref}$<br><br>
                    <strong>Step 3: Apply sign</strong><br>
                    Cos is ${signWord} in Q${angle.quad}<br>
                    $\\cos\\left(${angle.ref}\\right) = ${absCos}$<br><br>
                    $\\cos\\left(${angle.rad}\\right) = ${angle.cos}$`,
                hard: false
            };
        },
        // Type 5: Find amplitude and period
        function() {
            const A = randChoice([2, 3, 4, 5]);
            const B = randChoice([2, 3, 4]);
            const func = randChoice(['sin', 'cos']);

            const period = B === 1 ? '2\\pi' : (B === 2 ? '\\pi' : `\\frac{2\\pi}{${B}}`);

            return {
                unit: 5,
                question: `Find the amplitude and period of $y = ${A}\\${func}(${B}x)$.`,
                answer: `amplitude $= ${A}$, period $= ${period}$`,
                hint: `For $y = A \\cdot \\${func}(Bx)$, amplitude $= |A|$ and period $= \\frac{2\\pi}{|B|}$.`,
                solution: `<strong>Compare to $y = A \\cdot \\${func}(Bx)$</strong><br>
                    $A = ${A}$, $B = ${B}$<br><br>
                    <strong>Amplitude:</strong> $|A| = |${A}| = ${A}$<br><br>
                    <strong>Period:</strong> $\\frac{2\\pi}{|B|} = \\frac{2\\pi}{${B}} = ${period}$`,
                hard: false
            };
        },
        // Type 6: Find other trig function using Pythagorean identity
        function() {
            const triples = [
                {sin: 3, cos: 4, hyp: 5},
                {sin: 5, cos: 12, hyp: 13},
                {sin: 8, cos: 15, hyp: 17},
                {sin: 7, cos: 24, hyp: 25}
            ];
            const triple = randChoice(triples);
            const quad = randChoice([1, 2, 3, 4]);

            const sinSign = (quad === 1 || quad === 2) ? '' : '-';
            const cosSign = (quad === 1 || quad === 4) ? '' : '-';

            const givenSin = Math.random() > 0.5;

            if (givenSin) {
                return {
                    unit: 5,
                    question: `If $\\sin(\\theta) = ${sinSign}\\frac{${triple.sin}}{${triple.hyp}}$ and $\\theta$ is in Q${quad}, find $\\cos(\\theta)$.`,
                    answer: `$${cosSign}\\frac{${triple.cos}}{${triple.hyp}}$`,
                    hint: `Use $\\sin^2\\theta + \\cos^2\\theta = 1$ to find $|\\cos(\\theta)|$, then apply the correct sign for Q${quad}.`,
                    solution: `<strong>Step 1: Use Pythagorean Identity</strong><br>
                        $\\sin^2\\theta + \\cos^2\\theta = 1$<br>
                        $\\left(\\frac{${triple.sin}}{${triple.hyp}}\\right)^2 + \\cos^2\\theta = 1$<br>
                        $\\frac{${triple.sin*triple.sin}}{${triple.hyp*triple.hyp}} + \\cos^2\\theta = 1$<br>
                        $\\cos^2\\theta = \\frac{${triple.cos*triple.cos}}{${triple.hyp*triple.hyp}}$<br>
                        $|\\cos\\theta| = \\frac{${triple.cos}}{${triple.hyp}}$<br><br>
                        <strong>Step 2: Determine sign</strong><br>
                        $\\theta$ is in Q${quad}, so cos is ${cosSign === '' ? 'positive' : 'negative'}<br><br>
                        $\\cos(\\theta) = ${cosSign}\\frac{${triple.cos}}{${triple.hyp}}$`,
                    hard: true
                };
            } else {
                return {
                    unit: 5,
                    question: `If $\\cos(\\theta) = ${cosSign}\\frac{${triple.cos}}{${triple.hyp}}$ and $\\theta$ is in Q${quad}, find $\\sin(\\theta)$.`,
                    answer: `$${sinSign}\\frac{${triple.sin}}{${triple.hyp}}$`,
                    hint: `Use $\\sin^2\\theta + \\cos^2\\theta = 1$ to find $|\\sin(\\theta)|$, then apply the correct sign for Q${quad}.`,
                    solution: `<strong>Step 1: Use Pythagorean Identity</strong><br>
                        $\\sin^2\\theta + \\cos^2\\theta = 1$<br>
                        $\\sin^2\\theta + \\left(\\frac{${triple.cos}}{${triple.hyp}}\\right)^2 = 1$<br>
                        $\\sin^2\\theta + \\frac{${triple.cos*triple.cos}}{${triple.hyp*triple.hyp}} = 1$<br>
                        $\\sin^2\\theta = \\frac{${triple.sin*triple.sin}}{${triple.hyp*triple.hyp}}$<br>
                        $|\\sin\\theta| = \\frac{${triple.sin}}{${triple.hyp}}$<br><br>
                        <strong>Step 2: Determine sign</strong><br>
                        $\\theta$ is in Q${quad}, so sin is ${sinSign === '' ? 'positive' : 'negative'}<br><br>
                        $\\sin(\\theta) = ${sinSign}\\frac{${triple.sin}}{${triple.hyp}}$`,
                    hard: true
                };
            }
        }
    ]
};

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('im3', unit5);
}
