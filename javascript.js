var playing=false;
var score;
var action;
var Timeremaining;
 var correctAnswer;

// if we clike on start/reset
document.getElementById("startgame").onclick
    =function(){
    
   //if are playing 
 if(playing==true)   {
     location.reload();
 }else{
     playing=true;
  score=0;  
     document.getElementById("scorevalue").innerHTML=score;
     
       show("Timeremaining")
     Timeremaining=40;
     
     document.getElementById("Timeremainingvalue").innerHTML=Timeremaining;
     
     // hide game over
      hide("Gameover")
     
     document.getElementById("startgame").innerHTML="Reset Game ";
     startCountdown();
     generateQA();
 }
    
    
}

for(i=1;i<5;i++){
    
    
    
    document.getElementById("box"+i).onclick=function(){
  if(playing==true){
      if(this.innerHTML==correctAnswer){
          score++;
          document.getElementById("scorevalue").innerHTML=score;
          
                 show("correct");
          hide("wrong");
          setTimeout(function(){
              
                hide("correct"); 
          },1000);
          
          generateQA();
      }else{
          
          //wrong answer
          
          
                     hide("correct");
        show("wrong");
          setTimeout(function(){
              
                hide("wrong"); 
          },1000);
      }
  }   
    
    
    
}
}
//func > start counter 

function  startCountdown(){
    
  action=setInterval(function(){
      
    Timeremaining-=1; 

      
document.getElementById("Timeremainingvalue").innerHTML=Timeremaining;
      if(Timeremaining==0){
       
   stopCountdown();
   show("Gameover")
          
  document.getElementById("Gameover").innerHTML="<p> game over!</p><p>your score is "+score+".</p>";
          
          hide("Timeremaining");
          hide("correct");
          hide("wrong");
          playing=false;
          document.getElementById("startgame").innerHTML="Start Game "
      }
      //game over
  },1000)  
    
}

// func >stop counter 
function  stopCountdown(){
    
    clearInterval(action);
}

    //relode page

// hide the element 
function hide(Id){
    document.getElementById(Id).style.display="none";
}


//show  the element 
function show(Id){
    
    document.getElementById(Id).style.display="block";
}
// generate qus
function  generateQA(){
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
     correctAnswer=x*y;
    document.getElementById("question").innerHTML=x+"x"+y;
    
    var correctPostion=1+Math.round(3*Math.random());
    document.getElementById("box"+correctPostion).innerHTML=correctAnswer;// fill one box with correct ansewrs
    var answer=[correctAnswer];
    for(i=1;i<5;i++){
        
        if(i!=correctPostion){
                  var wronganswer;
        
            do{
                 
                 wronganswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));//wrong answer
            }while(answer.indexOf(wronganswer)>-1)
            document.getElementById("box"+i).innerHTML=wronganswer;
          answer.push(wronganswer);
        }
    }
}