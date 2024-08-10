let bgColor = 255;

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');
    background(bgColor);

    // Example of p5.dom usage
    let colorPicker = createColorPicker('#ffffff');
    colorPicker.position(10, 10);
    colorPicker.input(() => bgColor = colorPicker.value());

    // Example of p5.sound usage (assuming a sound file in assets/sounds/)
    // let mySound;
    // soundFormats('mp3', 'ogg');
    // mySound = loadSound('assets/sounds/soundfile.mp3', () => {
    //     mySound.play();
    // });
}

function draw() {
    background(bgColor);
    fill(0);
    ellipse(mouseX, mouseY, 50, 50);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}