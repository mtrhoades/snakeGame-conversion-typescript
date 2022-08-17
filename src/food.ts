// IMPORTS:
import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";



// SELECTORS:
let food = getRandomFoodPosition();
// { x: 10, y: 1 } // CSS grid starts at 1, 0 is technically outside of the grid.
const expansionRate = 3; // used for # of segments added to the body after eating 1 piece of food.



// FOOD FUNCTIONS:
export function updateFood() {
    // make the snake eat the food when it is over top of it:
    if (onSnake(food)) { // onSnake and expandSnake functions are defined in snake.js file
        expandSnake(expansionRate);
        food = getRandomFoodPosition()
    }
}

function getRandomFoodPosition() { // makes food appear in random position on the grid.
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) { // currently when our food is null or is on the snake already, than get new food position.
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition // will loop ^ until there is a new position for the food that is NOT on the snake head or body.
}

export function drawFood(gameBoard: HTMLElement | null) { // same as function draw in snake.js but formulated for food piece instead.
    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('mortyFood') // styled in styles.css file
    gameBoard.appendChild(foodElement); // appends the snake to the gameBoard, and into the browser.
}

