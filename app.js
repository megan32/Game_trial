
var playing = false; /*webpage loads game is not running*/
var score; /* no starting value on page load*/
var action;
var timeRemaining;
var correctAnswer;
document.getElementById("startReset").onclick=
function(){
 //if we are playing
 if (playing == true){
          //reload page
    location.reload(); /*tells whole page to reload*/
 } else {//if not playing
           //tell game that we are in playing mode
   playing = true;
           //set score to zero
   score = 0;
   document.getElementById('scoreValue').innerHTML = score;
          //show countdown
  show("timeRemaining");
       timeRemaining = 60;
       document.getElementById("timeRemainingValue").innerHTML = timeRemaining;
          //hide game over box
  hide("gameOver");
          //change button to reset
   document.getElementById("startReset").innerHTML = "Reset Game";

          //start countdown
   startCountdown();

   //generate Question and answers

   generateQandA();

  }

}

//choosing an answer

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    //check if we are playing
    if(playing == true){//yes
        if(this.innerHTML == correctAnswer){
        //correct answer

            //increase score by 1
            score++;
            document.getElementById("scoreValue").innerHTML = score;
            //hide Wrong box and show correct box
            hide("Wrong");
            show("Correct");
            setTimeout(function(){
                hide("Correct");
            }, 1000);

            //Generate new Q&A

            generateQandA();
        }else{
        //Wrong answer
            hide("Correct");
            show("Wrong");
            setTimeout(function(){
                hide("Wrong");
            }, 1000);
        }
    }
}
}

                function startCountdown(){
                  action = setInterval(function(){
                      timeRemaining -= 1;
                      document.getElementById("timeRemainingValue").innerHTML = timeRemaining;
                      if(timeRemaining == 0){// game over
                          stopCountdown();
                          show("gameOver");
                       document.getElementById("gameOver").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";
                          hide("timeRemaining");
                          hide("Correct");
                          hide("Wrong");
                          playing = false;
                          document.getElementById("startReset").innerHTML = "Start Game";

                      }
                  }, 1000);
              }

  function stopCountdown(){ //stop the counter
    clearInterval(action);
  }

 function hide(Id){  //hides elements
   document.getElementById(Id).style.display = 'none';
 }

 function show(Id){ //overides "display:none" to show element
   document.getElementById(Id).style.display = 'block';
 }

 //generateQ&As

function generateQandA(){
 var x = 1 + Math.round(9*Math.random());
 var y = 1 + Math.round(9*Math.random());
 correctAnswer = x*y;
 document.getElementById("question").innerHTML = x + "x" + y;
 var correctPosition = 1+ Math.round(3*Math.random());
 document.getElementById("box" + correctPosition).innerHTML = correctAnswer; //fill random box w/ answer

//fill others with Wrong answers
 var answers = [correctAnswer];

 for(i=1; i<5; i++){
     if(i != correctPosition) {
         var WrongAnswer;
         do{
             WrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a Wrong answer
         }while(answers.indexOf(WrongAnswer)>-1)
         document.getElementById("box"+i).innerHTML = WrongAnswer;
         answers.push(WrongAnswer);
     }
 }
}
