// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

//Pseudo Code:
//Create a start button with with instructions above it in html
//Create a button to view the high score
//create a 60s countdown timer
    //Add some CSS for the page to center the start button, put the high score button on the top left and the countdown timer on the top right 
// Create a function that when the start button is clicked, it triggers the 1st question function, and triggers the timer to start 
    //the function has an ordered list of 4 clickable buttons with text for answers
    //create an if/then statement for the correct answer
    //make each item in the list be a clickable button that when hovered over, changes colors
    //if answer is correct, create text to popup that says correct underneath the ul 
    //Add to the variable for score and trigger the next question function
    //if the answer is wrong, have text popup that says wrong underneath the ul!
    //take 15s away from the current running timer
    //trigger the function for the next question
//next function performs just like the 1st question, but with the correct answer in a different location than the previous question, 
//repeat it 3 more times with 3 more functions
//when finished, have a function start that prompts a form for entering initials.
//store the initials in a new variable and add the score to it.
//if the timer reaches 0 before the last function is completed, trigger the function for the prompt with the form with the initials
//after initials are entered, display the initials with the score of the game.
//reset the timer
//Store and Sort the high scores with initials.
//create 2 buttons to restart the game or quit.
//If the Restart button is pushed, the game restarts by retriggering the 1st function
//If the game is over, display initials with the score again.

var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var welcomeElement = document.querySelector(".welcomeMessage");
var questionsElement = document.querySelector("#question");

var chosenWord = "";
var numBlanks = 0;
var scoreCounter = 0;
var isCorrect = false;
var timer;
var timerCount;



function init() {
    document.getElementById(welcomeElement).style.display = "block";
    document.getElementById(questionsElement).style.display = "none";
    getScore();
  }

function startGame() {
    isCorrect = false;
    timerCount = 60;
    startButton.disabled = true;
    document.getElementById("welcomeMessage").style.display = 'none';

    // document.getElementById("#welcomeMessage").style.display = "none";
    document.getElementById("#question").style.display = "block";
  
    startTimer();
    submitAnswer1();
  }
   
  

  function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      
    }, 1000);
  }

  var submitAnswer1 = function() {

    var radios = document.getElementsByName('choice');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if ( val == "Scripting" ) {
      alert('Answer is correct !');
    } else {
      alert('Answer is wrong');
    }
  };


  function answerCorrect() {
    wordBlank.textContent = "Correct!";
    winCounter++
    startButton.disabled = false;
    setCorrect()
  }
  
  // The loseGame function is called when timer reaches 0
  function answerWrong() {
    wordBlank.textContent = "Wrong";
    loseCounter++
    startButton.disabled = false;
    setWrong()
  }


  // Updates win count on screen and sets win count to client storage
  function setCorrect() {
    correct.textContent = correctCounter;
    localStorage.setItem("correctCount", correctCounter);
  }
  
  // Updates lose count on screen and sets lose count to client storage
  function setWrong() {
    wrong.textContent = wrongCounter;
    localStorage.setItem("wrongCount", wrongCounter);
  }
  
  // These functions are used by init
  function getScore() {
    // Get stored value from client storage, if it exists
    var storedWins = localStorage.getItem("winCount");
    // If stored value doesn't exist, set counter to 0
    if (storedScore === null) {
      scoreCounter = 0;
    } else {
      // If a value is retrieved from client storage set the winCounter to that value
      scoreCounter = storedScore;
    }
    //Render win count to page
    score.textContent = scoreCounter;
  }
  
  
  // Attach event listener to start button to call startGame function on click
  startButton.addEventListener("click", startGame);
  
  // Calls init() so that it fires when page opened
  init();
  
  // Bonus: Add reset button
  var resetButton = document.querySelector(".reset-button");
  
  function resetGame() {
    // Resets win and loss counts
    scoreCounter = 0;
    // Renders win and loss counts and sets them into client storage
    setScore()
  }
  // Attaches event listener to button
  resetButton.addEventListener("click", resetGame);






