let mic;

//Source: p5.js (https://editor.p5js.org/amcc/sketches/Jtg4GaAG0), Claude
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  clear();
  
  // Get microphone volume level (0.0 to 1.0)
  let vol = mic.getLevel();
  
  // Map volume to opacity (0-255)
  // Multiply by a factor to increase sensitivity
  let opacity = vol * 255 * 10;
  
  // Draw black rectangle over entire screen
  fill(0, 0, 0, opacity);
  noStroke();
  rect(0, 0, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}