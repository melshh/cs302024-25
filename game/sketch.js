// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let duckX;
let duckY = 300; // Initial Y position of the duck
let duckYSpeed = 2; // Speed of the duck's vertical movement
let waterHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  duckX = width / 2; // Start the duck in the middle of the canvas
  waterHeight = height / 2;
}

function draw() {
  background(32, 60, 197); // Water color
  fill(32, 173, 197); // Water fill color
  rect(0, waterHeight, width, height / 2); // Water rectangle

  // Draw the duck
  fill(255, 100, 0); // Duck color
  ellipse(duckX, waterHeight + duckY, 40, 20); // Draw the duck

  // Move the duck up and down
  duckY += duckYSpeed; 
  if (duckY > 20 || duckY < -20) { // Change direction at limits
    duckYSpeed *= -1; // Reverse direction
  }

  // Check for arrow key input
  if (keyIsDown(LEFT_ARROW)) {
    duckX -= 5; // Move left
  }
  if (keyIsDown(RIGHT_ARROW)) {
    duckX += 5; // Move right
  }

  // Keep the duck within bounds
  if (duckX < 0) {
    duckX = 0; // Reset to left edge
  }
  if (duckX > width) {
    duckX = width; // Reset to right edge
  }
}

// Prevent the duck from going out of the water area
function keyPressed() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    if (duckY > 0) { // Prevent moving out of water
      duckY = 0; // Reset to water level
    }
  }
}
