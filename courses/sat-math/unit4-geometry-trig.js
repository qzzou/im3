// SAT Math Unit 4: Additional Topics in Math
// Geometry, trigonometry, and complex numbers

const satUnit4 = {
    id: 4,
    name: 'Unit 4',
    title: 'Geometry & Trigonometry',

    lessons: [
        {
            title: '4.1 Angles and Triangles',
            content: `
                <div class="formula-box">
                    <strong>Triangle Angle Sum:</strong> All angles sum to 180°<br><br>
                    <strong>Exterior Angle Theorem:</strong><br>
                    An exterior angle equals the sum of the two non-adjacent interior angles<br><br>
                    <strong>Isosceles Triangle:</strong> Two equal sides → Two equal angles opposite them
                </div>
                <p><strong>Similar Triangles:</strong> Same shape, proportional sides</p>
                <ul>
                    <li>AA (Angle-Angle): Two equal angles → Similar</li>
                    <li>Corresponding sides are proportional</li>
                </ul>
            `
        },
        {
            title: '4.2 Right Triangles & Pythagorean Theorem',
            content: `
                <div class="formula-box">
                    <strong>Pythagorean Theorem:</strong> a² + b² = c²<br>
                    (where c is the hypotenuse)<br><br>
                    <strong>Common Pythagorean Triples:</strong><br>
                    • 3-4-5 (and multiples: 6-8-10, 9-12-15...)<br>
                    • 5-12-13<br>
                    • 8-15-17<br>
                    • 7-24-25
                </div>
                <div class="formula-box">
                    <strong>Special Right Triangles:</strong><br>
                    • 45-45-90: sides in ratio 1 : 1 : √2<br>
                    • 30-60-90: sides in ratio 1 : √3 : 2
                </div>
            `
        },
        {
            title: '4.3 Trigonometry (SOH-CAH-TOA)',
            content: `
                <div class="formula-box">
                    <strong>SOH-CAH-TOA:</strong><br>
                    sin θ = Opposite / Hypotenuse<br>
                    cos θ = Adjacent / Hypotenuse<br>
                    tan θ = Opposite / Adjacent<br><br>
                    <strong>Key Identity:</strong> sin²θ + cos²θ = 1
                </div>
                <p><strong>SAT Tip:</strong> Complementary angles have a special relationship:</p>
                <div class="formula-box">
                    sin(x) = cos(90° - x)<br>
                    cos(x) = sin(90° - x)
                </div>
            `
        },
        {
            title: '4.4 Circles',
            content: `
                <div class="formula-box">
                    <strong>Circle Formulas:</strong><br>
                    Circumference: C = 2πr = πd<br>
                    Area: A = πr²<br><br>
                    <strong>Arc Length:</strong> (θ/360°) × 2πr<br>
                    <strong>Sector Area:</strong> (θ/360°) × πr²<br><br>
                    <strong>Central Angle = Arc measure</strong>
                </div>
                <div class="formula-box">
                    <strong>Circle Equation:</strong><br>
                    Standard form: (x - h)² + (y - k)² = r²<br>
                    Center at (h, k), radius r
                </div>
            `
        }
    ],

    exercises: [
        {
            id: 'sat4-1',
            unit: 4,
            question: 'In a right triangle, one leg is 6 and the hypotenuse is 10. What is the length of the other leg?',
            answer: 'B',
            options: ['A) 4', 'B) 8', 'C) 12', 'D) 14'],
            hint: 'Use Pythagorean theorem: a² + b² = c². Solve for the missing leg.',
            solution: `<strong>Pythagorean Theorem:</strong><br>
                a² + b² = c²<br>
                6² + b² = 10²<br>
                36 + b² = 100<br>
                b² = 64<br>
                b = <strong>8</strong><br><br>
                <strong>Note:</strong> This is a 6-8-10 triangle (2× the 3-4-5 triple)`,
            hard: false
        },
        {
            id: 'sat4-2',
            unit: 4,
            question: 'In a 30-60-90 triangle, the shortest side is 5. What is the length of the hypotenuse?',
            answer: 'C',
            options: ['A) 5', 'B) 5√3', 'C) 10', 'D) 10√3'],
            hint: 'In a 30-60-90 triangle, sides are in ratio 1 : √3 : 2. The shortest side is opposite 30°.',
            solution: `<strong>30-60-90 Triangle Ratios:</strong><br>
                Shortest (opposite 30°) : Middle (opposite 60°) : Hypotenuse<br>
                = 1 : √3 : 2<br><br>
                <strong>Apply:</strong><br>
                Shortest = 5<br>
                Hypotenuse = 5 × 2 = <strong>10</strong><br><br>
                <strong>Common trap:</strong> 5√3 is the MIDDLE side, not the hypotenuse!`,
            hard: false
        },
        {
            id: 'sat4-3',
            unit: 4,
            question: 'In a right triangle, sin A = 3/5. What is cos A?',
            answer: 'C',
            options: ['A) 3/4', 'B) 3/5', 'C) 4/5', 'D) 5/4'],
            hint: 'Use sin²A + cos²A = 1, or recognize this as a 3-4-5 triangle.',
            solution: `<strong>Method 1: Pythagorean Identity</strong><br>
                sin²A + cos²A = 1<br>
                (3/5)² + cos²A = 1<br>
                9/25 + cos²A = 1<br>
                cos²A = 16/25<br>
                cos A = <strong>4/5</strong><br><br>
                <strong>Method 2: 3-4-5 triangle</strong><br>
                If opposite = 3, hypotenuse = 5, then adjacent = 4<br>
                cos A = adjacent/hypotenuse = 4/5`,
            hard: false
        },
        {
            id: 'sat4-4',
            unit: 4,
            question: 'A circle has a radius of 6. What is the area of a sector with a central angle of 60°?',
            answer: 'B',
            options: ['A) 2π', 'B) 6π', 'C) 12π', 'D) 36π'],
            hint: 'Sector area = (angle/360°) × πr²',
            solution: `<strong>Sector Area Formula:</strong><br>
                Area = (θ/360°) × πr²<br><br>
                <strong>Calculate:</strong><br>
                Area = (60°/360°) × π(6)²<br>
                = (1/6) × 36π<br>
                = <strong>6π</strong><br><br>
                <strong>Trap:</strong> 36π is the FULL circle area, not the sector!`,
            hard: false
        },
        {
            id: 'sat4-5',
            unit: 4,
            question: 'What is the center of the circle (x - 3)² + (y + 2)² = 25?',
            answer: 'C',
            options: ['A) (-3, 2)', 'B) (-3, -2)', 'C) (3, -2)', 'D) (3, 2)'],
            hint: 'In (x - h)² + (y - k)² = r², the center is (h, k). Watch the signs!',
            solution: `<strong>Circle Equation:</strong><br>
                (x - h)² + (y - k)² = r²<br>
                Center = (h, k)<br><br>
                <strong>Identify:</strong><br>
                (x - 3)² + (y + 2)² = 25<br>
                (x - 3)² + (y - (-2))² = 25<br><br>
                <strong>Center: (3, -2)</strong><br><br>
                <strong>Sign trap:</strong> (x - 3) means h = +3, and (y + 2) means k = -2!`,
            hard: true
        },
        {
            id: 'sat4-6',
            unit: 4,
            question: 'Two similar triangles have corresponding sides of 4 and 10. If the smaller triangle has an area of 8, what is the area of the larger triangle?',
            answer: 'D',
            options: ['A) 20', 'B) 32', 'C) 40', 'D) 50'],
            hint: 'For similar figures, the ratio of areas equals the SQUARE of the ratio of corresponding sides.',
            solution: `<strong>Key Principle:</strong><br>
                If sides are in ratio a:b, areas are in ratio a²:b²<br><br>
                <strong>Find ratio:</strong><br>
                Side ratio = 4:10 = 2:5<br>
                Area ratio = 4:25<br><br>
                <strong>Calculate:</strong><br>
                8/x = 4/25<br>
                4x = 200<br>
                x = <strong>50</strong><br><br>
                <strong>Trap:</strong> 20 (= 8 × 10/4) uses the linear ratio, not squared!`,
            hard: true
        }
    ],

    generators: [
        // Type 1: Pythagorean theorem (MC)
        function() {
            const triples = [[3,4,5], [5,12,13], [8,15,17], [7,24,25]];
            const triple = randChoice(triples);
            const multiplier = randInt(1, 3);

            const a = triple[0] * multiplier;
            const b = triple[1] * multiplier;
            const c = triple[2] * multiplier;

            const giveAC = Math.random() > 0.5;
            const given1 = giveAC ? a : a;
            const given2 = giveAC ? c : b;
            const answer = giveAC ? b : c;
            const givenType2 = giveAC ? 'hypotenuse' : 'other leg';
            const findType = giveAC ? 'other leg' : 'hypotenuse';

            const wrongAnswers = [answer + 2, answer - 2, given1 + given2].filter(w => w > 0 && w !== answer);
            while (wrongAnswers.length < 3) {
                const wrong = answer + randInt(-5, 10);
                if (wrong > 0 && wrong !== answer && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 4,
                question: `In a right triangle, one leg is ${given1} and the ${givenType2} is ${given2}. What is the ${findType}?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: 'Use Pythagorean theorem: a² + b² = c².',
                solution: `<strong>Pythagorean Theorem:</strong> a² + b² = c²<br><br>
                    ${giveAC ? `${given1}² + x² = ${given2}²` : `${given1}² + ${given2}² = x²`}<br>
                    ${giveAC ? `${given1*given1} + x² = ${given2*given2}` : `${given1*given1} + ${given2*given2} = x²`}<br>
                    ${giveAC ? `x² = ${given2*given2 - given1*given1}` : `x² = ${given1*given1 + given2*given2}`}<br>
                    x = <strong>${answer}</strong>`,
                hard: false
            };
        },
        // Type 2: Special right triangles (MC)
        function() {
            const is45 = Math.random() > 0.5;
            const givenSide = randInt(2, 10);

            if (is45) {
                const askHyp = Math.random() > 0.5;
                const correctAnswer = askHyp ? `${givenSide}√2` : `${givenSide}`;
                const wrongAnswers = askHyp
                    ? [`${givenSide}`, `${givenSide * 2}`, `${givenSide}√3`]
                    : [`${givenSide}√2`, `${givenSide * 2}`, `${givenSide}/√2`];

                const options = [correctAnswer, ...wrongAnswers.slice(0, 3)];
                options.sort(() => Math.random() - 0.5);
                const correctIndex = options.indexOf(correctAnswer);
                const letters = ['A', 'B', 'C', 'D'];

                return {
                    unit: 4,
                    question: `In a 45-45-90 triangle, ${askHyp ? 'each leg' : 'the hypotenuse'} is ${askHyp ? givenSide : givenSide + '√2'}. What is the ${askHyp ? 'hypotenuse' : 'length of each leg'}?`,
                    answer: letters[correctIndex],
                    options: options.map((val, i) => `${letters[i]}) ${val}`),
                    hint: 'In a 45-45-90 triangle, sides are in ratio 1 : 1 : √2.',
                    solution: `<strong>45-45-90 Ratios:</strong> 1 : 1 : √2<br><br>
                        ${askHyp ? `Leg = ${givenSide}, so Hypotenuse = ${givenSide} × √2 = <strong>${givenSide}√2</strong>` : `Hypotenuse = ${givenSide}√2, so each Leg = <strong>${givenSide}</strong>`}`,
                    hard: false
                };
            } else {
                const shortestGiven = Math.random() > 0.5;
                const answer = shortestGiven ? givenSide * 2 : givenSide / 2;

                if (!Number.isInteger(answer)) return satUnit4.generators[1]();

                // Common traps: √3 confusion
                const correctAnswer = `${answer}`;
                const wrongAnswers = shortestGiven
                    ? [`${givenSide}√3`, `${givenSide}`, `${givenSide * 3}`]
                    : [`${givenSide}√3`, `${givenSide / 2}√3`, `${givenSide}`];

                const options = [correctAnswer, ...wrongAnswers.slice(0, 3)];
                options.sort(() => Math.random() - 0.5);
                const correctIndex = options.indexOf(correctAnswer);
                const letters = ['A', 'B', 'C', 'D'];

                return {
                    unit: 4,
                    question: `In a 30-60-90 triangle, the ${shortestGiven ? 'shortest side' : 'hypotenuse'} is ${givenSide}. What is the ${shortestGiven ? 'hypotenuse' : 'shortest side'}?`,
                    answer: letters[correctIndex],
                    options: options.map((val, i) => `${letters[i]}) ${val}`),
                    hint: 'In a 30-60-90 triangle, sides are in ratio 1 : √3 : 2. Shortest is opposite 30°, hypotenuse is opposite 90°.',
                    solution: `<strong>30-60-90 Ratios:</strong> 1 : √3 : 2<br><br>
                        ${shortestGiven ? `Shortest = ${givenSide}, so Hypotenuse = ${givenSide} × 2 = <strong>${answer}</strong>` : `Hypotenuse = ${givenSide}, so Shortest = ${givenSide} / 2 = <strong>${answer}</strong>`}<br><br>
                        <strong>Trap:</strong> ${givenSide}√3 is the MIDDLE side, not what they asked for!`,
                    hard: true
                };
            }
        },
        // Type 3: Trig ratio (MC)
        function() {
            const multiplier = randInt(1, 3);
            const opp = 3 * multiplier;
            const adj = 4 * multiplier;
            const hyp = 5 * multiplier;

            const givenSin = Math.random() > 0.5;

            if (givenSin) {
                const correctAnswer = `${adj}/${hyp}`;
                const wrongAnswers = [`${opp}/${adj}`, `${adj}/${opp}`, `${hyp}/${adj}`];

                const options = [correctAnswer, ...wrongAnswers];
                options.sort(() => Math.random() - 0.5);
                const correctIndex = options.indexOf(correctAnswer);
                const letters = ['A', 'B', 'C', 'D'];

                return {
                    unit: 4,
                    question: `In a right triangle, sin A = ${opp}/${hyp}. What is cos A?`,
                    answer: letters[correctIndex],
                    options: options.map((val, i) => `${letters[i]}) ${val}`),
                    hint: 'Use sin²A + cos²A = 1, or recognize this as a 3-4-5 triangle.',
                    solution: `<strong>Pythagorean Identity:</strong><br>
                        sin²A + cos²A = 1<br>
                        (${opp}/${hyp})² + cos²A = 1<br>
                        cos²A = 1 - ${opp*opp}/${hyp*hyp} = ${adj*adj}/${hyp*hyp}<br>
                        cos A = <strong>${adj}/${hyp}</strong>`,
                    hard: false
                };
            } else {
                const correctAnswer = `${opp}/${adj}`;
                const wrongAnswers = [`${adj}/${opp}`, `${opp}/${hyp}`, `${adj}/${hyp}`];

                const options = [correctAnswer, ...wrongAnswers];
                options.sort(() => Math.random() - 0.5);
                const correctIndex = options.indexOf(correctAnswer);
                const letters = ['A', 'B', 'C', 'D'];

                return {
                    unit: 4,
                    question: `In a right triangle, cos A = ${adj}/${hyp}. What is tan A?`,
                    answer: letters[correctIndex],
                    options: options.map((val, i) => `${letters[i]}) ${val}`),
                    hint: 'Find the opposite side using Pythagorean theorem, then use tan = opposite/adjacent.',
                    solution: `<strong>Find opposite side:</strong><br>
                        adj² + opp² = hyp²<br>
                        ${adj}² + opp² = ${hyp}²<br>
                        opp = ${opp}<br><br>
                        tan A = opp/adj = <strong>${opp}/${adj}</strong>`,
                    hard: true
                };
            }
        },
        // Type 4: Sector area (MC)
        function() {
            const r = randChoice([3, 4, 5, 6, 8, 9, 10, 12]);
            const angle = randChoice([30, 45, 60, 90, 120, 180]);

            const areaNum = (angle / 360) * r * r;
            let answer;
            if (Number.isInteger(areaNum)) {
                answer = `${areaNum}π`;
            } else {
                const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
                const num = angle * r * r;
                const den = 360;
                const g = gcd(num, den);
                answer = `${num/g}π/${den/g}`;
            }

            // Trap: full circle area
            const fullArea = `${r*r}π`;
            const wrongAnswers = [fullArea, `${r*2}π`, `${Math.round(areaNum/2)}π`].filter(w => w !== answer);

            const options = [answer, ...wrongAnswers.slice(0, 3)];
            options.sort(() => Math.random() - 0.5);
            const correctIndex = options.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 4,
                question: `A circle has a radius of ${r}. What is the area of a sector with a central angle of ${angle}°?`,
                answer: letters[correctIndex],
                options: options.map((val, i) => `${letters[i]}) ${val}`),
                hint: 'Sector area = (angle/360°) × πr². Don\'t give the full circle area!',
                solution: `<strong>Sector Area Formula:</strong><br>
                    Area = (θ/360°) × πr²<br><br>
                    <strong>Calculate:</strong><br>
                    Area = (${angle}°/360°) × π(${r})²<br>
                    = (${angle}/360) × ${r*r}π<br>
                    = <strong>${answer}</strong><br><br>
                    <strong>Trap:</strong> ${r*r}π is the FULL circle area!`,
                hard: false
            };
        },
        // Type 5: Circle center (MC) - with sign traps
        function() {
            const h = randInt(-8, 8);
            const k = randInt(-8, 8);
            const r = randInt(2, 10);

            const hPart = h >= 0 ? `(x - ${h})` : `(x + ${Math.abs(h)})`;
            const kPart = k >= 0 ? `(y - ${k})` : `(y + ${Math.abs(k)})`;

            const correctAnswer = `(${h}, ${k})`;
            const wrongAnswers = [
                `(${-h}, ${k})`,
                `(${h}, ${-k})`,
                `(${-h}, ${-k})`
            ].filter(w => w !== correctAnswer);

            const options = [correctAnswer, ...wrongAnswers.slice(0, 3)];
            options.sort(() => Math.random() - 0.5);
            const correctIndex = options.indexOf(correctAnswer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 4,
                question: `What is the center of the circle ${hPart}² + ${kPart}² = ${r*r}?`,
                answer: letters[correctIndex],
                options: options.map((val, i) => `${letters[i]}) ${val}`),
                hint: 'In (x - h)² + (y - k)² = r², the center is (h, k). Watch the signs carefully!',
                solution: `<strong>Circle Equation:</strong><br>
                    (x - h)² + (y - k)² = r²<br>
                    Center = (h, k)<br><br>
                    <strong>Rewrite to identify:</strong><br>
                    ${hPart}² + ${kPart}² = ${r*r}<br>
                    (x - (${h}))² + (y - (${k}))² = ${r*r}<br><br>
                    <strong>Center: (${h}, ${k})</strong><br><br>
                    <strong>Sign trap:</strong> (x - h) when h is negative looks like (x + |h|)!`,
                hard: true
            };
        },
        // Type 6: Similar triangles area ratio (MC)
        function() {
            const smallSide = randInt(2, 6);
            const multiplier = randInt(2, 4);
            const largeSide = smallSide * multiplier;

            const smallArea = randInt(4, 20);
            const largeArea = smallArea * multiplier * multiplier;

            const giveSmall = Math.random() > 0.5;
            const answer = giveSmall ? largeArea : smallArea;

            // Trap: using linear ratio instead of squared
            const linearTrap = giveSmall ? smallArea * multiplier : largeArea / multiplier;
            const wrongAnswers = [linearTrap, answer + 10, answer - 5].filter(w => w > 0 && w !== answer && Number.isInteger(w));
            while (wrongAnswers.length < 3) {
                const wrong = answer + randInt(-15, 30);
                if (wrong > 0 && wrong !== answer && !wrongAnswers.includes(wrong)) wrongAnswers.push(wrong);
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 4,
                question: `Two similar triangles have corresponding sides of ${smallSide} and ${largeSide}. If the ${giveSmall ? 'smaller' : 'larger'} triangle has an area of ${giveSmall ? smallArea : largeArea}, what is the area of the ${giveSmall ? 'larger' : 'smaller'} triangle?`,
                answer: letters[correctIndex],
                options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                hint: 'For similar figures, the ratio of areas equals the SQUARE of the ratio of corresponding sides!',
                solution: `<strong>Key Principle:</strong><br>
                    If sides are in ratio a:b, areas are in ratio a²:b²<br><br>
                    <strong>Side ratio:</strong> ${smallSide}:${largeSide} = 1:${multiplier}<br>
                    <strong>Area ratio:</strong> 1:${multiplier*multiplier}<br><br>
                    <strong>Calculate:</strong><br>
                    ${giveSmall ? smallArea : largeArea} × ${giveSmall ? multiplier*multiplier : `1/${multiplier*multiplier}`} = <strong>${answer}</strong><br><br>
                    <strong>Trap:</strong> ${linearTrap} uses linear ratio instead of squared!`,
                hard: true
            };
        },
        // Type 7: Arc length (MC) - New harder problem
        function() {
            const r = randChoice([4, 5, 6, 8, 10, 12]);
            const angle = randChoice([30, 45, 60, 90, 120]);

            const arcLength = (angle / 360) * 2 * r;
            let answer;
            if (Number.isInteger(arcLength)) {
                answer = `${arcLength}π`;
            } else {
                const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
                const num = angle * 2 * r;
                const den = 360;
                const g = gcd(num, den);
                answer = `${num/g}π/${den/g}`;
            }

            // Traps: sector area instead, or full circumference
            const circumference = `${2*r}π`;
            const sectorArea = `${(angle/360)*r*r}π`;
            const wrongAnswers = [circumference, sectorArea, `${r}π`].filter(w => w !== answer);

            const options = [answer, ...wrongAnswers.slice(0, 3)];
            options.sort(() => Math.random() - 0.5);
            const correctIndex = options.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            return {
                unit: 4,
                question: `A circle has a radius of ${r}. What is the arc length of a sector with a central angle of ${angle}°?`,
                answer: letters[correctIndex],
                options: options.map((val, i) => `${letters[i]}) ${val}`),
                hint: 'Arc length = (angle/360°) × 2πr. This is LENGTH (circumference portion), not AREA!',
                solution: `<strong>Arc Length Formula:</strong><br>
                    Arc Length = (θ/360°) × 2πr<br><br>
                    <strong>Calculate:</strong><br>
                    = (${angle}°/360°) × 2π(${r})<br>
                    = (${angle}/360) × ${2*r}π<br>
                    = <strong>${answer}</strong><br><br>
                    <strong>Trap:</strong> Don't confuse with sector AREA (which uses πr²)!`,
                hard: true
            };
        },
        // Type 8: Central angle = Arc measure (MC) - Classic SAT concept
        function() {
            const arcMeasure = randInt(20, 170);
            const giveArc = Math.random() > 0.5;

            // Points on circle
            const points = ['R', 'S', 'T', 'P', 'Q', 'M', 'N'];
            const p1 = randChoice(points);
            let p2 = randChoice(points);
            while (p2 === p1) p2 = randChoice(points);

            const answer = arcMeasure; // Central angle = arc measure

            // Common traps:
            // - Half the arc (confusing with inscribed angle theorem)
            // - 180 - arc (thinking supplementary)
            // - 360 - arc (thinking reflex/major arc)
            const wrongAnswers = [
                Math.round(arcMeasure / 2),      // Inscribed angle trap
                180 - arcMeasure,                 // Supplementary trap
                360 - arcMeasure                  // Major arc trap
            ].filter(w => w > 0 && w < 360 && w !== answer);

            while (wrongAnswers.length < 3) {
                const wrong = arcMeasure + randInt(-30, 30);
                if (wrong > 0 && wrong < 360 && wrong !== answer && !wrongAnswers.includes(wrong)) {
                    wrongAnswers.push(wrong);
                }
            }

            const allAnswers = [answer, ...wrongAnswers.slice(0, 3)].sort((a, b) => a - b);
            const correctIndex = allAnswers.indexOf(answer);
            const letters = ['A', 'B', 'C', 'D'];

            if (giveArc) {
                return {
                    unit: 4,
                    question: `Point O is the center of a circle. The measure of arc ${p1}${p2} on this circle is ${arcMeasure}°. What is the measure, in degrees, of its associated angle ${p1}O${p2}?`,
                    answer: letters[correctIndex],
                    options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                    hint: 'A central angle (vertex at the center) equals the measure of its intercepted arc.',
                    solution: `<strong>Key Property:</strong><br>
                        Central angle = Arc measure<br><br>
                        <strong>Given:</strong> Arc ${p1}${p2} = ${arcMeasure}°<br>
                        <strong>Therefore:</strong> Angle ${p1}O${p2} = <strong>${answer}°</strong><br><br>
                        <strong>Trap:</strong> ${Math.round(arcMeasure/2)}° would be an INSCRIBED angle (vertex on the circle), not a central angle!`,
                    hard: false
                };
            } else {
                return {
                    unit: 4,
                    question: `Point O is the center of a circle, and points ${p1} and ${p2} lie on the circle. If angle ${p1}O${p2} measures ${arcMeasure}°, what is the measure, in degrees, of arc ${p1}${p2}?`,
                    answer: letters[correctIndex],
                    options: allAnswers.map((val, i) => `${letters[i]}) ${val}`),
                    hint: 'A central angle (vertex at the center) equals the measure of its intercepted arc.',
                    solution: `<strong>Key Property:</strong><br>
                        Central angle = Arc measure<br><br>
                        <strong>Given:</strong> Angle ${p1}O${p2} = ${arcMeasure}°<br>
                        <strong>Therefore:</strong> Arc ${p1}${p2} = <strong>${answer}°</strong><br><br>
                        <strong>Note:</strong> This is the minor arc. The major arc would be ${360 - arcMeasure}°.`,
                    hard: false
                };
            }
        },
        // Type 9: Special right triangle perimeter (MC) - SAT classic
        function() {
            const is45 = Math.random() > 0.5;

            if (is45) {
                // 45-45-90 triangle: legs = x, hypotenuse = x√2
                // Given hypotenuse, find perimeter
                const hyp = randChoice([10, 12, 14, 16, 18, 20, 24, 30, 40, 50, 58]);
                // Each leg = hyp / √2 = hyp√2 / 2
                // Perimeter = 2 * (hyp√2/2) + hyp = hyp√2 + hyp = hyp + hyp√2

                const correctAnswer = `${hyp} + ${hyp}√2`;

                // Common traps
                const wrongAnswers = [
                    `${hyp / 2}√2`,                    // Just one leg
                    `${hyp}√2`,                        // Just the two legs, forgot hypotenuse
                    `${hyp} + ${hyp * 2}√2`            // Doubled incorrectly
                ];

                const options = [correctAnswer, ...wrongAnswers];
                options.sort(() => Math.random() - 0.5);
                const correctIndex = options.indexOf(correctAnswer);
                const letters = ['A', 'B', 'C', 'D'];

                return {
                    unit: 4,
                    question: `An isosceles right triangle has a hypotenuse of length ${hyp} inches. What is the perimeter, in inches, of this triangle?`,
                    answer: letters[correctIndex],
                    options: options.map((val, i) => `${letters[i]}) ${val}`),
                    hint: 'An isosceles right triangle is a 45-45-90 triangle. Find each leg first, then add all three sides.',
                    solution: `<strong>45-45-90 Triangle:</strong> sides in ratio 1 : 1 : √2<br><br>
                        <strong>Given:</strong> Hypotenuse = ${hyp}<br><br>
                        <strong>Find each leg:</strong><br>
                        leg = ${hyp} / √2 = ${hyp}√2 / 2 = ${hyp/2}√2<br><br>
                        <strong>Perimeter:</strong><br>
                        = leg + leg + hypotenuse<br>
                        = ${hyp/2}√2 + ${hyp/2}√2 + ${hyp}<br>
                        = <strong>${hyp} + ${hyp}√2</strong><br><br>
                        <strong>Trap:</strong> ${hyp}√2 is just the two legs—don't forget the hypotenuse!`,
                    hard: true
                };
            } else {
                // 30-60-90 triangle: short = x, medium = x√3, hypotenuse = 2x
                // Given hypotenuse, find perimeter
                const x = randChoice([5, 6, 7, 8, 10, 12, 15]);
                const hyp = x * 2;
                // Perimeter = x + x√3 + 2x = 3x + x√3

                const correctAnswer = `${3 * x} + ${x}√3`;

                // Common traps
                const wrongAnswers = [
                    `${x} + ${x}√3`,                   // Forgot the hypotenuse
                    `${2 * x} + ${x}√3`,               // Only added short + medium
                    `${3 * x}√3`                       // Multiplied incorrectly
                ];

                const options = [correctAnswer, ...wrongAnswers];
                options.sort(() => Math.random() - 0.5);
                const correctIndex = options.indexOf(correctAnswer);
                const letters = ['A', 'B', 'C', 'D'];

                return {
                    unit: 4,
                    question: `A 30-60-90 triangle has a hypotenuse of length ${hyp}. What is the perimeter of this triangle?`,
                    answer: letters[correctIndex],
                    options: options.map((val, i) => `${letters[i]}) ${val}`),
                    hint: 'In a 30-60-90 triangle, sides are in ratio 1 : √3 : 2. Find all three sides, then add them.',
                    solution: `<strong>30-60-90 Triangle:</strong> sides in ratio 1 : √3 : 2<br><br>
                        <strong>Given:</strong> Hypotenuse = ${hyp}<br><br>
                        <strong>Find all sides:</strong><br>
                        • Shortest (opposite 30°) = ${hyp} / 2 = ${x}<br>
                        • Middle (opposite 60°) = ${x}√3<br>
                        • Hypotenuse = ${hyp}<br><br>
                        <strong>Perimeter:</strong><br>
                        = ${x} + ${x}√3 + ${hyp}<br>
                        = <strong>${3 * x} + ${x}√3</strong>`,
                    hard: true
                };
            }
        }
    ]
};

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('sat-math', satUnit4);
}
