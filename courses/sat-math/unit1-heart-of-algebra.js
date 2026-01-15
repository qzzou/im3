// SAT Math Unit 1: Heart of Algebra
// Linear equations, inequalities, and systems

const satUnit1 = {
    id: 1,
    name: 'Unit 1',
    title: 'Heart of Algebra',

    lessons: [
        {
            title: '1.1 Linear Equations in One Variable',
            content: `
                <p>The SAT frequently tests your ability to solve linear equations. Key strategies:</p>
                <ul>
                    <li><strong>Isolate the variable:</strong> Get all terms with x on one side</li>
                    <li><strong>Combine like terms:</strong> Simplify before solving</li>
                    <li><strong>Check for special cases:</strong> No solution (0 = 5) or infinite solutions (0 = 0)</li>
                </ul>
                <div class="formula-box">
                    <strong>Standard Form:</strong> ax + b = c<br>
                    <strong>Solution:</strong> x = (c - b) / a
                </div>
                <div class="example">
                    <h4>SAT Example:</h4>
                    <p>If 3(x - 4) = 2x + 5, what is the value of x?</p>
                    <div class="solution">
                        3x - 12 = 2x + 5<br>
                        x = 17
                    </div>
                </div>
            `
        },
        {
            title: '1.2 Linear Equations in Two Variables',
            content: `
                <p><strong>Slope-Intercept Form:</strong> y = mx + b</p>
                <ul>
                    <li>m = slope (rise/run)</li>
                    <li>b = y-intercept</li>
                </ul>
                <div class="formula-box">
                    <strong>Slope Formula:</strong> m = (y₂ - y₁) / (x₂ - x₁)<br><br>
                    <strong>Point-Slope Form:</strong> y - y₁ = m(x - x₁)<br><br>
                    <strong>Standard Form:</strong> Ax + By = C
                </div>
                <p><strong>SAT Tip:</strong> Parallel lines have equal slopes. Perpendicular lines have slopes that are negative reciprocals.</p>
            `
        },
        {
            title: '1.3 Systems of Linear Equations',
            content: `
                <p>SAT systems problems can be solved by:</p>
                <ul>
                    <li><strong>Substitution:</strong> Solve one equation for a variable, plug into the other</li>
                    <li><strong>Elimination:</strong> Add/subtract equations to eliminate a variable</li>
                    <li><strong>Graphing:</strong> The solution is the intersection point</li>
                </ul>
                <div class="formula-box">
                    <strong>Number of Solutions:</strong><br>
                    • Different slopes → One solution (lines intersect)<br>
                    • Same slope, different y-int → No solution (parallel)<br>
                    • Same slope, same y-int → Infinite solutions (same line)
                </div>
            `
        },
        {
            title: '1.4 Linear Inequalities',
            content: `
                <p>Solving inequalities is like solving equations, but:</p>
                <div class="formula-box">
                    <strong>Key Rule:</strong> When you multiply or divide by a negative number, FLIP the inequality sign!
                </div>
                <div class="example">
                    <h4>SAT Example:</h4>
                    <p>Solve: -2x + 5 > 11</p>
                    <div class="solution">
                        -2x > 6<br>
                        x < -3 (flip the sign!)
                    </div>
                </div>
                <p><strong>Compound Inequalities:</strong> -3 < 2x + 1 ≤ 7 means solve both parts simultaneously.</p>
            `
        }
    ],

    exercises: [
        {
            id: 'sat1-1',
            unit: 1,
            question: 'If 4(x - 3) + 2 = 3x + 5, what is the value of x?',
            answer: 'C',
            options: ['A) 7', 'B) 11', 'C) 15', 'D) 19'],
            hint: 'Distribute the 4, combine like terms, then isolate x.',
            solution: `<strong>Step 1: Distribute</strong><br>
                4x - 12 + 2 = 3x + 5<br>
                4x - 10 = 3x + 5<br><br>
                <strong>Step 2: Isolate x</strong><br>
                4x - 3x = 5 + 10<br>
                x = <strong>15</strong>`,
            hard: false
        },
        {
            id: 'sat1-2',
            unit: 1,
            question: 'A line passes through points (2, 5) and (4, 11). What is the slope of this line?',
            answer: 'B',
            options: ['A) 2', 'B) 3', 'C) 4', 'D) 6'],
            hint: 'Use the slope formula: m = (y₂ - y₁) / (x₂ - x₁)',
            solution: `<strong>Slope Formula:</strong><br>
                m = (y₂ - y₁) / (x₂ - x₁)<br>
                m = (11 - 5) / (4 - 2)<br>
                m = 6 / 2<br>
                m = <strong>3</strong>`,
            hard: false
        },
        {
            id: 'sat1-3',
            unit: 1,
            question: 'If 2x + 3y = 12 and x - y = 1, what is the value of x + y?',
            answer: 'C',
            options: ['A) 3', 'B) 4', 'C) 5', 'D) 6'],
            hint: 'Use elimination or substitution to find x and y, then add them.',
            solution: `<strong>Method: Elimination</strong><br>
                From x - y = 1: x = y + 1<br><br>
                <strong>Substitute into first equation:</strong><br>
                2(y + 1) + 3y = 12<br>
                2y + 2 + 3y = 12<br>
                5y = 10<br>
                y = 2<br><br>
                <strong>Find x:</strong> x = 2 + 1 = 3<br><br>
                <strong>Answer:</strong> x + y = 3 + 2 = <strong>5</strong>`,
            hard: false
        },
        {
            id: 'sat1-4',
            unit: 1,
            question: 'What is the y-intercept of the line 3x - 2y = 8?',
            answer: 'A',
            options: ['A) -4', 'B) -2', 'C) 2', 'D) 4'],
            hint: 'Rewrite in slope-intercept form (y = mx + b) and identify b.',
            solution: `<strong>Convert to slope-intercept form:</strong><br>
                3x - 2y = 8<br>
                -2y = -3x + 8<br>
                y = (3/2)x - 4<br><br>
                <strong>The y-intercept is b = -4</strong>`,
            hard: false
        },
        {
            id: 'sat1-5',
            unit: 1,
            question: 'For what value of k will the system have no solution?<br>2x + 3y = 7<br>4x + ky = 10',
            answer: 'C',
            options: ['A) 3', 'B) 4', 'C) 6', 'D) 8'],
            hint: 'For no solution, the lines must be parallel (same slope, different y-intercept).',
            solution: `<strong>For no solution, lines must be parallel (same slope).</strong><br><br>
                <strong>Rewrite first equation:</strong><br>
                y = (-2/3)x + 7/3 → slope = -2/3<br><br>
                <strong>Rewrite second equation:</strong><br>
                y = (-4/k)x + 10/k → slope = -4/k<br><br>
                <strong>Set slopes equal:</strong><br>
                -2/3 = -4/k<br>
                -2k = -12<br>
                k = <strong>6</strong><br><br>
                <strong>Verify y-intercepts differ:</strong> 7/3 ≠ 10/6 ✓`,
            hard: true
        },
        {
            id: 'sat1-6',
            unit: 1,
            question: 'If -3x + 7 ≥ 22, which of the following represents all possible values of x?',
            answer: 'A',
            options: ['A) x ≤ -5', 'B) x ≥ -5', 'C) x ≤ 5', 'D) x ≥ 5'],
            hint: 'Solve like an equation, but remember to flip the sign when dividing by a negative.',
            solution: `<strong>Step 1: Isolate the x term</strong><br>
                -3x + 7 ≥ 22<br>
                -3x ≥ 15<br><br>
                <strong>Step 2: Divide by -3 (FLIP the inequality!)</strong><br>
                x ≤ -5<br><br>
                <strong>Answer: x ≤ -5</strong>`,
            hard: true
        }
    ],

    generators: [
        // Type 1: Linear equation solving (MC)
        function() {
            const a = randInt(2, 5);
            const b = randInt(1, 10);
            const c = randInt(1, 5);
            const d = randInt(1, 15);

            const answer = (d + a * b) / (a - c);

            if (!Number.isInteger(answer) || a === c || answer < 1 || answer > 30) {
                return satUnit1.generators[0]();
            }

            // Generate plausible wrong answers
            const wrongAnswers = [answer - 3, answer + 2, answer - 5].filter(w => w > 0 && w !== answer);
            while (wrongAnswers.length < 3) {
                const wrong = answer + randInt(-8, 8);
                if (wrong > 0 && wrong !== answer && !wrongAnswers.includes(wrong)) {
                    wrongAnswers.push(wrong);
                }
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 1,
                question: `If ${a}(x - ${b}) = ${c}x + ${d}, what is the value of x?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: `Distribute ${a}, then collect x terms on one side.`,
                solution: `<strong>Step 1: Distribute</strong><br>
                    ${a}x - ${a * b} = ${c}x + ${d}<br><br>
                    <strong>Step 2: Collect x terms</strong><br>
                    ${a}x - ${c}x = ${d} + ${a * b}<br>
                    ${a - c}x = ${d + a * b}<br><br>
                    <strong>Step 3: Solve</strong><br>
                    x = ${d + a * b} / ${a - c} = <strong>${answer}</strong>`,
                hard: false
            };
        },
        // Type 2: Slope calculation (MC)
        function() {
            const x1 = randInt(-5, 5);
            const y1 = randInt(-5, 5);
            const m = randInt(-4, 4);
            if (m === 0) return satUnit1.generators[1]();

            const dx = randInt(1, 4);
            const x2 = x1 + dx;
            const y2 = y1 + m * dx;

            const wrongAnswers = [m + 1, m - 1, -m].filter(w => w !== m);
            while (wrongAnswers.length < 3) {
                const wrong = randInt(-5, 5);
                if (wrong !== m && wrong !== 0 && !wrongAnswers.includes(wrong)) {
                    wrongAnswers.push(wrong);
                }
            }

            const allAnswers = [m, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(m);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 1,
                question: `A line passes through points (${x1}, ${y1}) and (${x2}, ${y2}). What is the slope of this line?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: 'Use the slope formula: m = (y₂ - y₁) / (x₂ - x₁)',
                solution: `<strong>Slope Formula:</strong><br>
                    m = (y₂ - y₁) / (x₂ - x₁)<br>
                    m = (${y2} - ${y1}) / (${x2} - ${x1})<br>
                    m = ${y2 - y1} / ${x2 - x1}<br>
                    m = <strong>${m}</strong>`,
                hard: false
            };
        },
        // Type 3: System of equations (MC) - Medium difficulty
        function() {
            const x = randInt(1, 6);
            const y = randInt(1, 6);
            const a1 = randInt(1, 3);
            const b1 = randInt(1, 3);
            const a2 = randInt(1, 3);
            const b2 = randInt(-3, -1);

            const c1 = a1 * x + b1 * y;
            const c2 = a2 * x + b2 * y;

            const wrongAnswers = [x + 1, x - 1, y].filter(w => w > 0 && w !== x);
            while (wrongAnswers.length < 3) {
                const wrong = randInt(1, 8);
                if (wrong !== x && !wrongAnswers.includes(wrong)) {
                    wrongAnswers.push(wrong);
                }
            }

            const allAnswers = [x, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(x);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 1,
                question: `If ${a1}x + ${b1}y = ${c1} and ${a2}x ${b2 >= 0 ? '+' : '-'} ${Math.abs(b2)}y = ${c2}, what is the value of x?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: 'Use elimination: multiply equations to make coefficients match, then add/subtract.',
                solution: `<strong>System:</strong><br>
                    ${a1}x + ${b1}y = ${c1}<br>
                    ${a2}x ${b2 >= 0 ? '+' : '-'} ${Math.abs(b2)}y = ${c2}<br><br>
                    <strong>Using elimination or substitution:</strong><br>
                    x = <strong>${x}</strong>, y = ${y}`,
                hard: true
            };
        },
        // Type 4: Y-intercept from standard form (MC)
        function() {
            const a = randInt(2, 6);
            const b = randInt(2, 6) * (Math.random() > 0.5 ? 1 : -1);
            const c = randInt(2, 20) * (Math.random() > 0.5 ? 1 : -1);

            const yInt = c / b;
            if (!Number.isInteger(yInt)) return satUnit1.generators[3]();

            const bSign = b >= 0 ? '+' : '-';

            const wrongAnswers = [-yInt, yInt + 2, yInt - 2].filter(w => w !== yInt);
            while (wrongAnswers.length < 3) {
                const wrong = randInt(-10, 10);
                if (wrong !== yInt && !wrongAnswers.includes(wrong)) {
                    wrongAnswers.push(wrong);
                }
            }

            const allAnswers = [yInt, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(yInt);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 1,
                question: `What is the y-intercept of the line ${a}x ${bSign} ${Math.abs(b)}y = ${c}?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: 'Convert to slope-intercept form (y = mx + b) by solving for y.',
                solution: `<strong>Solve for y:</strong><br>
                    ${a}x ${bSign} ${Math.abs(b)}y = ${c}<br>
                    ${Math.abs(b)}y = ${b > 0 ? '-' : ''}${a}x + ${c}<br>
                    y = ${-a/b}x + ${c/b}<br><br>
                    <strong>Y-intercept = ${yInt}</strong>`,
                hard: false
            };
        },
        // Type 5: Inequality solving (MC) - Hard
        function() {
            const a = randInt(-5, -2);
            const b = randInt(1, 10);
            const c = randInt(10, 30);

            const solution = (c - b) / a;
            if (!Number.isInteger(solution)) return satUnit1.generators[4]();

            const options = [
                `A) x ≤ ${solution}`,
                `B) x ≥ ${solution}`,
                `C) x ≤ ${-solution}`,
                `D) x ≥ ${-solution}`
            ];

            return {
                unit: 1,
                question: `If ${a}x + ${b} ≥ ${c}, which represents all possible values of x?`,
                answer: 'A',
                options: options,
                hint: 'Remember to flip the inequality sign when dividing by a negative number!',
                solution: `<strong>Step 1: Subtract ${b}</strong><br>
                    ${a}x ≥ ${c - b}<br><br>
                    <strong>Step 2: Divide by ${a} (FLIP the sign!)</strong><br>
                    x ≤ ${solution}<br><br>
                    <strong>Answer: x ≤ ${solution}</strong>`,
                hard: true
            };
        },
        // Type 6: Word problem - linear equation (MC)
        function() {
            const rate = randInt(2, 5);
            const initial = randInt(10, 50);
            const numGB = randInt(5, 15);
            const target = initial + rate * numGB;
            const answer = numGB;

            const wrongAnswers = [answer + 2, answer - 2, answer + 5].filter(w => w > 0 && w !== answer);
            while (wrongAnswers.length < 3) {
                const wrong = randInt(3, 20);
                if (wrong !== answer && !wrongAnswers.includes(wrong)) {
                    wrongAnswers.push(wrong);
                }
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 1,
                question: `A phone plan costs $${initial} per month plus $${rate} per gigabyte of data. If a customer's bill was $${target}, how many gigabytes of data did they use?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: 'Set up equation: Initial cost + (rate × gigabytes) = total',
                solution: `<strong>Set up the equation:</strong><br>
                    Total = Initial + Rate × GB<br>
                    ${target} = ${initial} + ${rate}g<br><br>
                    <strong>Solve for g:</strong><br>
                    ${target} - ${initial} = ${rate}g<br>
                    ${target - initial} = ${rate}g<br>
                    g = ${answer}<br><br>
                    <strong>Answer: ${answer} gigabytes</strong>`,
                hard: false
            };
        },
        // Type 7: Parallel/Perpendicular lines (Hard)
        function() {
            const m1 = randInt(1, 4);
            const b1 = randInt(-5, 5);
            const isParallel = Math.random() > 0.5;

            const m2 = isParallel ? m1 : -1;  // For perpendicular, need negative reciprocal
            const correctSlope = isParallel ? m1 : `-1/${m1}`;

            const options = isParallel ?
                [`A) ${m1}`, `B) ${-m1}`, `C) 1/${m1}`, `D) -1/${m1}`] :
                [`A) ${m1}`, `B) ${-m1}`, `C) 1/${m1}`, `D) -1/${m1}`];

            return {
                unit: 1,
                question: `A line has equation y = ${m1}x + ${b1}. What is the slope of a line ${isParallel ? 'parallel' : 'perpendicular'} to this line?`,
                answer: isParallel ? 'A' : 'D',
                options: options,
                hint: isParallel ? 'Parallel lines have equal slopes.' : 'Perpendicular lines have slopes that are negative reciprocals.',
                solution: `<strong>Original line slope:</strong> m = ${m1}<br><br>
                    <strong>${isParallel ? 'Parallel' : 'Perpendicular'} line slope:</strong><br>
                    ${isParallel ? `Same slope = <strong>${m1}</strong>` : `Negative reciprocal = <strong>-1/${m1}</strong>`}`,
                hard: true
            };
        },
        // Type 8: SAT-style word problem with context (Medium-Hard)
        function() {
            const contexts = [
                { item: 'coffee drinks', rate: randInt(4, 7), unit: 'drink' },
                { item: 'parking hours', rate: randInt(2, 5), unit: 'hour' },
                { item: 'streaming movies', rate: randInt(3, 6), unit: 'movie' }
            ];
            const ctx = randChoice(contexts);
            const quantity = randInt(3, 8);
            const tip = randInt(2, 5);
            const total = ctx.rate * quantity + tip;

            const wrongAnswers = [quantity + 1, quantity - 1, quantity + 2].filter(w => w > 0);
            const allAnswers = [quantity, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(quantity);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 1,
                question: `At a café, each ${ctx.unit} costs $${ctx.rate}. If a customer paid $${total} including a $${tip} tip, how many ${ctx.item} did they order?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: 'Subtract the tip first, then divide by the price per item.',
                solution: `<strong>Total without tip:</strong> $${total} - $${tip} = $${total - tip}<br><br>
                    <strong>Number of items:</strong> $${total - tip} ÷ $${ctx.rate} = <strong>${quantity}</strong>`,
                hard: false
            };
        }
    ]
};

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('sat-math', satUnit1);
}
