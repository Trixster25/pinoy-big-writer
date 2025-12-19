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
