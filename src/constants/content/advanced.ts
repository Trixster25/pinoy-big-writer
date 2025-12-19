import type { QuizQuestion, SetContainer } from "../../types"
import { QuestionType } from "../QuestionType.Enum"

const setA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which revision adds the strongest content to a narrative introduction?",
        explanation: "D – This sentence sets a clear scene and introduces a specific event with context, giving the reader a strong start. The other options are vague and provide little information.",
        correctAnswer: "D. “Last December, I finally reunited with my childhood friend after six years.”",
        choices: [
            "A. “My birthday was fun.”",
            "B. “I celebrated something.”",
            "C. “It happened during a time.”",
            "D. “Last December, I finally reunited with my childhood friend after six years.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. A student writes: “I felt nervous.” Which improvement best adds emotional depth?",
        explanation: "B – Simply stating “I felt nervous” does not show why the emotion occurred. Explaining the cause adds emotional depth and helps readers connect to the experience.",
        correctAnswer: "B. Explaining what caused the nervousness.",
        choices: [
            "A. Repeating the sentence for emphasis.",
            "B. Explaining what caused the nervousness.",
            "C. Adding more events before the sentence.",
            "D. Changing “nervous” to a longer adjective.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Paragraph:\nWhen I arrived at the auditorium, everyone was already preparing for the performance. The curtains swayed gently, and the lights flickered as we checked the props.\nWhat is the main idea of the paragraph?",
        explanation: "D – The paragraph describes the preparations before a performance, including the setting and actions. The main idea focuses on what was happening, not lateness, curtains, or costumes.",
        correctAnswer: "D. The preparation happening before the performance.",
        choices: [
            "A. The narrator arrived late.",
            "B. How curtains were designed.",
            "C. The narrator’s costume errors.",
            "D. The preparation happening before the performance.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which sentence shows clear and relevant supporting detail?",
        explanation: "D – This sentence gives a specific action and reaction that supports the narrative. The other options are general statements without vivid detail.",
        correctAnswer: "D. “My hands shook as I stepped onto the stage, but hearing my classmates cheer gave me confidence.”",
        choices: [
            "A. “Everything went normally.”",
            "B. “We did a lot of stuff that day.”",
            "C. “Many people do performances.”",
            "D. “My hands shook as I stepped onto the stage, but hearing my classmates cheer gave me confidence.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. A student writes an essay about a memorable award ceremony but includes a long paragraph describing their vacation. The issue is…",
        explanation: "B – Including a paragraph about vacation in an essay about an award ceremony is off-topic. Content must be relevant to the main idea.",
        correctAnswer: "B. Irrelevant content.",
        choices: [
            "A. Weak vocabulary.",
            "B. Irrelevant content.",
            "C. Too much reflection.",
            "D. Excessive emotional depth.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which question helps a writer ensure their paragraph is fully developed?",
        explanation: "A – To ensure a paragraph is fully developed, the writer must check whether all details support the main idea. The other questions do not relate to content development.",
        correctAnswer: "A. “Do these details support the main idea?”",
        choices: [
            "A. “Do these details support the main idea?”",
            "B. “Is my handwriting neat?”",
            "C. “Is this paragraph long enough?”",
            "D. “Will this impress the teacher?”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Paragraph:\nI learned a lot from our class debate. It helped me improve my speaking skills.\nWhat is this paragraph missing?",
        explanation: "C – The paragraph only has a topic sentence and a concluding idea; it lacks specific examples or events that explain how the student learned from the debate.",
        correctAnswer: "C. Supporting details that explain what happened during the debate.",
        choices: [
            "A. A topic sentence.",
            "B. A concluding transition.",
            "C. Supporting details that explain what happened during the debate.",
            "D. Grammar corrections.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which sentence is the strongest topic sentence for a paragraph about winning a competition?",
        explanation: "D – A strong topic sentence clearly introduces the paragraph’s main idea with relevance and depth. The other options are too vague or general.",
        correctAnswer: "D. “Winning the competition was a turning point because it taught me to trust my abilities.”",
        choices: [
            "A. “It was a day to remember.”",
            "B. “Many schools join contests.”",
            "C. “Competitions are sometimes hard.”",
            "D. “Winning the competition was a turning point because it taught me to trust my abilities.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. A focused narrative should…",
        explanation: "D – A focused narrative sticks to the main event and explains it step by step. Listing every memory or switching topics makes the content unfocused.",
        correctAnswer: "D. Follow the event step-by-step with relevant explanations",
        choices: [
            "A. List many events quickly without details.",
            "B. Switch topics to keep the reader entertained.",
            "C. Include every memory connected to childhood.",
            "D. Follow the event step-by-step with relevant explanations",
        ],
        choiceType: "alpha"
    },
        {
        type: QuestionType.MultipleChoice,
        question: "10.	A student ends an essay with: “This day reminded me that success requires effort.”\nThis sentence is an example of…",
        explanation: "B – This sentence shows reflection because it expresses the lesson learned from the event, rather than describing the setting or repeating earlier ideas.",
        correctAnswer: "B. Reflection",
        choices: [
            "A. Irrelevant detail",
            "B. Reflection",
            "C. Repetition",
            "D. Setting description",
        ],
        choiceType: "alpha"
    },
]

const setB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which detail best strengthens the narrator’s description of fear?",
        explanation: "D – This sentence gives specific physical reactions and context, helping the reader feel the narrator’s fear. The other options are vague and do not show the intensity of the emotion.",
        correctAnswer: "D. “My heartbeat raced as the classroom fell silent, and I felt every eye turn to me.”",
        choices: [
            "A. “I was scared.”",
            "B. “It was a moment.”",
            "C. “Fear suddenly came.”",
            "D. “My heartbeat raced as the classroom fell silent, and I felt every eye turn to me.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Paragraph:\nDuring our community outreach, we visited a small learning center. The children welcomed us with wide smiles. We taught them simple games and shared stories.\nWhich sentence would best complete the paragraph by adding meaning?",
        explanation: "D – Adding reflection at the end connects the experience to a meaningful lesson. The other options only state events or facts without showing significance.",
        correctAnswer: "D. “The experience reminded me how meaningful small acts of kindness can be.”",
        choices: [
            "A. “It was tiring.”",
            "B. “Then we went home.”",
            "C. “We stayed there for two hours.”",
            "D. “The experience reminded me how meaningful small acts of kindness can be.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. A paragraph that presents ideas in random order usually lacks…",
        explanation: "B – Presenting ideas randomly makes a paragraph confusing and unfocused. Organization and focus are necessary for strong content.",
        correctAnswer: "B. Organization and focus.",
        choices: [
            "A. Emotional depth.",
            "B. Organization and focus.",
            "C. Sensory detail.",
            "D. Vocabulary variety.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which scenario shows a well-developed main idea?",
        explanation: "D – A well-developed main idea includes a clear event or topic, detailed actions, and reflections, giving the reader both information and insight. The other options are incomplete or scattered.",
        correctAnswer: "D. Describing one memorable event with detailed actions and reflections.",
        choices: [
            "A. Changing topics after every paragraph.",
            "B. Listing ten hobbies without explanation.",
            "C. Writing only one sentence about an important day.",
            "D. Describing one memorable event with detailed actions and reflections.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. A student writes about a school event but never explains why it mattered. The issue is…",
        explanation: "B – If the writer never explains why the event mattered, the paragraph lacks reflection, which is key to meaningful content.",
        correctAnswer: "B. Missing reflection",
        choices: [
            "A. Missing conclusion",
            "B. Missing reflection",
            "C. Too many details",
            "D. Strong content",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which sentence adds relevant detail to support the idea of teamwork?",
        explanation: "D – This sentence gives specific actions that show collaboration and teamwork. The other options are irrelevant or general statements.",
        correctAnswer: "D. “We discussed our strategy, assigned roles, and helped each other finish the project on time.”",
        choices: [
            "A. “The day was sunny.”",
            "B. “We were classmates back then.”",
            "C. “We all have friends sometimes.”",
            "D. “We discussed our strategy, assigned roles, and helped each other finish the project on time.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Paragraph:\nI joined the science fair this year. It was a big event and many students participated.\nWhat is the paragraph missing to create strong content?",
        explanation: "A – To make the paragraph strong, the writer must include details about what they did and what made the experience memorable. Vocabulary and punctuation alone do not improve content.",
        correctAnswer: "A. Explanation of what the narrator did and what made the experience memorable.",
        choices: [
            "A. Explanation of what the narrator did and what made the experience memorable.",
            "B. A longer introduction.",
            "C. Fancy vocabulary.",
            "D. More punctuation.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which sentence best shows cause and effect?",
        explanation: "D – This sentence clearly links an action (teacher’s comment) with the effect (feeling proud), showing cause and effect. The other options do not connect events with consequences.",
        correctAnswer: "D. “I felt proud because my teacher told me she believed in my improvement.”",
        choices: [
            "A. “I cried loudly.”",
            "B. “The day ended.”",
            "C. “We were in the gym.”",
            "D. “I felt proud because my teacher told me she believed in my improvement.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. A writer planning to strengthen content should ask…",
        explanation: "D – Asking what was learned or realized helps strengthen content by adding reflection. The other questions do not improve the paragraph’s ideas.",
        correctAnswer: "D. “What did I learn or realize from this?”",
        choices: [
            "A. “Should I erase the title?”",
            "B. “What song should I listen to?”",
            "C. “How many sentences must I write?”",
            "D. “What did I learn or realize from this?”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Which closing sentence shows a strong, meaningful conclusion?",
        explanation: "C – A strong conclusion sums up the experience and provides insight or a lesson. The other options are vague or simply restate events.",
        correctAnswer: "C. “In the end, the experience taught me to value preparation and confidence.”",
        choices: [
            "A. “That’s all.”",
            "B. “The event happened so fast.”",
            "C. “In the end, the experience taught me to value preparation and confidence.”",
            "D. “I want more events like that.”",
        ],
        choiceType: "alpha"
    },
]

const setC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
]

const setD: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
]

const setE: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
]

const CONTENT_ADVANCED_SET: SetContainer[] = [
    {
        label: "Set A",
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setA,
        }
    },
    {
        label: "Set B",
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setB,
        }
    },
    {
        label: "Set C",
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setC,
        }
    },
    {
        label: "Set D",
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setD,
        }
    },
    {
        label: "Set E",
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setE,
        }
    },
]
