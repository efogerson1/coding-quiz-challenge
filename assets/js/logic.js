// Variables
var currentQuestionIndex = 0;
var time = 0;
var timerInterval;
var penaltyTime = 15;
var initialsInput = document.getElementById("user-initials");
var submitButton = document.getElementById("sub-button");
var highscoresList = document.getElementById("highscores");
var startButton = document.getElementById("start-button");
var questionTitle = document.getElementById("question-title");
var choicesContainer = document.getElementById("choices");
var feedbackDiv = document.getElementById("info");
var timeSpan = document.getElementById("time");
var finalScoreSpan = document.getElementById("final-score");

// Function to start the quiz
function startQuiz() {
  time = 60; // Set initial time to 60 seconds
  currentQuestionIndex = 0;

  // Hide start screen and show questions screen
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");

  // Start the timer
  timerInterval = setInterval(function () {
    time--;
    timeSpan.textContent = time;

    // Check if time has run out
     if (time <= 0) {
      endQuiz();
        time = 0;
    } 
  }, 1000);

  // Display the first question
  displayQuestion();
}

// Function to display a question and its choices
function displayQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  // Set the question title
  questionTitle.textContent = currentQuestion.title;

  // Clear previous choices
  choicesContainer.innerHTML = "";

  // Create buttons for each choice
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = currentQuestion.choices[i];

    // Add event listener to check the answer when a choice is clicked
    choiceButton.addEventListener("click", checkAnswer);

    choicesContainer.appendChild(choiceButton);
  }
}

// Function to check the selected answer
function checkAnswer(event) {
  var selectedChoice = event.target;
  var selectedAnswer = selectedChoice.textContent;
  var currentQuestion = questions[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.answer) {
    // Correct answer
    feedbackDiv.textContent = "Correct!";
  } else {
    // Incorrect answer
    feedbackDiv.textContent = "Wrong!";
    time -= penaltyTime;
console.log(time);
    // Ensure time does not go negative  //somehow time is still hitting -1?
    if (time <= 0) {
      time = 0;
      timeSpan.textContent = time;
      console.log(time);
      endQuiz();
    }
  }

  // Show feedback for a brief period
  feedbackDiv.classList.remove("hide");
  setTimeout(function () {
    feedbackDiv.classList.add("hide");
  }, 1000);

  // Move to the next question
  currentQuestionIndex++;

  // Check if it was the last question
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
}

// Function to end the quiz
function endQuiz() {
  // Stop the timer
  clearInterval(timerInterval);

  // Hide questions screen and show end screen
  document.getElementById("questions").classList.add("hide");
  document.getElementById("end-screen").classList.remove("hide");

  // Display the final score
  finalScoreSpan.textContent = time;

  // Add event listener to the submit button
  submitButton.addEventListener("click", saveHighscore);
}

// Function to save the highscore
function saveHighscore() {
  var initials = initialsInput.value.trim();

  // Ensure initials are not empty
  if (initials !== "") {
    // Create an object for the highscore
    var highscore = {
      initials: initials,
      score: time
    };

    // Get existing highscores from local storage or an empty array
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    // Add the new highscore to the array
    highscores.push(highscore);

    // Sort highscores by score in descending order
    highscores.sort(function (a, b) {
      return b.score - a.score;
    });

    // Save the updated highscores in local storage
    localStorage.setItem("highscores", JSON.stringify(highscores));

    // Clear the initials input
     initialsInput.value = "";

    // Redirect to highscores page
    window.location.href = "highscores.html";
  }
}

// Add event listener to the start button
startButton.addEventListener("click", startQuiz);

