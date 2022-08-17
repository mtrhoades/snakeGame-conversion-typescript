"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMoveDirection = void 0;
// SELECTORS:
var moveDirectionInput = { x: 0, y: 0 };
var theLastInputDirection = { x: 0, y: 0 };
// KEYBOARD ARROW MOVEMENTS:
window.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'ArrowUp':
            // make if statements for theLastInputDirection so snake does NOT move onto itself:
            if (theLastInputDirection.y !== 0)
                break; // break early
            moveDirectionInput = { x: 0, y: -1 }; // remember -1 moves y up, positive 1 moves y down
            break;
        case 'ArrowDown':
            if (theLastInputDirection.y !== 0)
                break;
            moveDirectionInput = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (theLastInputDirection.x !== 0)
                break;
            moveDirectionInput = { x: -1, y: 0 }; // remember -1 moves x left, postive 1 moves x right.
            break;
        case 'ArrowRight':
            if (theLastInputDirection.x !== 0)
                break;
            moveDirectionInput = { x: 1, y: 0 };
            break;
    }
    e.preventDefault(); // keeps arrow key movements from scrolling the page
});
function getMoveDirection() {
    // define a variable for theLastInputDirection so the snake does NOT move onto itself. (up to down, or left to right)
    theLastInputDirection = moveDirectionInput;
    return moveDirectionInput;
}
exports.getMoveDirection = getMoveDirection;
