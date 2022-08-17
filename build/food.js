"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawFood = exports.updateFood = void 0;
// IMPORTS:
var snake_js_1 = require("./snake.js");
var grid_js_1 = require("./grid.js");
// SELECTORS:
var food = getRandomFoodPosition();
// { x: 10, y: 1 } // CSS grid starts at 1, 0 is technically outside of the grid.
var expansionRate = 3; // used for # of segments added to the body after eating 1 piece of food.
// FOOD FUNCTIONS:
function updateFood() {
    // make the snake eat the food when it is over top of it:
    if ((0, snake_js_1.onSnake)(food)) { // onSnake and expandSnake functions are defined in snake.js file
        (0, snake_js_1.expandSnake)(expansionRate);
        food = getRandomFoodPosition();
    }
}
exports.updateFood = updateFood;
function getRandomFoodPosition() {
    var newFoodPosition;
    while (newFoodPosition == null || (0, snake_js_1.onSnake)(newFoodPosition)) { // currently when our food is null or is on the snake already, than get new food position.
        newFoodPosition = (0, grid_js_1.randomGridPosition)();
    }
    return newFoodPosition; // will loop ^ until there is a new position for the food that is NOT on the snake head or body.
}
function drawFood(gameBoard) {
    var foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('mortyFood'); // styled in styles.css file
    gameBoard.appendChild(foodElement); // appends the snake to the gameBoard, and into the browser.
}
exports.drawFood = drawFood;
