function setup() {
    createCanvas(400, 400);
    background(220);
    noLoop();
}

function draw() {
    fill(255, 0, 0);
    rect(50, 50, 100, 100);
    
    fill(0, 255, 0);
    ellipse(200, 200, 100, 100);
    
    fill(0, 0, 255);
    triangle(300, 300, 350, 250, 400, 300);
}