let mic;

function setup() {
  // Create fullscreen canvas
  let canvas = createCanvas(windowWidth, windowHeight);
  // canvas.parent('overlay');
  
  // Create microphone input
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  // Clear previous frame
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

/*
//ABBY: let's try coding the mic function! Using p5.js!
let mic;
let canvasCreated = false;

function setup() {
  //ABBY: Claude
  // Make sure the overlay div exists
  let overlayDiv = document.getElementById('overlay');
  if (!overlayDiv) {
    console.error('Overlay div not found');
    return;
  }
  
  // Create canvas that fills the entire overlay div
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('overlay');
  canvasCreated = true;

  //ABBY: this is from p5.js
  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  //ABBY: Claude
  clearInterval()

  //ABBY: p5.js
  // Get the overall volume (between 0 and 1.0)
  let volume = mic.getLevel();
  let alpha_opacity = volume * 255 * 5;

  // Create black overlay with opacity based on volume
  rect(0, 0, width, height);
  fill("#ff0000", volume * 255 * (volume + alpha_opacity));
  
  //ABBY: Claude
  // Debug: log volume to console
  if (frameCount % 30 === 0) { // Log every 30 frames
    console.log('Volume:', vol.toFixed(3), 'Alpha:', alpha.toFixed(1));
  }
}

//ABBY: Claude
// Resize canvas when window is resized
function windowResized() {
  if (canvasCreated) {
    resizeCanvas(windowWidth, windowHeight);
  }
}
*/