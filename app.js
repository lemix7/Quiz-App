const questions = [
    {
        question: 'What is the longest river in the world?',
        answers: [
            { text: 'Amazon River', result: true },
            { text: 'Nile River', result: false },
            { text: 'Yangtze River', result: false },
            { text: 'Mississippi River', result: false }
        ]
    },
    {
        question: 'Which planet is known as the "Morning Star"?',
        answers: [
            { text: 'Mars', result: false },
            { text: 'Venus', result: true },
            { text: 'Mercury', result: false },
            { text: 'Jupiter', result: false }
        ]
    },
    {
        question: 'What is the hardest natural substance on Earth?',
        answers: [
            { text: 'Gold', result: false },
            { text: 'Iron', result: false },
            { text: 'Diamond', result: true },
            { text: 'Quartz', result: false }
        ]
    },
    {
        question: 'Which ocean is the largest by surface area?',
        answers: [
            { text: 'Atlantic Ocean', result: false },
            { text: 'Indian Ocean', result: false },
            { text: 'Pacific Ocean', result: true },
            { text: 'Southern Ocean', result: false }
        ]
    },
    {
        question: 'What is the highest mountain in the world?',
        answers: [
            { text: 'K2', result: false },
            { text: 'Kangchenjunga', result: false },
            { text: 'Mount Everest', result: true },
            { text: 'Lhotse', result: false }
        ]
    },
    {
        question: 'Which country has the largest population in the world?',
        answers: [
            { text: 'India', result: false },
            { text: 'China', result: true },
            { text: 'United States', result: false },
            { text: 'Indonesia', result: false }
        ]
    },
    {
        question: 'What is the chemical symbol for water?',
        answers: [
            { text: 'H2O', result: true },
            { text: 'O2', result: false },
            { text: 'CO2', result: false },
            { text: 'HO', result: false }
        ]
    },
    {
        question: 'Which planet is known for its rings?',
        answers: [
            { text: 'Mars', result: false },
            { text: 'Jupiter', result: false },
            { text: 'Saturn', result: true },
            { text: 'Uranus', result: false }
        ]
    },
    {
        question: 'What is the capital of Japan?',
        answers: [
            { text: 'Kyoto', result: false },
            { text: 'Tokyo', result: true },
            { text: 'Osaka', result: false },
            { text: 'Hiroshima', result: false }
        ]
    },
    {
        question: 'Which element has the atomic number 1?',
        answers: [
            { text: 'Helium', result: false },
            { text: 'Oxygen', result: false },
            { text: 'Hydrogen', result: true },
            { text: 'Carbon', result: false }
        ]
    }
    
    
];

let score = 0 
let currentIndex = 0

let Question = document.querySelector('.question')
let answerBtns = document.querySelector('.answer-btns')
let nextBtn = document.querySelector('.next-btn')
let scoreText = document.querySelector('.score')

function startQuiz(){
    score = 0
    currentIndex = 0
    showQuestions()
}

startQuiz()

function showQuestions(){
    resetQestions()

    let currentQuestion = questions[currentIndex]
    Question.textContent = `${currentIndex+1} . ${currentQuestion.question}`

    currentQuestion.answers.forEach(answer => {

        const button = document.createElement('button')
        button.textContent = answer.text
        button.classList.add('btn')

        answerBtns.append(button)

        if(answer.result){
            button.dataset.result = true
        }
        button.addEventListener('click',selectAnswer )
    })

    nextBtn.style.display = 'none'
    nextBtn.textContent = "Next"
    
    scoreText.style.display = 'none'
}

function selectAnswer(e){
    const selectedBtn = e.target

    const isCorrect = selectedBtn.dataset.result === 'true'

    if(isCorrect){
        selectedBtn.classList.add('correct')
        score++
    }
    else{
        selectedBtn.classList.add('incorrect')
    }

    Array.from(answerBtns.children).forEach(button => {

        if(button.dataset.result === 'true'){
            button.classList.add('correct')
        }

        button.disabled = true
    })


    nextBtn.style.display = 'block'
}

function resetQestions(){

    while(answerBtns.firstChild){

        answerBtns.removeChild(answerBtns.firstChild)

    }

}

function quizEnd() {

    scoreText.style.display = 'block'
    scoreText.textContent = ` Your score is ${score} out of ${questions.length}`

    Question.textContent = ''
    currentIndex = -1
    resetQestions()
    nextBtn.textContent = 'Play Again'
}


nextBtn.addEventListener('click',() => {
    
    currentIndex++

    if(currentIndex >= questions.length){

        quizEnd()
        score = 0

    }else{

        showQuestions()
    }
})
