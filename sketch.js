
/*notes from self
Author: Abby Wang
Date: February 6, 2026
Description: Code--that theoretically works--for mic integration to 
change ~brightness~ of screen according to environment sound. Only on p5.js.
*/

let mic;

//Source: p5.js (https://editor.p5js.org/amcc/sketches/Jtg4GaAG0), Claude
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  clear();
  
  // Get mic volume level
  let vol = mic.getLevel();
  
  // Let's map volume to oopacy
  // Increase sensitivity for volume
  let opacity = vol * 255 * 10;
  
  // Draw overlay
  fill(0, 0, 0, opacity);
  rect(0, 0, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}