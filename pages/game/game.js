// Created by Pawel Wierzgon
// All quiz questions
let quiz = [
  {
    question: "How do you call this exercise?",
    imageUrl: "exercise.jpg",
    imageAlt: "A man in the gym",
    answers: [
      ["Lat pulldown", 0],
      ["Chest press", 0],
      ["Bicep curl", 1],
      ["Smith press", 0],
    ],
  },
  {
    question: "What are the chest muscles called?",
    imageUrl: "chest.jpg",
    imageAlt: "Male chest photo",
    answers: [
      ["Abdominals", 0],
      ["Biceps", 0],
      ["Deltoids", 0],
      ["Pectorals", 1],
    ],
  },
  {
    question: "What is the name of the gym machine in the photo?",
    imageUrl: "machine.jpg",
    imageAlt: "Exercising woman",
    answers: [
      ["Orbitrek", 1],
      ["Treadmill", 0],
      ["Rowing machine", 0],
      ["Smith machine", 0],
    ],
  },
  {
    question:
      "When lifting heavy weights from the floor, what is the correct technique?",
    imageUrl: "technique.jpg",
    imageAlt: "A person lifting weights from the floor",
    answers: [
      ["Bent legs and bent back", 0],
      ["Bent legs and straight back", 1],
      ["Straight legs and bent back", 0],
      ["Straight legs and straight back", 0],
    ],
  },
  {
    question: "Which of the following can you train on a rowing machine?",
    imageUrl: "rowing-machine.jpg",
    imageAlt: "A man exercising on a rowing machine",
    answers: [
      ["Only arms", 0],
      ["Only arms and legs", 0],
      ["Only abdominals", 0],
      ["Arms, legs and abdominals", 1],
    ],
  },
  {
    question: "What is the largest muscle in the body?",
    imageUrl: "woman-exercise.jpg",
    imageAlt: "A woman exercising in a gym",
    answers: [
      ["Pectorals", 0],
      ["Biceps", 0],
      ["Abdominals", 0],
      ["Gluteus Maximus", 1],
    ],
  },
  {
    question: "Which exercise usually burns the most calories?",
    imageUrl: "yoga.jpg",
    imageAlt: "A person exercising yoga",
    answers: [
      ["Yoga", 0],
      ["Sprinting", 1],
      ["Swimming", 0],
      ["Push ups", 0],
    ],
  },
];

// Variables to keep track of the score and progress
let currentQuestionIndex = 0;
let score = [0, 0, 0, 0, 0];
let progress = 0;

// Make a copy of the quiz, so the questions can be removed from the original array and not appear twice in one go
let quizCopy = [...quiz];

// Variables for quick access to the DOM elements
const answerBtns = document.querySelectorAll(".answer-btn");
const questionDiv = document.querySelector("#question");
const questionImg = document.querySelector("#question-image");
const progressDots = document.querySelectorAll(".progress-dot");
const finalScoreText = document.querySelector("#final-score");
const finalResultText = document.querySelector("#final-result");
const voucherDiv = document.querySelector("#voucher-code");
const finalResults = document.querySelector("#results");
const restartBtn = document.querySelector("#restart-btn");

const startGame = () => {
  // Hide the results
  results.classList.add("hidden");

  // Reset progress dots styling
  progressDots.forEach((dot) => {
    dot.classList.remove("bg-success");
    dot.classList.remove("bg-danger");
    dot.style.outline = "none";
  });

  // Reset the progress and score
  currentQuestionIndex = 0;
  score = [0, 0, 0, 0, 0];
  progress = 0;

  // Reset available questions
  quiz = [...quizCopy];

  // Get next question
  getNextQuestion();
};

const colorProgressDots = () => {
  // Change progress dots colors
  if (progress > 0) {
    // Check if previous answer was correct
    if (score[progress - 1]) {
      progressDots[progress - 1].classList.add("bg-success");
    } else {
      progressDots[progress - 1].classList.add("bg-danger");
    }
    // Change the outline of the previous progress dot
    progressDots[progress - 1].style.outline = "4px solid rgba(0, 0, 0, 0.5)";
  }
};

const getNextQuestion = () => {
  // Change the outline of the current question
  progressDots[progress].style.outline = "4px solid rgba(255, 255, 255, 0.5)";

  // Get next random quiz question
  currentQuestionIndex = Math.floor(Math.random() * quiz.length);
  const nextQuestion = quiz[currentQuestionIndex];

  // Show question
  questionDiv.innerText = nextQuestion.question;

  // Show image
  questionImg.src = `../../img/quiz/${nextQuestion.imageUrl}`;
  questionImg.alt = nextQuestion.imageAlt;

  // Assign answers
  answerBtns.forEach((btn, index) => {
    btn.innerText = nextQuestion.answers[index][0];
  });
};

const finishGame = () => {
  // Count the final score
  const finalScore = score.reduce((a, b) => a + b, 0);

  // Change the final message
  if (finalScore >= 3) {
    finalResultText.innerText = "Winner!";
    voucherDiv.innerText = "Voucher code: NEWME2024";
    restartBtn.classList.add("hidden");
  } else {
    finalResultText.innerText = "Try again!";
    voucherDiv.innerText = "";
    restartBtn.classList.remove("hidden");
  }
  finalScoreText.innerText = `You got ${finalScore} point${
    finalScore !== 1 ? "s" : ""
  }!`;

  // Show the results
  results.classList.remove("hidden");
};

// Add an event listener for each answer button
answerBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Scroll to the top of the page (better experience on mobile devices)
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Check if answer was correct
    if (quiz[currentQuestionIndex].answers[index][1]) {
      score[progress] = 1;
    }

    // Remove the answer from the available ones, update progress and color the dots
    quiz.splice(currentQuestionIndex, 1);
    progress++;
    colorProgressDots();

    // Check if last question was answered
    if (progress < 5) {
      getNextQuestion();
    } else {
      finishGame();
    }
  });
});

startGame();
