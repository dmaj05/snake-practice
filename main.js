//VARIABLES
let inputDir={x:0, y:0};
let speed=8;
let lastPaintTime=0;
let snakeArr=[{x:10, y:10}];
let score=0;
let food={x:10, y:5};








//FUNCTIONS
function main(currentTime){
    window.requestAnimationFrame(main);
    //console.log(currentTime)
    if((currentTime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime=currentTime;
    Engine()
}


function isCollide(snake){
    //SNAKE HITS ITSELF
    for(let i=1; i<snakeArr.length; i++){
        if(snake[i].x===snake[0].x && snake[i].y===snake[0].y){
            return true;
            
        }

        if(snake[i].x>20 || snake[i].x<0 || snake[i].y>20 || snake[i].y<0){
            return true;
            
        }

        
        
    }
    if(snake[0].x>20 || snake[0].x<0 || snake[0].y>20 || snake[0].y<0){
      return true;
      
  }
}


function Engine(){
    
  
  //UPDATING THE SNAKE ARRAY 

    if(isCollide(snakeArr)){
        inputDir= {x:0, y:0};
        score=0;
        scoreCount.innerHTML="Score:0"
        alert("The Game is Over, press Enter to start again");
        snakeArr=[{x:10, y:10}];
        food={x:10, y:5}
        
    }


    //MOVING THE SNAKE
    for (let i = snakeArr.length - 2; i>=0 ; i--){
        
        snakeArr[i+1]={...snakeArr[i]};
       
    }
    snakeArr[0].x+=inputDir.x;
    snakeArr[0].y+=inputDir.y;

    //FOOD EATING LOGIC
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {

        if(score>=hiscoreval){
          hiscoreval=score+1;
          localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
          hiScore.innerHTML = "High Score: " + hiscoreval;
        }      
        snakeArr.unshift({x:snakeArr[0].x + inputDir.x, y:snakeArr[0].y + inputDir.y});
        food = {x:Math.floor((Math.random() * 20) + 1), y:Math.floor((Math.random() * 20) + 1)};
        score+=1;
        scoreCount.innerHTML = "Score:" + score;
        
    } 
    


    //RENDERING THE SNAKE 
    playArea.innerHTML = "";
    snakeArr.forEach((element,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = element.y;
        snakeElement.style.gridColumnStart = element.x;
        if(index===0){
            snakeElement.classList.add("head");
        }
        else{
            snakeElement.classList.add("snake");
        }
        playArea.appendChild(snakeElement);
    });

    //FOOD
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    playArea.appendChild(foodElement);
    
    
    

}




//GAMEOVER WITH TIMER



//GAME LOGIC

let hiscore = localStorage.getItem("hiscore");
if(hiscore===null){
  let hiscoreval=0;
  localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
}
else{
  hiscoreval=JSON.parse(hiscore);
  hiScore.innerHTML = "High Score:" + hiscoreval;
}





window.requestAnimationFrame(main);
window.addEventListener('keydown', e=>{

    gameStart=true;
    
    if(e.key=="ArrowUp" && inputDir.y!=1){
      inputDir.x=0;
      inputDir.y=-1;
      
    }

    else if(e.key=="ArrowDown" && inputDir.y!=-1){
      inputDir.x=0;
      inputDir.y=1;
      
    }

    else if(e.key=="ArrowLeft" && inputDir.x!=1){
      inputDir.x=-1;
      inputDir.y=0;
      
    }

    else if(e.key=="ArrowRight" && inputDir.x!=-1 ){
      inputDir.x=1;
      inputDir.y=0;
      
    }


    
    
    /*switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp")
            
            inputDir.x=0 ;
            inputDir.y=-1;
            break;

        case "ArrowDown":
            console.log("ArrowDown")
            
            inputDir.x=0;
            inputDir.y=1;
            break;
        
        case "ArrowLeft":
            console.log("ArrowLeft")
            
            inputDir.x=-1;
            inputDir.y=0;
            break;
        
        case "ArrowRight":
            console.log("ArrowRight")
            
            inputDir.x=1;
            inputDir.y=0;   
            break;
        default:
            break;
    
        } */

    
})