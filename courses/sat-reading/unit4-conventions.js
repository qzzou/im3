// SAT Reading Unit 4: Standard English Conventions
// Grammar, punctuation, and sentence structure

const satReadingUnit4 = {
    id: 4,
    name: 'Unit 4',
    title: 'Standard English Conventions',

    lessons: [
        {
            title: '4.1 Subject-Verb Agreement',
            content: `
                <p>Subjects and verbs must agree in number (singular or plural).</p>
                <div class="formula-box">
                    <strong>Basic Rule:</strong><br>
                    Singular subject → singular verb<br>
                    Plural subject → plural verb<br><br>
                    <strong>Tricky Cases:</strong><br>
                    • Phrases between subject/verb: "The box <em>of chocolates</em> <strong>is</strong> on the table."<br>
                    • Compound subjects with "or/nor": verb agrees with NEAREST subject<br>
                    • Collective nouns (team, group): usually singular
                </div>
                <div class="example">
                    <h4>SAT Trap:</h4>
                    <p>Long phrases between subject and verb try to confuse you. Find the true subject!</p>
                    <p>✗ "The results of the experiment suggests..."</p>
                    <p>✓ "The results of the experiment suggest..."</p>
                </div>
            `
        },
        {
            title: '4.2 Pronoun Agreement & Clarity',
            content: `
                <p>Pronouns must agree with their antecedents and have clear references.</p>
                <div class="formula-box">
                    <strong>Agreement Rules:</strong><br>
                    • Singular antecedent → singular pronoun<br>
                    • Plural antecedent → plural pronoun<br>
                    • "Everyone, someone, each" → singular (he/she/they)<br><br>
                    <strong>Clarity Rules:</strong><br>
                    • Pronoun must clearly refer to ONE antecedent<br>
                    • Avoid ambiguous "this" or "it"
                </div>
                <div class="example">
                    <h4>Ambiguous:</h4>
                    <p>"When the car hit the pole, <em>it</em> was damaged." (What was damaged?)</p>
                    <h4>Clear:</h4>
                    <p>"When the car hit the pole, <em>the car</em> was damaged."</p>
                </div>
            `
        },
        {
            title: '4.3 Punctuation',
            content: `
                <p>Master these key punctuation rules for the SAT.</p>
                <div class="formula-box">
                    <strong>Commas:</strong><br>
                    • After introductory phrases: "After the storm, we surveyed the damage."<br>
                    • Around non-essential info: "My sister, who lives in Boston, visited."<br>
                    • In lists: "apples, oranges, and bananas"<br><br>
                    <strong>Semicolons:</strong><br>
                    • Join two complete sentences: "I studied; I passed."<br>
                    • NOT before "because" or "and"<br><br>
                    <strong>Colons:</strong><br>
                    • Introduce lists or explanations after complete sentence<br>
                    • "She had one goal: victory."
                </div>
            `
        },
        {
            title: '4.4 Sentence Structure',
            content: `
                <p>Avoid common structural errors that the SAT tests.</p>
                <div class="formula-box">
                    <strong>Run-on Sentences:</strong><br>
                    ✗ "I was tired I went to bed."<br>
                    ✓ "I was tired, so I went to bed."<br><br>
                    <strong>Fragments:</strong><br>
                    ✗ "Because it was raining."<br>
                    ✓ "I stayed inside because it was raining."<br><br>
                    <strong>Parallel Structure:</strong><br>
                    ✗ "She likes swimming, biking, and to run."<br>
                    ✓ "She likes swimming, biking, and running."
                </div>
                <div class="example">
                    <h4>Modifier Placement:</h4>
                    <p>✗ "Walking down the street, the trees looked beautiful." (Trees can't walk!)</p>
                    <p>✓ "Walking down the street, I thought the trees looked beautiful."</p>
                </div>
            `
        }
    ],

    exercises: [
        {
            id: 'satr4-1',
            unit: 4,
            question: `Choose the correct verb form:<br><br>
                <em>"The collection of rare stamps _______ donated to the museum last year."</em>`,
            answer: 'A',
            options: ['A) was', 'B) were', 'C) have been', 'D) are being'],
            hint: 'Find the subject. Is it "collection" (singular) or "stamps" (plural)?',
            solution: `<strong>Analysis:</strong><br>
                Subject = "collection" (singular)<br>
                "of rare stamps" is a prepositional phrase—NOT the subject<br><br>
                Singular subject → singular verb<br><br>
                <strong>Answer: A</strong> - was`,
            hard: false
        },
        {
            id: 'satr4-2',
            unit: 4,
            question: `Choose the correct pronoun:<br><br>
                <em>"Each of the students must submit _______ assignment by Friday."</em>`,
            answer: 'B',
            options: ['A) its', 'B) their', 'C) our', 'D) your'],
            hint: '"Each" is always singular, even when followed by "of the students."',
            solution: `<strong>Analysis:</strong><br>
                "Each" is a singular indefinite pronoun<br>
                It takes singular pronouns<br><br>
                <strong>Answer: B</strong> - their (modern accepted singular "their")<br><br>
                Note: While traditionally "his or her" was required, "their" as a singular pronoun is now widely accepted.`,
            hard: false
        },
        {
            id: 'satr4-3',
            unit: 4,
            question: `Which version is correctly punctuated?`,
            answer: 'C',
            options: ['A) The experiment failed, the researchers tried again.', 'B) The experiment failed; because the temperature was wrong.', 'C) The experiment failed; the researchers tried again.', 'D) The experiment failed and, the researchers tried again.'],
            hint: 'A semicolon joins two complete sentences. Check if both parts can stand alone.',
            solution: `<strong>Analysis:</strong><br>
                A) Run-on (comma splice) ✗<br>
                B) "Because" clause isn't a complete sentence ✗<br>
                C) Two complete sentences joined by semicolon ✓<br>
                D) Comma after "and" is incorrect ✗<br><br>
                <strong>Answer: C</strong>`,
            hard: false
        },
        {
            id: 'satr4-4',
            unit: 4,
            question: `Which sentence demonstrates correct parallel structure?`,
            answer: 'D',
            options: ['A) The job requires writing, to edit, and publishing.', 'B) The job requires to write, editing, and to publish.', 'C) The job requires writing, edited, and publishing.', 'D) The job requires writing, editing, and publishing.'],
            hint: 'Items in a list should have the same grammatical form.',
            solution: `<strong>Analysis:</strong><br>
                A) "writing" (gerund), "to edit" (infinitive), "publishing" (gerund) - NOT parallel ✗<br>
                B) "write" (verb), "editing" (gerund), "to publish" (infinitive) - NOT parallel ✗<br>
                C) "writing" (gerund), "edited" (past tense), "publishing" (gerund) - NOT parallel ✗<br>
                D) "writing" (gerund), "editing" (gerund), "publishing" (gerund) - PARALLEL ✓<br><br>
                <strong>Answer: D</strong>`,
            hard: false
        },
        {
            id: 'satr4-5',
            unit: 4,
            question: `Which revision corrects the dangling modifier?<br><br>
                <em>Original: "Running through the park, the fountain came into view."</em>`,
            answer: 'B',
            options: ['A) Running through the park, the fountain was beautiful.', 'B) Running through the park, I saw the fountain come into view.', 'C) The fountain came into view, running through the park.', 'D) Running through the park, there was a fountain.'],
            hint: 'Who is running? The subject after the comma should be the one doing the action.',
            solution: `<strong>Problem:</strong><br>
                "Running through the park" modifies "fountain" - but fountains can't run!<br><br>
                The person running must be the subject of the main clause.<br><br>
                <strong>Answer: B</strong> - "Running through the park, I saw the fountain come into view."`,
            hard: true
        },
        {
            id: 'satr4-6',
            unit: 4,
            question: `Choose the option that correctly uses a colon:<br><br>`,
            answer: 'A',
            options: ['A) She had three goals: graduate, travel, and start a business.', 'B) Her goals included: such as graduating and traveling.', 'C) Her goals were: to graduate, travel, and start a business.', 'D) She had goals including: graduation, travel, and business.'],
            hint: 'A colon must come after a complete sentence and introduce what follows.',
            solution: `<strong>Colon Rules:</strong><br>
                • Must follow a complete sentence<br>
                • Introduces a list, explanation, or elaboration<br><br>
                A) "She had three goals" is complete → colon introduces list ✓<br>
                B) "Such as" makes colon unnecessary ✗<br>
                C) "goals were" is not complete before colon ✗<br>
                D) "including" makes colon unnecessary ✗<br><br>
                <strong>Answer: A</strong>`,
            hard: true
        }
    ],

    generators: [
        // Type 1: Subject-verb agreement
        function() {
            const topics = [
                {
                    sentence: 'The group of scientists _______ published their findings.',
                    correct: 'A',
                    options: ['A) has', 'B) have', 'C) are', 'D) were'],
                    explanation: '"Group" is the subject (singular collective noun). "Of scientists" is a prepositional phrase. Singular subject = singular verb "has."'
                },
                {
                    sentence: 'Neither the students nor the teacher _______ aware of the change.',
                    correct: 'B',
                    options: ['A) were', 'B) was', 'C) are', 'D) have been'],
                    explanation: 'With "neither...nor," the verb agrees with the nearest subject. "Teacher" is singular, so use "was."'
                },
                {
                    sentence: 'The news about the layoffs _______ spreading quickly.',
                    correct: 'A',
                    options: ['A) is', 'B) are', 'C) were', 'D) have been'],
                    explanation: '"News" is always singular (like "mathematics" or "economics"). Use singular verb "is."'
                },
                {
                    sentence: 'Each of the proposals _______ merit.',
                    correct: 'B',
                    options: ['A) have', 'B) has', 'C) are having', 'D) were having'],
                    explanation: '"Each" is singular, even when followed by "of the proposals." Use singular verb "has."'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 4,
                question: `Choose the correct verb:<br><br><em>"${topic.sentence}"</em>`,
                answer: topic.correct,
                options: topic.options,
                hint: 'Find the true subject and determine if it\'s singular or plural.',
                solution: `<strong>Analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong>`,
                hard: false
            };
        },
        // Type 2: Pronoun questions
        function() {
            const topics = [
                {
                    sentence: 'The company announced _______ new policy yesterday.',
                    correct: 'A',
                    options: ['A) its', 'B) their', 'C) it\'s', 'D) they\'re'],
                    explanation: '"Company" is singular, so use singular possessive "its." Note: "it\'s" = "it is" (contraction, not possessive).'
                },
                {
                    sentence: 'Everyone should bring _______ own lunch.',
                    correct: 'B',
                    options: ['A) his', 'B) their', 'C) its', 'D) our'],
                    explanation: '"Everyone" is traditionally singular, but modern usage accepts "their" as a gender-neutral singular pronoun.'
                },
                {
                    sentence: 'The committee made _______ decision after hours of debate.',
                    correct: 'A',
                    options: ['A) its', 'B) their', 'C) it\'s', 'D) his'],
                    explanation: '"Committee" is a collective noun acting as a unit, so use singular "its."'
                },
                {
                    sentence: 'When a student fails, _______ should seek help immediately.',
                    correct: 'C',
                    options: ['A) it', 'B) one', 'C) they', 'D) we'],
                    explanation: 'Modern English accepts "they" as a singular pronoun for "a student." "They should seek help" is correct.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 4,
                question: `Choose the correct pronoun:<br><br><em>"${topic.sentence}"</em>`,
                answer: topic.correct,
                options: topic.options,
                hint: 'Make sure the pronoun agrees with its antecedent in number.',
                solution: `<strong>Analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong>`,
                hard: false
            };
        },
        // Type 3: Punctuation questions
        function() {
            const topics = [
                {
                    question: 'Which sentence uses commas correctly?',
                    correct: 'B',
                    options: ['A) My brother, who is a doctor lives in Seattle.', 'B) My brother, who is a doctor, lives in Seattle.', 'C) My brother who is a doctor, lives in Seattle.', 'D) My brother who, is a doctor lives in Seattle.'],
                    explanation: 'Non-essential information ("who is a doctor") must be surrounded by commas on BOTH sides.'
                },
                {
                    question: 'Which sentence correctly uses a semicolon?',
                    correct: 'C',
                    options: ['A) I went to the store; and bought milk.', 'B) Because it was raining; I stayed inside.', 'C) The test was difficult; however, I passed.', 'D) She likes; apples, oranges, and bananas.'],
                    explanation: 'Semicolons join complete sentences. "The test was difficult" and "however, I passed" are both complete.'
                },
                {
                    question: 'Which sentence has correct comma usage?',
                    correct: 'A',
                    options: ['A) After the concert, we went to dinner.', 'B) After the concert we, went to dinner.', 'C) After, the concert we went to dinner.', 'D) After the concert we went, to dinner.'],
                    explanation: 'Introductory phrases ("After the concert") are followed by a comma before the main clause.'
                },
                {
                    question: 'Which sentence correctly uses an apostrophe?',
                    correct: 'D',
                    options: ['A) The dog wagged it\'s tail.', 'B) The Smith\'s are coming to dinner.', 'C) She got two A\'s on her report card.', 'D) The students\' projects were displayed.'],
                    explanation: '"Students\'" is correct plural possessive (multiple students own the projects). "It\'s" = "it is," "Smith\'s" needs no apostrophe for plural.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 4,
                question: topic.question,
                answer: topic.correct,
                options: topic.options,
                hint: 'Apply the specific punctuation rule being tested.',
                solution: `<strong>Analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong>`,
                hard: false
            };
        },
        // Type 4: Parallel structure
        function() {
            const topics = [
                {
                    question: 'Which sentence has correct parallel structure?',
                    correct: 'B',
                    options: ['A) She enjoys reading, to swim, and hiking.', 'B) She enjoys reading, swimming, and hiking.', 'C) She enjoys to read, swimming, and to hike.', 'D) She enjoys read, swim, and hike.'],
                    explanation: 'All items should have the same form. B uses all gerunds (-ing): reading, swimming, hiking.'
                },
                {
                    question: 'Which revision creates parallel structure?',
                    correct: 'C',
                    options: ['A) The coach told players to practice hard, playing fair, and have fun.', 'B) The coach told players practicing hard, to play fair, and having fun.', 'C) The coach told players to practice hard, play fair, and have fun.', 'D) The coach told players to practice hard, play fair, and be having fun.'],
                    explanation: 'After "to," use base verbs: practice, play, have. All infinitives share the "to."'
                },
                {
                    question: 'Which sentence demonstrates parallelism?',
                    correct: 'A',
                    options: ['A) The project requires research, analysis, and writing.', 'B) The project requires research, analyzing, and to write.', 'C) The project requires to research, analysis, and writing.', 'D) The project requires researching, analysis, and write.'],
                    explanation: 'A uses all nouns: research, analysis, writing. Consistent grammatical form = parallel structure.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 4,
                question: topic.question,
                answer: topic.correct,
                options: topic.options,
                hint: 'Look for the option where all list items have the same grammatical form.',
                solution: `<strong>Analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong>`,
                hard: false
            };
        },
        // Type 5: Modifier placement
        function() {
            const topics = [
                {
                    original: 'Covered in chocolate, the children devoured the strawberries.',
                    question: 'Which revision corrects the misplaced modifier?',
                    correct: 'B',
                    options: ['A) The children, covered in chocolate, devoured the strawberries.', 'B) The children devoured the strawberries covered in chocolate.', 'C) Covered in chocolate, the strawberries were devoured by children.', 'D) Devouring the strawberries, covered in chocolate were the children.'],
                    explanation: 'The strawberries are covered in chocolate, not the children. B places "covered in chocolate" next to "strawberries."'
                },
                {
                    original: 'Flying over the mountains, the view amazed the passengers.',
                    question: 'Which revision fixes the dangling modifier?',
                    correct: 'C',
                    options: ['A) Flying over the mountains, the view was amazing to the passengers.', 'B) The view flying over the mountains amazed the passengers.', 'C) Flying over the mountains, the passengers were amazed by the view.', 'D) The view amazed the passengers, flying over the mountains.'],
                    explanation: 'The passengers are flying, not the view. C makes "passengers" the subject of the flying action.'
                },
                {
                    original: 'Having finished the exam, the relief was overwhelming.',
                    question: 'Which revision corrects the dangling modifier?',
                    correct: 'A',
                    options: ['A) Having finished the exam, I felt overwhelming relief.', 'B) The relief, having finished the exam, was overwhelming.', 'C) Having finished, the exam brought overwhelming relief.', 'D) The overwhelming relief had finished the exam.'],
                    explanation: 'A person finished the exam, not "the relief." A adds a subject ("I") who performed the action.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 4,
                question: `Original: <em>"${topic.original}"</em><br><br>${topic.question}`,
                answer: topic.correct,
                options: topic.options,
                hint: 'The subject after a modifying phrase should be the one doing the action.',
                solution: `<strong>Analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong>`,
                hard: true
            };
        },
        // Type 6: Sentence structure (fragments, run-ons)
        function() {
            const topics = [
                {
                    question: 'Which option correctly fixes the run-on sentence?<br><br>Original: "The storm knocked out power it lasted for three days."',
                    correct: 'B',
                    options: ['A) The storm knocked out power, it lasted for three days.', 'B) The storm knocked out power; it lasted for three days.', 'C) The storm knocked out power it, lasted for three days.', 'D) The storm, knocked out power it lasted for three days.'],
                    explanation: 'Two complete sentences need proper punctuation. A semicolon (B) correctly joins them. A comma alone (A) creates a comma splice.'
                },
                {
                    question: 'Which is a complete sentence?',
                    correct: 'C',
                    options: ['A) Although the rain stopped.', 'B) Running through the empty streets.', 'C) The concert began at eight o\'clock.', 'D) Because she wanted to succeed.'],
                    explanation: 'C has a subject ("concert") and a complete verb ("began"). A, B, D are fragments—they depend on additional information.'
                },
                {
                    question: 'Which revision eliminates the sentence fragment?<br><br>Original: "She studied hard. Because she wanted to pass."',
                    correct: 'A',
                    options: ['A) She studied hard because she wanted to pass.', 'B) She studied hard. And because she wanted to pass.', 'C) She studied hard, because, she wanted to pass.', 'D) She studied. Hard because she wanted to pass.'],
                    explanation: '"Because she wanted to pass" cannot stand alone. Joining it to the main clause (A) creates one complete sentence.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 4,
                question: topic.question,
                answer: topic.correct,
                options: topic.options,
                hint: 'A complete sentence needs a subject and a verb that express a complete thought.',
                solution: `<strong>Analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong>`,
                hard: false
            };
        }
    ]
};

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('sat-reading', satReadingUnit4);
}
