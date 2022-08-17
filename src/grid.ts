// SELECTORS:
const gridSize = 21; // set gridSize variable to the size of the grid to multiply down below with the random math function.



// GRID FUNCTIONS:
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * gridSize) + 1, // formula for randomizing number between 1 - 21
        // ^ randomized a number between 0 - .99999999.... and than multiplies the gridSize (defined above) and adds 1.
        y: Math.floor(Math.random() * gridSize) + 1
    }
}

// function for when snake goes outside the grid, you lose!
export function outsideGrid(position: { x: any; y: any; }) {
    return (
        position.x < 1 || position.x > gridSize || position.y < 1 || position.y > gridSize
    );
}