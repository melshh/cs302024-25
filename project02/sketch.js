// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let sunX = 150; // Initial X position for the sun
let sunY = 150; // Y position for the sun
let duckX = 300; // Initial X position for the duck
let duckY = 0; // Initial Y position for the duck
let duckYSpeed = 2; // Speed of the duck's vertical movement

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(32, 60, 197); // Water color
  fill(32, 173, 197); // Water fill color
  rect(0, height / 2, width, height / 2); // Water rectangle

  // Draw the sun
  fill(255, 255, 0); // Sun color
  ellipse(sunX, sunY, 100, 100); // Draw the sun

  // Move the sun horizontally
  sunX += 2; // Change this value for faster/slower movement
  if (sunX > width) { // Reset sun position when it goes off-screen
    sunX = 0;
  }

  // Draw the duck
  fill(255, 100, 0); // Duck color
  ellipse(duckX, height / 2 + duckY, 40, 20); // Draw the duck

  // Move the duck up and down
  duckY += duckYSpeed; 
  if (duckY > 20 || duckY < -20) { // Change direction when it reaches a certain height
    duckYSpeed *= -1; // Reverse direction
  }
}

