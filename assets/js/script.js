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

/* cleaned up some stuff not used! */

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var score = 0;
var timer;
var timerCount;
var initialsEl;
var highScore = 0;
var highScoreHtml = "";
 
function init() {
    // inits all the pages to null except the welcome page
    document.getElementById("welcomeMessage").style.display = "block";
    document.getElementById("ques1").style.display = "none";
    document.getElementById("ques2").style.display = "none";
    document.getElementById("ques3").style.display = "none";
    document.getElementById("ques4").style.display = "none";
    document.getElementById("ques5").style.display = "none";
    document.getElementById("questionForm1").style.display = "none";
    document.getElementById("questionForm2").style.display = "none";
    document.getElementById("questionForm3").style.display = "none";
    document.getElementById("questionForm4").style.display = "none";
    document.getElementById("questionForm5").style.display = "none";
    document.getElementById("submit1").style.display = "none";
    document.getElementById("submit2").style.display = "none";
    document.getElementById("submit3").style.display = "none";
    document.getElementById("submit4").style.display = "none";
    document.getElementById("submit5").style.display = "none";
    document.getElementById("score").style.display = "none";
    document.getElementById("replay").style.display = "none";
    document.getElementById("highScorePage").style.display = "none";    
}

function startGame() {
    timerCount = 60;
    startButton.disabled = true;
    document.getElementById("welcomeMessage").style.display = "none";
    document.getElementById("ques1").style.display = "block";
    document.getElementById("questionForm1").style.display = "block";
    document.getElementById("submit1").style.display = "block";
    startTimer();
  }
  //  this function starts the timer - if the timer finishes before the game is finished, it clears the pages and brings up the final score page
  function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount <= 0) {
        clearInterval(timer);
        timerCount = 0
        
        getScore()
        document.getElementById("ques1").style.display = "none";
        document.getElementById("questionForm1").style.display = "none";
        document.getElementById("submit1").style.display = "none";
        document.getElementById("ques2").style.display = "none";
        document.getElementById("questionForm2").style.display = "none";
        document.getElementById("submit2").style.display = "none";
        document.getElementById("ques3").style.display = "none";
        document.getElementById("questionForm3").style.display = "none";
        document.getElementById("submit3").style.display = "none";
        document.getElementById("ques4").style.display = "none";
        document.getElementById("questionForm4").style.display = "none";
        document.getElementById("submit4").style.display = "none";
        document.getElementById("ques5").style.display = "none";
        document.getElementById("questionForm5").style.display = "none";
        document.getElementById("submit5").style.display = "none";
      }   
    }, 1000);
  }
  // added coding for all the questions. Each question will subtract 15 secs from the timer if the answer is wrong
  // added an indicator for answer status

  function question1result(){ 
    var q1=document.quiz.ques1.value;
    console.log(document.quiz.ques1.value);
    if (q1==="Mozart") {
      score++
      document.getElementById("answerStatus").innerHTML = "Correct!";
      setTimeout (function(){
        document.getElementById("answerStatus").innerHTML = "";
      }, 1500)
    }
    else {
      timerCount = timerCount - 15;
      document.getElementById("answerStatus").innerHTML = "Wrong!"
      setTimeout (function(){
        document.getElementById("answerStatus").innerHTML = "";
      }, 1500)
      
    }   
    document.getElementById("ques1").style.display = "none";
    document.getElementById("questionForm1").style.display = "none";
    document.getElementById("submit1").style.display = "none";
    document.getElementById("ques2").style.display = "block";
    document.getElementById("questionForm2").style.display = "block";
    document.getElementById("submit2").style.display = "block";  
    console.log(q1);
    
  }

  function question2result(){
    var q2=document.quiz.ques2.value;
    if (q2==="Beethoven") {
      score++ 
      document.getElementById("answerStatus").innerHTML = "Correct!";
      setTimeout (function(){
        document.getElementById("answerStatus").innerHTML = "";
      }, 1500)
    }
    else {
      timerCount = timerCount - 15;
      document.getElementById("answerStatus").innerHTML = "Wrong!"
      setTimeout (function(){
        document.getElementById("answerStatus").innerHTML = "";
      }, 1500)
    } 
    document.getElementById("ques2").style.display = "none";
    document.getElementById("questionForm2").style.display = "none";
    document.getElementById("submit2").style.display = "none";
    document.getElementById("ques3").style.display = "block";
    document.getElementById("questionForm3").style.display = "block";
    document.getElementById("submit3").style.display = "block";
    console.log(q2);
  }

  function question3result(){ 
    var q3=document.quiz.ques3.value;
    if (q3==="Brahms") {
      score++
      document.getElementById("answerStatus").innerHTML = "Correct!";
      setTimeout (function(){
        document.getElementById("answerStatus").innerHTML = "";
      }, 1500)
    }
    else {
      timerCount = timerCount - 15;
      document.getElementById("answerStatus").innerHTML = "Wrong!"
      setTimeout (function(){
        document.getElementById("answerStatus").innerHTML = "";
      }, 1500)
    } 
    document.getElementById("ques3").style.display = "none";
    document.getElementById("questionForm3").style.display = "none";
    document.getElementById("submit3").style.display = "none";
    document.getElementById("ques4").style.display = "block";
    document.getElementById("questionForm4").style.display = "block";
    document.getElementById("submit4").style.display = "block";
    console.log(score);
  }

  function question4result(){ 
    var q4=document.quiz.ques4.value;
    if (q4==="Stravinsky") {
      score++
      document.getElementById("answerStatus").innerHTML = "Correct!";
      setTimeout (function(){
        document.getElementById("answerStatus").innerHTML = "";
      }, 1500)
    }
    else {
      timerCount = timerCount - 15;
      document.getElementById("answerStatus").innerHTML = "Wrong!"
      setTimeout (function(){
        document.getElementById("answerStatus").innerHTML = "";
      }, 1500)
    }   
    document.getElementById("ques4").style.display = "none";
    document.getElementById("questionForm4").style.display = "none";
    document.getElementById("submit4").style.display = "none";
    document.getElementById("ques5").style.display = "block";
    document.getElementById("questionForm5").style.display = "block";
    document.getElementById("submit5").style.display = "block";
    console.log(score);
  }

  function question5result(){ 
    var q5=document.quiz.ques5.value;
    if (q5==="Barber") {
      score++
      document.getElementById("answerStatus").innerHTML = "Correct!";
      setTimeout (function(){
        document.getElementById("answerStatus").innerHTML = "";
      }, 1500)
    }
    else {
      timerCount = timerCount - 15;
      document.getElementById("answerStatus").innerHTML = "Wrong!"
      setTimeout (function(){
        document.getElementById("answerStatus").innerHTML = "";
      }, 1500)
    } 
    document.getElementById("ques5").style.display = "none";
    document.getElementById("questionForm5").style.display = "none";
    document.getElementById("submit5").style.display = "none";
    console.log(score);
    getScore();
    // questions are done and it calls for the score to be called function
   
  }
  // this function calls for the score and clears the timer
  function getScore(){
    document.getElementById("finalScore").innerHTML = "Your final score is: " + score;
    document.getElementById("score").style.display = "block";
    clearInterval(timer);
    
  }
  // this function displays the final score and asks if you want to play again or reset the scores
  function replay(){
    document.getElementById("score").style.display = "none";
    document.getElementById("replay").style.display = "block";
    document.getElementById("yourScore").style.display = "block";
    document.getElementById("playAgain").style.display = "block";
    initialsEl=document.quiz.score.value;
    console.log(initialsEl, score)
    document.getElementById("yourScore").innerHTML = initialsEl +":  " + score;
    saveHighScore()
  }

  // this function stores the score to the JSON Array
  function saveHighScore() {
    var initials = initialsEl
    var highScore = JSON.parse(window.localStorage.getItem("highScore"))||[];
    var newScore = {score,
    initials};
    highScore.push(newScore);
    window.localStorage.setItem("highScore", JSON.stringify(highScore));
    
   }
  //  this function sorts the highscores and and prints them to the highscore page
  function printHighScores(){
    document.getElementById("highScorePage").style.display = "block";
    document.getElementById("welcomeMessage").style.display = "none";
    document.getElementById("replay").style.display = "none";
    document.getElementById("yourScore").style.display = "none";
    document.getElementById("playAgain").style.display = "none";
    document.getElementById("ques1").style.display = "none";
    document.getElementById("ques2").style.display = "none";
    document.getElementById("ques3").style.display = "none";
    document.getElementById("ques4").style.display = "none";
    document.getElementById("ques5").style.display = "none";
    document.getElementById("questionForm1").style.display = "none";
    document.getElementById("questionForm2").style.display = "none";
    document.getElementById("questionForm3").style.display = "none";
    document.getElementById("questionForm4").style.display = "none";
    document.getElementById("questionForm5").style.display = "none";
    document.getElementById("submit1").style.display = "none";
    document.getElementById("submit2").style.display = "none";
    document.getElementById("submit3").style.display = "none";
    document.getElementById("submit4").style.display = "none";
    document.getElementById("submit5").style.display = "none";
    document.getElementById("score").style.display = "none";
    document.getElementById("high-scores").style.display = "none";
    
    highScore = JSON.parse(window.localStorage.getItem('highScore'));
    if (highScore !== null){ 
      highScore.sort(function(a,b){
      return b.score -a.score
      })
    } else {
      highScore = 0
    }
  // console.log(highScore);
  
  for(var i = 0; i < highScore.length; i++){
    highScoreHtml += "<li>" + highScore[i].initials + "    " + highScore[i].score + "</li>"
 }
    
 console.log(highScoreHtml);
 document.getElementById("sortedScores").innerHTML = highScoreHtml

}

// This function clears the local storage
// added an indicator for clear storage
function clearLocal() {
  localStorage.clear();
  document.getElementById("clearScores").innerHTML = "High Scores Cleared"
      setTimeout (function(){
        document.getElementById("clearScores").innerHTML = "";
      }, 1500)



}
  
  startButton.addEventListener("click", startGame);
  
  init();
  







