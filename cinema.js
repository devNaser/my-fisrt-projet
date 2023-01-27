const quizData = [
  {
    question: "Que désigne le mot d'argot loupiotte ?",
    a: "une poste de televison",
    b: "une piéce mal eclairée",
    c: "Une lampe a faible eclairage",
    d: "une chauffage d'appoint",
    correct: "c",
  },
  {
    question: "Qu’est-ce qu’un croque-lardon en argot ?",
    a: "une gros mangeur",
    b: "une amoureux transis",
    c: "une parasite",
    d: "une coureur de jupons",
    correct: "c",
  },
  {
    question: "Que désigne le verbe d'argot charbonner ?",
    a: "travailler dur",
    b: "salir ses vetements",
    c: "faire du feu a l'ancienne",
    d: "Prendre un bain de soleil",
    correct: "a",
  },
  {
    question: "Que signifie l’adjectif ancien déparpaillé ?",
    a: "Dépareillé",
    b: "Evide",
    c: "Néglige, debraille",
    d: "none of the above",
    correct: "c",
  },
];
const quiz = document.getElementById("quize");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("qua");
const answer_a = document.getElementById("answer_a");
const answer_b = document.getElementById("answer_b");
const answer_c = document.getElementById("answer_c");
const answer_d = document.getElementById("answer_d");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  answer_a.innerText = currentQuizData.a;
  answer_b.innerText = currentQuizData.b;
  answer_c.innerText = currentQuizData.c;
  answer_d.innerText = currentQuizData.d;
}
function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `;
    }
  }
});
