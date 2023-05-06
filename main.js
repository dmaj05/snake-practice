//VARIABLES
let inputDir={x:0, y:0};
let speed=10;
let lastPaintTime=0;
let snakeArr=[{x:5, y:5}];
let score=0;
food={x:10, y:5};





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


function isCollide(arr){
    return false;
}

function Engine(){
    //UPDATING THE SNAKE ARRAY 

    if(isCollide(snakeArr)){
        inputDir= {x:0, y:0};
        alert("The Game is Over, press Enter to start again");
        snakeArr=[{x:5, y:5}];
        score=0;
    }


    //MOVING THE SNAKE
    for (let i = snakeArr.length - 2; i>=0 ; i--){
        
        snakeArr[i+1]={...snakeArr[i]};
       
    }
    snakeArr[0].x+=inputDir.x;
    snakeArr[0].y+=inputDir.y;

    //FOOD EATING LOGIC
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        snakeArr.unshift({x:snakeArr[0].x + inputDir.x, y:snakeArr[0].y + inputDir.y});
        food = {x:Math.floor((Math.random() * 20) + 1), y:Math.floor((Math.random() * 20) + 1)};
        
    } 
    else {
        
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




//GAME LOGIC
window.requestAnimationFrame(main);
window.addEventListener('keydown', e=>{
    inputDir={x:0, y:1};
    switch(e.key){
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
    
        }
})


