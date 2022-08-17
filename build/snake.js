"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakeIntersection = exports.getSnakeHead = exports.onSnake = exports.expandSnake = exports.drawSnake = exports.checkForWin = exports.updateSnake = exports.snakeSpeed = void 0;
// IMPORTS:
var move_js_1 = require("./move.js");
// SELECTORS:
exports.snakeSpeed = 10; // used in equation for speed inside function main and shows how many cells in the grid the snake moves per second.
var newSnakeSegments = 0;
// SNAKE BODY OBJECT INSIDE OF AN ARRAY:
var snakeBody = [{ x: 11, y: 11 }]; // x and y to show where on the grid to start. (the very middle) Just the head is one object inside the array.
// SNAKE FUNCTIONS:
function updateSnake() {
    addSegments(); // calls addSegments function everytime we update
    var moveDirectionInput = (0, move_js_1.getMoveDirection)(); // imported from input.js and set to a variable.
    // make for loop to move snake body segments into the same place as the one before it, essentially following the head of the snake: based on if the snake was in 3 segments, like after eating first piece of food.
    for (var i = snakeBody.length - 2; i >= 0; i--) { // grabs the second to last element in snake; stops loop when i >= 0; subtract 1 from i each time. 
        snakeBody[i + 1] = __assign({}, snakeBody[i]); // grabs the last segment with snakeBody[i + 1]. {...snakeBody[i]} creates a new object spreading it out into a new one with i. it creates a duplicate and sets it to snakeBody[i +1]
    } // ***** This whole part moves the snake forward each segment so it goes in place of the one before it each time.******
    // *****Referenced by E.Kawula.*******
    // update head of snake based on where it is moving:
    snakeBody[0].x = moveDirectionInput.x + snakeBody[0].x;
    snakeBody[0].y = moveDirectionInput.y + snakeBody[0].y; // moveDirectionInput is defined above as function getMoveDirection().
}
exports.updateSnake = updateSnake;
function addSegments() {
    for (var i = 0; i < newSnakeSegments; i++) {
        snakeBody.push(__assign({}, snakeBody[snakeBody.length - 1])); // taking last segment/element of snake and duplicating it (pushing) onto the end of the snake to make more segments.
        // *****Referenced by E.Kawula**********
        console.log(newSnakeSegments);
        checkForWin();
    }
    newSnakeSegments = 0; // make it so the snake stops making segments, not constantly creating more. (only the ones equal to the expansion rate everytime a piece of food is eaten.)
}
function checkForWin() {
    for (var i = 0; i < snakeBody.length; i++) {
        if (snakeBody.length === 10) {
            // let snakeSpeed = 20;
            var winnerText = document.querySelectorAll('#winnerText');
            for (var i_1 = 0; i_1 < winnerText.length; i_1++) {
                winnerText[i_1].textContent = "YOU WON! High Score - 3";
                winnerText[i_1].style.color = "#c9e610";
            }
        }
        else if (snakeBody.length === 19) {
            winnerText.textContent = "YOU WON! High Score - 6";
            winnerText.style.color = "#d9387e";
            winnerText.style.fontSize = "25px";
        }
        else if (snakeBody.length === 28) {
            winnerText.textContent = "YOU WON! High Score - 9";
            winnerText.style.color = "#14c9e0";
            winnerText.style.fontSize = "30px";
        }
        else if (snakeBody.length === 37) {
            winnerText.textContent = "YOU WON! High Score - 12";
            winnerText.style.color = "#07e027";
            winnerText.style.fontSize = "35px";
        }
        else if (snakeBody.length === 46) {
            winnerText.textContent = "YOU WON! High Score - 15";
            winnerText.style.color = "#38d9c9";
            winnerText.style.fontSize = "40px";
        }
        else if (snakeBody.length >= 49) {
            winnerText.textContent = "YOU ARE KILLING IT SNAKE MASTER!";
            winnerText.style.color = "#d67206";
            winnerText.style.fontSize = "40px";
        }
        return;
    }
}
exports.checkForWin = checkForWin;
function drawSnake(gameBoard) {
    snakeBody.forEach(function (segment) {
        // for each segment of the snake create a snake element, show position of start, and style it. (loops through each segment)
        var snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y; // row is y and column is x because of the arrow key movements.
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('rickSnake'); // styled in styles.css file
        gameBoard.appendChild(snakeElement); // appends the snake to the gameBoard, and onto the page.
    });
}
exports.drawSnake = drawSnake;
function expandSnake(amount) {
    newSnakeSegments = newSnakeSegments + amount;
}
exports.expandSnake = expandSnake;
// create function for getting snakes position for when dropping new food piece:
function onSnake(position, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.ignoreHead, ignoreHead = _c === void 0 ? false : _c;
    return snakeBody.some(function (segment, index) {
        if (ignoreHead && index === 0)
            return false;
        return equalPositions(segment, position); // if the two positions are exaclty the same as defined below in function equalPostions, than onSnake function will return true.
    });
}
exports.onSnake = onSnake;
function equalPositions(position1, position2) {
    return position1.x === position2.x && position1.y === position2.y;
}
function getSnakeHead() {
    return snakeBody[0];
}
exports.getSnakeHead = getSnakeHead;
function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true }); // *********object ignoreHead referenced by E.Kawula*********
}
exports.snakeIntersection = snakeIntersection;
