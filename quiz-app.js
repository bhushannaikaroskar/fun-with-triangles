
const quizForm = document.querySelector("#quiz-form");
const submitButton = document.querySelector("#submit-answer");
const outputElement = document.querySelector("#output");

const correctAnswers = ["90°","right angled","Equilateral","Scalene","25cm"];

function calculateScore(){

    let score = 0;
    let index = 0;
    let data = new FormData(quizForm);
    
    for(let value of data.values()){
        if(correctAnswers[index] === value){
            score++;
        }
        index++;
    }

    outputElement.innerText= "your score is " + score;
}

submitButton.addEventListener("click",calculateScore);