const quizData = [
    {
        question: "I came _____ America",
        a: "from",
        b: "at",
        c: "in",
        d: "on",
        correct: "a",
    },
    {
        question: "Nowadays everyone ______ internet",
        a: "had used",
        b: "uses",
        c: "used",
        d: "use",
        correct: "b",
    },
    {
        question: "How many siblings ________?",
        a: "do you have",
        b: "have you gotten:",
        c: "did you had",
        d: "both (a, b)" ,
        correct: "d",
    },
    {
        question: "Where_____ John and Marry yesterday?",
        a: "was",
        b: "were",
        c: "had been",
        d: "had",
        correct: "b",
    },
    {
        question: "How long__________ learning English?",
        a: "have you been",
        b: "are you",
        c: "did you",
        d: "had you",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionE1 = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0 

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    
    questionE1.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.Checked = false)
}

function getSelected() {

    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }

    } )
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length}questions correctly</h2>

          <button onclick="location.reload()">Reload</button>
            `
        }
     }
} )