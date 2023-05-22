// button elements
const startQuiz = document.getElementById("start-button");
const submitButton = document.getElementById("submit-button");

// document elements
const startScreenHide = document.getElementById("start-screen");
const questionsHide = document.getElementById("questions");
const endScreenHide = document.getElementById("end-screen");
var timeLeft = document.querySelector(".timer");

// Event Listeners

startQuiz.addEventListener("click", startQuiz);
submitButton.addEventListener("click", selectAnswer);

// global vars

var secondsLeft = 60;

//start quiz func

function startQuiz(){
    startScreenHide.classList.add("hide");
    startScreenHide.classList.remove("hide");
    countDown();
}

//answer func

function selectAnswer() {
    if (secondsLeft > 5){
        secondsLeft -= 5;
    }
        else {
            questionsHide.classList.add("hide");
            endScreenHide.classList.add("hide");
            // secondsLeft = 0;
        }
}
// timer func
function countDown(){
    var timeInterval = setInterval(function (){
        timeLeft.textContent = secondsLeft;

        if (secondsLeft < 1){
            clearInterval(timeInterval);
            questionsHide.classList.add("hide");
            endScreenHide.classList.remove("hide");
            return;
        }
        secondsLeft--;
    },
        1000);
}