// SAT Math Unit 3: Passport to Advanced Math
// Quadratics, polynomials, and function notation

const satUnit3 = {
    id: 3,
    name: 'Unit 3',
    title: 'Passport to Advanced Math',

    lessons: [
        {
            title: '3.1 Quadratic Equations',
            content: `
                <p>Quadratics are one of the most tested topics on the SAT!</p>
                <div class="formula-box">
                    <strong>Standard Form:</strong> ax² + bx + c = 0<br><br>
                    <strong>Quadratic Formula:</strong> x = (-b ± √(b² - 4ac)) / 2a<br><br>
                    <strong>Factored Form:</strong> a(x - r₁)(x - r₂) = 0<br>
                    where r₁ and r₂ are the roots
                </div>
                <p><strong>Methods to Solve:</strong></p>
                <ul>
                    <li>Factoring (fastest when possible)</li>
                    <li>Quadratic formula (always works)</li>
                    <li>Completing the square</li>
                </ul>
            `
        },
        {
            title: '3.2 The Discriminant',
            content: `
                <p>The discriminant tells you how many solutions a quadratic has:</p>
                <div class="formula-box">
                    <strong>Discriminant:</strong> D = b² - 4ac<br><br>
                    • D > 0 → Two distinct real solutions<br>
                    • D = 0 → One repeated real solution<br>
                    • D < 0 → No real solutions (two complex)
                </div>
                <div class="example">
                    <h4>SAT Tip:</h4>
                    <p>If asked "for what value of k does the equation have exactly one solution?", set b² - 4ac = 0!</p>
                </div>
            `
        },
        {
            title: '3.3 Vertex Form & Parabolas',
            content: `
                <div class="formula-box">
                    <strong>Vertex Form:</strong> y = a(x - h)² + k<br>
                    • Vertex at (h, k)<br>
                    • a > 0: opens up (minimum at vertex)<br>
                    • a < 0: opens down (maximum at vertex)<br><br>
                    <strong>From Standard Form:</strong><br>
                    Vertex x-coordinate: x = -b/(2a)<br>
                    Then plug in to find y
                </div>
            `
        },
        {
            title: '3.4 Function Notation & Operations',
            content: `
                <p>Function notation f(x) means "the output when input is x"</p>
                <div class="formula-box">
                    <strong>Evaluating:</strong> If f(x) = 2x + 3, then f(4) = 2(4) + 3 = 11<br><br>
                    <strong>Composition:</strong> (f ∘ g)(x) = f(g(x))<br>
                    "Apply g first, then f"<br><br>
                    <strong>Inverse:</strong> f⁻¹(x) undoes f(x)<br>
                    If f(a) = b, then f⁻¹(b) = a
                </div>
            `
        }
    ],

    exercises: [
        {
            id: 'sat3-1',
            unit: 3,
            question: 'What are the solutions to x² - 5x + 6 = 0?',
            answer: 'B',
            options: ['A) x = 1 and x = 6', 'B) x = 2 and x = 3', 'C) x = -2 and x = -3', 'D) x = -1 and x = -6'],
            hint: 'Factor the quadratic: find two numbers that multiply to 6 and add to -5.',
            solution: `<strong>Factor:</strong><br>
                x² - 5x + 6 = (x - 2)(x - 3) = 0<br><br>
                <strong>Set each factor to zero:</strong><br>
                x - 2 = 0 → x = 2<br>
                x - 3 = 0 → x = 3<br><br>
                <strong>Solutions: x = 2 and x = 3</strong>`,
            hard: false
        },
        {
            id: 'sat3-2',
            unit: 3,
            question: 'What is the vertex of the parabola y = (x - 3)² - 4?',
            answer: 'C',
            options: ['A) (-3, -4)', 'B) (-3, 4)', 'C) (3, -4)', 'D) (3, 4)'],
            hint: 'In vertex form y = a(x - h)² + k, the vertex is (h, k). Watch the signs!',
            solution: `<strong>Identify vertex form:</strong><br>
                y = (x - 3)² - 4<br>
                y = a(x - h)² + k where a=1, h=3, k=-4<br><br>
                <strong>Vertex: (3, -4)</strong><br><br>
                <strong>Common trap:</strong> (x - 3) means h = +3, not -3!`,
            hard: false
        },
        {
            id: 'sat3-3',
            unit: 3,
            question: 'If f(x) = 3x - 2, what is f(f(2))?',
            answer: 'C',
            options: ['A) 4', 'B) 8', 'C) 10', 'D) 16'],
            hint: 'First find f(2), then plug that result back into f.',
            solution: `<strong>Step 1: Find f(2)</strong><br>
                f(2) = 3(2) - 2 = 6 - 2 = 4<br><br>
                <strong>Step 2: Find f(f(2)) = f(4)</strong><br>
                f(4) = 3(4) - 2 = 12 - 2 = <strong>10</strong><br><br>
                <strong>Common trap:</strong> Answer A (4) is just f(2), not f(f(2))!`,
            hard: true
        },
        {
            id: 'sat3-4',
            unit: 3,
            question: 'For what value of k will x² + 6x + k = 0 have exactly one solution?',
            answer: 'D',
            options: ['A) 0', 'B) 3', 'C) 6', 'D) 9'],
            hint: 'For exactly one solution, the discriminant must equal zero: b² - 4ac = 0.',
            solution: `<strong>For one solution, discriminant = 0:</strong><br>
                b² - 4ac = 0<br>
                6² - 4(1)(k) = 0<br>
                36 - 4k = 0<br>
                4k = 36<br>
                k = <strong>9</strong>`,
            hard: true
        },
        {
            id: 'sat3-5',
            unit: 3,
            question: 'What is the sum of the solutions to 2x² - 8x + 5 = 0?',
            answer: 'B',
            options: ['A) 2', 'B) 4', 'C) 5', 'D) 8'],
            hint: 'For ax² + bx + c = 0, sum of roots = -b/a (Vieta\'s formulas).',
            solution: `<strong>Vieta's Formula:</strong><br>
                For ax² + bx + c = 0:<br>
                Sum of roots = -b/a<br><br>
                <strong>Apply:</strong><br>
                Sum = -(-8)/2 = 8/2 = <strong>4</strong>`,
            hard: true
        },
        {
            id: 'sat3-6',
            unit: 3,
            question: 'If g(x) = x² + 1 and f(x) = 2x, what is f(g(3))?',
            answer: 'C',
            options: ['A) 10', 'B) 14', 'C) 20', 'D) 37'],
            hint: 'First calculate g(3), then plug that result into f.',
            solution: `<strong>Step 1: Find g(3)</strong><br>
                g(3) = 3² + 1 = 9 + 1 = 10<br><br>
                <strong>Step 2: Find f(g(3)) = f(10)</strong><br>
                f(10) = 2(10) = <strong>20</strong><br><br>
                <strong>Common trap:</strong> Don't confuse with g(f(3)) which would be different!`,
            hard: true
        }
    ],

    generators: [
        // Type 1: Factor and solve quadratic (MC)
        function() {
            const r1 = randInt(-6, 6);
            const r2 = randInt(-6, 6);
            if (r1 === 0 || r2 === 0 || r1 === r2) return satUnit3.generators[0]();

            const b = -(r1 + r2);
            const c = r1 * r2;

            const bSign = b >= 0 ? '+' : '-';
            const cSign = c >= 0 ? '+' : '-';

            const zeros = [r1, r2].sort((a, b) => a - b);

            // Generate wrong options - common mistakes
            const wrongOptions = [
                `x = ${-r1} and x = ${-r2}`, // Sign error
                `x = ${r1 + 1} and x = ${r2 - 1}`, // Close but wrong
                `x = ${c} and x = ${b}` // Using coefficients
            ].filter(opt => opt !== `x = ${zeros[0]} and x = ${zeros[1]}`);

            const correctOption = `x = ${zeros[0]} and x = ${zeros[1]}`;
            const options = [correctOption, ...wrongOptions.slice(0, 3)];
            // Sort to randomize position
            options.sort(() => Math.random() - 0.5);
            const correctIndex = options.indexOf(correctOption);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 3,
                question: `What are the solutions to x² ${bSign} ${Math.abs(b)}x ${cSign} ${Math.abs(c)} = 0?`,
                answer: letters[correctIndex],
                options: options.map((opt, i) => `${letters[i]}) ${opt}`),
                hint: 'Factor the quadratic by finding two numbers that multiply to c and add to -b.',
                solution: `<strong>Factor:</strong><br>
                    x² ${bSign} ${Math.abs(b)}x ${cSign} ${Math.abs(c)} = (x ${r1 >= 0 ? '-' : '+'} ${Math.abs(r1)})(x ${r2 >= 0 ? '-' : '+'} ${Math.abs(r2)}) = 0<br><br>
                    <strong>Solutions: x = ${r1} and x = ${r2}</strong>`,
                hard: false
            };
        },
        // Type 2: Vertex from vertex form (MC) - with sign trap
        function() {
            const h = randInt(-5, 5);
            const k = randInt(-8, 8);
            const a = randChoice([1, 2, -1, -2]);

            const hPart = h === 0 ? 'x' : (h > 0 ? `(x - ${h})` : `(x + ${Math.abs(h)})`);
            const kPart = k === 0 ? '' : (k > 0 ? ` + ${k}` : ` - ${Math.abs(k)}`);
            const aPart = a === 1 ? '' : (a === -1 ? '-' : a);

            // Common trap: confusing (x - h) with h being negative
            const correctAnswer = `(${h}, ${k})`;
            const wrongAnswers = [
                `(${-h}, ${k})`, // Sign trap on h
                `(${h}, ${-k})`, // Sign trap on k
                `(${-h}, ${-k})` // Both signs wrong
            ].filter(w => w !== correctAnswer);

            const options = [correctAnswer, ...wrongAnswers.slice(0, 3)];
            options.sort(() => Math.random() - 0.5);
            const correctIndex = options.indexOf(correctAnswer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 3,
                question: `What is the vertex of the parabola y = ${aPart}${hPart}²${kPart}?`,
                answer: letters[correctIndex],
                options: options.map((opt, i) => `${letters[i]}) ${opt}`),
                hint: 'In vertex form y = a(x - h)² + k, the vertex is (h, k). Watch the signs carefully!',
                solution: `<strong>Vertex Form:</strong> y = a(x - h)² + k<br><br>
                    <strong>Identify:</strong><br>
                    From ${hPart}, we get h = ${h} (note: x - h means h is positive if we see minus)<br>
                    k = ${k}<br><br>
                    <strong>Vertex: (${h}, ${k})</strong>`,
                hard: true
            };
        },
        // Type 3: Function composition f(f(x)) (MC) - with trap answer
        function() {
            const a = randInt(2, 4);
            const b = randInt(-5, 5);
            const x = randInt(1, 5);

            const first = a * x + b;
            const answer = a * first + b;

            const bSign = b >= 0 ? '+' : '-';

            // Trap: just f(x), or f(x) + f(x), etc.
            const wrongAnswers = [first, 2 * first, a * x * 2 + b].filter(w => w !== answer);
            while (wrongAnswers.length < 3) {
                const wrong = answer + randInt(-10, 10);
                if (wrong !== answer && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 3,
                question: `If f(x) = ${a}x ${bSign} ${Math.abs(b)}, what is f(f(${x}))?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: `First find f(${x}), then plug that result back into f. Don't stop at the first step!`,
                solution: `<strong>Step 1: Find f(${x})</strong><br>
                    f(${x}) = ${a}(${x}) ${bSign} ${Math.abs(b)} = ${a * x} ${bSign} ${Math.abs(b)} = ${first}<br><br>
                    <strong>Step 2: Find f(f(${x})) = f(${first})</strong><br>
                    f(${first}) = ${a}(${first}) ${bSign} ${Math.abs(b)} = ${a * first} ${bSign} ${Math.abs(b)} = <strong>${answer}</strong><br><br>
                    <strong>Trap:</strong> ${first} is just f(${x}), not f(f(${x}))!`,
                hard: true
            };
        },
        // Type 4: Discriminant = 0 for one solution (MC)
        function() {
            const a = randChoice([1, 2]);
            const bHalf = randInt(2, 6);
            const b = 2 * bHalf * (Math.random() > 0.5 ? 1 : -1);

            const answer = (b * b) / (4 * a);

            if (!Number.isInteger(answer)) return satUnit3.generators[3]();

            const bSign = b >= 0 ? '+' : '-';

            const wrongAnswers = [b, Math.abs(b), answer / 2, answer * 2].filter(w => w !== answer && w > 0 && Number.isInteger(w));
            while (wrongAnswers.length < 3) {
                const wrong = randInt(1, 30);
                if (wrong !== answer && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 3,
                question: `For what value of k will ${a === 1 ? '' : a}x² ${bSign} ${Math.abs(b)}x + k = 0 have exactly one solution?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: 'For exactly one solution, set discriminant = 0: b² - 4ac = 0.',
                solution: `<strong>For one solution, discriminant = 0:</strong><br>
                    b² - 4ac = 0<br>
                    (${b})² - 4(${a})(k) = 0<br>
                    ${b * b} - ${4 * a}k = 0<br>
                    k = <strong>${answer}</strong>`,
                hard: true
            };
        },
        // Type 5: Sum/product of roots (MC)
        function() {
            const a = randChoice([1, 2, 3]);
            const b = randInt(-12, 12);
            const c = randInt(-10, 10);
            if (b === 0) return satUnit3.generators[4]();

            const sum = -b / a;
            const product = c / a;

            const askSum = Math.random() > 0.5;
            const answer = askSum ? sum : product;

            if (!Number.isInteger(answer)) return satUnit3.generators[4]();

            const bSign = b >= 0 ? '+' : '-';
            const cSign = c >= 0 ? '+' : '-';

            // Traps: using wrong formula, forgetting negative
            const wrongAnswers = [askSum ? product : sum, b/a, -c/a].filter(w => w !== answer && Number.isInteger(w));
            while (wrongAnswers.length < 3) {
                const wrong = answer + randInt(-5, 5);
                if (wrong !== answer && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 3,
                question: `What is the ${askSum ? 'sum' : 'product'} of the solutions to ${a === 1 ? '' : a}x² ${bSign} ${Math.abs(b)}x ${cSign} ${Math.abs(c)} = 0?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: `Vieta's formulas: sum = -b/a, product = c/a. Don't forget the negative sign for sum!`,
                solution: `<strong>Vieta's Formulas for ax² + bx + c = 0:</strong><br>
                    Sum of roots = -b/a = -(${b})/${a} = ${-b/a}<br>
                    Product of roots = c/a = ${c}/${a} = ${c/a}<br><br>
                    <strong>${askSum ? 'Sum' : 'Product'} = ${answer}</strong>`,
                hard: true
            };
        },
        // Type 6: Composition f(g(x)) vs g(f(x)) (MC) - order matters!
        function() {
            const x = randInt(1, 5);
            const a = randInt(2, 4);
            const b = randInt(1, 5);

            // g(x) = x² + b, f(x) = ax
            const gResult = x * x + b;
            const fgAnswer = a * gResult; // f(g(x))

            const fResult = a * x;
            const gfAnswer = fResult * fResult + b; // g(f(x)) - the trap!

            const askFG = Math.random() > 0.5;
            const answer = askFG ? fgAnswer : gfAnswer;
            const trap = askFG ? gfAnswer : fgAnswer;

            const wrongAnswers = [trap, gResult, fResult].filter(w => w !== answer);
            while (wrongAnswers.length < 3) {
                const wrong = answer + randInt(-20, 20);
                if (wrong > 0 && wrong !== answer && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            const questionFunc = askFG ? 'f(g' : 'g(f';

            return {
                unit: 3,
                question: `If g(x) = x² + ${b} and f(x) = ${a}x, what is ${questionFunc}(${x}))?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: `${questionFunc}(${x})) means apply the INNER function first, then the outer!`,
                solution: askFG ?
                    `<strong>f(g(${x})) means: first g, then f</strong><br><br>
                    <strong>Step 1: Find g(${x})</strong><br>
                    g(${x}) = ${x}² + ${b} = ${gResult}<br><br>
                    <strong>Step 2: Find f(${gResult})</strong><br>
                    f(${gResult}) = ${a}(${gResult}) = <strong>${fgAnswer}</strong><br><br>
                    <strong>Trap:</strong> g(f(${x})) = ${gfAnswer} — different order, different answer!`
                    :
                    `<strong>g(f(${x})) means: first f, then g</strong><br><br>
                    <strong>Step 1: Find f(${x})</strong><br>
                    f(${x}) = ${a}(${x}) = ${fResult}<br><br>
                    <strong>Step 2: Find g(${fResult})</strong><br>
                    g(${fResult}) = ${fResult}² + ${b} = <strong>${gfAnswer}</strong><br><br>
                    <strong>Trap:</strong> f(g(${x})) = ${fgAnswer} — different order, different answer!`,
                hard: true
            };
        },
        // Type 7: Quadratic word problem (Hard)
        function() {
            const t = randInt(2, 5);
            const h0 = randInt(10, 50);
            const v0 = 16 * t; // Initial velocity chosen so max height is at integer time

            // h(t) = -16t² + v0*t + h0, max at t = v0/32
            const maxHeight = h0 + (v0 * v0) / 64;

            const wrongAnswers = [h0, v0, maxHeight - 10, maxHeight + 16].filter(w => w !== maxHeight && w > 0);
            while (wrongAnswers.length < 3) {
                const wrong = maxHeight + randInt(-20, 30);
                if (wrong > 0 && wrong !== maxHeight && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [maxHeight, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(maxHeight);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 3,
                question: `A ball is thrown upward from a height of ${h0} feet with an initial velocity of ${v0} feet per second. Its height h after t seconds is given by h = -16t² + ${v0}t + ${h0}. What is the maximum height the ball reaches?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val} feet`),
                hint: 'The maximum height of a parabola opening downward is at the vertex. Use t = -b/(2a) to find when, then plug back in.',
                solution: `<strong>Maximum is at vertex of parabola</strong><br><br>
                    <strong>Time at max:</strong> t = -b/(2a) = -${v0}/(2×-16) = ${v0/32} seconds<br><br>
                    <strong>Max height:</strong><br>
                    h = -16(${v0/32})² + ${v0}(${v0/32}) + ${h0}<br>
                    h = <strong>${maxHeight} feet</strong><br><br>
                    <strong>Trap:</strong> ${h0} feet is the STARTING height, not the maximum!`,
                hard: true
            };
        }
    ]
};

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('sat-math', satUnit3);
}
