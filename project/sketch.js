// The duck n the sun
// melsh.capalot
// somewhere in september

let sunX = 150; // Initial X position for the sun
let sunY = 150; // Y position for the sun
let duckX = 300; // Initial X position for the duck
let duckY = 0; // Initial Y position for the duck
let duckYSpeed = 2; // Speed of the duck's vertical movement

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(32, 60, 197); 
  fill(32, 173, 197); 
  rect(0, height / 2, width, height / 2); 


  fill(255, 255, 0); // Sun color
  ellipse(sunX, sunY, 100, 100); // the sun

  // Move the sun horizontally
  sunX += 2; // Change this value for faster/slower movement
  if (sunX > width) { 
    sunX = 0;
  }

 
  fill(236,250,34); // Duck color
  ellipse(duckX, height / 2 + duckY, 40, 20); // the duck

 
  duckY += duckYSpeed; 
  if (duckY > 20 || duckY < -20) { // Change direction when it reaches a certain height
    duckYSpeed *= -1; // Reverse direction
  }
}

