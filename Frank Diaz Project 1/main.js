// Frank Diaz Project 1, DIG 1102, Proffesor Kanh Mai

// Declare a funtion below that declares the state of the quiz scores.
function quizScores() {
    // Create variables that hold the answer names in querySelectors
    var quizAnswer1 = parseInt(document.querySelector("input[name='names']:checked").value);
    var quizAnswer2 = parseInt(document.querySelector("input[name='engine']:checked").value);
    var quizAnswer3 = parseInt(document.querySelector("input[name='prize']:checked").value);
    var quizAnswer4 = parseInt(document.querySelector("input[name='company']:checked").value);
    var quizAnswer5 = parseInt(document.querySelector("input[name='reason']:checked").value);
    var quizAnswer6 = parseInt(document.querySelector("input[name='marketing']:checked").value);
    var quizAnswer7 = parseInt(document.querySelector("input[name='title']:checked").value);
    var quizAnswer8 = parseInt(document.querySelector("input[name='secret']:checked").value);
    var quizAnswer9 = parseInt(document.querySelector("input[name='action']:checked").value);
    var quizAnswer10 = parseInt(document.querySelector("input[name='age']:checked").value);
    // Create a variable that adds and inputs the scores into the screen.
    var answerAdd1 = quizAnswer1 + quizAnswer2 + quizAnswer3 + quizAnswer4 + quizAnswer5 + quizAnswer6 + quizAnswer7 + quizAnswer8 + quizAnswer9 + quizAnswer10;
    // Create an input for when the user submits his/her answers and for the score to be shown on the screen.
    document.querySelector(".userScore").innerHTML = "Your Score: "+ answerAdd1 +"/10";
    
    /* Create a variable below that adds and inputs the scores into the console for testing. */
    
    var answerAdd2 = quizAnswer1 + quizAnswer2 + quizAnswer3 + quizAnswer4 + quizAnswer5 + quizAnswer6 + quizAnswer7 + quizAnswer8 + quizAnswer9 + quizAnswer10;
    // Create a console log to test scores and check for errors in the console.
    console.log (answerAdd2); 
  
}
    







