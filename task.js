(function() {
    'use strict';

const startButton = document.getElementById('start_btn');
const quizCard = document.getElementById('card');
const timerBar = document.getElementById('time_bar');
const questionElement = document.getElementById('question');
const pictureElement = document.getElementById('image');
const answerBtns = document.getElementById('answer_btns');

let currentQuestion;

// QUESTION CARDS

const questions = {
        question: 'which is the missing line?',
        picture: 'styles/images/no-snippet.png',
        answers: [
            {text: 'първи отговор',  correct: true},
            {text: 'втори отговор', correct: false},
            {text: 'трети отговор', correct: false}
        ]
    }


    
    // {
    //     question: 'did you made it yourself?',
    //     picture: '',
    //     answers: [
    //         {text: 'i did', correct: false},
    //         {text: 'youtube/w3s helped me', correct: true},
    //         {text: 'somebody helped me', correct: false}
    //     ]
    // }


   


// TRIGGERING THE QUIZ

startButton.addEventListener('click', startQuiz);

function startQuiz(){

    console.log('ima vryzka');
    startButton.classList.add('hide');
    quizCard.classList.remove('hide');
    currentQuestion = 0;

    showQuestion();
   
}

function showQuestion(){
    questionElement.innerText = questions.question;
    pictureElement.innerHTML = question.picture;
}


})();
