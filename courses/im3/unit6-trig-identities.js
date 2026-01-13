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
                    • sin²θ + cos²θ = 1<br>
                    • 1 + tan²θ = sec²θ<br>
                    • 1 + cot²θ = csc²θ<br><br>
                    <strong>Reciprocal Identities:</strong><br>
                    • cscθ = 1/sinθ<br>
                    • secθ = 1/cosθ<br>
                    • cotθ = 1/tanθ<br><br>
                    <strong>Quotient Identities:</strong><br>
                    • tanθ = sinθ/cosθ<br>
                    • cotθ = cosθ/sinθ
                </div>
            `
        },
        {
            title: '6.2 Sum and Difference Formulas',
            content: `
                <div class="formula-box">
                    <strong>Sum Formulas:</strong><br>
                    • sin(A + B) = sinA·cosB + cosA·sinB<br>
                    • cos(A + B) = cosA·cosB - sinA·sinB<br>
                    • tan(A + B) = (tanA + tanB)/(1 - tanA·tanB)<br><br>
                    <strong>Difference Formulas:</strong><br>
                    • sin(A - B) = sinA·cosB - cosA·sinB<br>
                    • cos(A - B) = cosA·cosB + sinA·sinB<br>
                    • tan(A - B) = (tanA - tanB)/(1 + tanA·tanB)
                </div>
            `
        },
        {
            title: '6.3 Double Angle Formulas',
            content: `
                <div class="formula-box">
                    <strong>Double Angle Formulas:</strong><br>
                    • sin(2θ) = 2sinθ·cosθ<br><br>
                    • cos(2θ) = cos²θ - sin²θ<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 2cos²θ - 1<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 1 - 2sin²θ<br><br>
                    • tan(2θ) = 2tanθ/(1 - tan²θ)
                </div>
                <div class="example">
                    <h4>Example: Find sin(2θ) if sinθ = 3/5 and θ is in Q1</h4>
                    <div class="solution">
                        First find cosθ = 4/5 (using Pythagorean identity)<br>
                        sin(2θ) = 2(3/5)(4/5) = 24/25
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
                    3. Find ALL solutions in [0, 2π)<br>
                    4. Add 2πn for general solution<br><br>
                    <strong>Common Values:</strong><br>
                    • sinθ = 0 → θ = 0, π<br>
                    • cosθ = 0 → θ = π/2, 3π/2<br>
                    • sinθ = 1/2 → θ = π/6, 5π/6<br>
                    • cosθ = 1/2 → θ = π/3, 5π/3
                </div>
            `
        }
    ],

    exercises: [
        {
            id: 'u6-1',
            unit: 6,
            question: 'Simplify: sin²θ + cos²θ + tan²θ',
            answer: 'sec²θ',
            hint: 'Use sin²θ + cos²θ = 1, then recall another Pythagorean identity.',
            solution: `<strong>Step 1: Apply Pythagorean identity</strong><br>
                sin²θ + cos²θ = 1<br><br>
                <strong>Step 2: Substitute</strong><br>
                1 + tan²θ<br><br>
                <strong>Step 3: Use second Pythagorean identity</strong><br>
                1 + tan²θ = <strong>sec²θ</strong>`,
            hard: false
        },
        {
            id: 'u6-2',
            unit: 6,
            question: 'Find the exact value of sin(75°).',
            answer: '(√6+√2)/4',
            hint: '75° = 45° + 30°. Use the sum formula for sine.',
            solution: `<strong>Step 1: Rewrite angle</strong><br>
                75° = 45° + 30°<br><br>
                <strong>Step 2: Apply sum formula</strong><br>
                sin(75°) = sin(45°)cos(30°) + cos(45°)sin(30°)<br><br>
                <strong>Step 3: Substitute values</strong><br>
                = (√2/2)(√3/2) + (√2/2)(1/2)<br>
                = √6/4 + √2/4<br>
                = <strong>(√6 + √2)/4</strong>`,
            hard: true
        },
        {
            id: 'u6-3',
            unit: 6,
            question: 'Find the exact value of cos(15°).',
            answer: '(√6+√2)/4',
            hint: '15° = 45° - 30°. Use the difference formula for cosine.',
            solution: `<strong>Step 1: Rewrite angle</strong><br>
                15° = 45° - 30°<br><br>
                <strong>Step 2: Apply difference formula</strong><br>
                cos(15°) = cos(45°)cos(30°) + sin(45°)sin(30°)<br><br>
                <strong>Step 3: Substitute values</strong><br>
                = (√2/2)(√3/2) + (√2/2)(1/2)<br>
                = √6/4 + √2/4<br>
                = <strong>(√6 + √2)/4</strong>`,
            hard: true
        },
        {
            id: 'u6-4',
            unit: 6,
            question: 'If sinθ = 4/5 and θ is in Q1, find sin(2θ).',
            answer: '24/25',
            hint: 'First find cosθ using Pythagorean identity, then use sin(2θ) = 2sinθcosθ.',
            solution: `<strong>Step 1: Find cosθ</strong><br>
                sin²θ + cos²θ = 1<br>
                (4/5)² + cos²θ = 1<br>
                cos²θ = 1 - 16/25 = 9/25<br>
                cosθ = 3/5 (positive in Q1)<br><br>
                <strong>Step 2: Apply double angle formula</strong><br>
                sin(2θ) = 2sinθ·cosθ<br>
                = 2(4/5)(3/5)<br>
                = <strong>24/25</strong>`,
            hard: false
        },
        {
            id: 'u6-5',
            unit: 6,
            question: 'Solve for θ in [0, 2π): 2sinθ - 1 = 0',
            answer: 'π/6,5π/6',
            hint: 'Isolate sinθ, then find all angles where sinθ = 1/2.',
            solution: `<strong>Step 1: Isolate sinθ</strong><br>
                2sinθ = 1<br>
                sinθ = 1/2<br><br>
                <strong>Step 2: Find reference angle</strong><br>
                sin⁻¹(1/2) = π/6<br><br>
                <strong>Step 3: Find all solutions in [0, 2π)</strong><br>
                Sin is positive in Q1 and Q2<br>
                Q1: θ = π/6<br>
                Q2: θ = π - π/6 = 5π/6<br><br>
                <strong>θ = π/6, 5π/6</strong>`,
            hard: false
        },
        {
            id: 'u6-6',
            unit: 6,
            question: 'Solve for θ in [0, 2π): 2cos²θ - cosθ - 1 = 0',
            answer: '0,2π/3,4π/3',
            hint: 'Let u = cosθ and solve as quadratic. Then find all angles.',
            solution: `<strong>Step 1: Let u = cosθ</strong><br>
                2u² - u - 1 = 0<br>
                (2u + 1)(u - 1) = 0<br>
                u = -1/2 or u = 1<br><br>
                <strong>Step 2: Solve cosθ = 1</strong><br>
                θ = 0<br><br>
                <strong>Step 3: Solve cosθ = -1/2</strong><br>
                Cos is negative in Q2 and Q3<br>
                Q2: θ = 2π/3<br>
                Q3: θ = 4π/3<br><br>
                <strong>θ = 0, 2π/3, 4π/3</strong>`,
            hard: true
        }
    ],

    generators: [
        // Type 1: Simplify using Pythagorean identities
        function() {
            const problems = [
                {expr: 'sin²θ + cos²θ', answer: '1'},
                {expr: '1 + tan²θ', answer: 'sec²θ'},
                {expr: '1 + cot²θ', answer: 'csc²θ'},
                {expr: 'sec²θ - tan²θ', answer: '1'},
                {expr: 'csc²θ - cot²θ', answer: '1'},
                {expr: 'sec²θ - 1', answer: 'tan²θ'},
                {expr: 'csc²θ - 1', answer: 'cot²θ'}
            ];

            const prob = randChoice(problems);

            return {
                unit: 6,
                question: `Simplify: ${prob.expr}`,
                answer: prob.answer,
                hint: `Use the Pythagorean identities: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = csc²θ.`,
                solution: `<strong>Using Pythagorean Identities:</strong><br>
                    ${prob.expr} = <strong>${prob.answer}</strong>`,
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

            let answer, formula, step3;
            if (func === 'sin') {
                if (angle.op === '+') {
                    formula = `sin(${angle.a}°)cos(${angle.b}°) + cos(${angle.a}°)sin(${angle.b}°)`;
                } else {
                    formula = `sin(${angle.a}°)cos(${angle.b}°) - cos(${angle.a}°)sin(${angle.b}°)`;
                }
            } else {
                if (angle.op === '+') {
                    formula = `cos(${angle.a}°)cos(${angle.b}°) - sin(${angle.a}°)sin(${angle.b}°)`;
                } else {
                    formula = `cos(${angle.a}°)cos(${angle.b}°) + sin(${angle.a}°)sin(${angle.b}°)`;
                }
            }

            // Pre-computed answers for common angles
            if (angle.deg === 75 && func === 'sin') answer = '(√6+√2)/4';
            else if (angle.deg === 75 && func === 'cos') answer = '(√6-√2)/4';
            else if (angle.deg === 15 && func === 'sin') answer = '(√6-√2)/4';
            else if (angle.deg === 15 && func === 'cos') answer = '(√6+√2)/4';
            else if (angle.deg === 105 && func === 'sin') answer = '(√6+√2)/4';
            else if (angle.deg === 105 && func === 'cos') answer = '(√2-√6)/4';
            else answer = '(√6+√2)/4'; // Default fallback

            return {
                unit: 6,
                question: `Find the exact value of ${func}(${angle.deg}°).`,
                answer: answer,
                hint: `${angle.deg}° = ${angle.a}° ${angle.op} ${angle.b}°. Use the ${angle.op === '+' ? 'sum' : 'difference'} formula for ${func}.`,
                solution: `<strong>Step 1: Rewrite angle</strong><br>
                    ${angle.deg}° = ${angle.a}° ${angle.op} ${angle.b}°<br><br>
                    <strong>Step 2: Apply ${angle.op === '+' ? 'sum' : 'difference'} formula</strong><br>
                    ${func}(${angle.deg}°) = ${formula}<br><br>
                    <strong>Step 3: Substitute and simplify</strong><br>
                    = <strong>${answer}</strong>`,
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
                answer = `${sign}${val}/${hyp*hyp}`;
                formula = `2sinθ·cosθ = 2(${sinSign}${sinVal}/${hyp})(${cosSign}${cosVal}/${hyp})`;
            } else {
                // cos(2θ) = cos²θ - sin²θ
                const val = cosVal*cosVal - sinVal*sinVal;
                const sign = val >= 0 ? '' : '-';
                answer = `${Math.abs(val)}/${hyp*hyp}`;
                if (val < 0) answer = `-${-val}/${hyp*hyp}`;
                formula = `cos²θ - sin²θ = (${cosVal}/${hyp})² - (${sinVal}/${hyp})²`;
            }

            return {
                unit: 6,
                question: `If sinθ = ${sinSign}${sinVal}/${hyp} and θ is in Q${quad}, find ${findDouble}(2θ).`,
                answer: answer,
                hint: `First find cosθ using Pythagorean identity, then use the double angle formula for ${findDouble}.`,
                solution: `<strong>Step 1: Find cosθ</strong><br>
                    sin²θ + cos²θ = 1<br>
                    (${sinVal}/${hyp})² + cos²θ = 1<br>
                    cos²θ = ${cosVal*cosVal}/${hyp*hyp}<br>
                    cosθ = ${cosSign}${cosVal}/${hyp} (in Q${quad})<br><br>
                    <strong>Step 2: Apply double angle formula</strong><br>
                    ${findDouble}(2θ) = ${formula}<br>
                    = <strong>${answer}</strong>`,
                hard: false
            };
        },
        // Type 4: Solve simple trig equation
        function() {
            const equations = [
                {func: 'sin', val: '1/2', solutions: 'π/6,5π/6'},
                {func: 'sin', val: '√2/2', solutions: 'π/4,3π/4'},
                {func: 'sin', val: '√3/2', solutions: 'π/3,2π/3'},
                {func: 'cos', val: '1/2', solutions: 'π/3,5π/3'},
                {func: 'cos', val: '√2/2', solutions: 'π/4,7π/4'},
                {func: 'cos', val: '√3/2', solutions: 'π/6,11π/6'},
                {func: 'sin', val: '-1/2', solutions: '7π/6,11π/6'},
                {func: 'cos', val: '-1/2', solutions: '2π/3,4π/3'}
            ];

            const eq = randChoice(equations);
            const coeff = randChoice([2, 1]);

            let question, step1;
            if (coeff === 2) {
                question = `Solve for θ in [0, 2π): 2${eq.func}θ ${eq.val.startsWith('-') ? '+' : '-'} ${eq.val.startsWith('-') ? eq.val.substring(1) : eq.val.replace('/', '')} = 0`;
                question = `Solve for θ in [0, 2π): 2${eq.func}θ = ${eq.val.startsWith('-') ? eq.val : eq.val}`;
                step1 = `2${eq.func}θ = ${eq.val === '1/2' ? '1' : eq.val === '√2/2' ? '√2' : eq.val === '√3/2' ? '√3' : eq.val}<br>${eq.func}θ = ${eq.val}`;
            } else {
                question = `Solve for θ in [0, 2π): ${eq.func}θ = ${eq.val}`;
                step1 = `${eq.func}θ = ${eq.val}`;
            }

            const quads = eq.func === 'sin'
                ? (eq.val.startsWith('-') ? 'Q3 and Q4' : 'Q1 and Q2')
                : (eq.val.startsWith('-') ? 'Q2 and Q3' : 'Q1 and Q4');

            return {
                unit: 6,
                question: `Solve for θ in [0, 2π): ${eq.func}θ = ${eq.val}`,
                answer: eq.solutions,
                hint: `Find the reference angle, then determine in which quadrants ${eq.func} has this value.`,
                solution: `<strong>Step 1: Identify the value</strong><br>
                    ${eq.func}θ = ${eq.val}<br><br>
                    <strong>Step 2: Find reference angle</strong><br>
                    Reference angle where ${eq.func} = |${eq.val}|<br><br>
                    <strong>Step 3: Find all solutions</strong><br>
                    ${eq.func} has this value in ${quads}<br><br>
                    <strong>θ = ${eq.solutions}</strong>`,
                hard: false
            };
        },
        // Type 5: Solve quadratic trig equation
        function() {
            // 2cos²θ - cosθ - 1 = 0 factors as (2cosθ + 1)(cosθ - 1) = 0
            const equations = [
                {
                    expr: '2cos²θ - cosθ - 1 = 0',
                    factored: '(2cosθ + 1)(cosθ - 1) = 0',
                    vals: ['cosθ = -1/2', 'cosθ = 1'],
                    solutions: '0,2π/3,4π/3'
                },
                {
                    expr: '2sin²θ - sinθ = 0',
                    factored: 'sinθ(2sinθ - 1) = 0',
                    vals: ['sinθ = 0', 'sinθ = 1/2'],
                    solutions: '0,π/6,5π/6,π'
                },
                {
                    expr: '2cos²θ + cosθ - 1 = 0',
                    factored: '(2cosθ - 1)(cosθ + 1) = 0',
                    vals: ['cosθ = 1/2', 'cosθ = -1'],
                    solutions: 'π/3,π,5π/3'
                },
                {
                    expr: '2sin²θ + sinθ - 1 = 0',
                    factored: '(2sinθ - 1)(sinθ + 1) = 0',
                    vals: ['sinθ = 1/2', 'sinθ = -1'],
                    solutions: 'π/6,5π/6,3π/2'
                }
            ];

            const eq = randChoice(equations);

            return {
                unit: 6,
                question: `Solve for θ in [0, 2π): ${eq.expr}`,
                answer: eq.solutions,
                hint: `Factor as a quadratic (let u = sinθ or cosθ), then solve each factor.`,
                solution: `<strong>Step 1: Factor</strong><br>
                    ${eq.expr}<br>
                    ${eq.factored}<br><br>
                    <strong>Step 2: Solve each factor</strong><br>
                    ${eq.vals[0]}<br>
                    ${eq.vals[1]}<br><br>
                    <strong>Step 3: Find all angles in [0, 2π)</strong><br>
                    <strong>θ = ${eq.solutions}</strong>`,
                hard: true
            };
        },
        // Type 6: Verify identity
        function() {
            const identities = [
                {
                    left: 'tanθ·cosθ',
                    right: 'sinθ',
                    steps: 'tanθ·cosθ = (sinθ/cosθ)·cosθ = sinθ'
                },
                {
                    left: 'cotθ·sinθ',
                    right: 'cosθ',
                    steps: 'cotθ·sinθ = (cosθ/sinθ)·sinθ = cosθ'
                },
                {
                    left: 'sinθ·secθ',
                    right: 'tanθ',
                    steps: 'sinθ·secθ = sinθ·(1/cosθ) = sinθ/cosθ = tanθ'
                },
                {
                    left: 'cosθ·cscθ',
                    right: 'cotθ',
                    steps: 'cosθ·cscθ = cosθ·(1/sinθ) = cosθ/sinθ = cotθ'
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
                    <strong>${id.left} = ${id.right}</strong>`,
                hard: false
            };
        }
    ]
};

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('im3', unit6);
}
