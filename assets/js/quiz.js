const question = document.querySelector('#question');
const answers = Array.from(document.querySelectorAll('.answer-text'));
const progressText = document.querySelector('#progress-text');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progress-bar-full');

let questionCounter = 0;
let score = 0;
let currentQuestion = {};

function gQuestion(listOfQ) {
  listOfQ.forEach(q => {
    console.log(q.question.toString());
    question.innerHTML = q.question.toString();

    console.log(q.correct_answer.toString());
    console.log(q.incorrect_answers.toString());
    answers.innerText = ((q.correct_answer.toString()) || q.incorrect_answers.toString());
    console.log(answers);
  });
}

function apiQuestion() {
  fetch(`https://opentdb.com/api.php?amount=39&category=31&type=multiple`)
.then(res => res.json())
.then(rawData => gQuestion(rawData.results))
}

apiQuestion();