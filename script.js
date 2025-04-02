import quizQuestionsDB from "./questions.js";

function getRandomizedQuestions(questionsArray) {
  if (questionsArray.length < 10) {
    throw new Error("Not enough questions in the array");
  }
  let randomQuestions = [];
  let numbersAppeared = [];

  while (randomQuestions.length < 10) {
    let random = Math.floor(Math.random() * questionsArray.length);
    if (!numbersAppeared.includes(random)) {
      randomQuestions.push(questionsArray[random]);
      numbersAppeared.push(random);
    }
  }
  return randomQuestions;
}

const quizStartContainer = document.getElementById("quizStart");
const startBubble = document.querySelector(".start-quiz-bubble");
const quizContainer = document.getElementById("quizContainer");
const quizResultsContainer = document.getElementById("quizResults");
const quizForm = document.getElementById("quizForm");

const questionElement = document.querySelector(".question");
const labels = document.querySelectorAll(".answer-el");
const actionButton = quizForm.querySelector(".action");
const radioInputs = quizForm.querySelectorAll('input[type="radio"]');

const scoreText = document.querySelector(".score");
const endBubble = document.querySelector(".restart-bubble");
const questionNumbers = document.querySelectorAll(".number");

let questions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function startQuiz() {
  quizStartContainer.style.display = "none";
  quizContainer.style.display = "flex";
  quizResultsContainer.style.display = "none";

  questions = getRandomizedQuestions(quizQuestionsDB);
  currentQuestion = 0;
  score = 0;
  selectedAnswer = null;

  loadQuestion();
}

function loadQuestion() {
  if (currentQuestion < questions.length) {
    resetUIForNewQuestion();
    updateQuestionContent();
    updateQuestionNumbers();
  } else {
    showResults();
  }
}

function resetUIForNewQuestion() {
  actionButton.textContent = "Submit";
  actionButton.classList.add("disabled");
  actionButton.disabled = true;

  radioInputs.forEach((input) => {
    input.disabled = false;
    input.checked = false;
  });

  labels.forEach((label) =>
    label.classList.remove("correct", "wrong", "no-hover")
  );
}

function updateQuestionContent() {
  questionElement.innerHTML = questions[currentQuestion].question;
  labels.forEach((label, index) => {
    label.innerHTML = questions[currentQuestion].options[index];
  });
}

function updateQuestionNumbers() {
  questionNumbers.forEach((numberEl, index) => {
    numberEl.className = "number";

    if (index === currentQuestion) {
      numberEl.classList.add("current");
    } else if (index > currentQuestion) {
      numberEl.classList.add("upcomming");
    }
  });
}

function showResults() {
  quizContainer.style.display = "none";
  quizResultsContainer.style.display = "block";
  scoreText.innerHTML = `Your score is ${score}!`;
}

function handleAnswerSelection() {
  const isAnySelected = [...radioInputs].some((input) => input.checked);

  if (isAnySelected) {
    actionButton.classList.remove("disabled");
    actionButton.disabled = false;
  } else {
    actionButton.classList.add("disabled");
    actionButton.disabled = true;
  }
}

function handleSubmit(e) {
  e.preventDefault();

  if (!selectedAnswer) {
    const formData = new FormData(e.target);
    selectedAnswer = formData.get("quiz-answer");

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      score++;
    }

    highlightCorrectAndWrongAnswers();
    disableAnswers();
    actionButton.innerHTML = "Next";
  } else {
    selectedAnswer = null;
    currentQuestion++;
    loadQuestion();
  }
}

function highlightCorrectAndWrongAnswers() {
  radioInputs.forEach((input) => {
    input.checked = false;
  });

  radioInputs.forEach((input, index) => {
    if (
      input.value === selectedAnswer &&
      selectedAnswer !== questions[currentQuestion].correctAnswer
    ) {
      labels[index].classList.add("wrong");
    }

    if (input.value === questions[currentQuestion].correctAnswer) {
      labels[index].classList.add("correct");
    }
  });
}

function disableAnswers() {
  radioInputs.forEach((input) => (input.disabled = true));
  labels.forEach((label) => label.classList.add("no-hover"));
}

startBubble.addEventListener("click", startQuiz);
endBubble.addEventListener("click", startQuiz);
quizForm.addEventListener("submit", handleSubmit);
radioInputs.forEach((radio) =>
  radio.addEventListener("change", handleAnswerSelection)
);
