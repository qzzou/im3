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
            answer: '8',
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
            answer: '10',
            hint: 'In a 30-60-90 triangle, sides are in ratio 1 : √3 : 2. The shortest side is opposite 30°.',
            solution: `<strong>30-60-90 Triangle Ratios:</strong><br>
                Shortest (opposite 30°) : Middle (opposite 60°) : Hypotenuse<br>
                = 1 : √3 : 2<br><br>
                <strong>Apply:</strong><br>
                Shortest = 5<br>
                Hypotenuse = 5 × 2 = <strong>10</strong>`,
            hard: false
        },
        {
            id: 'sat4-3',
            unit: 4,
            question: 'In a right triangle, sin A = 3/5. What is cos A?',
            answer: '4/5',
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
            answer: '6π',
            hint: 'Sector area = (angle/360°) × πr²',
            solution: `<strong>Sector Area Formula:</strong><br>
                Area = (θ/360°) × πr²<br><br>
                <strong>Calculate:</strong><br>
                Area = (60°/360°) × π(6)²<br>
                = (1/6) × 36π<br>
                = <strong>6π</strong>`,
            hard: false
        },
        {
            id: 'sat4-5',
            unit: 4,
            question: 'What is the center of the circle (x - 3)² + (y + 2)² = 25? (Enter as: x,y)',
            answer: '3,-2',
            hint: 'In (x - h)² + (y - k)² = r², the center is (h, k). Watch the signs!',
            solution: `<strong>Circle Equation:</strong><br>
                (x - h)² + (y - k)² = r²<br>
                Center = (h, k)<br><br>
                <strong>Identify:</strong><br>
                (x - 3)² + (y + 2)² = 25<br>
                (x - 3)² + (y - (-2))² = 25<br><br>
                <strong>Center: (3, -2)</strong>`,
            hard: false
        },
        {
            id: 'sat4-6',
            unit: 4,
            question: 'Two similar triangles have corresponding sides of 4 and 10. If the smaller triangle has an area of 8, what is the area of the larger triangle?',
            answer: '50',
            hint: 'For similar figures, the ratio of areas equals the square of the ratio of corresponding sides.',
            solution: `<strong>Key Principle:</strong><br>
                If sides are in ratio a:b, areas are in ratio a²:b²<br><br>
                <strong>Find ratio:</strong><br>
                Side ratio = 4:10 = 2:5<br>
                Area ratio = 4:25<br><br>
                <strong>Calculate:</strong><br>
                8/x = 4/25<br>
                4x = 200<br>
                x = <strong>50</strong>`,
            hard: true
        }
    ],

    generators: [
        // Type 1: Pythagorean theorem
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
            const givenType = giveAC ? 'leg' : 'leg';
            const givenType2 = giveAC ? 'hypotenuse' : 'other leg';
            const findType = giveAC ? 'other leg' : 'hypotenuse';

            return {
                unit: 4,
                question: `In a right triangle, one ${givenType} is ${given1} and the ${givenType2} is ${given2}. What is the ${findType}?`,
                answer: `${answer}`,
                hint: 'Use Pythagorean theorem: a² + b² = c².',
                solution: `<strong>Pythagorean Theorem:</strong> a² + b² = c²<br><br>
                    ${giveAC ? `${given1}² + x² = ${given2}²` : `${given1}² + ${given2}² = x²`}<br>
                    ${giveAC ? `${given1*given1} + x² = ${given2*given2}` : `${given1*given1} + ${given2*given2} = x²`}<br>
                    ${giveAC ? `x² = ${given2*given2 - given1*given1}` : `x² = ${given1*given1 + given2*given2}`}<br>
                    x = <strong>${answer}</strong>`,
                hard: false
            };
        },
        // Type 2: Special right triangles
        function() {
            const is45 = Math.random() > 0.5;
            const givenSide = randInt(2, 10);

            if (is45) {
                // 45-45-90: 1:1:√2
                const askHyp = Math.random() > 0.5;
                const answer = askHyp ? `${givenSide}√2` : givenSide;

                return {
                    unit: 4,
                    question: `In a 45-45-90 triangle, ${askHyp ? 'each leg' : 'the hypotenuse'} is ${askHyp ? givenSide : givenSide + '√2'}. What is the ${askHyp ? 'hypotenuse' : 'length of each leg'}?`,
                    answer: `${answer}`,
                    hint: 'In a 45-45-90 triangle, sides are in ratio 1 : 1 : √2.',
                    solution: `<strong>45-45-90 Ratios:</strong> 1 : 1 : √2<br><br>
                        ${askHyp ? `Leg = ${givenSide}, so Hypotenuse = ${givenSide} × √2 = <strong>${givenSide}√2</strong>` : `Hypotenuse = ${givenSide}√2, so each Leg = <strong>${givenSide}</strong>`}`,
                    hard: false
                };
            } else {
                // 30-60-90: 1:√3:2
                const shortestGiven = Math.random() > 0.5;
                const answer = shortestGiven ? givenSide * 2 : givenSide / 2;

                if (!Number.isInteger(answer)) return satUnit4.generators[1]();

                return {
                    unit: 4,
                    question: `In a 30-60-90 triangle, the ${shortestGiven ? 'shortest side' : 'hypotenuse'} is ${shortestGiven ? givenSide : givenSide}. What is the ${shortestGiven ? 'hypotenuse' : 'shortest side'}?`,
                    answer: `${answer}`,
                    hint: 'In a 30-60-90 triangle, sides are in ratio 1 : √3 : 2.',
                    solution: `<strong>30-60-90 Ratios:</strong> 1 : √3 : 2<br><br>
                        ${shortestGiven ? `Shortest = ${givenSide}, so Hypotenuse = ${givenSide} × 2 = <strong>${answer}</strong>` : `Hypotenuse = ${givenSide}, so Shortest = ${givenSide} / 2 = <strong>${answer}</strong>`}`,
                    hard: false
                };
            }
        },
        // Type 3: Trig ratio (3-4-5 variations)
        function() {
            const multiplier = randInt(1, 3);
            const opp = 3 * multiplier;
            const adj = 4 * multiplier;
            const hyp = 5 * multiplier;

            const givenSin = Math.random() > 0.5;
            const findCos = Math.random() > 0.5;

            if (givenSin) {
                return {
                    unit: 4,
                    question: `In a right triangle, sin A = ${opp}/${hyp}. What is cos A?`,
                    answer: `${adj}/${hyp}`,
                    hint: 'Use sin²A + cos²A = 1, or recognize this as a multiple of a 3-4-5 triangle.',
                    solution: `<strong>Pythagorean Identity:</strong><br>
                        sin²A + cos²A = 1<br>
                        (${opp}/${hyp})² + cos²A = 1<br>
                        cos²A = 1 - ${opp*opp}/${hyp*hyp} = ${adj*adj}/${hyp*hyp}<br>
                        cos A = <strong>${adj}/${hyp}</strong>`,
                    hard: false
                };
            } else {
                return {
                    unit: 4,
                    question: `In a right triangle, cos A = ${adj}/${hyp}. What is tan A?`,
                    answer: `${opp}/${adj}`,
                    hint: 'Find the opposite side, then use tan = opposite/adjacent.',
                    solution: `<strong>Find opposite side:</strong><br>
                        adj² + opp² = hyp²<br>
                        ${adj}² + opp² = ${hyp}²<br>
                        opp = ${opp}<br><br>
                        tan A = opp/adj = <strong>${opp}/${adj}</strong>`,
                    hard: false
                };
            }
        },
        // Type 4: Sector area
        function() {
            const r = randChoice([3, 4, 5, 6, 8, 9, 10, 12]);
            const angle = randChoice([30, 45, 60, 90, 120, 180]);

            const areaNum = (angle / 360) * r * r;
            let answer;
            if (Number.isInteger(areaNum)) {
                answer = `${areaNum}π`;
            } else {
                // Express as fraction
                const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
                const num = angle * r * r;
                const den = 360;
                const g = gcd(num, den);
                answer = num/g === den/g ? `${num/g}π` : `${num/g}π/${den/g}`;
            }

            return {
                unit: 4,
                question: `A circle has a radius of ${r}. What is the area of a sector with a central angle of ${angle}°? (Express in terms of π)`,
                answer: answer,
                hint: 'Sector area = (angle/360°) × πr²',
                solution: `<strong>Sector Area Formula:</strong><br>
                    Area = (θ/360°) × πr²<br><br>
                    <strong>Calculate:</strong><br>
                    Area = (${angle}°/360°) × π(${r})²<br>
                    = (${angle}/360) × ${r*r}π<br>
                    = <strong>${answer}</strong>`,
                hard: false
            };
        },
        // Type 5: Circle center
        function() {
            const h = randInt(-8, 8);
            const k = randInt(-8, 8);
            const r = randInt(2, 10);

            const hPart = h >= 0 ? `(x - ${h})` : `(x + ${Math.abs(h)})`;
            const kPart = k >= 0 ? `(y - ${k})` : `(y + ${Math.abs(k)})`;

            return {
                unit: 4,
                question: `What is the center of the circle ${hPart}² + ${kPart}² = ${r*r}? (Enter as: x,y)`,
                answer: `${h},${k}`,
                hint: 'In (x - h)² + (y - k)² = r², the center is (h, k). Watch the signs carefully!',
                solution: `<strong>Circle Equation:</strong><br>
                    (x - h)² + (y - k)² = r²<br>
                    Center = (h, k)<br><br>
                    <strong>Rewrite to identify:</strong><br>
                    ${hPart}² + ${kPart}² = ${r*r}<br>
                    (x - ${h})² + (y - ${k})² = ${r*r}<br><br>
                    <strong>Center: (${h}, ${k})</strong>`,
                hard: false
            };
        },
        // Type 6: Similar triangles area ratio
        function() {
            const smallSide = randInt(2, 6);
            const multiplier = randInt(2, 4);
            const largeSide = smallSide * multiplier;

            const smallArea = randInt(4, 20);
            const largeArea = smallArea * multiplier * multiplier;

            const giveSmall = Math.random() > 0.5;

            return {
                unit: 4,
                question: `Two similar triangles have corresponding sides of ${smallSide} and ${largeSide}. If the ${giveSmall ? 'smaller' : 'larger'} triangle has an area of ${giveSmall ? smallArea : largeArea}, what is the area of the ${giveSmall ? 'larger' : 'smaller'} triangle?`,
                answer: `${giveSmall ? largeArea : smallArea}`,
                hint: 'For similar figures, the ratio of areas equals the square of the ratio of corresponding sides.',
                solution: `<strong>Key Principle:</strong><br>
                    If sides are in ratio a:b, areas are in ratio a²:b²<br><br>
                    <strong>Side ratio:</strong> ${smallSide}:${largeSide} = 1:${multiplier}<br>
                    <strong>Area ratio:</strong> 1:${multiplier*multiplier}<br><br>
                    <strong>Calculate:</strong><br>
                    ${giveSmall ? smallArea : largeArea} × ${giveSmall ? multiplier*multiplier : `1/${multiplier*multiplier}`} = <strong>${giveSmall ? largeArea : smallArea}</strong>`,
                hard: true
            };
        }
    ]
};

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('sat-math', satUnit4);
}
