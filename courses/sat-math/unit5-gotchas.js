// SAT Math Unit 5: Common Gotchas & Tricky Word Problems
// This unit focuses on problems that trick students who aren't paying close attention

const satUnit5 = {
    id: 5,
    name: 'Unit 5',
    title: 'Gotchas & Tricky Problems',

    lessons: [
        {
            title: '5.1 Reading the Question Carefully',
            content: `
                <p><strong>The #1 SAT Trap:</strong> Not answering what they actually asked!</p>
                <div class="formula-box">
                    <strong>Common Traps:</strong><br>
                    • Solving for $x$ when they ask for $2x + 1$<br>
                    • Finding the total when they ask for the tax<br>
                    • Calculating the discount instead of the sale price<br>
                    • Finding one variable when they want the sum of two
                </div>
                <div class="example">
                    <h4>Example Trap:</h4>
                    <p>"If $3x = 12$, what is $x + 5$?"</p>
                    <p>Wrong answer: 4 (that's just $x$!)</p>
                    <p>Right answer: 9 ($x + 5 = 4 + 5$)</p>
                </div>
                <p><strong>Strategy:</strong> Circle or underline exactly what the question asks for BEFORE solving.</p>
            `
        },
        {
            title: '5.2 Unit Conversion Traps',
            content: `
                <p>The SAT loves mixing units to catch careless students.</p>
                <div class="formula-box">
                    <strong>Watch Out For:</strong><br>
                    • Hours vs. minutes in rate problems<br>
                    • Feet vs. inches in geometry<br>
                    • Dollars vs. cents<br>
                    • Miles vs. kilometers<br>
                    • Percent vs. decimal form
                </div>
                <div class="example">
                    <h4>Trap Example:</h4>
                    <p>"A car travels at 60 miles per hour. How far does it go in 90 minutes?"</p>
                    <p>Wrong: 60 × 90 = 5400 miles (forgot to convert minutes!)</p>
                    <p>Right: 60 × 1.5 = 90 miles (90 min = 1.5 hours)</p>
                </div>
            `
        },
        {
            title: '5.3 Percent Traps',
            content: `
                <p>Percent problems have multiple gotcha patterns:</p>
                <div class="formula-box">
                    <strong>Classic Percent Traps:</strong><br><br>
                    <strong>Trap 1: Successive changes DON'T cancel</strong><br>
                    • 20% increase then 20% decrease $\\neq$ back to original<br>
                    • $100 \\rightarrow 120 \\rightarrow 96$ (not 100!)<br><br>
                    <strong>Trap 2: Percent OF vs. Percent MORE/LESS</strong><br>
                    • "30% of 50" $= 15$<br>
                    • "30% more than 50" $= 65$<br><br>
                    <strong>Trap 3: Which base to use?</strong><br>
                    • Percent change always uses the ORIGINAL as base
                </div>
            `
        },
        {
            title: '5.4 Word Problem Translation Traps',
            content: `
                <p>Words can be deceiving. Pay attention to exact phrasing:</p>
                <div class="formula-box">
                    <strong>"Per" means MULTIPLY, not add:</strong><br>
                    • \\$5 per book × 3 books = \\$15 (not \\$8)<br><br>
                    <strong>Order matters in subtraction:</strong><br>
                    • "5 less than $x$" $= x - 5$ (not $5 - x$)<br>
                    • "$x$ less than 5" $= 5 - x$<br><br>
                    <strong>Parentheses matter:</strong><br>
                    • "Twice the sum of $x$ and 3" $= 2(x + 3)$<br>
                    • "Twice $x$, plus 3" $= 2x + 3$
                </div>
                <div class="example">
                    <h4>Translation Trap:</h4>
                    <p>"John is 5 years older than twice Mary's age."</p>
                    <p>If Mary is $m$: John $= 2m + 5$ (not $2(m + 5)$!)</p>
                </div>
            `
        },
        {
            title: '5.5 Extra Information & Red Herrings',
            content: `
                <p>The SAT includes irrelevant numbers to distract you.</p>
                <div class="formula-box">
                    <strong>Strategy:</strong><br>
                    1. Read the ENTIRE problem first<br>
                    2. Identify what you need to find<br>
                    3. Mark only the numbers you actually need<br>
                    4. Ignore the rest!
                </div>
                <div class="example">
                    <h4>Red Herring Example:</h4>
                    <p>"A store has 50 employees. Last year, 20% got raises. This year, 15 employees got promotions. The store's profit was $1.2 million. How many employees got raises last year?"</p>
                    <p>You only need: 50 × 20% = 10</p>
                    <p>The promotions and profit are distractions!</p>
                </div>
            `
        }
    ],

    exercises: [
        {
            id: 'sat5-1',
            unit: 5,
            question: 'If $3x - 7 = 14$, what is the value of $6x - 14$?',
            answer: 'C',
            options: ['A) 7', 'B) 21', 'C) 28', 'D) 42'],
            hint: 'Don\'t solve for $x$! Look for a shortcut using the original equation.',
            solution: `<strong>The Gotcha:</strong> Many students find $x = 7$ and stop, or find $6x$ alone.<br><br>
                <strong>Shortcut:</strong> Notice that $6x - 14 = 2(3x - 7)$<br>
                Since $3x - 7 = 14$:<br>
                $6x - 14 = 2(14) = $ <strong>28</strong><br><br>
                <strong>OR solve for x:</strong> $3x = 21$, $x = 7$<br>
                Then $6(7) - 14 = 42 - 14 = $ <strong>28</strong>`,
            hard: true
        },
        {
            id: 'sat5-2',
            unit: 5,
            question: 'A $80 jacket is on sale for 25% off. What is the sale price?',
            answer: 'B',
            options: ['A) $20', 'B) $60', 'C) $55', 'D) $75'],
            hint: 'The question asks for the SALE PRICE, not the discount amount!',
            solution: `<strong>The Gotcha:</strong> Answer A ($20) is the DISCOUNT, not the sale price!<br><br>
                <strong>Step 1: Calculate discount</strong><br>
                25% of $80 = $20<br><br>
                <strong>Step 2: Calculate sale price</strong><br>
                $80 - $20 = <strong>$60</strong>`,
            hard: false
        },
        {
            id: 'sat5-3',
            unit: 5,
            question: 'A price increased by 20%, then decreased by 20%. If the original price was \\$100, what is the final price?',
            answer: 'B',
            options: ['A) \\$100', 'B) \\$96', 'C) \\$104', 'D) \\$80'],
            hint: 'The changes do NOT cancel out! Calculate each step.',
            solution: `<strong>The Gotcha:</strong> Students assume +20% and -20% cancel to give \\$100.<br><br>
                <strong>Step 1: 20% increase</strong><br>
                $\\$100 \\times 1.20 = \\$120$<br><br>
                <strong>Step 2: 20% decrease (of the NEW price!)</strong><br>
                $\\$120 \\times 0.80 = $ <strong>\\$96</strong><br><br>
                <strong>Why it doesn't cancel:</strong> The 20% decrease is taken from \\$120, not \\$100!`,
            hard: true
        },
        {
            id: 'sat5-4',
            unit: 5,
            question: 'A machine produces 5 widgets per minute. How many widgets does it produce in 2 hours and 30 minutes?',
            answer: 'D',
            options: ['A) 32', 'B) 150', 'C) 600', 'D) 750'],
            hint: 'Convert ALL time to minutes before calculating!',
            solution: `<strong>The Gotcha:</strong> Don't add 2 + 30 = 32 and multiply by 5!<br><br>
                <strong>Step 1: Convert to minutes</strong><br>
                2 hours = 120 minutes<br>
                Total = 120 + 30 = 150 minutes<br><br>
                <strong>Step 2: Calculate production</strong><br>
                150 × 5 = <strong>750 widgets</strong>`,
            hard: true
        },
        {
            id: 'sat5-5',
            unit: 5,
            question: 'Tom is 4 years older than twice Sara\'s age. If Sara is 10, how old is Tom?',
            answer: 'C',
            options: ['A) 14', 'B) 20', 'C) 24', 'D) 28'],
            hint: 'Translate carefully: "4 years older than twice" means add 4 AFTER doubling.',
            solution: `<strong>The Gotcha:</strong> Is it $2(10 + 4)$ or $2(10) + 4$?<br><br>
                <strong>Parse the phrase:</strong><br>
                "4 years older than" → add 4<br>
                "twice Sara's age" → $2 \\times 10 = 20$<br><br>
                <strong>Tom's age:</strong> $2(10) + 4 = 20 + 4 = $ <strong>24</strong><br><br>
                <strong>Common error:</strong> $2(10 + 4) = 28$ — but "older than twice" means add AFTER doubling.`,
            hard: true
        },
        {
            id: 'sat5-6',
            unit: 5,
            question: 'A store has 200 items. 60% are on sale, and 25% of sale items are electronics. The store also has 15 employees. How many electronics are on sale?',
            answer: 'B',
            options: ['A) 15', 'B) 30', 'C) 50', 'D) 120'],
            hint: 'Ignore the irrelevant information! Focus only on what you need.',
            solution: `<strong>The Gotcha:</strong> The "15 employees" is a red herring (distraction)!<br><br>
                <strong>Step 1: Find sale items</strong><br>
                60% of 200 = 120 items on sale<br><br>
                <strong>Step 2: Find electronics on sale</strong><br>
                25% of 120 = <strong>30 electronics</strong><br><br>
                <strong>The trap:</strong> Answer A (15) is the number of employees — completely unrelated!`,
            hard: true
        }
    ],

    generators: [
        // Type 1: "Answer what they asked" trap
        function() {
            const a = randInt(2, 5);
            const b = randInt(5, 15);
            const c = randInt(10, 30);
            // ax + b = c, solve for x, but ask for something else
            const x = (c - b) / a;
            if (!Number.isInteger(x) || x < 1) return satUnit5.generators[0]();

            const multiplier = randInt(2, 3);
            const addend = randInt(1, 10);
            const answer = multiplier * x + addend;

            // Trap answers: just x, or ax, or multiplier*x without addend
            const traps = [x, a * x, multiplier * x].filter(t => t !== answer && t > 0);
            const wrongAnswers = [...traps];
            while (wrongAnswers.length < 3) {
                const wrong = answer + randInt(-10, 10);
                if (wrong > 0 && wrong !== answer && !wrongAnswers.includes(wrong)) {
                    wrongAnswers.push(wrong);
                }
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 5,
                question: `If $${a}x + ${b} = ${c}$, what is the value of $${multiplier}x + ${addend}$?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: `Don't just solve for $x$! The question asks for $${multiplier}x + ${addend}$.`,
                solution: `<strong>The Gotcha:</strong> Many students solve for $x = ${x}$ and stop!<br><br>
                    <strong>Step 1: Solve for x</strong><br>
                    $${a}x + ${b} = ${c}$<br>
                    $${a}x = ${c - b}$<br>
                    $x = ${x}$<br><br>
                    <strong>Step 2: Find what they ASKED for</strong><br>
                    $${multiplier}x + ${addend} = ${multiplier}(${x}) + ${addend} = $ <strong>${answer}</strong>`,
                hard: true
            };
        },
        // Type 2: Discount vs. Sale Price trap
        function() {
            const original = randChoice([40, 50, 60, 80, 100, 120]);
            const percent = randChoice([10, 15, 20, 25, 30]);
            const discount = original * percent / 100;
            const salePrice = original - discount;

            const askForSalePrice = Math.random() > 0.3;
            const answer = askForSalePrice ? salePrice : discount;

            // Trap: the OTHER value
            const trap = askForSalePrice ? discount : salePrice;
            const wrongAnswers = [trap, original, original + discount].filter(w => w !== answer && w > 0);
            while (wrongAnswers.length < 3) {
                const wrong = answer + randInt(-20, 20);
                if (wrong > 0 && wrong !== answer && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            const questionText = askForSalePrice
                ? `A \\$${original} item is ${percent}% off. What is the sale price?`
                : `A \\$${original} item is ${percent}% off. How much money do you save?`;

            return {
                unit: 5,
                question: questionText,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) \\$${val}`),
                hint: askForSalePrice
                    ? 'They want the FINAL price, not the discount amount!'
                    : 'They want the SAVINGS, not the final price!',
                solution: `<strong>The Gotcha:</strong> ${askForSalePrice ? 'Don\'t give the discount amount!' : 'Don\'t give the sale price!'}<br><br>
                    <strong>Discount amount:</strong> ${percent}% of \\$${original} = \\$${discount}<br>
                    <strong>Sale price:</strong> \\$${original} - \\$${discount} = \\$${salePrice}<br><br>
                    <strong>The question asked for:</strong> ${askForSalePrice ? 'sale price' : 'savings'} = <strong>\\$${answer}</strong>`,
                hard: false
            };
        },
        // Type 3: Successive percent change trap
        function() {
            const original = randChoice([100, 200, 500, 1000]);
            const percent = randChoice([10, 20, 25]);

            // Same percent up then down (classic trap)
            const afterIncrease = original * (1 + percent/100);
            const finalAnswer = afterIncrease * (1 - percent/100);

            // Trap answer: back to original
            const wrongAnswers = [original, afterIncrease, original * (1 - percent/100)].filter(w => w !== finalAnswer);
            while (wrongAnswers.length < 3) {
                const wrong = finalAnswer + randInt(-50, 50);
                if (wrong > 0 && wrong !== finalAnswer && !wrongAnswers.includes(wrong) && Number.isInteger(wrong)) {
                    wrongAnswers.push(wrong);
                }
            }

            const allAnswers = [finalAnswer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(finalAnswer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 5,
                question: `A stock worth \\$${original} increased by ${percent}%, then decreased by ${percent}%. What is its final value?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) \\$${val}`),
                hint: 'The percent changes do NOT cancel out! The second change is based on the NEW value.',
                solution: `<strong>The Classic Gotcha:</strong> Students assume +${percent}% then -${percent}% = back to original. WRONG!<br><br>
                    <strong>Step 1: ${percent}% increase</strong><br>
                    \\$${original} × ${1 + percent/100} = \\$${afterIncrease}<br><br>
                    <strong>Step 2: ${percent}% decrease (of NEW value!)</strong><br>
                    \\$${afterIncrease} × ${1 - percent/100} = <strong>\\$${finalAnswer}</strong><br><br>
                    <strong>Why it's less:</strong> You lose ${percent}% of a BIGGER number than you gained!`,
                hard: true
            };
        },
        // Type 4: Unit conversion trap
        function() {
            const hours = randInt(1, 4);
            const minutes = randInt(10, 50);
            const totalMinutes = hours * 60 + minutes;
            const rate = randInt(3, 8);

            const answer = totalMinutes * rate;
            const trapAnswer = (hours + minutes) * rate; // Common mistake

            const items = randChoice(['pages', 'widgets', 'forms', 'parts', 'emails']);

            const wrongAnswers = [trapAnswer, hours * rate, minutes * rate].filter(w => w !== answer && w > 0);
            while (wrongAnswers.length < 3) {
                const wrong = answer + randInt(-100, 100);
                if (wrong > 0 && wrong !== answer && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 5,
                question: `A printer prints ${rate} ${items} per minute. How many ${items} will it print in ${hours} hour${hours > 1 ? 's' : ''} and ${minutes} minutes?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: 'Convert hours to minutes FIRST, then add the minutes, then multiply!',
                solution: `<strong>The Gotcha:</strong> Don't just add ${hours} + ${minutes} = ${hours + minutes}!<br><br>
                    <strong>Step 1: Convert hours to minutes</strong><br>
                    ${hours} hour${hours > 1 ? 's' : ''} = ${hours * 60} minutes<br><br>
                    <strong>Step 2: Total time in minutes</strong><br>
                    ${hours * 60} + ${minutes} = ${totalMinutes} minutes<br><br>
                    <strong>Step 3: Calculate</strong><br>
                    ${totalMinutes} × ${rate} = <strong>${answer} ${items}</strong>`,
                hard: true
            };
        },
        // Type 5: "Per" word problem trap
        function() {
            const pricePerItem = randInt(3, 12);
            const numItems = randInt(4, 10);
            const baseFee = randInt(5, 20);
            const total = baseFee + pricePerItem * numItems;

            // Ask for total, trap is just the per-item cost times items
            const trapAnswer = pricePerItem * numItems;

            const wrongAnswers = [trapAnswer, baseFee + pricePerItem + numItems, pricePerItem + numItems].filter(w => w !== total && w > 0);
            while (wrongAnswers.length < 3) {
                const wrong = total + randInt(-20, 20);
                if (wrong > 0 && wrong !== total && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [total, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(total);
            const letters = ['A', 'B', 'C', 'D'];

            const contexts = [
                { place: 'parking garage', base: 'flat fee', item: 'hour', action: 'parks' },
                { place: 'delivery service', base: 'base charge', item: 'package', action: 'ships' },
                { place: 'gym', base: 'monthly fee', item: 'personal training session', action: 'attends' }
            ];
            const ctx = randChoice(contexts);

            return {
                unit: 5,
                question: `A ${ctx.place} charges a \\$${baseFee} ${ctx.base} plus \\$${pricePerItem} per ${ctx.item}. If a customer ${ctx.action} ${numItems} ${ctx.item}s, what is the total cost?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) \\$${val}`),
                hint: '"Per" means MULTIPLY the rate by the quantity, then ADD the base fee.',
                solution: `<strong>The Gotcha:</strong> "Per" means multiply, not add!<br><br>
                    <strong>Cost for ${numItems} ${ctx.item}s:</strong><br>
                    \\$${pricePerItem} × ${numItems} = \\$${pricePerItem * numItems}<br><br>
                    <strong>Total with base fee:</strong><br>
                    \\$${baseFee} + \\$${pricePerItem * numItems} = <strong>\\$${total}</strong>`,
                hard: false
            };
        },
        // Type 6: Red herring / extra information trap
        function() {
            const totalStudents = randChoice([100, 150, 200, 250]);
            const percentA = randChoice([20, 25, 30, 40]);
            const numA = totalStudents * percentA / 100;

            // Red herrings
            const numTeachers = randInt(8, 20);
            const avgAge = randInt(15, 17);
            const numClassrooms = randInt(10, 25);

            const wrongAnswers = [numTeachers, avgAge, numClassrooms].filter(w => w !== numA);
            while (wrongAnswers.length < 3) {
                const wrong = numA + randInt(-20, 20);
                if (wrong > 0 && wrong !== numA && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [numA, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(numA);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 5,
                question: `A school has ${totalStudents} students, ${numTeachers} teachers, and ${numClassrooms} classrooms. The average student age is ${avgAge}. If ${percentA}% of students made the honor roll, how many students made the honor roll?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: 'Most of the numbers given are distractions! Find only what you need.',
                solution: `<strong>The Gotcha:</strong> Ignore the red herrings!<br><br>
                    <strong>Relevant info only:</strong><br>
                    • ${totalStudents} students total<br>
                    • ${percentA}% made honor roll<br><br>
                    <strong>Irrelevant (distractions):</strong><br>
                    • ${numTeachers} teachers — not needed!<br>
                    • ${numClassrooms} classrooms — not needed!<br>
                    • Age ${avgAge} — not needed!<br><br>
                    <strong>Answer:</strong> ${totalStudents} × ${percentA}% = <strong>${numA} students</strong>`,
                hard: true
            };
        },
        // Type 7: "Less than" word order trap
        function() {
            const larger = randInt(20, 50);
            const diff = randInt(5, 15);
            const smaller = larger - diff;

            // "X is Y less than Z" means X = Z - Y
            const wrongOrders = [larger + diff, diff - larger + 100].filter(w => w > 0 && w !== smaller);
            const wrongAnswers = [...wrongOrders, larger];
            while (wrongAnswers.length < 3) {
                const wrong = smaller + randInt(-10, 20);
                if (wrong > 0 && wrong !== smaller && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [smaller, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(smaller);
            const letters = ['A', 'B', 'C', 'D'];

            const names = randChoice([['Alex', 'Jordan'], ['Sam', 'Taylor'], ['Morgan', 'Casey']]);

            return {
                unit: 5,
                question: `${names[0]} has ${diff} fewer books than ${names[1]}. If ${names[1]} has ${larger} books, how many books does ${names[0]} have?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: '"Fewer than" means subtract FROM the other person\'s amount.',
                solution: `<strong>The Gotcha:</strong> "X has Y fewer than Z" means X = Z - Y, not Z + Y!<br><br>
                    <strong>Translation:</strong><br>
                    ${names[0]}'s books = ${names[1]}'s books - ${diff}<br>
                    ${names[0]}'s books = ${larger} - ${diff} = <strong>${smaller}</strong>`,
                hard: false
            };
        },
        // Type 8: "Of" vs. "More than" percent trap
        function() {
            const base = randChoice([40, 50, 60, 80, 100]);
            const percent = randChoice([20, 25, 30, 50]);

            const isOf = Math.random() > 0.5;
            const correctAnswer = isOf ? (base * percent / 100) : (base + base * percent / 100);
            const trapAnswer = isOf ? (base + base * percent / 100) : (base * percent / 100);

            const wrongAnswers = [trapAnswer, base, base - base * percent / 100].filter(w => w !== correctAnswer && w > 0);
            while (wrongAnswers.length < 3) {
                const wrong = correctAnswer + randInt(-20, 30);
                if (wrong > 0 && wrong !== correctAnswer && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [correctAnswer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(correctAnswer);
            const letters = ['A', 'B', 'C', 'D'];

            const questionText = isOf
                ? `What is ${percent}% of ${base}?`
                : `What is ${percent}% more than ${base}?`;

            return {
                unit: 5,
                question: questionText,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: isOf
                    ? '"X% OF Y" means multiply: Y × X%'
                    : '"X% MORE THAN Y" means: Y + (Y × X%)',
                solution: `<strong>The Gotcha:</strong> "${percent}% OF ${base}" ≠ "${percent}% MORE THAN ${base}"!<br><br>
                    <strong>"${percent}% of ${base}"</strong> = ${base} × ${percent/100} = ${base * percent / 100}<br><br>
                    <strong>"${percent}% more than ${base}"</strong> = ${base} + (${base} × ${percent/100}) = ${base + base * percent / 100}<br><br>
                    <strong>This question asked for:</strong> "${isOf ? 'of' : 'more than'}" = <strong>${correctAnswer}</strong>`,
                hard: true
            };
        }
    ]
};

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('sat-math', satUnit5);
}
