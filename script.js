  // set sound for game

  let soundPlue = new Audio();
  soundPlue.src="/sound/soundPlue.mp4"
  let gameOver = new Audio();
  gameOver.src="/sound/gameOver.mp4";
  let soundWin =new Audio();
  soundWin.src="/sound/soundWin.mp4";
  let soundTouch =new Audio();
   soundTouch.src="/sound/soundTouch.mp4";

// the variable   

  let imgList=["/image/beach.svg","/image/space.svg","/image/robot.svg"]
  let test = true;

      // take the selecter in img class

  let boxList = document.querySelectorAll(".box");
  
// tale id positon  

  let currentScore = document.getElementById("currentScore");
  let bestScore = document.getElementById("bestScore");

//  click to changr image   
  //-------------
  for (let element of boxList){
          element.onclick = function(event){
              if( test == false){
            return;
             }
              else{
               let index = Math.floor(Math.random()*imgList.length);
               event.target.src=imgList[index];
               checkWinOrLose(index);
               imgList.splice(index,1)
          }
      } 
  }
  //-----------------
  //function check winer or lose with mode ( Great! ,Game over  , Good!)

  function checkWinOrLose(number){
      // get width array image
      let count = imgList.length;
      // use If/Else to set mode for game--------------------------------------------------------------
      //----------------------------
      if(count == 3){
           if( number == 2){
              document.getElementById("notification").innerHTML="GAME OVER!";
               currentScore.textContent = 0;
               gameOver.play();
               test=false;

           }else{
              document.getElementById("notification").innerHTML="GREAT!";
              soundPlue.play();
           }
      }
      //------------------------------
      if(count==2){
          if(number == 1){
              document.getElementById("notification").innerHTML="GAME OVER!";
              currentScore.textContent = 0;
              gameOver.play();
              test=false;

          }
          if(number==0){
              document.getElementById("notification").innerHTML="GOOD!";
              soundPlue.play(); 
          }
      }
      //-------------------------------
      if(count == 1){
           if(number==0){
               test=false;
               document.getElementById("notification").innerHTML="You WIN!";
               soundWin.play();
               currentScore.textContent=parseInt(currentScore.textContent)+1;
             if(parseInt(currentScore.textContent)>parseInt(bestScore.textContent)){
                 bestScore.textContent=parseInt(currentScore.textContent);
             }else{
              bestScore.textContent=parseInt(bestScore.textContent); 
             }    
           }
      }
  }
  //----------------------------------------------------------------------------------------------
  //Function reStast Game ( but save top 1 score player) , and change score current player if overOver
  //----------------------
  function reStart(){
      gameOver.pause();
      soundTouch.play()
      document.getElementById("notification").innerHTML="GOOD LUCK!"
       test = true;
      // reset image to came back game
      imgList=["/image/beach.svg","/image/space.svg","/image/robot.svg"];
      for (let element of boxList){
          element.src="/image/closed_door.svg"
      }
  }
  //-----------------------Finish------------------------------------