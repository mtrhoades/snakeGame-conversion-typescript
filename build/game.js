"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// OTHER JAVASCRIPT FILE IMPORTS:
var snake_js_1 = require("./snake.js");
var food_js_1 = require("./food.js");
var grid_js_1 = require("./grid.js");
// SELECTORS:
var theLastRenderedTime = 0; // created to make equation for how fast the snake will go.
var gameBoard = document.getElementById('grid-game-board'); // grabs the HTML element to display the grid.
var gameOver = false;
// GAME FUNCTIONS:
function main(currentTime) {
    if (gameOver) { // made for when you lose the game.
        var loserText = document.querySelectorAll('#loserText');
        for (var i = 0; i < loserText.length; i++) {
            loserText[i].textContent = "GAME OVER! ... click Restart game to play again";
            loserText[i].style.color = "#f2140c";
        }
        return;
    }
    window.requestAnimationFrame(main); // method for performing animation and requests the browser calls a specified function to update animation before the next repaint and is called again below the function to actually start the loop.
    var timeSinceLastRender = (currentTime - theLastRenderedTime) / 1000; // is converted into seconds from miliseconds.
    if (timeSinceLastRender < 1 / snake_js_1.snakeSpeed) { // controls the speed of rendering the snake so it's not too fast. snakeSpeed is defined in snake.js, snakeSpeed is =  to how many cells on the grid it will move per second.
        return;
    }
    theLastRenderedTime = currentTime; // redeclares variable from above to upadate theLastRenderedTime to = currentTime every time.
    update();
    draw(); // since this is the "main" function, we have to call update() and draw() inside of it, to get ran over and over again.
}
window.requestAnimationFrame(main); // Needs to be called again globally to start the loop for above.
function update() {
    (0, snake_js_1.updateSnake)();
    (0, food_js_1.updateFood)();
    checkDeath();
}
function draw() {
    gameBoard.innerHTML = ""; // need to remove pieces of the snake not needed:
    (0, snake_js_1.drawSnake)(gameBoard); // imported from snake.js file and passed gameBoard as argument.
    (0, food_js_1.drawFood)(gameBoard); // imported from food.js file and passed gameboard as argument.
}
// function for losing the game: (running off grid or into itself)
function checkDeath() {
    gameOver = (0, grid_js_1.outsideGrid)((0, snake_js_1.getSnakeHead)()) || (0, snake_js_1.snakeIntersection)();
}
// add click event listener and function for restarting the game.
document.getElementById("resetButton").addEventListener("click", reloadPage);
function reloadPage() {
    window.location.reload();
}
// FUNNY PHRASE APPENDAGE:
var funnyPhrase = document.createElement('h2');
funnyPhrase.setAttribute('id', 'funnyPhrase');
funnyPhrase.textContent = "Wubbah lubbah dub dub!";
funnyPhrase.style.color = "white";
document.body.append(funnyPhrase);
