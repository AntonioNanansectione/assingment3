const quizData = [
  {
    question: "What is the capital of France?",
    answers: [
      { option: "A", text: "London" },
      { option: "B", text: "Berlin" },
      { option: "C", text: "Paris" },
      { option: "D", text: "Madrid" }
    ],
    correctAnswer: "C"
  },
  {
    question: "Which city is the capital of Italy?",
    answers: [
      { option: "A", text: "Rome" },
      { option: "B", text: "Athens" },
      { option: "C", text: "Vienna" },
      { option: "D", text: "Amsterdam" }
    ],
    correctAnswer: "A"
  },
  {
    question: "What is the capital of Australia?",
    answers: [
      { option: "A", text: "Sydney" },
      { option: "B", text: "Melbourne" },
      { option: "C", text: "Canberra" },
      { option: "D", text: "Brisbane" }
    ],
    correctAnswer: "C"
  },
  {
    question: "Which city is the capital of Brazil?",
    answers: [
      { option: "A", text: "São Paulo" },
      { option: "B", text: "Rio de Janeiro" },
      { option: "C", text: "Brasília" },
      { option: "D", text: "Salvador" }
    ],
    correctAnswer: "C"
  },
  {
    question: "What is the capital of Canada?",
    answers: [
      { option: "A", text: "Toronto" },
      { option: "B", text: "Montreal" },
      { option: "C", text: "Ottawa" },
      { option: "D", text: "Vancouver" }
    ],
    correctAnswer: "C"
  }
];

let currentQuestion = 0;
let score = 0;


