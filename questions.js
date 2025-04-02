// questions.js
const quizQuestionsDB = [
  {
    question: "What is hoisting in JavaScript?",
    options: [
      "A process of moving variables and functions to the top of the code",
      "A method for sorting arrays",
      "A way to create closures",
      "A feature for asynchronous programming",
    ],
    correctAnswer: "A",
  },
  {
    question:
      "Which of the following is NOT a valid variable name in JavaScript?",
    options: ["my_variable", "2ndVariable", "_myVar", "$myVar"],
    correctAnswer: "B",
  },
  {
    question: "How many primitive data types does JavaScript have?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "C",
  },
  {
    question:
      "Which of the following methods is used to sort an array numerically?",
    options: ["sort()", "sort((a, b) => a - b)", "filter()", "map()"],
    correctAnswer: "B",
  },
  {
    question: "What does the typeof operator return for an array?",
    options: ["'array'", "'object'", "'array object'", "'undefined'"],
    correctAnswer: "B",
  },
  {
    question: "Which of the following is NOT a data structure in JavaScript?",
    options: ["Stack", "Queue", "Graph", "Pointer"],
    correctAnswer: "D",
  },
  {
    question:
      "Which type of type conversion happens automatically in JavaScript?",
    options: ["Implicit", "Explicit", "Static", "Manual"],
    correctAnswer: "A",
  },
  {
    question: "What is an Immediately Invoked Function Expression (IIFE)?",
    options: [
      "A function that is defined and executed immediately",
      "A function that is called at a later time",
      "A function with a name",
      "A function that runs only when the document is loaded",
    ],
    correctAnswer: "A",
  },
  {
    question: "What does the event.target property represent in JavaScript?",
    options: [
      "The event handler function",
      "The element that triggered the event",
      "The parent of the event target",
      "The event propagation method",
    ],
    correctAnswer: "B",
  },
  {
    question: "Which array method removes the last element from an array?",
    options: ["pop()", "shift()", "splice()", "slice()"],
    correctAnswer: "A",
  },
];

export default quizQuestionsDB;
