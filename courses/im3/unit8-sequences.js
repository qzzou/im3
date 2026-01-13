// IM3 Unit 8: Sequences & Series
// This file contains lessons, exercises, and problem generators for Unit 8

const unit8 = {
    id: 8,
    name: 'Unit 8',
    title: 'Sequences & Series',

    lessons: [
        {
            title: '8.1 Arithmetic Sequences',
            content: `
                <p>An <strong>arithmetic sequence</strong> has a constant difference (d) between consecutive terms.</p>
                <div class="formula-box">
                    <strong>Explicit Formula:</strong><br>
                    aₙ = a₁ + (n - 1)d<br><br>
                    <strong>Where:</strong><br>
                    • aₙ = nth term<br>
                    • a₁ = first term<br>
                    • d = common difference<br>
                    • n = term number
                </div>
                <div class="example">
                    <h4>Example: 3, 7, 11, 15, ...</h4>
                    <div class="solution">
                        d = 7 - 3 = 4<br>
                        aₙ = 3 + (n-1)(4) = 4n - 1
                    </div>
                </div>
            `
        },
        {
            title: '8.2 Geometric Sequences',
            content: `
                <p>A <strong>geometric sequence</strong> has a constant ratio (r) between consecutive terms.</p>
                <div class="formula-box">
                    <strong>Explicit Formula:</strong><br>
                    aₙ = a₁ · r^(n-1)<br><br>
                    <strong>Where:</strong><br>
                    • r = common ratio = aₙ₊₁/aₙ<br>
                    • |r| > 1: sequence grows<br>
                    • |r| < 1: sequence shrinks
                </div>
                <div class="example">
                    <h4>Example: 2, 6, 18, 54, ...</h4>
                    <div class="solution">
                        r = 6/2 = 3<br>
                        aₙ = 2 · 3^(n-1)
                    </div>
                </div>
            `
        },
        {
            title: '8.3 Arithmetic Series',
            content: `
                <div class="formula-box">
                    <strong>Sum of first n terms:</strong><br>
                    Sₙ = n(a₁ + aₙ)/2<br>
                    &nbsp;&nbsp;&nbsp;= n[2a₁ + (n-1)d]/2<br><br>
                    <strong>Useful fact:</strong><br>
                    Sum of 1 + 2 + 3 + ... + n = n(n+1)/2
                </div>
            `
        },
        {
            title: '8.4 Geometric Series',
            content: `
                <div class="formula-box">
                    <strong>Finite Geometric Series:</strong><br>
                    Sₙ = a₁(1 - rⁿ)/(1 - r), when r ≠ 1<br><br>
                    <strong>Infinite Geometric Series (|r| < 1):</strong><br>
                    S∞ = a₁/(1 - r)<br><br>
                    <strong>If |r| ≥ 1:</strong> infinite series diverges (no sum)
                </div>
                <div class="example">
                    <h4>Example: 1 + 1/2 + 1/4 + 1/8 + ...</h4>
                    <div class="solution">
                        a₁ = 1, r = 1/2<br>
                        S∞ = 1/(1 - 1/2) = 2
                    </div>
                </div>
            `
        }
    ],

    exercises: [
        {
            id: 'u8-1',
            unit: 8,
            question: 'Find the 20th term of the arithmetic sequence: 5, 8, 11, 14, ...',
            answer: '62',
            hint: 'First find d, then use aₙ = a₁ + (n-1)d.',
            solution: `<strong>Step 1: Find common difference</strong><br>
                d = 8 - 5 = 3<br><br>
                <strong>Step 2: Apply formula</strong><br>
                aₙ = a₁ + (n - 1)d<br>
                a₂₀ = 5 + (20 - 1)(3)<br>
                = 5 + 57<br>
                = <strong>62</strong>`,
            hard: false
        },
        {
            id: 'u8-2',
            unit: 8,
            question: 'Find the 8th term of the geometric sequence: 3, 6, 12, 24, ...',
            answer: '384',
            hint: 'First find r, then use aₙ = a₁ · r^(n-1).',
            solution: `<strong>Step 1: Find common ratio</strong><br>
                r = 6/3 = 2<br><br>
                <strong>Step 2: Apply formula</strong><br>
                aₙ = a₁ · r^(n-1)<br>
                a₈ = 3 · 2^(8-1)<br>
                = 3 · 2⁷<br>
                = 3 · 128<br>
                = <strong>384</strong>`,
            hard: false
        },
        {
            id: 'u8-3',
            unit: 8,
            question: 'Find the sum: 4 + 7 + 10 + ... + 61',
            answer: '650',
            hint: 'First find how many terms (use the explicit formula), then use Sₙ = n(a₁ + aₙ)/2.',
            solution: `<strong>Step 1: Find n</strong><br>
                aₙ = a₁ + (n-1)d<br>
                61 = 4 + (n-1)(3)<br>
                57 = 3(n-1)<br>
                n = 20 terms<br><br>
                <strong>Step 2: Find sum</strong><br>
                Sₙ = n(a₁ + aₙ)/2<br>
                S₂₀ = 20(4 + 61)/2<br>
                = 20(65)/2<br>
                = <strong>650</strong>`,
            hard: true
        },
        {
            id: 'u8-4',
            unit: 8,
            question: 'Find the sum of the first 6 terms: 2 + 6 + 18 + 54 + ...',
            answer: '728',
            hint: 'This is geometric with r = 3. Use Sₙ = a₁(1 - rⁿ)/(1 - r).',
            solution: `<strong>Step 1: Identify values</strong><br>
                a₁ = 2, r = 3, n = 6<br><br>
                <strong>Step 2: Apply formula</strong><br>
                Sₙ = a₁(1 - rⁿ)/(1 - r)<br>
                S₆ = 2(1 - 3⁶)/(1 - 3)<br>
                = 2(1 - 729)/(-2)<br>
                = 2(-728)/(-2)<br>
                = <strong>728</strong>`,
            hard: true
        },
        {
            id: 'u8-5',
            unit: 8,
            question: 'Find the sum of the infinite series: 12 + 6 + 3 + 1.5 + ...',
            answer: '24',
            hint: 'Find r = 6/12 = 1/2. Since |r| < 1, use S∞ = a₁/(1-r).',
            solution: `<strong>Step 1: Find common ratio</strong><br>
                r = 6/12 = 1/2<br>
                Since |r| < 1, series converges<br><br>
                <strong>Step 2: Apply infinite sum formula</strong><br>
                S∞ = a₁/(1 - r)<br>
                = 12/(1 - 1/2)<br>
                = 12/(1/2)<br>
                = <strong>24</strong>`,
            hard: false
        },
        {
            id: 'u8-6',
            unit: 8,
            question: 'Write the explicit formula for: 7, 3, -1, -5, ...',
            answer: 'aₙ=-4n+11',
            hint: 'This is arithmetic with d = -4. Use aₙ = a₁ + (n-1)d and simplify.',
            solution: `<strong>Step 1: Find common difference</strong><br>
                d = 3 - 7 = -4<br><br>
                <strong>Step 2: Write formula</strong><br>
                aₙ = a₁ + (n - 1)d<br>
                aₙ = 7 + (n - 1)(-4)<br>
                aₙ = 7 - 4n + 4<br>
                <strong>aₙ = -4n + 11</strong>`,
            hard: false
        }
    ],

    generators: [
        // Type 1: Find nth term of arithmetic sequence
        function() {
            const a1 = randChoice([2, 3, 4, 5, 6, 7]);
            const d = randChoice([2, 3, 4, 5, 6]);
            const n = randChoice([15, 18, 20, 25, 30]);

            const an = a1 + (n - 1) * d;
            const term2 = a1 + d;
            const term3 = a1 + 2*d;
            const term4 = a1 + 3*d;

            return {
                unit: 8,
                question: `Find the ${n}th term of the arithmetic sequence: ${a1}, ${term2}, ${term3}, ${term4}, ...`,
                answer: `${an}`,
                hint: `First find d = ${d}, then use aₙ = a₁ + (n-1)d.`,
                solution: `<strong>Step 1: Find common difference</strong><br>
                    d = ${term2} - ${a1} = ${d}<br><br>
                    <strong>Step 2: Apply formula</strong><br>
                    aₙ = a₁ + (n - 1)d<br>
                    a${subscript(n)} = ${a1} + (${n} - 1)(${d})<br>
                    = ${a1} + ${(n-1)*d}<br>
                    = <strong>${an}</strong>`,
                hard: false
            };
        },
        // Type 2: Find nth term of geometric sequence
        function() {
            const a1 = randChoice([2, 3, 4, 5]);
            const r = randChoice([2, 3]);
            const n = randChoice([6, 7, 8]);

            const an = a1 * Math.pow(r, n - 1);
            const term2 = a1 * r;
            const term3 = a1 * r * r;
            const term4 = a1 * r * r * r;

            return {
                unit: 8,
                question: `Find the ${n}th term of the geometric sequence: ${a1}, ${term2}, ${term3}, ${term4}, ...`,
                answer: `${an}`,
                hint: `First find r = ${r}, then use aₙ = a₁ · r^(n-1).`,
                solution: `<strong>Step 1: Find common ratio</strong><br>
                    r = ${term2}/${a1} = ${r}<br><br>
                    <strong>Step 2: Apply formula</strong><br>
                    aₙ = a₁ · r^(n-1)<br>
                    a${subscript(n)} = ${a1} · ${r}^(${n}-1)<br>
                    = ${a1} · ${r}^${n-1}<br>
                    = ${a1} · ${Math.pow(r, n-1)}<br>
                    = <strong>${an}</strong>`,
                hard: false
            };
        },
        // Type 3: Sum of arithmetic series
        function() {
            const a1 = randChoice([2, 3, 4, 5]);
            const d = randChoice([3, 4, 5, 6]);
            const n = randChoice([10, 12, 15, 20]);

            const an = a1 + (n - 1) * d;
            const sum = n * (a1 + an) / 2;

            const term2 = a1 + d;
            const term3 = a1 + 2*d;

            return {
                unit: 8,
                question: `Find the sum: ${a1} + ${term2} + ${term3} + ... + ${an}`,
                answer: `${sum}`,
                hint: `First find how many terms using aₙ = a₁ + (n-1)d, then use Sₙ = n(a₁ + aₙ)/2.`,
                solution: `<strong>Step 1: Find n</strong><br>
                    d = ${d}<br>
                    aₙ = a₁ + (n-1)d<br>
                    ${an} = ${a1} + (n-1)(${d})<br>
                    n = ${n} terms<br><br>
                    <strong>Step 2: Find sum</strong><br>
                    Sₙ = n(a₁ + aₙ)/2<br>
                    S${subscript(n)} = ${n}(${a1} + ${an})/2<br>
                    = ${n}(${a1 + an})/2<br>
                    = <strong>${sum}</strong>`,
                hard: true
            };
        },
        // Type 4: Sum of finite geometric series
        function() {
            const a1 = randChoice([2, 3, 4, 5]);
            const r = randChoice([2, 3]);
            const n = randChoice([5, 6, 7]);

            const rn = Math.pow(r, n);
            const sum = a1 * (1 - rn) / (1 - r);

            const term2 = a1 * r;
            const term3 = a1 * r * r;
            const term4 = a1 * r * r * r;

            return {
                unit: 8,
                question: `Find the sum of the first ${n} terms: ${a1} + ${term2} + ${term3} + ${term4} + ...`,
                answer: `${sum}`,
                hint: `This is geometric with r = ${r}. Use Sₙ = a₁(1 - rⁿ)/(1 - r).`,
                solution: `<strong>Step 1: Identify values</strong><br>
                    a₁ = ${a1}, r = ${r}, n = ${n}<br><br>
                    <strong>Step 2: Apply formula</strong><br>
                    Sₙ = a₁(1 - rⁿ)/(1 - r)<br>
                    S${subscript(n)} = ${a1}(1 - ${r}^${n})/(1 - ${r})<br>
                    = ${a1}(1 - ${rn})/(${1-r})<br>
                    = ${a1}(${1 - rn})/(${1-r})<br>
                    = <strong>${sum}</strong>`,
                hard: true
            };
        },
        // Type 5: Infinite geometric series
        function() {
            const a1 = randChoice([8, 12, 16, 18, 24, 27, 32]);
            const rChoices = [{num: 1, den: 2}, {num: 1, den: 3}, {num: 2, den: 3}];
            const rFrac = randChoice(rChoices);

            // S∞ = a1 / (1 - r) must be integer
            const oneMinusR = (rFrac.den - rFrac.num) / rFrac.den;
            const sum = a1 / oneMinusR;

            if (!Number.isInteger(sum)) return unit8.generators[4]();

            const term2 = a1 * rFrac.num / rFrac.den;
            const term3 = term2 * rFrac.num / rFrac.den;
            const term4 = term3 * rFrac.num / rFrac.den;

            const rStr = rFrac.num === 1 ? `1/${rFrac.den}` : `${rFrac.num}/${rFrac.den}`;

            return {
                unit: 8,
                question: `Find the sum of the infinite series: ${a1} + ${term2} + ${term3} + ${term4} + ...`,
                answer: `${sum}`,
                hint: `Find r = ${rStr}. Since |r| < 1, use S∞ = a₁/(1-r).`,
                solution: `<strong>Step 1: Find common ratio</strong><br>
                    r = ${term2}/${a1} = ${rStr}<br>
                    Since |r| < 1, series converges<br><br>
                    <strong>Step 2: Apply infinite sum formula</strong><br>
                    S∞ = a₁/(1 - r)<br>
                    = ${a1}/(1 - ${rStr})<br>
                    = ${a1}/(${rFrac.den - rFrac.num}/${rFrac.den})<br>
                    = <strong>${sum}</strong>`,
                hard: false
            };
        },
        // Type 6: Write explicit formula for arithmetic sequence
        function() {
            const a1 = randChoice([3, 5, 7, 8, 10]);
            const d = randChoice([-5, -4, -3, -2, 2, 3, 4, 5]);

            const term2 = a1 + d;
            const term3 = a1 + 2*d;
            const term4 = a1 + 3*d;

            // aₙ = a₁ + (n-1)d = a₁ + dn - d = dn + (a₁ - d)
            const slope = d;
            const intercept = a1 - d;

            let answer;
            if (intercept >= 0) {
                answer = `aₙ=${slope}n+${intercept}`;
            } else {
                answer = `aₙ=${slope}n${intercept}`;
            }

            return {
                unit: 8,
                question: `Write the explicit formula for: ${a1}, ${term2}, ${term3}, ${term4}, ...`,
                answer: answer,
                hint: `This is arithmetic with d = ${d}. Use aₙ = a₁ + (n-1)d and simplify.`,
                solution: `<strong>Step 1: Find common difference</strong><br>
                    d = ${term2} - ${a1} = ${d}<br><br>
                    <strong>Step 2: Write formula</strong><br>
                    aₙ = a₁ + (n - 1)d<br>
                    aₙ = ${a1} + (n - 1)(${d})<br>
                    aₙ = ${a1} + ${d}n - ${d}<br>
                    <strong>${answer}</strong>`,
                hard: false
            };
        }
    ]
};

// Helper for subscript numbers
function subscript(n) {
    const subs = {'0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'};
    return String(n).split('').map(d => subs[d] || d).join('');
}

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('im3', unit8);
}
