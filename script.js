const quizData = [
    {
        question: "Cand a avut loc rasturnarea lui Ceausescu?",
        a: "1983",
        b: "1989",
        c: "1990",
        d: "1992",
        correct: "b",
    },
    {
        question: "Unde a murit Hitler?",
        a: "In buncarul lui din Berlin",
        b: "Pe frontul din Stalingrad",
        c: "In vizita la Paris",
        d: "Intr-un cort de la Paschendale",
        correct: "a",
    },
    {
        question: "Cel mai bun jucator de fotbal din istoria Romaniei?",
        a: "Ilie Dumitrescu",
        b: "Adi Mutu",
        c: "Razvan Rat",
        d: "Gheorghe Hagi",
        correct: "d",
    }
]   

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}