// SAT Reading Unit 1: Information and Ideas
// Central ideas, details, inferences, and text evidence

const satReadingUnit1 = {
    id: 1,
    name: 'Unit 1',
    title: 'Information & Ideas',

    lessons: [
        {
            title: '1.1 Central Ideas & Main Purpose',
            content: `
                <p>These questions ask you to identify the main point or purpose of a passage.</p>
                <div class="formula-box">
                    <strong>Key Strategies:</strong><br>
                    • Read the first and last paragraphs carefully<br>
                    • Look for repeated concepts or themes<br>
                    • Ask: "What is the author trying to communicate?"<br>
                    • Eliminate answers that are too narrow (detail) or too broad
                </div>
                <div class="example">
                    <h4>Common Question Stems:</h4>
                    <p>• "The main purpose of the passage is to..."</p>
                    <p>• "Which choice best states the central idea?"</p>
                    <p>• "The passage primarily serves to..."</p>
                </div>
            `
        },
        {
            title: '1.2 Supporting Details & Evidence',
            content: `
                <p>These questions ask you to find specific information in the text.</p>
                <div class="formula-box">
                    <strong>Strategy - ACE Method:</strong><br>
                    <strong>A</strong>nswer the question in your own words first<br>
                    <strong>C</strong>heck the passage for evidence<br>
                    <strong>E</strong>liminate answers that don't match
                </div>
                <p><strong>SAT Tip:</strong> The correct answer is almost always a paraphrase, not a direct quote. Be wary of answers that copy exact phrases but change the meaning.</p>
            `
        },
        {
            title: '1.3 Making Inferences',
            content: `
                <p>Inference questions ask what can be <em>reasonably concluded</em> from the text.</p>
                <div class="formula-box">
                    <strong>Key Principle:</strong><br>
                    Valid inferences must be supported by textual evidence.<br>
                    Don't bring in outside knowledge!<br><br>
                    <strong>Look for:</strong><br>
                    • Implied meanings<br>
                    • Logical conclusions<br>
                    • Author's unstated assumptions
                </div>
                <div class="example">
                    <h4>Watch Out For:</h4>
                    <p>• Extreme language ("always," "never," "all")</p>
                    <p>• Answers that go beyond what the text supports</p>
                    <p>• Answers that contradict the passage's tone</p>
                </div>
            `
        },
        {
            title: '1.4 Command of Evidence',
            content: `
                <p>These paired questions ask you to support your previous answer with textual evidence.</p>
                <div class="formula-box">
                    <strong>Two-Part Strategy:</strong><br>
                    1. Answer the first question<br>
                    2. Find the quote that BEST supports your answer<br>
                    3. If no quote supports it, reconsider your first answer<br><br>
                    <strong>Shortcut:</strong> Work backwards—see which evidence options support which answers
                </div>
            `
        }
    ],

    exercises: [
        {
            id: 'satr1-1',
            unit: 1,
            question: `Read the passage and answer:<br><br>
                <em>"The discovery of penicillin in 1928 marked a turning point in medical history. Before antibiotics, even minor infections could prove fatal. Alexander Fleming's accidental observation of mold killing bacteria led to medicines that have saved countless lives. Today, antibiotic resistance threatens to undo these gains, as overuse has allowed bacteria to evolve defenses."</em><br><br>
                The central idea of this passage is that:`,
            answer: 'C',
            hint: 'Look for the main point that encompasses the entire passage, not just one detail.',
            solution: `<strong>Analysis:</strong><br>
                The passage covers: discovery → impact → current threat<br><br>
                <strong>Eliminate:</strong><br>
                A) Too narrow (only about Fleming)<br>
                B) Too narrow (only about resistance)<br>
                D) Not mentioned in passage<br><br>
                <strong>Answer: C</strong> - The passage traces antibiotics from discovery through current challenges, showing both their importance and current threats.<br><br>
                <em>Options: A) Fleming was a careless scientist B) Antibiotic resistance is inevitable C) Antibiotics revolutionized medicine but face new challenges D) Mold is the best source of medicine</em>`,
            hard: false
        },
        {
            id: 'satr1-2',
            unit: 1,
            question: `Read the passage and answer:<br><br>
                <em>"Unlike her contemporaries who painted idealized portraits, Artemisia Gentileschi depicted women as powerful figures in dramatic scenes. Her 'Judith Slaying Holofernes' shows remarkable anatomical accuracy and emotional intensity. Art historians note that her work challenged the passive female roles typical of 17th-century art."</em><br><br>
                Based on the passage, Gentileschi's work was distinctive because it:`,
            answer: 'B',
            hint: 'What made her DIFFERENT from other artists of her time?',
            solution: `<strong>Key phrase:</strong> "Unlike her contemporaries"<br><br>
                <strong>The passage states she:</strong><br>
                • Depicted women as powerful (not passive)<br>
                • Created dramatic scenes<br>
                • Challenged typical female roles<br><br>
                <strong>Answer: B</strong> - Portrayed women as strong, active figures<br><br>
                <em>Options: A) Used brighter colors than others B) Portrayed women as strong, active figures C) Focused only on religious subjects D) Was more popular than male artists</em>`,
            hard: false
        },
        {
            id: 'satr1-3',
            unit: 1,
            question: `Read the passage and answer:<br><br>
                <em>"The octopus has long fascinated scientists with its intelligence. These creatures can solve puzzles, use tools, and even recognize individual human faces. Most remarkably, two-thirds of an octopus's neurons are located in its arms, allowing each arm to act somewhat independently while still coordinating with the central brain."</em><br><br>
                It can be inferred from the passage that:`,
            answer: 'A',
            hint: 'What can you LOGICALLY conclude from the information given?',
            solution: `<strong>What the passage tells us:</strong><br>
                • Octopuses are intelligent<br>
                • 2/3 of neurons in arms<br>
                • Arms act "somewhat independently"<br><br>
                <strong>Valid inference:</strong><br>
                If most neurons are in the arms and arms can act independently, then octopus intelligence is distributed differently than in most animals.<br><br>
                <strong>Answer: A</strong> - Octopus intelligence is organized differently than most animals<br><br>
                <em>Options: A) Octopus intelligence is organized differently than most animals B) Octopuses are smarter than all other sea creatures C) Scientists fully understand octopus cognition D) Octopus arms can survive without the brain</em>`,
            hard: false
        },
        {
            id: 'satr1-4',
            unit: 1,
            question: `Read the passage and answer:<br><br>
                <em>"The city council's new recycling program has seen mixed results. While participation rates have increased by 40%, contamination of recyclable materials remains a significant problem. Council member Torres noted, 'Education is key—many residents still don't know what can actually be recycled.' The program's success ultimately depends on changing daily habits."</em><br><br>
                According to the passage, the main obstacle to the recycling program's success is:`,
            answer: 'B',
            hint: 'What does the passage identify as the problem that needs to be solved?',
            solution: `<strong>Identify the problem:</strong><br>
                • "contamination... remains a significant problem"<br>
                • "many residents still don't know what can actually be recycled"<br>
                • "depends on changing daily habits"<br><br>
                <strong>The obstacle is:</strong> lack of knowledge/education about proper recycling<br><br>
                <strong>Answer: B</strong> - Residents' lack of knowledge about recycling rules<br><br>
                <em>Options: A) Low participation rates B) Residents' lack of knowledge about recycling rules C) Council member disagreements D) Insufficient funding</em>`,
            hard: false
        },
        {
            id: 'satr1-5',
            unit: 1,
            question: `Read the passage and answer:<br><br>
                <em>"Dr. Chen's research on sleep patterns revealed surprising findings. Participants who reported sleeping 'poorly' often showed normal brain wave patterns during monitored sleep, while those claiming to sleep 'well' sometimes exhibited signs of disruption. This disconnect between perception and reality, Chen argues, suggests that our subjective experience of sleep quality may not reflect its actual restorative value."</em><br><br>
                Which statement best captures Chen's main argument?`,
            answer: 'D',
            hint: 'What is Chen arguing about the relationship between how we FEEL about sleep and what actually happens?',
            solution: `<strong>Chen's finding:</strong><br>
                • "Poor" sleepers → normal patterns<br>
                • "Good" sleepers → sometimes disrupted<br>
                • "disconnect between perception and reality"<br><br>
                <strong>Chen's argument:</strong><br>
                How we think we slept ≠ actual sleep quality<br><br>
                <strong>Answer: D</strong> - How people perceive their sleep may differ from its actual quality<br><br>
                <em>Options: A) Everyone should sleep more hours B) Brain wave monitoring is unreliable C) Poor sleepers are actually well-rested D) How people perceive their sleep may differ from its actual quality</em>`,
            hard: true
        },
        {
            id: 'satr1-6',
            unit: 1,
            question: `Read the passage and answer:<br><br>
                <em>"The debate over year-round schooling continues to divide educators. Proponents argue that shorter, more frequent breaks prevent 'summer slide'—the learning loss that occurs during long vacations. Critics counter that extended breaks allow for valuable experiences outside the classroom and give families flexibility. Research on academic outcomes remains inconclusive, with studies showing benefits in some districts but not others."</em><br><br>
                The author's tone toward year-round schooling can best be described as:`,
            answer: 'C',
            hint: 'Does the author take a side, or present multiple viewpoints fairly?',
            solution: `<strong>Analyze the tone:</strong><br>
                • Presents proponents' view fairly<br>
                • Presents critics' view fairly<br>
                • Notes research is "inconclusive"<br>
                • No clear bias toward either side<br><br>
                <strong>Answer: C</strong> - Neutral and balanced<br><br>
                <em>Options: A) Strongly supportive B) Harshly critical C) Neutral and balanced D) Dismissively skeptical</em>`,
            hard: false
        }
    ],

    generators: [
        // Type 1: Main idea questions
        function() {
            const topics = [
                {
                    passage: `The Amazon rainforest produces approximately 20% of the world's oxygen, earning it the title "lungs of the Earth." However, deforestation has accelerated dramatically in recent decades. Scientists warn that continued destruction could trigger a "tipping point" where the forest can no longer sustain itself, potentially releasing billions of tons of stored carbon into the atmosphere.`,
                    question: 'The main purpose of this passage is to:',
                    correct: 'B',
                    options: ['A) Celebrate the beauty of rainforests', 'B) Explain the importance and vulnerability of the Amazon', 'C) Criticize government environmental policies', 'D) Compare different types of forests'],
                    explanation: 'The passage establishes importance ("lungs of the Earth") then discusses threats, making B the comprehensive answer.'
                },
                {
                    passage: `Coffee culture has transformed dramatically over the past century. What was once a simple morning beverage has become an elaborate ritual involving specialized equipment, exotic bean varieties, and precise brewing techniques. This shift reflects broader changes in consumer expectations, where experiences and craftsmanship are valued over mere convenience.`,
                    question: 'The central idea of this passage is that:',
                    correct: 'C',
                    options: ['A) Coffee is healthier than it used to be', 'B) Expensive coffee equipment is unnecessary', 'C) Coffee consumption has evolved from simple to sophisticated', 'D) Morning routines are becoming more complex'],
                    explanation: 'The passage traces coffee from "simple" to "elaborate ritual," showing evolution in sophistication.'
                },
                {
                    passage: `Urban vertical farms are emerging as a potential solution to food security challenges. These indoor facilities use LED lighting and hydroponic systems to grow crops year-round, regardless of weather. While currently more expensive than traditional farming, advocates believe costs will decrease as technology improves and demand for locally-grown produce increases.`,
                    question: 'The passage primarily serves to:',
                    correct: 'A',
                    options: ['A) Introduce vertical farming as a promising but developing technology', 'B) Argue that traditional farming is obsolete', 'C) Explain the science behind LED lighting', 'D) Criticize the high cost of modern agriculture'],
                    explanation: 'The passage introduces the concept, explains how it works, and acknowledges both potential and current limitations.'
                },
                {
                    passage: `Sleep deprivation has reached epidemic proportions in modern society. Studies show that adults who sleep fewer than seven hours per night face increased risks of heart disease, diabetes, and cognitive decline. Yet cultural attitudes often celebrate sleeplessness as a sign of dedication, creating a dangerous disconnect between health science and social norms.`,
                    question: 'The main purpose of this passage is to:',
                    correct: 'B',
                    options: ['A) Provide tips for better sleep', 'B) Highlight the conflict between health needs and cultural values', 'C) Argue that everyone needs exactly seven hours of sleep', 'D) Criticize people who sleep too much'],
                    explanation: 'The passage contrasts health risks with cultural celebration of sleeplessness—highlighting the disconnect between science and social norms.'
                },
                {
                    passage: `The honeybee population has declined by nearly 40% in the past decade, threatening not just honey production but the pollination of crops that feed billions. Scientists point to multiple causes: pesticides, habitat loss, and parasitic mites. Without intervention, the consequences could ripple through the entire food system.`,
                    question: 'The central idea of this passage is that:',
                    correct: 'C',
                    options: ['A) Honey is becoming more expensive', 'B) Parasitic mites are the main threat to bees', 'C) Declining bee populations pose a serious threat to food production', 'D) Scientists disagree about the causes of bee decline'],
                    explanation: 'The passage emphasizes the threat to food systems (not just honey), with multiple causes—the central idea is the serious agricultural threat.'
                },
                {
                    passage: `Virtual reality technology has moved beyond gaming into therapeutic applications. Clinicians now use VR to treat phobias, PTSD, and chronic pain, allowing patients to confront fears or distract from discomfort in controlled environments. While not a replacement for traditional therapy, VR offers tools that were impossible just a decade ago.`,
                    question: 'The passage primarily serves to:',
                    correct: 'D',
                    options: ['A) Argue that VR gaming is harmful', 'B) Explain how VR technology works', 'C) Compare different therapy methods', 'D) Describe emerging medical uses of VR technology'],
                    explanation: 'The focus is on therapeutic applications—phobias, PTSD, pain—presenting VR as a new medical tool.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 1,
                question: `Read the passage and answer:<br><br><em>"${topic.passage}"</em><br><br>${topic.question}`,
                answer: topic.correct,
                hint: 'Look for the answer that encompasses the ENTIRE passage, not just one part.',
                solution: `<strong>Analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong><br><br><em>Options: ${topic.options.join(' ')}</em>`,
                hard: false
            };
        },
        // Type 2: Detail questions
        function() {
            const topics = [
                {
                    passage: `The platypus is one of only five species of monotremes—mammals that lay eggs. Found exclusively in eastern Australia, these creatures hunt underwater using electroreception, detecting the electrical signals produced by their prey's muscle movements. Their venomous ankle spurs make them one of the few venomous mammals in existence.`,
                    question: 'According to the passage, platypuses locate their prey by:',
                    correct: 'B',
                    options: ['A) Using their excellent eyesight', 'B) Sensing electrical signals', 'C) Following scent trails', 'D) Listening for movement'],
                    explanation: 'The passage states they use "electroreception, detecting the electrical signals."'
                },
                {
                    passage: `The Great Wall of China was not built all at once but constructed over many centuries by different dynasties. The most well-preserved sections date from the Ming Dynasty (1368-1644). Contrary to popular belief, the wall is not visible from space with the naked eye—this myth has been debunked by numerous astronauts.`,
                    question: 'The passage indicates that the best-preserved parts of the Great Wall were built during:',
                    correct: 'C',
                    options: ['A) Ancient times', 'B) The space age', 'C) The Ming Dynasty', 'D) The 20th century'],
                    explanation: 'The passage directly states "most well-preserved sections date from the Ming Dynasty."'
                },
                {
                    passage: `Marie Curie remains the only person to win Nobel Prizes in two different sciences: Physics in 1903 and Chemistry in 1911. Her research on radioactivity laid the groundwork for cancer treatment and nuclear energy. Despite her achievements, she faced significant discrimination as a woman in science and was initially denied membership in the French Academy of Sciences.`,
                    question: 'According to the passage, Curie won her Nobel Prize in Chemistry in:',
                    correct: 'D',
                    options: ['A) 1903', 'B) 1905', 'C) 1908', 'D) 1911'],
                    explanation: 'The passage states "Chemistry in 1911."'
                },
                {
                    passage: `The James Webb Space Telescope, launched in December 2021, orbits the sun approximately 1 million miles from Earth. Its primary mirror spans 21 feet in diameter, dwarfing the Hubble telescope's 8-foot mirror. Scientists expect the telescope to operate for at least 20 years, studying the earliest galaxies formed after the Big Bang.`,
                    question: 'According to the passage, the James Webb telescope orbits:',
                    correct: 'B',
                    options: ['A) Earth', 'B) The sun', 'C) The moon', 'D) Mars'],
                    explanation: 'The passage directly states it "orbits the sun approximately 1 million miles from Earth."'
                },
                {
                    passage: `The capybara, native to South America, holds the distinction of being the world's largest rodent. Adults typically weigh between 77 and 146 pounds. These semi-aquatic animals are highly social, living in groups of 10 to 20 individuals near rivers and lakes, where they spend much of their time in the water.`,
                    question: 'According to the passage, capybaras typically live in groups of:',
                    correct: 'C',
                    options: ['A) 2 to 5 individuals', 'B) 5 to 10 individuals', 'C) 10 to 20 individuals', 'D) Over 50 individuals'],
                    explanation: 'The passage states they live "in groups of 10 to 20 individuals."'
                },
                {
                    passage: `Iceland generates nearly 100% of its electricity from renewable sources, with geothermal energy providing about 25% and hydropower supplying most of the remainder. The country's unique geology, sitting atop the Mid-Atlantic Ridge, gives it access to abundant volcanic heat that most nations lack.`,
                    question: 'According to the passage, what percentage of Iceland\'s electricity comes from geothermal energy?',
                    correct: 'A',
                    options: ['A) About 25%', 'B) Nearly 100%', 'C) About 50%', 'D) Less than 10%'],
                    explanation: 'The passage states "geothermal energy providing about 25%."'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 1,
                question: `Read the passage and answer:<br><br><em>"${topic.passage}"</em><br><br>${topic.question}`,
                answer: topic.correct,
                hint: 'Find the specific detail in the passage that answers this question.',
                solution: `<strong>Locate the detail:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong><br><br><em>Options: ${topic.options.join(' ')}</em>`,
                hard: false
            };
        },
        // Type 3: Inference questions
        function() {
            const topics = [
                {
                    passage: `After the factory closed, the small town of Millbrook saw its population drop by nearly half within a decade. Storefronts along Main Street stood empty, and the local school consolidated with a neighboring district. Those who remained were mostly elderly residents unwilling to leave homes they had lived in for generations.`,
                    question: 'It can be inferred from the passage that:',
                    correct: 'A',
                    options: ['A) Younger residents left to find work elsewhere', 'B) The factory reopened in a different location', 'C) The town received government assistance', 'D) Property values increased dramatically'],
                    explanation: 'If population dropped by half and "those who remained were mostly elderly," younger people must have left. The factory closure (job loss) explains why.'
                },
                {
                    passage: `The restaurant critic noted that while the new establishment\'s ambiance was stunning—with its floor-to-ceiling windows and minimalist décor—the menu prices seemed designed for a clientele with unlimited expense accounts. The portions, though artfully presented, would leave most diners reaching for a snack on the way home.`,
                    question: 'The critic implies that the restaurant:',
                    correct: 'B',
                    options: ['A) Offers excellent value for money', 'B) Prioritizes appearance over substance', 'C) Should expand its seating capacity', 'D) Has poorly trained staff'],
                    explanation: 'Beautiful ambiance but overpriced with small portions = prioritizing style/appearance over practical substance (value, filling meals).'
                },
                {
                    passage: `Dr. Patel\'s study found that students who took handwritten notes performed better on conceptual questions than those who typed their notes. The researchers theorized that the slower pace of writing forces the brain to process and summarize information rather than transcribing it verbatim.`,
                    question: 'Based on the passage, it can be inferred that typing notes:',
                    correct: 'C',
                    options: ['A) Is impossible for most students', 'B) Improves memory retention', 'C) May encourage passive recording over active processing', 'D) Is preferred by all researchers'],
                    explanation: 'If handwriting forces processing (and leads to better results), and typing is faster, then typing likely encourages passive transcription rather than active processing.'
                },
                {
                    passage: `The museum's new exhibit on ancient Egypt drew record crowds in its first month. However, several scholars criticized the exhibition for focusing primarily on royal tombs and gold artifacts while largely ignoring the lives of ordinary Egyptians. The curators defended their choices, citing visitor surveys showing strong interest in pharaohs.`,
                    question: 'It can be inferred that the scholars believe:',
                    correct: 'B',
                    options: ['A) The exhibit should be closed immediately', 'B) A broader perspective on Egyptian life would be more valuable', 'C) Visitor surveys are always accurate', 'D) Royal artifacts are uninteresting'],
                    explanation: 'The scholars\' criticism focuses on what\'s "ignored"—ordinary Egyptians—implying they value a broader, more complete picture.'
                },
                {
                    passage: `When the city announced plans to convert an abandoned warehouse into affordable housing, nearby homeowners packed the public hearing to voice objections. They cited concerns about traffic, parking, and "neighborhood character." The housing developer noted that similar projects in other cities had actually increased property values.`,
                    question: 'The passage suggests that the homeowners\' stated concerns may:',
                    correct: 'D',
                    options: ['A) Be completely valid', 'B) Have convinced the city to cancel the project', 'C) Be supported by evidence from other cities', 'D) Not reflect their primary motivations'],
                    explanation: 'The contrast between stated concerns and the developer\'s data suggests the real concern might be unstated—possibly property values or social class.'
                },
                {
                    passage: `The tech company announced it would require all employees to return to the office five days a week. Within a month, 15% of staff had resigned, including several senior engineers. Company leadership maintained the policy was necessary for "collaboration and culture," though they quietly began offering remote work exceptions to key personnel.`,
                    question: 'It can be inferred from the passage that the company:',
                    correct: 'A',
                    options: ['A) Values some employees more than others', 'B) Plans to close its offices', 'C) Has no remote work technology', 'D) Successfully improved collaboration'],
                    explanation: 'Offering exceptions only to "key personnel" while maintaining the policy for others shows differential treatment based on perceived value.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 1,
                question: `Read the passage and answer:<br><br><em>"${topic.passage}"</em><br><br>${topic.question}`,
                answer: topic.correct,
                hint: 'What can you LOGICALLY conclude from the information given? Don\'t go beyond what the text supports.',
                solution: `<strong>Reasoning:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong><br><br><em>Options: ${topic.options.join(' ')}</em>`,
                hard: true
            };
        },
        // Type 4: Purpose questions
        function() {
            const topics = [
                {
                    passage: `Consider the honeybee. This tiny insect, weighing less than a gram, can communicate the precise location of food sources through an elaborate "waggle dance." The angle of the dance indicates direction relative to the sun, while its duration signals distance. Such sophisticated communication in so small a creature challenges our assumptions about the relationship between brain size and intelligence.`,
                    question: 'The author mentions the honeybee\'s "waggle dance" primarily to:',
                    correct: 'B',
                    options: ['A) Explain how to keep bees', 'B) Illustrate surprising complexity in a small creature', 'C) Argue that bees are smarter than humans', 'D) Describe a problem facing bee populations'],
                    explanation: 'The dance example supports the final point about challenging "assumptions about brain size and intelligence."'
                },
                {
                    passage: `The initial reviews of Impressionist paintings were scathing. Critics mocked Monet\'s loose brushstrokes as "unfinished" and dismissed the movement as a whole. Today, these same paintings sell for hundreds of millions of dollars and hang in the world\'s most prestigious museums. The story serves as a reminder that revolutionary art is rarely recognized as such in its own time.`,
                    question: 'The author contrasts early criticism with current value in order to:',
                    correct: 'D',
                    options: ['A) Criticize modern art collectors', 'B) Explain Monet\'s painting technique', 'C) Argue that all criticized art becomes valuable', 'D) Show how perceptions of art can change dramatically'],
                    explanation: 'The contrast between "scathing" reviews and "hundreds of millions" demonstrates the dramatic shift in perception over time.'
                },
                {
                    passage: `My grandmother kept a garden that seemed to defy the rocky New England soil. While neighbors struggled with sparse tomato plants, her plot overflowed with vegetables of every variety. Her secret, she claimed, was simply talking to the plants—though I later learned she also woke before dawn to tend them and had spent decades amending the soil with compost.`,
                    question: 'The author mentions the grandmother\'s claim about "talking to plants" to:',
                    correct: 'A',
                    options: ['A) Contrast a simple explanation with the reality of hard work', 'B) Prove that plants respond to human voices', 'C) Criticize unscientific gardening methods', 'D) Explain why neighbors had poor gardens'],
                    explanation: 'The "secret" of talking is contrasted with the real work (waking early, decades of composting), showing the difference between simple claims and actual effort.'
                },
                {
                    passage: `Every year, millions of birds die from collisions with glass windows. The problem isn't that birds don't see the glass—it's that they see reflections of sky and trees and fly toward them. Some cities now require "bird-safe" glass in new buildings, featuring patterns visible to birds but barely noticeable to humans.`,
                    question: 'The author explains how birds perceive glass in order to:',
                    correct: 'C',
                    options: ['A) Criticize bird intelligence', 'B) Argue against new building codes', 'C) Clarify the nature of the problem and support the solution', 'D) Suggest birds should avoid cities'],
                    explanation: 'Understanding that birds see reflections (not nothing) explains why bird-safe patterns work—they break up the false sky image.'
                },
                {
                    passage: `The athlete's autobiography devotes three chapters to her Olympic triumph but just two paragraphs to her decade-long struggle with an eating disorder. In interviews, she deflects questions about that period with practiced ease. The contrast suggests how selectively we curate our public narratives.`,
                    question: 'The author notes the disproportion between chapters and paragraphs primarily to:',
                    correct: 'B',
                    options: ['A) Criticize the athlete\'s writing skills', 'B) Illustrate how people control their own stories', 'C) Argue that struggles are more important than victories', 'D) Suggest the autobiography is poorly organized'],
                    explanation: 'The imbalance supports the point about "selectively curating public narratives"—choosing what to emphasize and minimize.'
                },
                {
                    passage: `When asked about the company\'s environmental record, the CEO cited their new recycling program and solar panels on the headquarters roof. He did not mention the three overseas factories that had failed pollution inspections, nor the pending lawsuit over toxic waste disposal.`,
                    question: 'The author includes the information about overseas factories to:',
                    correct: 'D',
                    options: ['A) Praise the company\'s global operations', 'B) Explain why solar panels are effective', 'C) Describe the lawsuit in detail', 'D) Reveal the gap between the CEO\'s claims and reality'],
                    explanation: 'The contrast between what the CEO said and what he omitted exposes selective presentation—greenwashing.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 1,
                question: `Read the passage and answer:<br><br><em>"${topic.passage}"</em><br><br>${topic.question}`,
                answer: topic.correct,
                hint: 'Ask yourself: WHY did the author include this specific detail or example?',
                solution: `<strong>Purpose analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong><br><br><em>Options: ${topic.options.join(' ')}</em>`,
                hard: false
            };
        },
        // Type 5: Tone/attitude questions
        function() {
            const topics = [
                {
                    passage: `The proposed highway expansion will undoubtedly ease traffic congestion for suburban commuters. However, it will also displace 200 families, destroy a century-old neighborhood park, and increase air pollution in communities already suffering from high asthma rates. Whether these tradeoffs are acceptable depends on whose interests we prioritize.`,
                    question: 'The author\'s tone toward the highway expansion can best be described as:',
                    correct: 'C',
                    options: ['A) Enthusiastically supportive', 'B) Angrily opposed', 'C) Critically analytical', 'D) Completely indifferent'],
                    explanation: 'The author presents benefits and drawbacks objectively, then asks a critical question about priorities—analytical but with clear concerns.'
                },
                {
                    passage: `Another celebrity has launched a skincare line, promising "revolutionary" results backed by "science." The ingredients list reveals the usual suspects: water, glycerin, and fragrance, with a dash of exotic-sounding plant extracts. At $85 for two ounces, consumers are paying primarily for the famous face on the label.`,
                    question: 'The author\'s attitude toward celebrity skincare lines is best described as:',
                    correct: 'B',
                    options: ['A) Genuinely impressed', 'B) Skeptically dismissive', 'C) Cautiously optimistic', 'D) Completely neutral'],
                    explanation: 'Quotation marks around "revolutionary" and "science," calling ingredients "usual suspects," and noting the high price for basic ingredients = skeptical dismissal.'
                },
                {
                    passage: `The young violinist\'s performance was, in a word, transcendent. From the first notes of the Bach partita, the audience sat spellbound. Her technical precision was matched only by the emotional depth she brought to each phrase. This was not merely a recital; it was a reminder of why we gather to experience live music.`,
                    question: 'The author\'s tone in this passage is best characterized as:',
                    correct: 'A',
                    options: ['A) Deeply admiring', 'B) Mildly interested', 'C) Professionally detached', 'D) Reluctantly impressed'],
                    explanation: 'Words like "transcendent," "spellbound," and the final reflection show deep admiration without reservation.'
                },
                {
                    passage: `The new restaurant offers what its owners call "farm-to-table" dining, though the nearest farm is three hundred miles away. The menu features the usual suspects—truffle fries, avocado toast, overpriced salads—at prices that would make even Manhattan diners wince. One suspects the primary ingredient is pretension.`,
                    question: 'The author\'s tone toward the restaurant can best be described as:',
                    correct: 'B',
                    options: ['A) Enthusiastic and appreciative', 'B) Mocking and sardonic', 'C) Objective and neutral', 'D) Confused and uncertain'],
                    explanation: 'Phrases like "usual suspects," "overpriced," and "primary ingredient is pretension" reveal clear mockery and sarcasm.'
                },
                {
                    passage: `Scientists at the research station have spent fifteen years studying the declining penguin population. Their dedication—through brutal winters, equipment failures, and funding cuts—has yielded data that may finally explain the colony's struggles. Such commitment to understanding our natural world deserves recognition.`,
                    question: 'The author\'s attitude toward the scientists is best described as:',
                    correct: 'D',
                    options: ['A) Critical of their methods', 'B) Indifferent to their work', 'C) Skeptical of their findings', 'D) Respectful and appreciative'],
                    explanation: '"Dedication," "brutal winters," "deserves recognition"—the author clearly admires and respects their commitment.'
                },
                {
                    passage: `The politician\'s speech was filled with the usual empty promises: jobs, security, prosperity for all. The crowd cheered on cue, waving signs they had been handed at the door. By tomorrow, both the words and the enthusiasm would be forgotten, replaced by the grinding reality of unchanged policies.`,
                    question: 'The author\'s tone in this passage is primarily:',
                    correct: 'C',
                    options: ['A) Hopeful and optimistic', 'B) Angry and confrontational', 'C) Cynical and disillusioned', 'D) Neutral and objective'],
                    explanation: '"Empty promises," "cheered on cue," "grinding reality"—the author expresses clear cynicism about political rhetoric.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 1,
                question: `Read the passage and answer:<br><br><em>"${topic.passage}"</em><br><br>${topic.question}`,
                answer: topic.correct,
                hint: 'Look for word choices that reveal the author\'s attitude—positive, negative, or neutral?',
                solution: `<strong>Tone analysis:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong><br><br><em>Options: ${topic.options.join(' ')}</em>`,
                hard: false
            };
        },
        // Type 6: Word-in-context questions
        function() {
            const topics = [
                {
                    passage: `The negotiations had reached an impasse. Neither side would budge on the core issues, and the mediator\'s attempts to find common ground had proven fruitless. After three days of heated discussions, the delegates agreed only to table the matter until tempers had cooled.`,
                    question: 'As used in the passage, "table" most nearly means:',
                    correct: 'B',
                    options: ['A) Place on a piece of furniture', 'B) Postpone for later discussion', 'C) Present formally', 'D) Reject permanently'],
                    explanation: 'Context: "until tempers had cooled" indicates a postponement, not rejection or immediate action. "Table" here means to set aside temporarily.'
                },
                {
                    passage: `The artist\'s early work was derivative, clearly influenced by the Impressionists she had studied in school. But her latest exhibition reveals a mature voice—bold, original, and unmistakably her own. The transformation suggests years of experimentation and self-discovery.`,
                    question: 'In context, "derivative" most nearly means:',
                    correct: 'C',
                    options: ['A) Mathematical', 'B) Profitable', 'C) Imitative of others\' work', 'D) Highly original'],
                    explanation: 'The contrast with "original" and "unmistakably her own" shows "derivative" means the opposite—imitative, influenced by others.'
                },
                {
                    passage: `The company\'s sustainability report painted a rosy picture of its environmental initiatives. However, independent auditors found that the actual reductions in carbon emissions were modest at best, suggesting the report was more about public relations than genuine progress.`,
                    question: 'As used in the passage, "modest" most nearly means:',
                    correct: 'A',
                    options: ['A) Small or limited', 'B) Humble in attitude', 'C) Moderately priced', 'D) Conservatively dressed'],
                    explanation: 'Context suggests the reductions were less impressive than claimed—"modest" here means small/limited, contrasting with the "rosy picture."'
                },
                {
                    passage: `The novel\'s reception was cool at first, with critics dismissing it as "another dystopian thriller." But word of mouth spread, and within months it had become a genuine phenomenon, spawning book clubs, online discussions, and eventually a film adaptation.`,
                    question: 'As used in the passage, "cool" most nearly means:',
                    correct: 'B',
                    options: ['A) Fashionable and trendy', 'B) Unenthusiastic or lukewarm', 'C) Calm and composed', 'D) Low in temperature'],
                    explanation: '"Dismissing" and the contrast with "genuine phenomenon" show "cool" means unenthusiastic, not positive.'
                },
                {
                    passage: `The coach\'s decision to bench the star player was met with outrage from fans. However, she maintained that the move was calculated to send a message about team discipline. By the next game, the player\'s attitude had noticeably improved.`,
                    question: 'In context, "calculated" most nearly means:',
                    correct: 'D',
                    options: ['A) Mathematical', 'B) Cold and uncaring', 'C) Risky and uncertain', 'D) Deliberate and strategic'],
                    explanation: 'The coach had a specific purpose ("send a message"), so "calculated" means deliberate/strategic, not mathematical.'
                },
                {
                    passage: `The explorer\'s account of his journey strained credulity. He claimed to have crossed the desert in half the expected time, survived on nothing but rainwater, and befriended a tribe that no other Westerner had contacted. Historians remain divided on how much to credit his narrative.`,
                    question: 'As used in the passage, "credit" most nearly means:',
                    correct: 'C',
                    options: ['A) Give financial loans to', 'B) Praise publicly', 'C) Believe or trust', 'D) Attribute to someone'],
                    explanation: 'In the context of "strained credulity" and historians being "divided," "credit" means to believe or accept as true.'
                }
            ];

            const topic = randChoice(topics);
            return {
                unit: 1,
                question: `Read the passage and answer:<br><br><em>"${topic.passage}"</em><br><br>${topic.question}`,
                answer: topic.correct,
                hint: 'Replace the word with each answer choice—which one makes sense in context?',
                solution: `<strong>Context clues:</strong><br>${topic.explanation}<br><br><strong>Answer: ${topic.correct}</strong><br><br><em>Options: ${topic.options.join(' ')}</em>`,
                hard: false
            };
        }
    ]
};

// Register this unit
if (typeof registerUnit === 'function') {
    registerUnit('sat-reading', satReadingUnit1);
}
