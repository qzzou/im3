// IM3 Unit 6: Trigonometric Identities & Equations
// This file contains lessons, exercises, and problem generators for Unit 6

const unit6 = {
    id: 6,
    name: 'Unit 6',
    title: 'Trig Identities & Equations',

    lessons: [
        {
            title: '6.1 Fundamental Identities',
            content: `
                <div class="formula-box">
                    <strong>Pythagorean Identities:</strong><br>
                    • $\\sin^2\\theta + \\cos^2\\theta = 1$<br>
                    • $1 + \\tan^2\\theta = \\sec^2\\theta$<br>
                    • $1 + \\cot^2\\theta = \\csc^2\\theta$<br><br>
                    <strong>Reciprocal Identities:</strong><br>
                    • $\\csc\\theta = \\frac{1}{\\sin\\theta}$<br>
                    • $\\sec\\theta = \\frac{1}{\\cos\\theta}$<br>
                    • $\\cot\\theta = \\frac{1}{\\tan\\theta}$<br><br>
                    <strong>Quotient Identities:</strong><br>
                    • $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$<br>
                    • $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$
                </div>
            `
        },
        {
            title: '6.2 Sum and Difference Formulas',
            content: `
                <div class="formula-box">
                    <strong>Sum Formulas:</strong><br>
                    • $\\sin(A + B) = \\sin A \\cdot \\cos B + \\cos A \\cdot \\sin B$<br>
                    • $\\cos(A + B) = \\cos A \\cdot \\cos B - \\sin A \\cdot \\sin B$<br>
                    • $\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\cdot \\tan B}$<br><br>
                    <strong>Difference Formulas:</strong><br>
                    • $\\sin(A - B) = \\sin A \\cdot \\cos B - \\cos A \\cdot \\sin B$<br>
                    • $\\cos(A - B) = \\cos A \\cdot \\cos B + \\sin A \\cdot \\sin B$<br>
                    • $\\tan(A - B) = \\frac{\\tan A - \\tan B}{1 + \\tan A \\cdot \\tan B}$
                </div>
            `
        },
        {
            title: '6.3 Double Angle Formulas',
            content: `
                <div class="formula-box">
                    <strong>Double Angle Formulas:</strong><br>
                    • $\\sin(2\\theta) = 2\\sin\\theta \\cdot \\cos\\theta$<br><br>
                    • $\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta$<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$= 2\\cos^2\\theta - 1$<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$= 1 - 2\\sin^2\\theta$<br><br>
                    • $\\tan(2\\theta) = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}$
                </div>
                <div class="example">
                    <h4>Example: Find $\\sin(2\\theta)$ if $\\sin\\theta = \\frac{3}{5}$ and $\\theta$ is in Q1</h4>
                    <div class="solution">
                        First find $\\cos\\theta = \\frac{4}{5}$ (using Pythagorean identity)<br>
                        $\\sin(2\\theta) = 2 \\cdot \\frac{3}{5} \\cdot \\frac{4}{5} = \\frac{24}{25}$
                    </div>
                </div>
            `
        },
        {
            title: '6.4 Solving Trig Equations',
            content: `
                <div class="formula-box">
                    <strong>Strategy:</strong><br>
                    1. Isolate the trig function<br>
                    2. Find reference angle<br>
                    3. Find ALL solutions in $[0, 2\\pi)$<br>
                    4. Add $2\\pi n$ for general solution<br><br>
                    <strong>Common Values:</strong><br>
                    • $\\sin\\theta = 0 \\rightarrow \\theta = 0, \\pi$<br>
                    • $\\cos\\theta = 0 \\rightarrow \\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$<br>
                    • $\\sin\\theta = \\frac{1}{2} \\rightarrow \\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$<br>
                    • $\\cos\\theta = \\frac{1}{2} \\rightarrow \\theta = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$
                </div>
            `
        }
    ],

    exercises: [
        {
            id: 'u6-1',
            unit: 6,
            question: 'Simplify: $\\sin^2\\theta + \\cos^2\\theta + \\tan^2\\theta$',
            answer: '$\\sec^2\\theta$',
            hint: 'Use $\\sin^2\\theta + \\cos^2\\theta = 1$, then recall another Pythagorean identity.',
            solution: `<strong>Step 1: Apply Pythagorean identity</strong><br>
                $\\sin^2\\theta + \\cos^2\\theta = 1$<br><br>
                <strong>Step 2: Substitute</strong><br>
                $1 + \\tan^2\\theta$<br><br>
                <strong>Step 3: Use second Pythagorean identity</strong><br>
                $1 + \\tan^2\\theta = $ <strong>$\\sec^2\\theta$</strong>`,
            hard: false
        },
        {
            id: 'u6-2',
            unit: 6,
            question: 'Find the exact value of $\\sin(75°)$.',
            answer: '$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$',
            hint: '$75° = 45° + 30°$. Use the sum formula for sine.',
            solution: `<strong>Step 1: Rewrite angle</strong><br>
                $75° = 45° + 30°$<br><br>
                <strong>Step 2: Apply sum formula</strong><br>
                $\\sin(75°) = \\sin(45°)\\cos(30°) + \\cos(45°)\\sin(30°)$<br><br>
                <strong>Step 3: Substitute values</strong><br>
                $= \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2}$<br>
                $= \\frac{\\sqrt{6}}{4} + \\frac{\\sqrt{2}}{4}$<br>
                $=$ <strong>$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$</strong>`,
            hard: true
        },
        {
            id: 'u6-3',
            unit: 6,
            question: 'Find the exact value of $\\cos(15°)$.',
            answer: '$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$',
            hint: '$15° = 45° - 30°$. Use the difference formula for cosine.',
            solution: `<strong>Step 1: Rewrite angle</strong><br>
                $15° = 45° - 30°$<br><br>
                <strong>Step 2: Apply difference formula</strong><br>
                $\\cos(15°) = \\cos(45°)\\cos(30°) + \\sin(45°)\\sin(30°)$<br><br>
                <strong>Step 3: Substitute values</strong><br>
                $= \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2}$<br>
                $= \\frac{\\sqrt{6}}{4} + \\frac{\\sqrt{2}}{4}$<br>
                $=$ <strong>$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$</strong>`,
            hard: true
        },
        {
            id: 'u6-4',
            unit: 6,
            question: 'If $\\sin\\theta = \\frac{4}{5}$ and $\\theta$ is in Q1, find $\\sin(2\\theta)$.',
            answer: '$\\frac{24}{25}$',
            hint: 'First find $\\cos\\theta$ using Pythagorean identity, then use $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$.',
            solution: `<strong>Step 1: Find $\\cos\\theta$</strong><br>
                $\\sin^2\\theta + \\cos^2\\theta = 1$<br>
                $\\left(\\frac{4}{5}\\right)^2 + \\cos^2\\theta = 1$<br>
                $\\cos^2\\theta = 1 - \\frac{16}{25} = \\frac{9}{25}$<br>
                $\\cos\\theta = \\frac{3}{5}$ (positive in Q1)<br><br>
                <strong>Step 2: Apply double angle formula</strong><br>
                $\\sin(2\\theta) = 2\\sin\\theta \\cdot \\cos\\theta$<br>
                $= 2 \\cdot \\frac{4}{5} \\cdot \\frac{3}{5}$<br>
                $=$ <strong>$\\frac{24}{25}$</strong>`,
            hard: false
        },
        {
            id: 'u6-5',
            unit: 6,
            question: 'Solve for $\\theta$ in $[0, 2\\pi)$: $2\\sin\\theta - 1 = 0$',
            answer: '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}$',
            hint: 'Isolate $\\sin\\theta$, then find all angles where $\\sin\\theta = \\frac{1}{2}$.',
            solution: `<strong>Step 1: Isolate $\\sin\\theta$</strong><br>
                $2\\sin\\theta = 1$<br>
                $\\sin\\theta = \\frac{1}{2}$<br><br>
                <strong>Step 2: Find reference angle</strong><br>
                $\\sin^{-1}\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{6}$<br><br>
                <strong>Step 3: Find all solutions in $[0, 2\\pi)$</strong><br>
                Sin is positive in Q1 and Q2<br>
                Q1: $\\theta = \\frac{\\pi}{6}$<br>
                Q2: $\\theta = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$<br><br>
                <strong>$\\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$</strong>`,
            hard: false
        },
        {
            id: 'u6-6',
            unit: 6,
            question: 'Solve for $\\theta$ in $[0, 2\\pi)$: $2\\cos^2\\theta - \\cos\\theta - 1 = 0$',
            answer: '$0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$',
            hint: 'Let $u = \\cos\\theta$ and solve as quadratic. Then find all angles.',
            solution: `<strong>Step 1: Let $u = \\cos\\theta$</strong><br>
                $2u^2 - u - 1 = 0$<br>
                $(2u + 1)(u - 1) = 0$<br>
                $u = -\\frac{1}{2}$ or $u = 1$<br><br>
                <strong>Step 2: Solve $\\cos\\theta = 1$</strong><br>
                $\\theta = 0$<br><br>
                <strong>Step 3: Solve $\\cos\\theta = -\\frac{1}{2}$</strong><br>
                Cos is negative in Q2 and Q3<br>
                Q2: $\\theta = \\frac{2\\pi}{3}$<br>
                Q3: $\\theta = \\frac{4\\pi}{3}$<br><br>
                <strong>$\\theta = 0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$</strong>`,
            hard: true
        }
    ],

    generators: [
        // Type 1: Simplify using Pythagorean identities
        function() {
            const problems = [
                {expr: '$\\sin^2\\theta + \\cos^2\\theta$', answer: '$1$'},
                {expr: '$1 + \\tan^2\\theta$', answer: '$\\sec^2\\theta$'},
                {expr: '$1 + \\cot^2\\theta$', answer: '$\\csc^2\\theta$'},
                {expr: '$\\sec^2\\theta - \\tan^2\\theta$', answer: '$1$'},
                {expr: '$\\csc^2\\theta - \\cot^2\\theta$', answer: '$1$'},
                {expr: '$\\sec^2\\theta - 1$', answer: '$\\tan^2\\theta$'},
                {expr: '$\\csc^2\\theta - 1$', answer: '$\\cot^2\\theta$'}
            ];

            const prob = randChoice(problems);

            return {
                unit: 6,
                question: `Simplify: ${prob.expr}`,
                answer: prob.answer,
                hint: `Use the Pythagorean identities: $\\sin^2\\theta + \\cos^2\\theta = 1$, $1 + \\tan^2\\theta = \\sec^2\\theta$, $1 + \\cot^2\\theta = \\csc^2\\theta$.`,
                solution: `<strong>Using Pythagorean Identities:</strong><br>
                    ${prob.expr} $=$ <strong>${prob.answer}</strong>`,
                hard: false
            };
        },
        // Type 2: Find exact value using sum/difference
        function() {
            const angles = [
                {deg: 75, a: 45, b: 30, op: '+'},
                {deg: 15, a: 45, b: 30, op: '-'},
                {deg: 105, a: 60, b: 45, op: '+'},
                {deg: 165, a: 120, b: 45, op: '+'}
            ];
            const angle = randChoice(angles);
            const func = randChoice(['sin', 'cos']);
            const funcLatex = func === 'sin' ? '\\sin' : '\\cos';

            let answer, formula, step3;
            if (func === 'sin') {
                if (angle.op === '+') {
                    formula = `$\\sin(${angle.a}°)\\cos(${angle.b}°) + \\cos(${angle.a}°)\\sin(${angle.b}°)$`;
                } else {
                    formula = `$\\sin(${angle.a}°)\\cos(${angle.b}°) - \\cos(${angle.a}°)\\sin(${angle.b}°)$`;
                }
            } else {
                if (angle.op === '+') {
                    formula = `$\\cos(${angle.a}°)\\cos(${angle.b}°) - \\sin(${angle.a}°)\\sin(${angle.b}°)$`;
                } else {
                    formula = `$\\cos(${angle.a}°)\\cos(${angle.b}°) + \\sin(${angle.a}°)\\sin(${angle.b}°)$`;
                }
            }

            // Pre-computed answers for common angles
            if (angle.deg === 75 && func === 'sin') answer = '$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$';
            else if (angle.deg === 75 && func === 'cos') answer = '$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$';
            else if (angle.deg === 15 && func === 'sin') answer = '$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$';
            else if (angle.deg === 15 && func === 'cos') answer = '$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$';
            else if (angle.deg === 105 && func === 'sin') answer = '$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$';
            else if (angle.deg === 105 && func === 'cos') answer = '$\\frac{\\sqrt{2}-\\sqrt{6}}{4}$';
            else answer = '$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$'; // Default fallback

            return {
                unit: 6,
                question: `Find the exact value of $${funcLatex}(${angle.deg}°)$.`,
                answer: answer,
                hint: `$${angle.deg}° = ${angle.a}° ${angle.op} ${angle.b}°$. Use the ${angle.op === '+' ? 'sum' : 'difference'} formula for ${func}.`,
                solution: `<strong>Step 1: Rewrite angle</strong><br>
                    $${angle.deg}° = ${angle.a}° ${angle.op} ${angle.b}°$<br><br>
                    <strong>Step 2: Apply ${angle.op === '+' ? 'sum' : 'difference'} formula</strong><br>
                    $${funcLatex}(${angle.deg}°) =$ ${formula}<br><br>
                    <strong>Step 3: Substitute and simplify</strong><br>
                    $=$ <strong>${answer}</strong>`,
                hard: true
            };
        },
        // Type 3: Find sin(2θ) or cos(2θ)
        function() {
            const triples = [
                {sin: 3, cos: 4, hyp: 5},
                {sin: 5, cos: 12, hyp: 13},
                {sin: 8, cos: 15, hyp: 17}
            ];
            const triple = randChoice(triples);
            const quad = randChoice([1, 2]);
            const findDouble = randChoice(['sin', 'cos']);
            const funcLatex = findDouble === 'sin' ? '\\sin' : '\\cos';

            const sinSign = (quad === 1 || quad === 2) ? '' : '-';
            const cosSign = (quad === 1) ? '' : '-';

            const sinVal = triple.sin;
            const cosVal = triple.cos;
            const hyp = triple.hyp;

            let answer, formula;
            if (findDouble === 'sin') {
                // sin(2θ) = 2sinθcosθ
                const val = 2 * sinVal * cosVal;
                const sign = (quad === 1) ? '' : '-';
                answer = `$${sign}\\frac{${val}}{${hyp*hyp}}$`;
                formula = `$2\\sin\\theta \\cdot \\cos\\theta = 2 \\cdot ${sinSign}\\frac{${sinVal}}{${hyp}} \\cdot ${cosSign}\\frac{${cosVal}}{${hyp}}$`;
            } else {
                // cos(2θ) = cos²θ - sin²θ
                const val = cosVal*cosVal - sinVal*sinVal;
                const sign = val >= 0 ? '' : '-';
                answer = `$${sign}\\frac{${Math.abs(val)}}{${hyp*hyp}}$`;
                formula = `$\\cos^2\\theta - \\sin^2\\theta = \\left(\\frac{${cosVal}}{${hyp}}\\right)^2 - \\left(\\frac{${sinVal}}{${hyp}}\\right)^2$`;
            }

            return {
                unit: 6,
                question: `If $\\sin\\theta = ${sinSign}\\frac{${sinVal}}{${hyp}}$ and $\\theta$ is in Q${quad}, find $${funcLatex}(2\\theta)$.`,
                answer: answer,
                hint: `First find $\\cos\\theta$ using Pythagorean identity, then use the double angle formula for ${findDouble}.`,
                solution: `<strong>Step 1: Find $\\cos\\theta$</strong><br>
                    $\\sin^2\\theta + \\cos^2\\theta = 1$<br>
                    $\\left(\\frac{${sinVal}}{${hyp}}\\right)^2 + \\cos^2\\theta = 1$<br>
                    $\\cos^2\\theta = \\frac{${cosVal*cosVal}}{${hyp*hyp}}$<br>
                    $\\cos\\theta = ${cosSign}\\frac{${cosVal}}{${hyp}}$ (in Q${quad})<br><br>
                    <strong>Step 2: Apply double angle formula</strong><br>
                    $${funcLatex}(2\\theta) =$ ${formula}<br>
                    $=$ <strong>${answer}</strong>`,
                hard: false
            };
        },
        // Type 4: Solve simple trig equation
        function() {
            const equations = [
                {func: 'sin', funcLatex: '\\sin', val: '\\frac{1}{2}', valDisplay: '$\\frac{1}{2}$', solutions: '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}$'},
                {func: 'sin', funcLatex: '\\sin', val: '\\frac{\\sqrt{2}}{2}', valDisplay: '$\\frac{\\sqrt{2}}{2}$', solutions: '$\\frac{\\pi}{4}, \\frac{3\\pi}{4}$'},
                {func: 'sin', funcLatex: '\\sin', val: '\\frac{\\sqrt{3}}{2}', valDisplay: '$\\frac{\\sqrt{3}}{2}$', solutions: '$\\frac{\\pi}{3}, \\frac{2\\pi}{3}$'},
                {func: 'cos', funcLatex: '\\cos', val: '\\frac{1}{2}', valDisplay: '$\\frac{1}{2}$', solutions: '$\\frac{\\pi}{3}, \\frac{5\\pi}{3}$'},
                {func: 'cos', funcLatex: '\\cos', val: '\\frac{\\sqrt{2}}{2}', valDisplay: '$\\frac{\\sqrt{2}}{2}$', solutions: '$\\frac{\\pi}{4}, \\frac{7\\pi}{4}$'},
                {func: 'cos', funcLatex: '\\cos', val: '\\frac{\\sqrt{3}}{2}', valDisplay: '$\\frac{\\sqrt{3}}{2}$', solutions: '$\\frac{\\pi}{6}, \\frac{11\\pi}{6}$'},
                {func: 'sin', funcLatex: '\\sin', val: '-\\frac{1}{2}', valDisplay: '$-\\frac{1}{2}$', solutions: '$\\frac{7\\pi}{6}, \\frac{11\\pi}{6}$'},
                {func: 'cos', funcLatex: '\\cos', val: '-\\frac{1}{2}', valDisplay: '$-\\frac{1}{2}$', solutions: '$\\frac{2\\pi}{3}, \\frac{4\\pi}{3}$'}
            ];

            const eq = randChoice(equations);

            const quads = eq.func === 'sin'
                ? (eq.val.startsWith('-') ? 'Q3 and Q4' : 'Q1 and Q2')
                : (eq.val.startsWith('-') ? 'Q2 and Q3' : 'Q1 and Q4');

            return {
                unit: 6,
                question: `Solve for $\\theta$ in $[0, 2\\pi)$: $${eq.funcLatex}\\theta = ${eq.val}$`,
                answer: eq.solutions,
                hint: `Find the reference angle, then determine in which quadrants $${eq.funcLatex}$ has this value.`,
                solution: `<strong>Step 1: Identify the value</strong><br>
                    $${eq.funcLatex}\\theta = ${eq.val}$<br><br>
                    <strong>Step 2: Find reference angle</strong><br>
                    Reference angle where $${eq.funcLatex} = |${eq.val}|$<br><br>
                    <strong>Step 3: Find all solutions</strong><br>
                    $${eq.funcLatex}$ has this value in ${quads}<br><br>
                    <strong>$\\theta =$ ${eq.solutions}</strong>`,
                hard: false
            };
        },
        // Type 5: Solve quadratic trig equation
        function() {
            // 2cos²θ - cosθ - 1 = 0 factors as (2cosθ + 1)(cosθ - 1) = 0
            const equations = [
                {
                    expr: '$2\\cos^2\\theta - \\cos\\theta - 1 = 0$',
                    factored: '$(2\\cos\\theta + 1)(\\cos\\theta - 1) = 0$',
                    vals: ['$\\cos\\theta = -\\frac{1}{2}$', '$\\cos\\theta = 1$'],
                    solutions: '$0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$'
                },
                {
                    expr: '$2\\sin^2\\theta - \\sin\\theta = 0$',
                    factored: '$\\sin\\theta(2\\sin\\theta - 1) = 0$',
                    vals: ['$\\sin\\theta = 0$', '$\\sin\\theta = \\frac{1}{2}$'],
                    solutions: '$0, \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\pi$'
                },
                {
                    expr: '$2\\cos^2\\theta + \\cos\\theta - 1 = 0$',
                    factored: '$(2\\cos\\theta - 1)(\\cos\\theta + 1) = 0$',
                    vals: ['$\\cos\\theta = \\frac{1}{2}$', '$\\cos\\theta = -1$'],
                    solutions: '$\\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$'
                },
                {
                    expr: '$2\\sin^2\\theta + \\sin\\theta - 1 = 0$',
                    factored: '$(2\\sin\\theta - 1)(\\sin\\theta + 1) = 0$',
                    vals: ['$\\sin\\theta = \\frac{1}{2}$', '$\\sin\\theta = -1$'],
                    solutions: '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$'
                }
            ];

            const eq = randChoice(equations);

            return {
                unit: 6,
                question: `Solve for $\\theta$ in $[0, 2\\pi)$: ${eq.expr}`,
                answer: eq.solutions,
                hint: `Factor as a quadratic (let $u = \\sin\\theta$ or $\\cos\\theta$), then solve each factor.`,
                solution: `<strong>Step 1: Factor</strong><br>
                    ${eq.expr}<br>
                    ${eq.factored}<br><br>
                    <strong>Step 2: Solve each factor</strong><br>
                    ${eq.vals[0]}<br>
                    ${eq.vals[1]}<br><br>
                    <strong>Step 3: Find all angles in $[0, 2\\pi)$</strong><br>
                    <strong>$\\theta =$ ${eq.solutions}</strong>`,
                hard: true
            };
        },
        // Type 6: Verify identity
        function() {
            const identities = [
                {
                    left: '$\\tan\\theta \\cdot \\cos\\theta$',
                    right: '$\\sin\\theta$',
                    steps: '$\\tan\\theta \\cdot \\cos\\theta = \\frac{\\sin\\theta}{\\cos\\theta} \\cdot \\cos\\theta = \\sin\\theta$'
                },
                {
                    left: '$\\cot\\theta \\cdot \\sin\\theta$',
                    right: '$\\cos\\theta$',
                    steps: '$\\cot\\theta \\cdot \\sin\\theta = \\frac{\\cos\\theta}{\\sin\\theta} \\cdot \\sin\\theta = \\cos\\theta$'
                },
                {
                    left: '$\\sin\\theta \\cdot \\sec\\theta$',
                    right: '$\\tan\\theta$',
                    steps: '$\\sin\\theta \\cdot \\sec\\theta = \\sin\\theta \\cdot \\frac{1}{\\cos\\theta} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$'
                },
                {
                    left: '$\\cos\\theta \\cdot \\csc\\theta$',
                    right: '$\\cot\\theta$',
                    steps: '$\\cos\\theta \\cdot \\csc\\theta = \\cos\\theta \\cdot \\frac{1}{\\sin\\theta} = \\frac{\\cos\\theta}{\\sin\\theta} = \\cot\\theta$'
                }
            ];

            const id = randChoice(identities);

            return {
                unit: 6,
                question: `Simplify: ${id.left}`,
                answer: id.right,
                hint: `Convert to sine and cosine using quotient and reciprocal identities.`,
                solution: `<strong>Convert and simplify:</strong><br>
                    ${id.steps}<br><br>
                    <strong>${id.left} $=$ ${id.right}</strong>`,
                hard: false
            };
        }
    ]
};

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('im3', unit6);
}
