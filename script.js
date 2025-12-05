const quizData = [
  {
    question: "Which language is used to design web pages?",
    options: ["Python", "HTML", "C++", "Java"],
    answer: "HTML"
  },
  {
    question: "Which CSS property controls text color?",
    options: ["font-style", "color", "background", "text-align"],
    answer: "color"
  },
  {
    question: "Which symbol is used for ID in CSS?",
    options: [".", "#", "*", "%"],
    answer: "#"
  },
  {
    question: "Which JavaScript keyword creates a variable?",
    options: ["int", "let", "string", "define"],
    answer: "let"
  },
  {
    question: "Which function prints data in console?",
    options: ["print()", "log()", "console.log()", "document.log()"],
    answer: "console.log()"
  },
  {
    question: "Which is NOT a frontend language?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "Python"
  }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBox = document.getElementById("options");
const scoreEl = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");

function loadQuestion() {
  const currentQ = quizData[index];
  questionEl.innerText = currentQ.question;
  optionBox.innerHTML = "";

  updateProgress();

  currentQ.options.forEach(option => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = option;

    div.onclick = () => checkAnswer(div, currentQ.answer);

    optionBox.appendChild(div);
  });
}

function checkAnswer(selected, correctAnswer) {
  const options = document.querySelectorAll(".option");

  options.forEach(opt => opt.onclick = null);

  if (selected.innerText === correctAnswer) {
    selected.classList.add("correct");
    score++;
  } else {
    selected.classList.add("wrong");
  }

  scoreEl.innerText = "Score: " + score;
}

function nextQuestion() {
  index++;

  if (index < quizData.length) {
    loadQuestion();
  } else {
    showFinalResult();
  }
}

function showFinalResult() {
  document.querySelector(".quiz-container").innerHTML = `
    <h2>🎉 Quiz Completed Successfully!</h2>
    <h3>Your Final Score: ${score} / ${quizData.length}</h3>
    <button onclick="restartQuiz()">Play Again</button>
  `;
}

function restartQuiz() {
  index = 0;
  score = 0;
  location.reload();
}

function updateProgress() {
  const percent = (index / quizData.length) * 100;
  progressBar.style.width = percent + "%";
}

loadQuestion();
