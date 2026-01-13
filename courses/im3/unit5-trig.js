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
                    • Degrees to Radians: rad = deg × (π/180)<br>
                    • Radians to Degrees: deg = rad × (180/π)<br><br>
                    <strong>Key Angles:</strong><br>
                    • 360° = 2π rad (full circle)<br>
                    • 180° = π rad (half circle)<br>
                    • 90° = π/2 rad (quarter circle)<br>
                    • 60° = π/3 rad<br>
                    • 45° = π/4 rad<br>
                    • 30° = π/6 rad
                </div>
            `
        },
        {
            title: '5.2 The Unit Circle',
            content: `
                <p>The <strong>unit circle</strong> has radius 1, centered at origin. Point (x, y) on the circle: x = cos(θ), y = sin(θ).</p>
                <div class="formula-box">
                    <strong>Special Values (memorize!):</strong><br>
                    <table style="width:100%; text-align:center;">
                        <tr><td>θ</td><td>0</td><td>π/6</td><td>π/4</td><td>π/3</td><td>π/2</td></tr>
                        <tr><td>sin</td><td>0</td><td>1/2</td><td>√2/2</td><td>√3/2</td><td>1</td></tr>
                        <tr><td>cos</td><td>1</td><td>√3/2</td><td>√2/2</td><td>1/2</td><td>0</td></tr>
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
                    • sin(θ) = opposite/hypotenuse = y/r<br>
                    • cos(θ) = adjacent/hypotenuse = x/r<br>
                    • tan(θ) = opposite/adjacent = y/x = sin/cos<br><br>
                    • csc(θ) = 1/sin(θ) = r/y<br>
                    • sec(θ) = 1/cos(θ) = r/x<br>
                    • cot(θ) = 1/tan(θ) = x/y = cos/sin
                </div>
                <div class="formula-box">
                    <strong>Pythagorean Identity:</strong><br>
                    sin²(θ) + cos²(θ) = 1
                </div>
            `
        },
        {
            title: '5.4 Graphing Trig Functions',
            content: `
                <div class="formula-box">
                    <strong>y = A·sin(B(x - C)) + D</strong><br><br>
                    • |A| = Amplitude (height from midline)<br>
                    • Period = 2π/|B|<br>
                    • C = Phase shift (horizontal shift)<br>
                    • D = Vertical shift (midline)<br><br>
                    <strong>Parent Functions:</strong><br>
                    • sin(x): starts at 0, goes up<br>
                    • cos(x): starts at 1, goes down<br>
                    • Both have period 2π, amplitude 1
                </div>
            `
        }
    ],

    exercises: [
        {
            id: 'u5-1',
            unit: 5,
            question: 'Convert 120° to radians.',
            answer: '2π/3',
            hint: 'Multiply by π/180 and simplify.',
            solution: `<strong>Formula:</strong> rad = deg × (π/180)<br><br>
                120° × (π/180)<br>
                = 120π/180<br>
                = <strong>2π/3</strong>`,
            hard: false
        },
        {
            id: 'u5-2',
            unit: 5,
            question: 'Convert 5π/4 radians to degrees.',
            answer: '225',
            hint: 'Multiply by 180/π.',
            solution: `<strong>Formula:</strong> deg = rad × (180/π)<br><br>
                (5π/4) × (180/π)<br>
                = 5 × 180/4<br>
                = 900/4<br>
                = <strong>225°</strong>`,
            hard: false
        },
        {
            id: 'u5-3',
            unit: 5,
            question: 'Find sin(5π/6).',
            answer: '1/2',
            hint: '5π/6 is in Q2. Reference angle is π/6. Sin is positive in Q2.',
            solution: `<strong>Step 1: Find quadrant</strong><br>
                5π/6 is between π/2 and π → Q2<br><br>
                <strong>Step 2: Find reference angle</strong><br>
                π - 5π/6 = π/6<br><br>
                <strong>Step 3: Apply sign</strong><br>
                Sin is positive in Q2<br>
                sin(π/6) = 1/2<br><br>
                <strong>sin(5π/6) = 1/2</strong>`,
            hard: false
        },
        {
            id: 'u5-4',
            unit: 5,
            question: 'Find cos(7π/4).',
            answer: '√2/2',
            hint: '7π/4 is in Q4. Reference angle is π/4. Cos is positive in Q4.',
            solution: `<strong>Step 1: Find quadrant</strong><br>
                7π/4 is between 3π/2 and 2π → Q4<br><br>
                <strong>Step 2: Find reference angle</strong><br>
                2π - 7π/4 = π/4<br><br>
                <strong>Step 3: Apply sign</strong><br>
                Cos is positive in Q4<br>
                cos(π/4) = √2/2<br><br>
                <strong>cos(7π/4) = √2/2</strong>`,
            hard: false
        },
        {
            id: 'u5-5',
            unit: 5,
            question: 'Find the amplitude and period of y = 3sin(2x).',
            answer: 'amplitude=3,period=π',
            hint: 'For y = A·sin(Bx), amplitude = |A| and period = 2π/|B|.',
            solution: `<strong>Compare to y = A·sin(Bx)</strong><br>
                A = 3, B = 2<br><br>
                <strong>Amplitude:</strong> |A| = |3| = <strong>3</strong><br><br>
                <strong>Period:</strong> 2π/|B| = 2π/2 = <strong>π</strong>`,
            hard: false
        },
        {
            id: 'u5-6',
            unit: 5,
            question: 'If sin(θ) = 3/5 and θ is in Q2, find cos(θ).',
            answer: '-4/5',
            hint: 'Use sin²θ + cos²θ = 1 to find |cos(θ)|, then apply the correct sign for Q2.',
            solution: `<strong>Step 1: Use Pythagorean Identity</strong><br>
                sin²θ + cos²θ = 1<br>
                (3/5)² + cos²θ = 1<br>
                9/25 + cos²θ = 1<br>
                cos²θ = 16/25<br>
                |cos θ| = 4/5<br><br>
                <strong>Step 2: Determine sign</strong><br>
                θ is in Q2, so cos is negative<br><br>
                <strong>cos(θ) = -4/5</strong>`,
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
                answer = ansNum === 1 ? 'π' : `${ansNum}π`;
            } else {
                answer = ansNum === 1 ? `π/${ansDen}` : `${ansNum}π/${ansDen}`;
            }

            return {
                unit: 5,
                question: `Convert ${deg}° to radians.`,
                answer: answer,
                hint: `Multiply by π/180 and simplify.`,
                solution: `<strong>Formula:</strong> rad = deg × (π/180)<br><br>
                    ${deg}° × (π/180)<br>
                    = ${deg}π/180<br>
                    = <strong>${answer}</strong>`,
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

            const radStr = frac.num === 1 ? `π/${frac.den}` : `${frac.num}π/${frac.den}`;

            return {
                unit: 5,
                question: `Convert ${radStr} radians to degrees.`,
                answer: `${deg}`,
                hint: `Multiply by 180/π.`,
                solution: `<strong>Formula:</strong> deg = rad × (180/π)<br><br>
                    (${radStr}) × (180/π)<br>
                    = ${frac.num} × 180/${frac.den}<br>
                    = <strong>${deg}°</strong>`,
                hard: false
            };
        },
        // Type 3: Find sin of special angle
        function() {
            const angles = [
                {rad: 'π/6', ref: 'π/6', quad: 1, sin: '1/2'},
                {rad: 'π/4', ref: 'π/4', quad: 1, sin: '√2/2'},
                {rad: 'π/3', ref: 'π/3', quad: 1, sin: '√3/2'},
                {rad: '2π/3', ref: 'π/3', quad: 2, sin: '√3/2'},
                {rad: '3π/4', ref: 'π/4', quad: 2, sin: '√2/2'},
                {rad: '5π/6', ref: 'π/6', quad: 2, sin: '1/2'},
                {rad: '7π/6', ref: 'π/6', quad: 3, sin: '-1/2'},
                {rad: '5π/4', ref: 'π/4', quad: 3, sin: '-√2/2'},
                {rad: '4π/3', ref: 'π/3', quad: 3, sin: '-√3/2'},
                {rad: '5π/3', ref: 'π/3', quad: 4, sin: '-√3/2'},
                {rad: '7π/4', ref: 'π/4', quad: 4, sin: '-√2/2'},
                {rad: '11π/6', ref: 'π/6', quad: 4, sin: '-1/2'}
            ];

            const angle = randChoice(angles);
            const signWord = angle.quad <= 2 ? 'positive' : 'negative';

            return {
                unit: 5,
                question: `Find sin(${angle.rad}).`,
                answer: angle.sin,
                hint: `${angle.rad} is in Q${angle.quad}. Reference angle is ${angle.ref}. Sin is ${signWord} in Q${angle.quad}.`,
                solution: `<strong>Step 1: Find quadrant</strong><br>
                    ${angle.rad} is in Quadrant ${angle.quad}<br><br>
                    <strong>Step 2: Find reference angle</strong><br>
                    Reference angle = ${angle.ref}<br><br>
                    <strong>Step 3: Apply sign</strong><br>
                    Sin is ${signWord} in Q${angle.quad}<br>
                    sin(${angle.ref}) = ${angle.sin.replace('-', '')}<br><br>
                    <strong>sin(${angle.rad}) = ${angle.sin}</strong>`,
                hard: false
            };
        },
        // Type 4: Find cos of special angle
        function() {
            const angles = [
                {rad: 'π/6', ref: 'π/6', quad: 1, cos: '√3/2'},
                {rad: 'π/4', ref: 'π/4', quad: 1, cos: '√2/2'},
                {rad: 'π/3', ref: 'π/3', quad: 1, cos: '1/2'},
                {rad: '2π/3', ref: 'π/3', quad: 2, cos: '-1/2'},
                {rad: '3π/4', ref: 'π/4', quad: 2, cos: '-√2/2'},
                {rad: '5π/6', ref: 'π/6', quad: 2, cos: '-√3/2'},
                {rad: '7π/6', ref: 'π/6', quad: 3, cos: '-√3/2'},
                {rad: '5π/4', ref: 'π/4', quad: 3, cos: '-√2/2'},
                {rad: '4π/3', ref: 'π/3', quad: 3, cos: '-1/2'},
                {rad: '5π/3', ref: 'π/3', quad: 4, cos: '1/2'},
                {rad: '7π/4', ref: 'π/4', quad: 4, cos: '√2/2'},
                {rad: '11π/6', ref: 'π/6', quad: 4, cos: '√3/2'}
            ];

            const angle = randChoice(angles);
            const signWord = (angle.quad === 1 || angle.quad === 4) ? 'positive' : 'negative';

            return {
                unit: 5,
                question: `Find cos(${angle.rad}).`,
                answer: angle.cos,
                hint: `${angle.rad} is in Q${angle.quad}. Reference angle is ${angle.ref}. Cos is ${signWord} in Q${angle.quad}.`,
                solution: `<strong>Step 1: Find quadrant</strong><br>
                    ${angle.rad} is in Quadrant ${angle.quad}<br><br>
                    <strong>Step 2: Find reference angle</strong><br>
                    Reference angle = ${angle.ref}<br><br>
                    <strong>Step 3: Apply sign</strong><br>
                    Cos is ${signWord} in Q${angle.quad}<br>
                    cos(${angle.ref}) = ${angle.cos.replace('-', '')}<br><br>
                    <strong>cos(${angle.rad}) = ${angle.cos}</strong>`,
                hard: false
            };
        },
        // Type 5: Find amplitude and period
        function() {
            const A = randChoice([2, 3, 4, 5]);
            const B = randChoice([2, 3, 4]);
            const func = randChoice(['sin', 'cos']);

            const period = B === 1 ? '2π' : (B === 2 ? 'π' : `2π/${B}`);

            return {
                unit: 5,
                question: `Find the amplitude and period of y = ${A}${func}(${B}x).`,
                answer: `amplitude=${A},period=${period}`,
                hint: `For y = A·${func}(Bx), amplitude = |A| and period = 2π/|B|.`,
                solution: `<strong>Compare to y = A·${func}(Bx)</strong><br>
                    A = ${A}, B = ${B}<br><br>
                    <strong>Amplitude:</strong> |A| = |${A}| = <strong>${A}</strong><br><br>
                    <strong>Period:</strong> 2π/|B| = 2π/${B} = <strong>${period}</strong>`,
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
                    question: `If sin(θ) = ${sinSign}${triple.sin}/${triple.hyp} and θ is in Q${quad}, find cos(θ).`,
                    answer: `${cosSign}${triple.cos}/${triple.hyp}`,
                    hint: `Use sin²θ + cos²θ = 1 to find |cos(θ)|, then apply the correct sign for Q${quad}.`,
                    solution: `<strong>Step 1: Use Pythagorean Identity</strong><br>
                        sin²θ + cos²θ = 1<br>
                        (${triple.sin}/${triple.hyp})² + cos²θ = 1<br>
                        ${triple.sin*triple.sin}/${triple.hyp*triple.hyp} + cos²θ = 1<br>
                        cos²θ = ${triple.cos*triple.cos}/${triple.hyp*triple.hyp}<br>
                        |cos θ| = ${triple.cos}/${triple.hyp}<br><br>
                        <strong>Step 2: Determine sign</strong><br>
                        θ is in Q${quad}, so cos is ${cosSign === '' ? 'positive' : 'negative'}<br><br>
                        <strong>cos(θ) = ${cosSign}${triple.cos}/${triple.hyp}</strong>`,
                    hard: true
                };
            } else {
                return {
                    unit: 5,
                    question: `If cos(θ) = ${cosSign}${triple.cos}/${triple.hyp} and θ is in Q${quad}, find sin(θ).`,
                    answer: `${sinSign}${triple.sin}/${triple.hyp}`,
                    hint: `Use sin²θ + cos²θ = 1 to find |sin(θ)|, then apply the correct sign for Q${quad}.`,
                    solution: `<strong>Step 1: Use Pythagorean Identity</strong><br>
                        sin²θ + cos²θ = 1<br>
                        sin²θ + (${triple.cos}/${triple.hyp})² = 1<br>
                        sin²θ + ${triple.cos*triple.cos}/${triple.hyp*triple.hyp} = 1<br>
                        sin²θ = ${triple.sin*triple.sin}/${triple.hyp*triple.hyp}<br>
                        |sin θ| = ${triple.sin}/${triple.hyp}<br><br>
                        <strong>Step 2: Determine sign</strong><br>
                        θ is in Q${quad}, so sin is ${sinSign === '' ? 'positive' : 'negative'}<br><br>
                        <strong>sin(θ) = ${sinSign}${triple.sin}/${triple.hyp}</strong>`,
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
