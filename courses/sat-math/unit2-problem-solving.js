// SAT Math Unit 2: Problem Solving & Data Analysis
// Ratios, percentages, statistics, and data interpretation

const satUnit2 = {
    id: 2,
    name: 'Unit 2',
    title: 'Problem Solving & Data Analysis',

    lessons: [
        {
            title: '2.1 Ratios, Rates, and Proportions',
            content: `
                <p>SAT problems frequently involve ratios and proportions:</p>
                <div class="formula-box">
                    <strong>Ratio:</strong> a : b means a/b<br><br>
                    <strong>Proportion:</strong> a/b = c/d → Cross multiply: ad = bc<br><br>
                    <strong>Unit Rate:</strong> Amount per 1 unit (e.g., miles per hour)
                </div>
                <div class="example">
                    <h4>SAT Example:</h4>
                    <p>If the ratio of boys to girls is 3:5 and there are 24 boys, how many girls are there?</p>
                    <div class="solution">
                        3/5 = 24/x<br>
                        3x = 120<br>
                        x = 40 girls
                    </div>
                </div>
            `
        },
        {
            title: '2.2 Percentages',
            content: `
                <p>Percentage problems are everywhere on the SAT!</p>
                <div class="formula-box">
                    <strong>Basic Formula:</strong> Part = (Percent/100) × Whole<br><br>
                    <strong>Percent Change:</strong> ((New - Old) / Old) × 100%<br><br>
                    <strong>Successive Percent Changes:</strong><br>
                    Multiply by (1 + rate) or (1 - rate) for each change
                </div>
                <p><strong>SAT Tip:</strong> 20% increase followed by 20% decrease does NOT return to the original value!</p>
                <div class="example">
                    <h4>Example:</h4>
                    <p>$100 increased by 20% = $120</p>
                    <p>$120 decreased by 20% = $96 (not $100!)</p>
                </div>
            `
        },
        {
            title: '2.3 Statistics: Mean, Median, Mode',
            content: `
                <div class="formula-box">
                    <strong>Mean (Average):</strong> Sum of all values / Number of values<br><br>
                    <strong>Median:</strong> Middle value when sorted (or average of two middle values)<br><br>
                    <strong>Mode:</strong> Most frequent value<br><br>
                    <strong>Range:</strong> Maximum - Minimum
                </div>
                <p><strong>SAT Tip:</strong> Adding a value greater than the mean increases the mean. Adding a value less than the mean decreases the mean.</p>
            `
        },
        {
            title: '2.4 Data Interpretation',
            content: `
                <p>The SAT includes many graph/table questions. Know how to:</p>
                <ul>
                    <li>Read bar graphs, line graphs, scatter plots</li>
                    <li>Calculate from tables</li>
                    <li>Interpret trends and patterns</li>
                    <li>Find line of best fit</li>
                </ul>
                <div class="formula-box">
                    <strong>Scatter Plot Correlation:</strong><br>
                    • Positive: y increases as x increases<br>
                    • Negative: y decreases as x increases<br>
                    • None: no clear pattern
                </div>
            `
        }
    ],

    exercises: [
        {
            id: 'sat2-1',
            unit: 2,
            question: 'If the ratio of cats to dogs at a shelter is 4:7, and there are 28 dogs, how many cats are there?',
            answer: 'B',
            options: ['A) 12', 'B) 16', 'C) 20', 'D) 24'],
            hint: 'Set up a proportion: 4/7 = x/28 and solve for x.',
            solution: `<strong>Set up proportion:</strong><br>
                4/7 = x/28<br><br>
                <strong>Cross multiply:</strong><br>
                7x = 4 × 28<br>
                7x = 112<br>
                x = <strong>16 cats</strong>`,
            hard: false
        },
        {
            id: 'sat2-2',
            unit: 2,
            question: 'A shirt originally priced at $40 is on sale for 25% off. What is the sale price?',
            answer: 'C',
            options: ['A) $10', 'B) $25', 'C) $30', 'D) $35'],
            hint: 'Calculate 25% of $40, then subtract from the original price.',
            solution: `<strong>Method 1: Calculate discount</strong><br>
                25% of $40 = 0.25 × 40 = $10<br>
                Sale price = $40 - $10 = <strong>$30</strong><br><br>
                <strong>Method 2: Direct calculation</strong><br>
                Sale price = $40 × (1 - 0.25) = $40 × 0.75 = <strong>$30</strong>`,
            hard: false
        },
        {
            id: 'sat2-3',
            unit: 2,
            question: 'The mean of 5 numbers is 12. If four of the numbers are 8, 10, 14, and 15, what is the fifth number?',
            answer: 'B',
            options: ['A) 11', 'B) 13', 'C) 15', 'D) 17'],
            hint: 'Mean × count = sum. Find the total sum, then subtract the known values.',
            solution: `<strong>Step 1: Find total sum</strong><br>
                Mean × Count = Sum<br>
                12 × 5 = 60<br><br>
                <strong>Step 2: Subtract known values</strong><br>
                Fifth number = 60 - (8 + 10 + 14 + 15)<br>
                = 60 - 47<br>
                = <strong>13</strong>`,
            hard: false
        },
        {
            id: 'sat2-4',
            unit: 2,
            question: 'A car travels 180 miles in 3 hours. At this rate, how many miles will it travel in 5 hours?',
            answer: 'D',
            options: ['A) 240', 'B) 270', 'C) 285', 'D) 300'],
            hint: 'First find the rate (miles per hour), then multiply by 5 hours.',
            solution: `<strong>Step 1: Find the rate</strong><br>
                Rate = 180 miles / 3 hours = 60 mph<br><br>
                <strong>Step 2: Calculate for 5 hours</strong><br>
                Distance = 60 × 5 = <strong>300 miles</strong>`,
            hard: false
        },
        {
            id: 'sat2-5',
            unit: 2,
            question: 'A population increased by 20% in year 1, then decreased by 10% in year 2. If the original population was 1000, what is the final population?',
            answer: 'C',
            options: ['A) 1000', 'B) 1050', 'C) 1080', 'D) 1100'],
            hint: 'Apply each percent change in sequence: multiply by 1.20, then by 0.90.',
            solution: `<strong>Year 1: 20% increase</strong><br>
                1000 × 1.20 = 1200<br><br>
                <strong>Year 2: 10% decrease</strong><br>
                1200 × 0.90 = <strong>1080</strong><br><br>
                <strong>Key Insight:</strong> Successive percent changes multiply!<br>
                1000 × 1.20 × 0.90 = 1000 × 1.08 = 1080<br><br>
                <strong>Common trap:</strong> Answer A (1000) assumes the changes cancel out—they don't!`,
            hard: true
        },
        {
            id: 'sat2-6',
            unit: 2,
            question: 'The median of 7 consecutive integers is 15. What is the largest of these integers?',
            answer: 'C',
            options: ['A) 15', 'B) 17', 'C) 18', 'D) 21'],
            hint: 'For consecutive integers, the median equals the mean and is the middle number.',
            solution: `<strong>Key Insight:</strong> For consecutive integers, median = middle number<br><br>
                <strong>The 7 consecutive integers are:</strong><br>
                12, 13, 14, <strong>15</strong>, 16, 17, 18<br><br>
                <strong>The largest is 18</strong>`,
            hard: false
        }
    ],

    generators: [
        // Type 1: Ratio proportion (MC)
        function() {
            const a = randInt(2, 6);
            const b = randInt(2, 6);
            if (a === b) return satUnit2.generators[0]();

            const multiplier = randInt(3, 8);
            const given = b * multiplier;
            const answer = a * multiplier;

            const items = randChoice([
                ['apples', 'oranges'],
                ['boys', 'girls'],
                ['cats', 'dogs'],
                ['red marbles', 'blue marbles'],
                ['fiction books', 'non-fiction books']
            ]);

            // Common trap: confusing which ratio to use
            const wrongAnswers = [b * multiplier, Math.round(given * a / b) + 2, Math.round(given * a / b) - 3].filter(w => w > 0 && w !== answer);
            while (wrongAnswers.length < 3) {
                const wrong = randInt(10, 50);
                if (wrong !== answer && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 2,
                question: `If the ratio of ${items[0]} to ${items[1]} is ${a}:${b}, and there are ${given} ${items[1]}, how many ${items[0]} are there?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: `Set up a proportion: ${a}/${b} = x/${given} and cross multiply.`,
                solution: `<strong>Set up proportion:</strong><br>
                    ${a}/${b} = x/${given}<br><br>
                    <strong>Cross multiply:</strong><br>
                    ${b}x = ${a} × ${given}<br>
                    ${b}x = ${a * given}<br>
                    x = <strong>${answer}</strong>`,
                hard: false
            };
        },
        // Type 2: Percent discount/markup (MC)
        function() {
            const original = randChoice([20, 25, 30, 40, 50, 60, 80, 100]);
            const percent = randChoice([10, 15, 20, 25, 30, 40]);
            const isDiscount = Math.random() > 0.5;

            const change = original * percent / 100;
            const answer = isDiscount ? original - change : original + change;

            const action = isDiscount ? 'on sale for' : 'marked up by';
            const word = isDiscount ? 'off' : '';

            // Trap: giving the discount amount instead of final price
            const wrongAnswers = [change, original, isDiscount ? original + change : original - change].filter(w => w !== answer && w > 0);
            while (wrongAnswers.length < 3) {
                const wrong = original + randInt(-20, 20);
                if (wrong > 0 && wrong !== answer && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 2,
                question: `A product originally priced at $${original} is ${action} ${percent}% ${word}. What is the new price?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) $${val}`),
                hint: `Calculate ${percent}% of $${original}, then ${isDiscount ? 'subtract from' : 'add to'} the original.`,
                solution: `<strong>Calculate ${percent}%:</strong><br>
                    ${percent}% of $${original} = ${percent/100} × ${original} = $${change}<br><br>
                    <strong>New price:</strong><br>
                    $${original} ${isDiscount ? '-' : '+'} $${change} = <strong>$${answer}</strong><br><br>
                    <strong>Common trap:</strong> Answer $${change} is just the discount amount, not the final price!`,
                hard: false
            };
        },
        // Type 3: Find missing number given mean (MC)
        function() {
            const count = randInt(4, 6);
            const mean = randInt(10, 20);
            const total = mean * count;

            let numbers = [];
            let sum = 0;
            for (let i = 0; i < count - 1; i++) {
                const num = randInt(mean - 5, mean + 5);
                numbers.push(num);
                sum += num;
            }
            const answer = total - sum;

            if (answer < 0 || answer > 30) return satUnit2.generators[2]();

            const wrongAnswers = [mean, sum / (count - 1), answer + 3].filter(w => w > 0 && w !== answer && Number.isInteger(w));
            while (wrongAnswers.length < 3) {
                const wrong = randInt(5, 25);
                if (wrong !== answer && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 2,
                question: `The mean of ${count} numbers is ${mean}. If ${count - 1} of the numbers are ${numbers.join(', ')}, what is the remaining number?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: 'Mean × count = sum. Find the total sum needed, then subtract the known values.',
                solution: `<strong>Step 1: Find required sum</strong><br>
                    Mean × Count = ${mean} × ${count} = ${total}<br><br>
                    <strong>Step 2: Sum of known numbers</strong><br>
                    ${numbers.join(' + ')} = ${sum}<br><br>
                    <strong>Step 3: Find missing number</strong><br>
                    ${total} - ${sum} = <strong>${answer}</strong>`,
                hard: false
            };
        },
        // Type 4: Rate problem (MC) - with "gotcha" trap
        function() {
            const rate = randInt(30, 70);
            const time1 = randInt(2, 5);
            const time2 = randInt(3, 8);
            if (time1 === time2) return satUnit2.generators[3]();

            const distance1 = rate * time1;
            const answer = rate * time2;

            const types = randChoice([
                ['car', 'miles', 'hours'],
                ['train', 'kilometers', 'hours'],
                ['cyclist', 'miles', 'hours']
            ]);

            // Trap: adding distances instead of calculating rate first
            const wrongAnswers = [distance1 + time2, distance1 * time2 / time1 + 10, answer - rate].filter(w => w > 0 && w !== answer);
            while (wrongAnswers.length < 3) {
                const wrong = answer + randInt(-50, 50);
                if (wrong > 0 && wrong !== answer && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 2,
                question: `A ${types[0]} travels ${distance1} ${types[1]} in ${time1} ${types[2]}. At this rate, how many ${types[1]} will it travel in ${time2} ${types[2]}?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: 'First find the rate (distance per time), then multiply by the new time.',
                solution: `<strong>Step 1: Find the rate</strong><br>
                    Rate = ${distance1} / ${time1} = ${rate} ${types[1]} per hour<br><br>
                    <strong>Step 2: Calculate for ${time2} hours</strong><br>
                    Distance = ${rate} × ${time2} = <strong>${answer} ${types[1]}</strong>`,
                hard: false
            };
        },
        // Type 5: Successive percent changes (MC) - Classic gotcha
        function() {
            const original = randChoice([100, 200, 500, 1000]);
            const percent1 = randChoice([10, 20, 25, 30]);
            const percent2 = randChoice([10, 15, 20, 25]);
            const increase1 = Math.random() > 0.3;
            const increase2 = Math.random() > 0.7;

            const factor1 = increase1 ? (1 + percent1/100) : (1 - percent1/100);
            const factor2 = increase2 ? (1 + percent2/100) : (1 - percent2/100);
            const answer = original * factor1 * factor2;

            if (!Number.isInteger(answer)) return satUnit2.generators[4]();

            const word1 = increase1 ? 'increased' : 'decreased';
            const word2 = increase2 ? 'increased' : 'decreased';

            // Classic trap: thinking percent changes cancel out
            const trapAnswer = original; // Students think +20% then -20% = back to original
            const wrongAnswers = [trapAnswer, original * (factor1 + factor2 - 1), answer + original * 0.05].filter(w => w !== answer && Number.isInteger(w));
            while (wrongAnswers.length < 3) {
                const wrong = original + randInt(-100, 200);
                if (wrong > 0 && wrong !== answer && !wrongAnswers.includes(wrong) && Number.isInteger(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 2,
                question: `A value of ${original} ${word1} by ${percent1}%, then ${word2} by ${percent2}%. What is the final value?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: `Multiply by ${factor1} for the first change, then by ${factor2} for the second. Don't just add/subtract percentages!`,
                solution: `<strong>First change: ${percent1}% ${word1.slice(0,-1)}</strong><br>
                    ${original} × ${factor1} = ${original * factor1}<br><br>
                    <strong>Second change: ${percent2}% ${word2.slice(0,-1)}</strong><br>
                    ${original * factor1} × ${factor2} = <strong>${answer}</strong><br><br>
                    <strong>Common trap:</strong> ${percent1}% up then ${percent2}% down does NOT equal ${percent1 - percent2}% change! Percent changes multiply, not add.`,
                hard: true
            };
        },
        // Type 6: Percent change calculation (MC)
        function() {
            const original = randInt(20, 80);
            const changePercent = randChoice([10, 20, 25, 50]);
            const isIncrease = Math.random() > 0.5;

            const newValue = isIncrease
                ? original * (1 + changePercent/100)
                : original * (1 - changePercent/100);

            if (!Number.isInteger(newValue)) return satUnit2.generators[5]();

            const wrongAnswers = [Math.abs(newValue - original), changePercent + 5, changePercent * 2].filter(w => w !== changePercent && w <= 100);
            while (wrongAnswers.length < 3) {
                const wrong = randInt(5, 60);
                if (wrong !== changePercent && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [changePercent, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(changePercent);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 2,
                question: `A quantity changed from ${original} to ${newValue}. What is the percent ${isIncrease ? 'increase' : 'decrease'}?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}%`),
                hint: 'Percent change = ((New - Old) / Old) × 100',
                solution: `<strong>Percent Change Formula:</strong><br>
                    % change = ((New - Old) / Old) × 100<br><br>
                    <strong>Calculate:</strong><br>
                    = ((${newValue} - ${original}) / ${original}) × 100<br>
                    = (${newValue - original} / ${original}) × 100<br>
                    = <strong>${changePercent}%</strong>`,
                hard: false
            };
        },
        // Type 7: Unit conversion word problem (Gotcha: mixing units)
        function() {
            const hours = randInt(1, 3);
            const minutes = randInt(10, 50);
            const totalMinutes = hours * 60 + minutes;
            const rate = randInt(2, 5); // items per minute

            const answer = totalMinutes * rate;

            // Trap: forgetting to convert hours to minutes
            const trapAnswer = (hours + minutes) * rate;
            const wrongAnswers = [trapAnswer, hours * rate, minutes * rate].filter(w => w !== answer && w > 0);
            while (wrongAnswers.length < 3) {
                const wrong = answer + randInt(-50, 100);
                if (wrong > 0 && wrong !== answer && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            const items = randChoice(['widgets', 'packages', 'bottles', 'forms']);

            return {
                unit: 2,
                question: `A machine produces ${rate} ${items} per minute. How many ${items} will it produce in ${hours} hour${hours > 1 ? 's' : ''} and ${minutes} minutes?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: 'First convert all time to the same unit (minutes), then multiply by the rate.',
                solution: `<strong>Step 1: Convert to minutes</strong><br>
                    ${hours} hour${hours > 1 ? 's' : ''} = ${hours * 60} minutes<br>
                    Total = ${hours * 60} + ${minutes} = ${totalMinutes} minutes<br><br>
                    <strong>Step 2: Calculate production</strong><br>
                    ${totalMinutes} × ${rate} = <strong>${answer} ${items}</strong><br><br>
                    <strong>Common trap:</strong> Don't add hours + minutes directly! Convert first.`,
                hard: true
            };
        },
        // Type 8: "Asking for the wrong thing" word problem
        function() {
            const pricePerItem = randInt(5, 15);
            const numItems = randInt(3, 8);
            const taxPercent = randInt(5, 10);
            const subtotal = pricePerItem * numItems;
            const tax = subtotal * taxPercent / 100;
            const total = subtotal + tax;

            // Question asks for TAX, not total
            const answer = tax;

            const wrongAnswers = [total, subtotal, pricePerItem].filter(w => w !== answer);
            while (wrongAnswers.length < 3) {
                const wrong = randInt(5, 100);
                if (wrong !== answer && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 2,
                question: `A customer buys ${numItems} items at $${pricePerItem} each, plus ${taxPercent}% sales tax. How much is the tax?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) $${val}`),
                hint: 'Read carefully: the question asks for the TAX amount, not the total!',
                solution: `<strong>Step 1: Calculate subtotal</strong><br>
                    ${numItems} × $${pricePerItem} = $${subtotal}<br><br>
                    <strong>Step 2: Calculate tax</strong><br>
                    $${subtotal} × ${taxPercent}% = $${subtotal} × ${taxPercent/100} = <strong>$${tax}</strong><br><br>
                    <strong>Be careful:</strong> The question asks for the TAX ($${tax}), not the total ($${total})!`,
                hard: true
            };
        }
    ]
};

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('sat-math', satUnit2);
}
