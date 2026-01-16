// IM3 Unit 7: Statistics & Probability
// This file contains lessons, exercises, and problem generators for Unit 7

const unit7 = {
    id: 7,
    name: 'Unit 7',
    title: 'Statistics & Probability',

    lessons: [
        {
            title: '7.1 Measures of Central Tendency',
            content: `
                <div class="formula-box">
                    <strong>Mean (Average):</strong><br>
                    $\\bar{x} = \\frac{\\sum x_i}{n}$ = sum of all values / number of values<br><br>
                    <strong>Median:</strong><br>
                    Middle value when data is ordered<br>
                    • Odd $n$: middle value<br>
                    • Even $n$: average of two middle values<br><br>
                    <strong>Mode:</strong><br>
                    Most frequently occurring value(s)
                </div>
            `
        },
        {
            title: '7.2 Measures of Spread',
            content: `
                <div class="formula-box">
                    <strong>Range:</strong> max - min<br><br>
                    <strong>Variance ($\\sigma^2$):</strong><br>
                    $\\sigma^2 = \\frac{\\sum(x_i - \\bar{x})^2}{n}$<br><br>
                    <strong>Standard Deviation ($\\sigma$):</strong><br>
                    $\\sigma = \\sqrt{\\text{variance}}$<br><br>
                    <strong>Interpretation:</strong><br>
                    • Low $\\sigma$: data clustered near mean<br>
                    • High $\\sigma$: data spread out from mean
                </div>
            `
        },
        {
            title: '7.3 Normal Distribution',
            content: `
                <div class="formula-box">
                    <strong>Empirical Rule (68-95-99.7):</strong><br>
                    • 68% of data within $1\\sigma$ of mean<br>
                    • 95% of data within $2\\sigma$ of mean<br>
                    • 99.7% of data within $3\\sigma$ of mean<br><br>
                    <strong>Z-Score:</strong><br>
                    $z = \\frac{x - \\mu}{\\sigma}$<br>
                    Tells how many standard deviations from mean
                </div>
            `
        },
        {
            title: '7.4 Probability Basics',
            content: `
                <div class="formula-box">
                    <strong>Basic Probability:</strong><br>
                    $P(A) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$<br><br>
                    <strong>Complement:</strong> $P(\\text{not } A) = 1 - P(A)$<br><br>
                    <strong>Addition Rule:</strong><br>
                    $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$<br><br>
                    <strong>Multiplication Rule:</strong><br>
                    • Independent: $P(A \\text{ and } B) = P(A) \\cdot P(B)$<br>
                    • Dependent: $P(A \\text{ and } B) = P(A) \\cdot P(B|A)$
                </div>
            `
        }
    ],

    exercises: [
        {
            id: 'u7-1',
            unit: 7,
            question: 'Find the mean of: $12, 15, 18, 21, 24$',
            answer: '$18$',
            hint: 'Add all values and divide by $5$.',
            solution: `<strong>Formula:</strong> Mean $= \\frac{\\sum x}{n}$<br><br>
                Mean $= \\frac{12 + 15 + 18 + 21 + 24}{5}$<br>
                $= \\frac{90}{5}$<br>
                $=$ <strong>$18$</strong>`,
            hard: false
        },
        {
            id: 'u7-2',
            unit: 7,
            question: 'Find the median of: $7, 3, 9, 12, 5, 8$',
            answer: '$7.5$',
            hint: 'First order the data, then find the middle. With $6$ values, average the 3rd and 4th.',
            solution: `<strong>Step 1: Order the data</strong><br>
                $3, 5, 7, 8, 9, 12$<br><br>
                <strong>Step 2: Find middle</strong><br>
                $6$ values (even), so average 3rd and 4th<br>
                $\\frac{7 + 8}{2} =$ <strong>$7.5$</strong>`,
            hard: false
        },
        {
            id: 'u7-3',
            unit: 7,
            question: 'A dataset has mean $50$ and standard deviation $8$. What is the z-score for $x = 66$?',
            answer: '$2$',
            hint: 'Use $z = \\frac{x - \\mu}{\\sigma}$.',
            solution: `<strong>Formula:</strong> $z = \\frac{x - \\mu}{\\sigma}$<br><br>
                $z = \\frac{66 - 50}{8}$<br>
                $= \\frac{16}{8}$<br>
                $=$ <strong>$2$</strong>`,
            hard: false
        },
        {
            id: 'u7-4',
            unit: 7,
            question: 'Using the empirical rule: If $\\mu = 100$ and $\\sigma = 15$, what percent of data falls between $70$ and $130$?',
            answer: '$95\\%$',
            hint: '$70 = 100 - 2(15)$ and $130 = 100 + 2(15)$. How many $\\sigma$ from the mean?',
            solution: `<strong>Step 1: Find distance from mean</strong><br>
                $70 = 100 - 30 = \\mu - 2\\sigma$<br>
                $130 = 100 + 30 = \\mu + 2\\sigma$<br><br>
                <strong>Step 2: Apply empirical rule</strong><br>
                Within $2\\sigma$ of mean $\\rightarrow$ <strong>$95\\%$</strong>`,
            hard: false
        },
        {
            id: 'u7-5',
            unit: 7,
            question: 'A bag has $5$ red and $3$ blue marbles. What is $P(\\text{red, then blue})$ if drawing without replacement?',
            answer: '$\\frac{15}{56}$',
            hint: 'First draw: $P(\\text{red}) = \\frac{5}{8}$. Second draw: $P(\\text{blue}) = \\frac{3}{7}$. Multiply.',
            solution: `<strong>Step 1: P(red first)</strong><br>
                $P(R) = \\frac{5}{8}$<br><br>
                <strong>Step 2: P(blue second | red first)</strong><br>
                After removing red: $4$ red, $3$ blue left<br>
                $P(B|R) = \\frac{3}{7}$<br><br>
                <strong>Step 3: Multiply</strong><br>
                $P(R \\text{ then } B) = \\frac{5}{8} \\cdot \\frac{3}{7} =$ <strong>$\\frac{15}{56}$</strong>`,
            hard: true
        },
        {
            id: 'u7-6',
            unit: 7,
            question: 'If $P(A) = 0.3$, $P(B) = 0.5$, and $P(A \\text{ and } B) = 0.1$, find $P(A \\text{ or } B)$.',
            answer: '$0.7$',
            hint: 'Use the addition rule: $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$.',
            solution: `<strong>Addition Rule:</strong><br>
                $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$<br><br>
                $P(A \\text{ or } B) = 0.3 + 0.5 - 0.1$<br>
                $=$ <strong>$0.7$</strong>`,
            hard: false
        }
    ],

    generators: [
        // Type 1: Find mean
        function() {
            const n = randChoice([4, 5, 6]);
            const start = randInt(5, 20);
            const step = randChoice([2, 3, 4, 5]);
            const data = [];
            for (let i = 0; i < n; i++) {
                data.push(start + i * step);
            }

            const sum = data.reduce((a, b) => a + b, 0);
            const mean = sum / n;

            return {
                unit: 7,
                question: `Find the mean of: $${data.join(', ')}$`,
                answer: `$${mean}$`,
                hint: `Add all $${n}$ values and divide by $${n}$.`,
                solution: `<strong>Formula:</strong> Mean $= \\frac{\\sum x}{n}$<br><br>
                    Mean $= \\frac{${data.join(' + ')}}{${n}}$<br>
                    $= \\frac{${sum}}{${n}}$<br>
                    $=$ <strong>$${mean}$</strong>`,
                hard: false
            };
        },
        // Type 2: Find median
        function() {
            const n = randChoice([5, 6, 7]);
            const data = [];
            for (let i = 0; i < n; i++) {
                data.push(randInt(3, 25));
            }
            const sorted = [...data].sort((a, b) => a - b);

            let median;
            if (n % 2 === 1) {
                median = sorted[Math.floor(n / 2)];
            } else {
                median = (sorted[n/2 - 1] + sorted[n/2]) / 2;
            }

            return {
                unit: 7,
                question: `Find the median of: $${data.join(', ')}$`,
                answer: `$${median}$`,
                hint: `First order the data, then find the middle value${n % 2 === 0 ? 's and average them' : ''}.`,
                solution: `<strong>Step 1: Order the data</strong><br>
                    $${sorted.join(', ')}$<br><br>
                    <strong>Step 2: Find middle</strong><br>
                    ${n % 2 === 1 ? `$${n}$ values (odd), middle is position $${Math.floor(n/2) + 1}$` : `$${n}$ values (even), average positions $${n/2}$ and $${n/2 + 1}$`}<br>
                    Median $=$ <strong>$${median}$</strong>`,
                hard: false
            };
        },
        // Type 3: Calculate z-score
        function() {
            const mu = randChoice([50, 60, 70, 80, 100]);
            const sigma = randChoice([5, 8, 10, 12, 15]);
            const z = randChoice([-2, -1, 1, 2, 3]);
            const x = mu + z * sigma;

            return {
                unit: 7,
                question: `A dataset has mean $${mu}$ and standard deviation $${sigma}$. What is the z-score for $x = ${x}$?`,
                answer: `$${z}$`,
                hint: `Use $z = \\frac{x - \\mu}{\\sigma}$.`,
                solution: `<strong>Formula:</strong> $z = \\frac{x - \\mu}{\\sigma}$<br><br>
                    $z = \\frac{${x} - ${mu}}{${sigma}}$<br>
                    $= \\frac{${x - mu}}{${sigma}}$<br>
                    $=$ <strong>$${z}$</strong>`,
                hard: false
            };
        },
        // Type 4: Empirical rule
        function() {
            const mu = randChoice([50, 75, 100, 200]);
            const sigma = randChoice([5, 10, 15, 20]);
            const numSigma = randChoice([1, 2, 3]);
            const percent = numSigma === 1 ? '68\\%' : (numSigma === 2 ? '95\\%' : '99.7\\%');

            const low = mu - numSigma * sigma;
            const high = mu + numSigma * sigma;

            return {
                unit: 7,
                question: `Using the empirical rule: If $\\mu = ${mu}$ and $\\sigma = ${sigma}$, what percent of data falls between $${low}$ and $${high}$?`,
                answer: `$${percent}$`,
                hint: `$${low} = ${mu} - ${numSigma}(${sigma})$ and $${high} = ${mu} + ${numSigma}(${sigma})$. This is $${numSigma}\\sigma$ from the mean.`,
                solution: `<strong>Step 1: Find distance from mean</strong><br>
                    $${low} = ${mu} - ${numSigma * sigma} = \\mu - ${numSigma}\\sigma$<br>
                    $${high} = ${mu} + ${numSigma * sigma} = \\mu + ${numSigma}\\sigma$<br><br>
                    <strong>Step 2: Apply empirical rule</strong><br>
                    Within $${numSigma}\\sigma$ of mean $\\rightarrow$ <strong>$${percent}$</strong>`,
                hard: false
            };
        },
        // Type 5: Probability without replacement
        function() {
            const color1 = randChoice(['red', 'blue', 'green']);
            const color2 = randChoice(['white', 'black', 'yellow'].filter(c => c !== color1));
            const n1 = randChoice([4, 5, 6, 7]);
            const n2 = randChoice([3, 4, 5]);
            const total = n1 + n2;

            // P(color1, then color2) = (n1/total) * (n2/(total-1))
            const num = n1 * n2;
            const den = total * (total - 1);

            // Simplify fraction
            const gcd = (a, b) => b ? gcd(b, a % b) : a;
            const g = gcd(num, den);
            const ansNum = num / g;
            const ansDen = den / g;

            return {
                unit: 7,
                question: `A bag has $${n1}$ ${color1} and $${n2}$ ${color2} marbles. What is $P(\\text{${color1}, then ${color2}})$ if drawing without replacement?`,
                answer: `$\\frac{${ansNum}}{${ansDen}}$`,
                hint: `First draw: $P(\\text{${color1}}) = \\frac{${n1}}{${total}}$. After removing one ${color1}, find $P(\\text{${color2}})$. Multiply.`,
                solution: `<strong>Step 1: P(${color1} first)</strong><br>
                    $P(\\text{${color1}}) = \\frac{${n1}}{${total}}$<br><br>
                    <strong>Step 2: P(${color2} second | ${color1} first)</strong><br>
                    After removing ${color1}: $${n1-1}$ ${color1}, $${n2}$ ${color2} left<br>
                    $P(\\text{${color2}}|\\text{${color1}}) = \\frac{${n2}}{${total-1}}$<br><br>
                    <strong>Step 3: Multiply</strong><br>
                    $P(\\text{${color1} then ${color2}}) = \\frac{${n1}}{${total}} \\cdot \\frac{${n2}}{${total-1}} = \\frac{${num}}{${den}} =$ <strong>$\\frac{${ansNum}}{${ansDen}}$</strong>`,
                hard: true
            };
        },
        // Type 6: Addition rule
        function() {
            // P(A), P(B), P(A and B) all as tenths
            const pA = randChoice([0.2, 0.3, 0.4, 0.5]);
            const pB = randChoice([0.3, 0.4, 0.5, 0.6]);
            const pAandB = randChoice([0.05, 0.1, 0.15, 0.2]);

            // Make sure P(A or B) ≤ 1
            if (pA + pB - pAandB > 1) return unit7.generators[5]();

            const pAorB = pA + pB - pAandB;

            return {
                unit: 7,
                question: `If $P(A) = ${pA}$, $P(B) = ${pB}$, and $P(A \\text{ and } B) = ${pAandB}$, find $P(A \\text{ or } B)$.`,
                answer: `$${pAorB}$`,
                hint: `Use the addition rule: $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$.`,
                solution: `<strong>Addition Rule:</strong><br>
                    $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$<br><br>
                    $P(A \\text{ or } B) = ${pA} + ${pB} - ${pAandB}$<br>
                    $=$ <strong>$${pAorB}$</strong>`,
                hard: false
            };
        }
    ]
};

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('im3', unit7);
}
