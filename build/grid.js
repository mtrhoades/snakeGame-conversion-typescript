"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outsideGrid = exports.randomGridPosition = void 0;
// SELECTORS:
var gridSize = 21; // set gridSize variable to the size of the grid to multiply down below with the random math function.
// GRID FUNCTIONS:
function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * gridSize) + 1,
        // ^ randomized a number between 0 - .99999999.... and than multiplies the gridSize (defined above) and adds 1.
        y: Math.floor(Math.random() * gridSize) + 1
    };
}
exports.randomGridPosition = randomGridPosition;
// function for when snake goes outside the grid, you lose!
function outsideGrid(position) {
    return (position.x < 1 || position.x > gridSize || position.y < 1 || position.y > gridSize);
}
exports.outsideGrid = outsideGrid;
