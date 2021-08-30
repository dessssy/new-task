(function() {
    'use strict';

const startButton = document.querySelector('#start_btn');
const quizCard = document.querySelector('#card');
const timerBar = document.querySelector('#time_bar');
const questionElement = document.querySelector('#question');
const pictureElement = document.querySelector('#image');
const answerBtns = document.querySelectorAll('#btn');
const answerPockets = document.querySelector('.wrapper');

let currentQuestion;

// QUESTION CARDS

const questions = {
        question: 'which is the missing line?',
        picture: 'styles/images/no-snippet.png',
        answers: [
            {text: 'first answer',  correct: true},
            {text: 'second answer', correct: false},
        ]
    }


    
    // {
    //     question: 'did you make it yourself?',
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
    timerBar.classList.add('slide');
    startButton.classList.add('hide');
    quizCard.classList.remove('hide');
    
    currentQuestion = 0;

    showQuestion(); 
}

function showQuestion(){
    questionElement.innerText = questions.question;
    pictureElement.innerHTML = question.picture;
    
    questions.answers.forEach(answer => {
        clearBtns();
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.setAttribute('id', 'btn');
        button.setAttribute('class', 'btn');
        answerBtns.appendChild(button);
    });
}

function clearBtns(){
    while(answerBtns.firstChild){

        answerBtns.removeChild(answerBtns.firstChild);
    }
}






})();
