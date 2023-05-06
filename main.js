//VARIABLES
let direction={x:0, y:0};
let speed=2;
let lastPaintTime=0;
let snakeArr=[{x:0, y:0}];

food={x:5, y:5};





//FUNCTIONS
function main(currentTime){
    window.requestAnimationFrame(main);
    console.log(currentTime)
    if((currentTime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime=currentTime;
    Engine()
}

function Engine(){
    //UPDATING THE SNAKE ARRAY 


    //RENDERING THE SNAKE 
    playArea.innerHTML = "";
    snakeArr.forEach((element,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = element.y;
        snakeElement.style.gridColumnStart = element.x;
        snakeElement.classList.add("head");
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