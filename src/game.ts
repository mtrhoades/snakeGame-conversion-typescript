// OTHER JAVASCRIPT FILE IMPORTS:
import { updateSnake, drawSnake, snakeSpeed, getSnakeHead, snakeIntersection, checkForWin } from './snake.js';
import { updateFood, drawFood } from './food.js';
import { outsideGrid } from './grid.js';



// SELECTORS:
let theLastRenderedTime = 0; // created to make equation for how fast the snake will go.
const gameBoard = document.getElementById('grid-game-board') // grabs the HTML element to display the grid.
let gameOver = false;



// GAME FUNCTIONS:
function main(currentTime: number) { // made to repeat update() and draw()
    if (gameOver) { // made for when you lose the game.
        let loserText = document.querySelectorAll('#loserText');
        for (let i = 0; i < loserText.length; i++) {
            loserText[i].textContent = "GAME OVER! ... click Restart game to play again";
            loserText[i].style.color = "#f2140c";
        }
        return
    }
    window.requestAnimationFrame(main) // method for performing animation and requests the browser calls a specified function to update animation before the next repaint and is called again below the function to actually start the loop.

    const timeSinceLastRender = (currentTime - theLastRenderedTime) / 1000 // is converted into seconds from miliseconds.

    if (timeSinceLastRender < 1 / snakeSpeed) { // controls the speed of rendering the snake so it's not too fast. snakeSpeed is defined in snake.js, snakeSpeed is =  to how many cells on the grid it will move per second.
        return
    }  
    theLastRenderedTime = currentTime // redeclares variable from above to upadate theLastRenderedTime to = currentTime every time.
    
    update(); 
    draw(); // since this is the "main" function, we have to call update() and draw() inside of it, to get ran over and over again.
}

window.requestAnimationFrame(main) // Needs to be called again globally to start the loop for above.

function update() { // used to update a list of other update functions all at once
    updateSnake(); 
    updateFood(); 
    checkDeath();
}

function draw() { // used to draw the board and pieces on the screen after the update functions are ran ^.
    gameBoard.innerHTML = "" // need to remove pieces of the snake not needed:
    drawSnake(gameBoard); // imported from snake.js file and passed gameBoard as argument.
    drawFood(gameBoard); // imported from food.js file and passed gameboard as argument.
}

// function for losing the game: (running off grid or into itself)
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}



// add click event listener and function for restarting the game.
document.getElementById("resetButton").addEventListener("click", reloadPage)

function reloadPage() {
    window.location.reload();
}



// FUNNY PHRASE APPENDAGE:
const funnyPhrase = document.createElement('h2');
funnyPhrase.setAttribute('id', 'funnyPhrase');
funnyPhrase.textContent = "Wubbah lubbah dub dub!";
funnyPhrase.style.color = "white";
document.body.append(funnyPhrase);
