
var playing = false; /*webpage loads game is not running*/
var score; /* no starting value on page load*/
var action;
var timeRemaining;
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
   show("timeremaining");
    timeRemainingValue = 60;
          document.getElementById("timeRemainingValue").innerHTML = timeRemainingValue;
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







                  //yes -continue
                  //no -gameover
        //change button to reset
        //generate new Q&As
//if we click on answer box
      //if we are playing
        //correct?
            //yes
                //increase score by 1
                //show correct pop-up box for 1 second
                //generate new question and answers
          //Wrong
                //show Try-Again for one second

  function startCountdown(){
    action = setInterval(function(){
      timeRemainingValue -= 1;

      document.getElementById("timeRemainingValue").innerHTML = timeRemainingValue;
      if("timeRemainingValue" == 0){//game over
        stopCountdown();
              //Have gameOver pop-up appear by blocking it's intial display of none
        show("gameOver");
              //display pop-up with final score
        document.getElementById("gameOver").innerHTML = "<p>Gave Over</p> <p> Your Score is: </p>"  "<p>" + score + " </p>"
              //time remaining disappears
        hide("timeRemaining");
              //hide try again or correct box
        hide("correct");
        hide("wrong");

        playing = false; //tell game we've finished playing
        document.getElementById("startreset").innerHTML = "Start Game";
      }
    }, 1000);
  }


  function stopCountdown() { //stop the counter
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


}
