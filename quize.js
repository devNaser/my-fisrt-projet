const quizData = [
  {
    question:
      "Dans quel pays se déroule la toute première Coupe du Monde de football en 1930?",
    a: "France",
    b: "Uruguay",
    c: "Etats-Unis",
    d: "Mexique",
    correct: "b",
  },
  {
    question:
      "Quel pays remporte la toute première Coupe du Monde de foot de l’histoire?",
    a: "Allemagne",
    b: "Argentine",
    c: "Brésil",
    d: "Uruguay",
    correct: "d",
  },
  {
    question:
      "Combien de fois le Brésil a-t-il remporté la Coupe du Monde de foot au total ?",
    a: "2fois",
    b: "3fois",
    c: "4fois",
    d: "5fois",
    correct: "d",
  },
  {
    question:
      "Combien pèse le trophée de la Coupe du Monde de football utilisé depuis 1974 ?",
    a: "2.785kg",
    b: "8.596kg",
    c: "6.175",
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
