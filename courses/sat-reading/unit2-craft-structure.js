// SAT Reading Unit 2: Craft and Structure
// Word choice, text structure, point of view, and purpose

const satReadingUnit2 = {
    id: 2,
    name: 'Unit 2',
    title: 'Craft & Structure',

    lessons: [
        {
            title: '2.1 Word Choice & Tone',
            content: `
                <p>Authors carefully choose words to create specific effects. Understanding word choice helps you analyze tone and meaning.</p>
                <div class="formula-box">
                    <strong>Connotation vs. Denotation:</strong><br>
                    • Denotation: Dictionary definition<br>
                    • Connotation: Emotional associations<br><br>
                    <strong>Example:</strong> "Thrifty" vs. "Cheap"<br>
                    Same denotation (careful with money), different connotations (positive vs. negative)
                </div>
                <div class="example">
                    <h4>SAT Tip:</h4>
                    <p>When asked about word choice, consider: Why THIS word instead of a simpler one? What effect does it create?</p>
                </div>
            `
        },
        {
            title: '2.2 Text Structure',
            content: `
                <p>Understanding how a passage is organized helps you predict content and find information.</p>
                <div class="formula-box">
                    <strong>Common Structures:</strong><br>
                    • Chronological: Events in time order<br>
                    • Compare/Contrast: Similarities and differences<br>
                    • Cause/Effect: Reasons and results<br>
                    • Problem/Solution: Issue and resolution<br>
                    • Claim/Evidence: Argument with support
                </div>
                <p><strong>Signal Words:</strong></p>
                <ul>
                    <li>Sequence: first, then, finally, meanwhile</li>
                    <li>Contrast: however, although, on the other hand</li>
                    <li>Cause: because, since, as a result, therefore</li>
                </ul>
            `
        },
        {
            title: '2.3 Point of View & Purpose',
            content: `
                <p>Identifying who is speaking and why they're writing is crucial for understanding any text.</p>
                <div class="formula-box">
                    <strong>Point of View:</strong><br>
                    • First person (I, we): Personal narrative<br>
                    • Second person (you): Direct address<br>
                    • Third person (he, she, they): Objective or omniscient<br><br>
                    <strong>Author's Purpose:</strong><br>
                    • Inform: Present facts objectively<br>
                    • Persuade: Convince the reader<br>
                    • Entertain: Engage or amuse<br>
                    • Explain: Clarify a concept
                </div>
            `
        },
        {
            title: '2.4 Analyzing Arguments',
            content: `
                <p>Many SAT passages present arguments. Learn to identify their components.</p>
                <div class="formula-box">
                    <strong>Argument Components:</strong><br>
                    • Claim: The main point being argued<br>
                    • Evidence: Facts, statistics, examples<br>
                    • Reasoning: How evidence supports the claim<br>
                    • Counterargument: Opposing viewpoint<br>
                    • Rebuttal: Response to counterargument
                </div>
                <div class="example">
                    <h4>Watch For:</h4>
                    <p>• Logical fallacies (weak reasoning)</p>
                    <p>• Emotional appeals vs. logical appeals</p>
                    <p>• Assumptions the author makes</p>
                </div>
            `
        }
    ],

    exercises: [
        {
            id: 'satr2-1',
            unit: 2,
            question: `Read the passage and answer:<br><br>
                <em>"The old house didn't just creak—it groaned, as if bearing the weight of a century's worth of secrets. Shadows pooled in corners that the afternoon light couldn't reach, and the wallpaper, once cheerful yellow, had faded to the color of old bones."</em><br><br>
                The author's word choices create a tone that is primarily:`,
            answer: 'B',
            options: ['A) Warm and nostalgic', 'B) Ominous and unsettling', 'C) Cheerful and bright', 'D) Coldly objective'],
            hint: 'Look at the specific words: "groaned," "secrets," "shadows," "old bones." What mood do they create?',
            solution: `<strong>Word Choice Analysis:</strong><br>
                • "groaned" - suggests pain, burden<br>
                • "secrets" - mystery, hidden things<br>
                • "shadows pooled" - darkness gathering<br>
                • "old bones" - death, decay<br><br>
                <strong>Answer: B</strong> - Ominous and unsettling`,
            hard: false
        },
        {
            id: 'satr2-2',
            unit: 2,
            question: `Read the passage and answer:<br><br>
                <em>"First, the mixture must be heated to exactly 180 degrees. Next, add the catalyst slowly while stirring continuously. After the solution turns clear, reduce the heat and allow it to cool gradually. Finally, filter the result through cheesecloth to remove any remaining impurities."</em><br><br>
                This passage is primarily organized using which structure?`,
            answer: 'A',
            options: ['A) Chronological/Sequential', 'B) Compare and contrast', 'C) Cause and effect', 'D) Problem and solution'],
            hint: 'Notice the signal words: "First," "Next," "After," "Finally."',
            solution: `<strong>Structural Analysis:</strong><br>
                Signal words indicate sequence:<br>
                • "First" → "Next" → "After" → "Finally"<br><br>
                This is a step-by-step process in time order.<br><br>
                <strong>Answer: A</strong> - Chronological/Sequential`,
            hard: false
        },
        {
            id: 'satr2-3',
            unit: 2,
            question: `Read the passage and answer:<br><br>
                <em>"Some argue that artificial intelligence poses an existential threat to humanity—a view I find both overblown and counterproductive. Yes, AI will disrupt certain industries, just as previous technologies have. But rather than fearing our creations, we should focus on developing ethical guidelines that ensure AI serves human flourishing."</em><br><br>
                The author's primary purpose in this passage is to:`,
            answer: 'C',
            options: ['A) Explain how AI technology works', 'B) Warn readers about the dangers of AI', 'C) Argue against fears of AI while proposing a constructive approach', 'D) Compare different types of artificial intelligence'],
            hint: 'The author presents a view they disagree with, then offers their own position. What are they trying to do?',
            solution: `<strong>Purpose Analysis:</strong><br>
                • Author acknowledges opposing view ("Some argue...")<br>
                • Dismisses it ("overblown and counterproductive")<br>
                • Proposes alternative ("should focus on...")<br><br>
                This is persuasive writing—arguing for a specific position.<br><br>
                <strong>Answer: C</strong> - Argue against fears of AI while proposing a constructive approach`,
            hard: false
        },
        {
            id: 'satr2-4',
            unit: 2,
            question: `Read the passage and answer:<br><br>
                <em>"The candidate described her opponent's tax plan as 'reckless' and 'irresponsible,' warning it would 'devastate working families.' Her opponent, meanwhile, characterized his proposal as 'bold' and 'necessary,' promising it would 'unleash economic growth.'"</em><br><br>
                The contrasting word choices of the two candidates primarily serve to:`,
            answer: 'B',
            options: ['A) Prove that one candidate is lying', 'B) Show how word choice can frame the same proposal positively or negatively', 'C) Explain the details of the tax plan', 'D) Demonstrate that both candidates agree'],
            hint: 'Both describe the same plan but use very different words. What does this show about language?',
            solution: `<strong>Analysis:</strong><br>
                Same plan, different descriptions:<br>
                • Candidate 1: "reckless," "irresponsible," "devastate"<br>
                • Opponent: "bold," "necessary," "unleash"<br><br>
                This shows how word choice shapes perception of the same reality.<br><br>
                <strong>Answer: B</strong> - Show how word choice can frame the same proposal positively or negatively`,
            hard: false
        },
        {
            id: 'satr2-5',
            unit: 2,
            question: `Read the passage and answer:<br><br>
                <em>"We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness."</em><br><br>
                The formal, elevated diction in this passage serves to:`,
            answer: 'D',
            options: ['A) Make the text difficult to understand', 'B) Show off the author\'s vocabulary', 'C) Appeal only to educated readers', 'D) Lend gravity and authority to the ideas expressed'],
            hint: 'Consider why the authors chose such grand, formal language instead of simple words.',
            solution: `<strong>Diction Analysis:</strong><br>
                Formal, elevated language:<br>
                • "self-evident" (not "obvious")<br>
                • "endowed" (not "given")<br>
                • "unalienable" (not "permanent")<br><br>
                This language gives the ideas weight and authority, suggesting they are timeless principles.<br><br>
                <strong>Answer: D</strong> - Lend gravity and authority to the ideas expressed`,
            hard: true
        },
        {
            id: 'satr2-6',
            unit: 2,
            question: `Read the passage and answer:<br><br>
                <em>"Traditional medicine dismissed the claims of acupuncture practitioners for decades. However, recent clinical trials have shown measurable effects on chronic pain relief. Although the mechanism remains unclear, researchers now acknowledge that dismissing the practice entirely was premature. Nevertheless, significant questions about efficacy for specific conditions remain unanswered."</em><br><br>
                The structure of this passage can best be described as:`,
            answer: 'C',
            options: ['A) A list of facts in random order', 'B) A simple problem and solution', 'C) A progression from initial dismissal to qualified acceptance', 'D) A comparison of two equal viewpoints'],
            hint: 'Notice the transition words: "However," "Although," "Nevertheless." What kind of relationship do they show?',
            solution: `<strong>Structural Analysis:</strong><br>
                • "However" - introduces contrast<br>
                • "Although... now acknowledge" - shift in view<br>
                • "Nevertheless" - introduces continued complexity<br><br>
                The passage shows evolving understanding with nuance.<br><br>
                <strong>Answer: C</strong> - A progression from initial dismissal to qualified acceptance`,
            hard: true
        }
    ],

    generators: [
        // Type 1: Word choice/tone questions
        function() {
            const topics = [
                {
                    passage: `The CEO strode into the boardroom, her heels clicking a sharp staccato on the marble floor. She surveyed the assembled executives with eyes that missed nothing, then delivered her verdict in clipped, precise sentences that left no room for debate.`,
                    question: 'The author\'s word choices portray the CEO as:',
                    correct: 'A',
                    options: ['A) Commanding and intimidating', 'B) Warm and approachable', 'C) Uncertain and hesitant', 'D) Relaxed and casual'],
                    explanation: '"Strode," "sharp staccato," "surveyed," "missed nothing," "verdict," "clipped," "no room for debate" all suggest authority and intimidation.'
                },
                {
                    passage: `The garden had surrendered to neglect. Weeds strangled the flower beds, the fountain sat silent and dry, and fallen leaves formed a thick carpet that no one had bothered to rake. Only the stubborn roses continued their hopeless bloom.`,
                    question: 'The descriptive language in this passage creates a mood of:',
                    correct: 'B',
                    options: ['A) Peaceful contentment', 'B) Melancholy and abandonment', 'C) Cheerful disorder', 'D) Angry destruction'],
                    explanation: '"Surrendered," "strangled," "silent and dry," "no one bothered," "hopeless" create sadness and abandonment, not anger.'
                },
                {
                    passage: `Dr. Martinez explained the procedure with the patience of someone who had done so a thousand times before, her voice warm and unhurried. She answered each question twice if needed, never once checking her watch or reaching for the door.`,
                    question: 'The author characterizes Dr. Martinez as:',
                    correct: 'C',
                    options: ['A) Rushed and distracted', 'B) Cold but efficient', 'C) Caring and attentive', 'D) Bored but professional'],
                    explanation: '"Patience," "warm and unhurried," "answered each question twice," "never once checking her watch" show genuine care and attention.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 2,
                question: `Read the passage and answer:<br><br><em>"${topic.passage}"</em><br><br>${topic.question}`,
                answer: topic.correct,
                options: topic.options,
                hint: 'Pay attention to specific word choices and the feelings they evoke.',
                solution: `<strong>Word Choice Analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong>`,
                hard: false
            };
        },
        // Type 2: Text structure questions
        function() {
            const topics = [
                {
                    passage: `Plastic pollution in oceans has reached crisis levels, with millions of tons entering waterways annually. Marine life suffers from ingestion and entanglement, while microplastics enter the food chain. In response, several nations have banned single-use plastics, and companies are developing biodegradable alternatives. Though challenges remain, these efforts offer hope for cleaner seas.`,
                    question: 'This passage is primarily organized as:',
                    correct: 'B',
                    options: ['A) Chronological narrative', 'B) Problem and solution', 'C) Compare and contrast', 'D) Definition and examples'],
                    explanation: 'The passage presents a problem (plastic pollution, effects) then solutions (bans, alternatives), classic problem-solution structure.'
                },
                {
                    passage: `While both solar and wind power generate clean energy, they differ significantly in implementation. Solar panels work best in sunny, open areas and can be installed on existing structures. Wind turbines require large land areas and consistent wind patterns but can generate power at night. Each technology has distinct advantages depending on local conditions.`,
                    question: 'The organizational pattern of this passage is:',
                    correct: 'C',
                    options: ['A) Cause and effect', 'B) Chronological', 'C) Compare and contrast', 'D) Problem and solution'],
                    explanation: '"While both... they differ," discussion of each technology\'s features, "distinct advantages" all signal comparison/contrast.'
                },
                {
                    passage: `The 1918 influenza pandemic began as a localized outbreak in Kansas. Within months, troop movements during World War I spread the virus across continents. By summer, major cities faced overwhelming cases. The second wave in fall proved deadlier still. By 1919, the pandemic had claimed an estimated 50 million lives worldwide.`,
                    question: 'This passage uses which organizational structure?',
                    correct: 'A',
                    options: ['A) Chronological sequence', 'B) Spatial organization', 'C) Order of importance', 'D) Classification'],
                    explanation: 'Time markers ("began," "within months," "by summer," "second wave in fall," "by 1919") indicate chronological organization.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 2,
                question: `Read the passage and answer:<br><br><em>"${topic.passage}"</em><br><br>${topic.question}`,
                answer: topic.correct,
                options: topic.options,
                hint: 'Look for signal words that indicate the relationship between ideas.',
                solution: `<strong>Structure Analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong>`,
                hard: false
            };
        },
        // Type 3: Author's purpose questions
        function() {
            const topics = [
                {
                    passage: `If you've ever wondered why your phone battery dies faster in cold weather, the answer lies in chemistry. Lithium-ion batteries rely on chemical reactions that slow down at low temperatures. The lithium ions move more sluggishly through the electrolyte, reducing the battery's capacity temporarily. Warming the phone restores normal function.`,
                    question: 'The primary purpose of this passage is to:',
                    correct: 'A',
                    options: ['A) Explain a scientific phenomenon in accessible terms', 'B) Persuade readers to buy better batteries', 'C) Criticize smartphone manufacturers', 'D) Compare different battery types'],
                    explanation: 'The passage answers a question ("If you\'ve ever wondered") and explains the science clearly—its purpose is to inform/explain.'
                },
                {
                    passage: `Mandatory voting, as practiced in Australia and several other nations, should be adopted in the United States. Low voter turnout undermines democratic legitimacy and skews election results toward motivated extremes. A modest fine for non-voting, combined with easy access to polls, would ensure government truly represents the will of all citizens, not just the most passionate.`,
                    question: 'The author\'s primary purpose is to:',
                    correct: 'B',
                    options: ['A) Describe Australian voting laws', 'B) Argue for mandatory voting in the US', 'C) Explain why people don\'t vote', 'D) Compare democratic systems worldwide'],
                    explanation: '"Should be adopted," presenting arguments (undermines legitimacy, skews results), proposing solution—clearly persuasive purpose.'
                },
                {
                    passage: `The night market comes alive at dusk. Vendors wheel their carts into position, steam rises from a dozen different cuisines, and the air fills with the sizzle of frying and the calls of sellers hawking their wares. Families stroll past stalls of knockoff watches and handmade jewelry, children clutching sticky treats.`,
                    question: 'The author\'s purpose in this passage is primarily to:',
                    correct: 'D',
                    options: ['A) Argue for the preservation of night markets', 'B) Explain how night markets operate', 'C) Compare different types of markets', 'D) Create a vivid sensory experience for the reader'],
                    explanation: 'Sensory details (steam, sizzle, calls, strolling, sticky treats) create an immersive experience—the purpose is to engage/entertain.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 2,
                question: `Read the passage and answer:<br><br><em>"${topic.passage}"</em><br><br>${topic.question}`,
                answer: topic.correct,
                options: topic.options,
                hint: 'Ask: Is the author trying to inform, persuade, entertain, or explain?',
                solution: `<strong>Purpose Analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong>`,
                hard: false
            };
        },
        // Type 4: Point of view questions
        function() {
            const topics = [
                {
                    passage: `I remember the exact moment I decided to become a scientist. I was eight years old, watching a documentary about deep-sea creatures, when a bioluminescent jellyfish drifted across the screen. That glow in the darkness seemed like pure magic—and I wanted to understand how magic worked.`,
                    question: 'The passage is written from which point of view?',
                    correct: 'A',
                    options: ['A) First person, reflecting on a personal experience', 'B) Second person, addressing the reader directly', 'C) Third person, observing objectively', 'D) Third person omniscient, knowing all characters\' thoughts'],
                    explanation: '"I remember," "I was," "I wanted"—first person pronouns throughout, relating a personal memory.'
                },
                {
                    passage: `The historian examined the ancient manuscript with trembling hands. She knew that if her theory was correct, this document would rewrite everything scholars believed about medieval trade routes. But she also knew that extraordinary claims required extraordinary evidence.`,
                    question: 'This passage employs which narrative perspective?',
                    correct: 'C',
                    options: ['A) First person narrator', 'B) Second person address', 'C) Third person limited (focused on one character)', 'D) Objective journalistic reporting'],
                    explanation: '"She knew" (twice) gives access to one character\'s thoughts—third person limited to the historian\'s perspective.'
                },
                {
                    passage: `You walk into the interview room, palms sweating despite the air conditioning. You've prepared for weeks, but now every rehearsed answer seems to evaporate. The interviewer smiles and gestures to a chair. You sit. You breathe. You begin.`,
                    question: 'The use of second person ("you") in this passage serves to:',
                    correct: 'B',
                    options: ['A) Create emotional distance from the events', 'B) Make the reader feel directly involved in the experience', 'C) Establish the author\'s authority', 'D) Present objective facts'],
                    explanation: 'Second person puts the reader IN the situation—"You walk," "You sit"—creating immediate, immersive involvement.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 2,
                question: `Read the passage and answer:<br><br><em>"${topic.passage}"</em><br><br>${topic.question}`,
                answer: topic.correct,
                options: topic.options,
                hint: 'Look at the pronouns used: I/we (first person), you (second), he/she/they (third).',
                solution: `<strong>Point of View Analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong>`,
                hard: false
            };
        },
        // Type 5: Rhetorical effect questions
        function() {
            const topics = [
                {
                    passage: `Is it not strange that we spend billions searching for life on distant planets while species vanish from our own world daily? Is it not curious that we dream of terraforming Mars while rainforests fall to chainsaws? Perhaps we should tend our own garden before planting new ones among the stars.`,
                    question: 'The author\'s use of rhetorical questions serves to:',
                    correct: 'B',
                    options: ['A) Express genuine uncertainty about the answers', 'B) Challenge readers to reconsider their priorities', 'C) Request information from the audience', 'D) Introduce a neutral, balanced discussion'],
                    explanation: 'The questions have implied answers (yes, it IS strange)—they\'re rhetorical devices meant to challenge the reader\'s thinking, not genuine inquiries.'
                },
                {
                    passage: `The company\'s "commitment to sustainability" included printing its environmental report on 500 pages of virgin paper, shipping plastic promotional items to every conference attendee, and hosting its annual meeting in a location accessible only by air travel.`,
                    question: 'The author\'s listing of these details creates an effect of:',
                    correct: 'C',
                    options: ['A) Admiration for the company\'s efforts', 'B) Neutral factual reporting', 'C) Ironic criticism of hypocrisy', 'D) Confusion about the company\'s goals'],
                    explanation: 'Quotation marks around "commitment to sustainability" plus examples that contradict sustainability = ironic criticism of saying one thing while doing another.'
                },
                {
                    passage: `She was not merely tired. She was exhausted. She was drained. She was wrung out like a dishrag, emptied like a gas tank on a desert highway, finished like the last page of a very long book.`,
                    question: 'The author\'s use of repetition and multiple comparisons emphasizes:',
                    correct: 'A',
                    options: ['A) The extreme degree of the character\'s fatigue', 'B) The character\'s tendency to exaggerate', 'C) The author\'s limited vocabulary', 'D) A humorous tone about minor inconvenience'],
                    explanation: 'Escalating terms (tired → exhausted → drained) plus three similes intensify the reader\'s understanding of extreme fatigue.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 2,
                question: `Read the passage and answer:<br><br><em>"${topic.passage}"</em><br><br>${topic.question}`,
                answer: topic.correct,
                options: topic.options,
                hint: 'Consider: What EFFECT does the author\'s technique have on the reader?',
                solution: `<strong>Rhetorical Analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong>`,
                hard: true
            };
        },
        // Type 6: Argument analysis questions
        function() {
            const topics = [
                {
                    passage: `Opponents of the minimum wage increase claim it will cost jobs. However, a comprehensive study of 138 minimum wage increases across different states found no significant impact on employment levels. While individual businesses may adjust staffing, the overall economy absorbs these changes through increased consumer spending power.`,
                    question: 'The author supports the argument primarily through:',
                    correct: 'B',
                    options: ['A) Emotional appeals to sympathy', 'B) Reference to research evidence', 'C) Personal anecdotes', 'D) Attacks on opponents\' character'],
                    explanation: '"Comprehensive study," "138 minimum wage increases," "no significant impact"—the argument relies on research/statistical evidence.'
                },
                {
                    passage: `Everyone I know loves this restaurant. My coworker raves about the pasta, my neighbor won't eat Italian anywhere else, and my book club meets there monthly. Clearly, it's the best Italian restaurant in the city.`,
                    question: 'The reasoning in this passage is flawed because:',
                    correct: 'C',
                    options: ['A) The author has never actually eaten there', 'B) The restaurant serves other cuisines too', 'C) Personal acquaintances are not representative of the entire city', 'D) The author doesn\'t specify which dishes are best'],
                    explanation: 'The author generalizes from a small, non-representative sample (people they know) to claim "best in the city"—a logical flaw.'
                },
                {
                    passage: `Critics say the new park will increase traffic and noise. But consider this: the vacant lot currently attracts illegal dumping, vandalism, and other criminal activity. A well-designed park with proper lighting and regular patrols would actually make the neighborhood safer and more pleasant.`,
                    question: 'The author addresses the counterargument by:',
                    correct: 'D',
                    options: ['A) Ignoring the critics entirely', 'B) Admitting the critics are correct', 'C) Attacking the critics personally', 'D) Offering an alternative perspective on the impact'],
                    explanation: 'The author acknowledges critics\' concerns, then reframes: the current situation is worse, and the park offers benefits that outweigh the concerns.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 2,
                question: `Read the passage and answer:<br><br><em>"${topic.passage}"</em><br><br>${topic.question}`,
                answer: topic.correct,
                options: topic.options,
                hint: 'Analyze the structure of the argument: claim, evidence, and reasoning.',
                solution: `<strong>Argument Analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong>`,
                hard: true
            };
        }
    ]
};

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('sat-reading', satReadingUnit2);
}
