
function drawGrid(cols, rows, cellSize) {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            stroke(200);
            fill(randomColor());
            rect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }
}