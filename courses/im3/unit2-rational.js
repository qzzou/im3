// IM3 Unit 2: Rational Functions & Expressions
// This file contains lessons, exercises, and problem generators for Unit 2

const unit2 = {
    id: 2,
    name: 'Unit 2',
    title: 'Rational Functions & Expressions',

    lessons: [
        {
            title: '2.1 Simplifying Rational Expressions',
            content: `
                <p>A <strong>rational expression</strong> is a fraction where numerator and denominator are polynomials.</p>
                <div class="formula-box">
                    <strong>To simplify:</strong><br>
                    1. Factor numerator and denominator completely<br>
                    2. Cancel common factors<br>
                    3. State restrictions (values that make denominator = 0)
                </div>
            `
        },
        {
            title: '2.2 Operations with Rational Expressions',
            content: `
                <div class="formula-box">
                    <strong>Multiplication:</strong> (a/b) · (c/d) = ac/bd (then simplify)<br><br>
                    <strong>Division:</strong> (a/b) ÷ (c/d) = (a/b) · (d/c)<br><br>
                    <strong>Addition/Subtraction:</strong><br>
                    1. Find LCD (Least Common Denominator)<br>
                    2. Rewrite each fraction with LCD<br>
                    3. Add/subtract numerators, keep denominator<br>
                    4. Simplify
                </div>
            `
        },
        {
            title: '2.3 Graphing Rational Functions',
            content: `
                <div class="formula-box">
                    <strong>Key Features:</strong><br>
                    • <strong>Vertical Asymptotes:</strong> Where denominator = 0 (and factor doesn't cancel)<br>
                    • <strong>Holes:</strong> Where factor cancels<br>
                    • <strong>Horizontal Asymptote:</strong><br>
                    &nbsp;&nbsp;- deg(num) < deg(den): y = 0<br>
                    &nbsp;&nbsp;- deg(num) = deg(den): y = leading coeff ratio<br>
                    &nbsp;&nbsp;- deg(num) > deg(den): No HA (slant asymptote if deg differs by 1)
                </div>
            `
        },
        {
            title: '2.4 Solving Rational Equations',
            content: `
                <div class="formula-box">
                    <strong>Steps to solve:</strong><br>
                    1. Find LCD of all fractions<br>
                    2. Multiply both sides by LCD<br>
                    3. Solve the resulting polynomial equation<br>
                    4. CHECK solutions - exclude any that make original denominator = 0
                </div>
                <div class="example">
                    <h4>Common Mistake Alert!</h4>
                    <p>Always check for <strong>extraneous solutions</strong>. A solution that makes the original denominator = 0 is NOT valid!</p>
                </div>
            `
        }
    ],

    exercises: [
        {
            id: 'u2-1',
            unit: 2,
            question: 'Simplify: (x² - 4x - 5)/(x² - 1)',
            answer: '(x-5)/(x-1)',
            hint: 'Factor both numerator and denominator, then cancel common factors.',
            solution: `<strong>Step 1: Factor numerator</strong><br>
                x² - 4x - 5 = (x - 5)(x + 1)<br><br>
                <strong>Step 2: Factor denominator</strong><br>
                x² - 1 = (x - 1)(x + 1)<br><br>
                <strong>Step 3: Cancel</strong><br>
                (x - 5)(x + 1) / (x - 1)(x + 1)<br>
                = <strong>(x - 5)/(x - 1)</strong>, x ≠ -1`,
            hard: false
        },
        {
            id: 'u2-2',
            unit: 2,
            question: 'Find the vertical asymptote(s) of f(x) = (x+3)/(x² - 9)',
            answer: '3',
            hint: 'Factor the denominator. Holes occur where factors cancel, asymptotes where they don\'t.',
            solution: `<strong>Step 1: Factor</strong><br>
                f(x) = (x + 3)/[(x - 3)(x + 3)]<br><br>
                <strong>Step 2: Identify</strong><br>
                (x + 3) cancels → Hole at x = -3<br>
                (x - 3) doesn't cancel → <strong>VA at x = 3</strong>`,
            hard: false
        },
        {
            id: 'u2-3',
            unit: 2,
            question: 'Simplify: 3/(x+2) - 2/(x-1)',
            answer: '(x-7)/[(x+2)(x-1)]',
            hint: 'Find the LCD, rewrite each fraction, then subtract.',
            solution: `<strong>Step 1: LCD = (x + 2)(x - 1)</strong><br><br>
                <strong>Step 2: Rewrite</strong><br>
                3(x-1)/LCD - 2(x+2)/LCD<br><br>
                <strong>Step 3: Combine</strong><br>
                [3x - 3 - 2x - 4] / [(x+2)(x-1)]<br>
                = <strong>(x - 7)/[(x + 2)(x - 1)]</strong>`,
            hard: true
        },
        {
            id: 'u2-4',
            unit: 2,
            question: 'Solve: 2/x + 3/(x+2) = 1',
            answer: '-1,4',
            answerType: 'zeros',
            zeros: [-1, 4],
            hint: 'Multiply both sides by LCD = x(x+2), then solve the quadratic.',
            solution: `<strong>Step 1: LCD = x(x + 2)</strong><br><br>
                <strong>Step 2: Multiply through</strong><br>
                2(x + 2) + 3x = x(x + 2)<br>
                5x + 4 = x² + 2x<br>
                x² - 3x - 4 = 0<br><br>
                <strong>Step 3: Factor and solve</strong><br>
                (x - 4)(x + 1) = 0<br>
                <strong>x = -1, 4</strong><br><br>
                <strong>Step 4: Check</strong><br>
                Neither makes denominator 0 ✓`,
            hard: true
        },
        {
            id: 'u2-5',
            unit: 2,
            question: 'Find the horizontal asymptote of f(x) = (3x² + 2x - 1)/(2x² - 5)',
            answer: 'y=3/2',
            hint: 'Compare degrees. When equal, HA = ratio of leading coefficients.',
            solution: `<strong>Step 1: Compare degrees</strong><br>
                deg(num) = 2, deg(den) = 2<br>
                Degrees are equal!<br><br>
                <strong>Step 2: Apply rule</strong><br>
                HA = (leading coeff of num)/(leading coeff of den)<br>
                <strong>y = 3/2</strong>`,
            hard: true
        },
        {
            id: 'u2-6',
            unit: 2,
            question: 'Solve: 1/(x-2) + 1/(x+2) = 4/(x²-4)',
            answer: 'nosolution',
            hint: 'Notice x² - 4 = (x-2)(x+2). Solve and check for extraneous solutions!',
            solution: `<strong>Step 1: Rewrite with LCD</strong><br>
                All denominators factor to (x-2)(x+2)<br><br>
                <strong>Step 2: Combine and solve</strong><br>
                (x+2 + x-2) = 4<br>
                2x = 4<br>
                x = 2<br><br>
                <strong>Step 3: Check</strong><br>
                x = 2 makes denominator = 0!<br>
                <strong>No solution</strong> (extraneous)`,
            hard: true
        }
    ],

    generators: [
        // Type 1: Simplify rational expression
        function() {
            const a = randChoice([2, 3, 4, 5]);
            const b = randChoice([-4, -3, -2, 2, 3, 4]);
            const c = randChoice([-3, -2, -1, 1, 2, 3]);

            // Create (x+a)(x+b) / (x+a)(x+c)
            const numExpanded = `x² ${a+b >= 0 ? '+' : '-'} ${Math.abs(a+b)}x ${a*b >= 0 ? '+' : '-'} ${Math.abs(a*b)}`;
            const denExpanded = `x² ${a+c >= 0 ? '+' : '-'} ${Math.abs(a+c)}x ${a*c >= 0 ? '+' : '-'} ${Math.abs(a*c)}`;

            return {
                unit: 2,
                question: `Simplify: (${numExpanded})/(${denExpanded})`,
                answer: `(x${b >= 0 ? '+' : '-'}${Math.abs(b)})/(x${c >= 0 ? '+' : '-'}${Math.abs(c)})`,
                hint: `Factor both numerator and denominator, then cancel common factors.`,
                solution: `<strong>Step 1: Factor numerator</strong><br>
                    ${numExpanded} = (x ${a >= 0 ? '+' : '-'} ${Math.abs(a)})(x ${b >= 0 ? '+' : '-'} ${Math.abs(b)})<br><br>
                    <strong>Step 2: Factor denominator</strong><br>
                    ${denExpanded} = (x ${a >= 0 ? '+' : '-'} ${Math.abs(a)})(x ${c >= 0 ? '+' : '-'} ${Math.abs(c)})<br><br>
                    <strong>Step 3: Cancel (x ${a >= 0 ? '+' : '-'} ${Math.abs(a)})</strong><br>
                    = <strong>(x ${b >= 0 ? '+' : '-'} ${Math.abs(b)})/(x ${c >= 0 ? '+' : '-'} ${Math.abs(c)})</strong>, x ≠ ${-a}`,
                hard: false
            };
        },
        // Type 2: Find vertical asymptote
        function() {
            const a = randChoice([1, 2, 3, 4]);
            const b = randChoice([-3, -2, 2, 3]);

            // f(x) = (x+a)/[(x-b)(x+a)] has hole at x=-a, VA at x=b
            return {
                unit: 2,
                question: `Find the vertical asymptote(s) of f(x) = (x ${a >= 0 ? '+' : '-'} ${Math.abs(a)})/(x² ${-b+a >= 0 ? '+' : '-'} ${Math.abs(-b+a)}x ${-b*a >= 0 ? '+' : '-'} ${Math.abs(-b*a)})`,
                answer: `${b}`,
                hint: `Factor the denominator. Vertical asymptotes occur where denominator = 0 and the factor doesn't cancel.`,
                solution: `<strong>Step 1: Factor denominator</strong><br>
                    x² ${-b+a >= 0 ? '+' : '-'} ${Math.abs(-b+a)}x ${-b*a >= 0 ? '+' : '-'} ${Math.abs(-b*a)} = (x ${-b >= 0 ? '+' : '-'} ${Math.abs(b)})(x ${a >= 0 ? '+' : '-'} ${Math.abs(a)})<br><br>
                    <strong>Step 2: Simplify</strong><br>
                    f(x) = (x ${a >= 0 ? '+' : '-'} ${Math.abs(a)})/[(x ${-b >= 0 ? '+' : '-'} ${Math.abs(b)})(x ${a >= 0 ? '+' : '-'} ${Math.abs(a)})]<br><br>
                    <strong>Step 3: Cancel</strong><br>
                    (x ${a >= 0 ? '+' : '-'} ${Math.abs(a)}) cancels → Hole at x = ${-a}<br>
                    (x ${-b >= 0 ? '+' : '-'} ${Math.abs(b)}) remains → <strong>VA at x = ${b}</strong>`,
                hard: false
            };
        },
        // Type 3: Add/subtract rational expressions
        function() {
            const a = randChoice([2, 3, 4, 5]);
            const b = randChoice([1, 2, 3]);
            const c = randChoice([-3, -2, 2, 3]);
            const d = randChoice([-4, -3, 3, 4]);

            // a/(x+c) - b/(x+d)
            const numResult = a*d - a*c - b*c + b*d; // Simplified: after LCD
            const constResult = a*d - b*c;

            return {
                unit: 2,
                question: `Simplify: ${a}/(x ${c >= 0 ? '+' : '-'} ${Math.abs(c)}) - ${b}/(x ${d >= 0 ? '+' : '-'} ${Math.abs(d)})`,
                answer: `(${a-b}x${constResult >= 0 ? '+' : ''}${constResult})/[(x${c >= 0 ? '+' : ''}${c})(x${d >= 0 ? '+' : ''}${d})]`,
                hint: `Find the LCD = (x ${c >= 0 ? '+' : '-'} ${Math.abs(c)})(x ${d >= 0 ? '+' : '-'} ${Math.abs(d)}), rewrite each fraction, then subtract.`,
                solution: `<strong>Step 1: LCD = (x ${c >= 0 ? '+' : '-'} ${Math.abs(c)})(x ${d >= 0 ? '+' : '-'} ${Math.abs(d)})</strong><br><br>
                    <strong>Step 2: Rewrite with LCD</strong><br>
                    ${a}(x ${d >= 0 ? '+' : '-'} ${Math.abs(d)})/LCD - ${b}(x ${c >= 0 ? '+' : '-'} ${Math.abs(c)})/LCD<br><br>
                    <strong>Step 3: Expand numerators</strong><br>
                    (${a}x ${a*d >= 0 ? '+' : '-'} ${Math.abs(a*d)} - ${b}x ${-b*c >= 0 ? '+' : '-'} ${Math.abs(b*c)})/LCD<br><br>
                    <strong>Step 4: Combine</strong><br>
                    = <strong>(${a-b}x ${constResult >= 0 ? '+' : '-'} ${Math.abs(constResult)})/[(x ${c >= 0 ? '+' : '-'} ${Math.abs(c)})(x ${d >= 0 ? '+' : '-'} ${Math.abs(d)})]</strong>`,
                hard: true
            };
        },
        // Type 4: Solve rational equation
        function() {
            const a = randChoice([1, 2, 3]);
            const b = randChoice([2, 3, 4]);
            const c = randChoice([-3, -2, 2, 3]);

            // a/x + b/(x+c) = 1, solutions from quadratic
            // a(x+c) + bx = x(x+c)
            // ax + ac + bx = x² + cx
            // x² + cx - ax - bx - ac = 0
            // x² + (c-a-b)x - ac = 0

            const p = c - a - b;
            const q = -a * c;

            // Use quadratic formula to find roots
            const disc = p*p - 4*q;
            if (disc < 0) return unit2.generators[0](); // No real solutions, retry

            const sqrtDisc = Math.sqrt(disc);
            const r1 = (-p + sqrtDisc) / 2;
            const r2 = (-p - sqrtDisc) / 2;

            // Check if roots are nice integers
            if (!Number.isInteger(r1) || !Number.isInteger(r2)) return unit2.generators[0]();
            if (r1 === 0 || r2 === 0 || r1 === -c || r2 === -c) return unit2.generators[0](); // Extraneous

            const zeros = [r1, r2].sort((a,b) => a-b);

            return {
                unit: 2,
                question: `Solve: ${a}/x + ${b}/(x ${c >= 0 ? '+' : '-'} ${Math.abs(c)}) = 1`,
                answer: zeros.join(','),
                answerType: 'zeros',
                zeros: zeros,
                hint: `Multiply both sides by LCD = x(x ${c >= 0 ? '+' : '-'} ${Math.abs(c)}), then solve the quadratic.`,
                solution: `<strong>Step 1: LCD = x(x ${c >= 0 ? '+' : '-'} ${Math.abs(c)})</strong><br><br>
                    <strong>Step 2: Multiply through</strong><br>
                    ${a}(x ${c >= 0 ? '+' : '-'} ${Math.abs(c)}) + ${b}x = x(x ${c >= 0 ? '+' : '-'} ${Math.abs(c)})<br>
                    ${a}x ${a*c >= 0 ? '+' : '-'} ${Math.abs(a*c)} + ${b}x = x² ${c >= 0 ? '+' : '-'} ${Math.abs(c)}x<br>
                    x² ${p >= 0 ? '+' : '-'} ${Math.abs(p)}x ${q >= 0 ? '+' : '-'} ${Math.abs(q)} = 0<br><br>
                    <strong>Step 3: Factor and solve</strong><br>
                    (x ${-r1 >= 0 ? '+' : '-'} ${Math.abs(r1)})(x ${-r2 >= 0 ? '+' : '-'} ${Math.abs(r2)}) = 0<br>
                    <strong>x = ${zeros.join(', ')}</strong><br><br>
                    <strong>Step 4: Check - neither makes denominator 0 ✓</strong>`,
                hard: true
            };
        },
        // Type 5: Find horizontal asymptote
        function() {
            const a = randChoice([2, 3, 4, 5]);
            const b = randChoice([1, 2, 3, 4]);
            const c = randChoice([-3, -2, 2, 3]);
            const d = randChoice([-4, -3, 3, 4]);

            return {
                unit: 2,
                question: `Find the horizontal asymptote of f(x) = (${a}x² ${c >= 0 ? '+' : '-'} ${Math.abs(c)}x + 1)/(${b}x² ${d >= 0 ? '+' : '-'} ${Math.abs(d)})`,
                answer: `y=${a}/${b}`,
                hint: `Compare degrees of numerator and denominator. When equal, HA = ratio of leading coefficients.`,
                solution: `<strong>Step 1: Compare degrees</strong><br>
                    deg(numerator) = 2<br>
                    deg(denominator) = 2<br>
                    Degrees are equal!<br><br>
                    <strong>Step 2: Apply rule</strong><br>
                    When degrees are equal, HA = (leading coeff of num)/(leading coeff of den)<br>
                    HA: <strong>y = ${a}/${b}</strong>`,
                hard: false
            };
        },
        // Type 6: Extraneous solution problem
        function() {
            const a = randChoice([2, 3, 4]);

            // 1/(x-a) + 1/(x+a) = 2a/(x²-a²) always gives x=a as extraneous
            return {
                unit: 2,
                question: `Solve: 1/(x - ${a}) + 1/(x + ${a}) = ${2*a}/(x² - ${a*a})`,
                answer: 'nosolution',
                hint: `Notice x² - ${a*a} = (x - ${a})(x + ${a}). Solve and check for extraneous solutions!`,
                solution: `<strong>Step 1: Factor denominator</strong><br>
                    x² - ${a*a} = (x - ${a})(x + ${a})<br><br>
                    <strong>Step 2: Rewrite with LCD = (x - ${a})(x + ${a})</strong><br>
                    (x + ${a})/LCD + (x - ${a})/LCD = ${2*a}/LCD<br><br>
                    <strong>Step 3: Combine and solve</strong><br>
                    x + ${a} + x - ${a} = ${2*a}<br>
                    2x = ${2*a}<br>
                    x = ${a}<br><br>
                    <strong>Step 4: Check!</strong><br>
                    x = ${a} makes denominator = 0!<br>
                    <strong>No solution</strong> (extraneous)`,
                hard: true
            };
        }
    ]
};

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('im3', unit2);
}
