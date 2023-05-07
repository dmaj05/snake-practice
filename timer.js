let cTime = 6;
let gameStart=false;


if(gameStart==true){
  function countDown(){
    cTime --;
    timer.innerText = "time:" + cTime; 
    if(cTime === 0){
        clearInterval(timerId);
        isCollide(snakeArr) = true;
    }
  }
  let timerId = setInterval(countDown,1000);
  
  }

