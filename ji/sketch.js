// The duck n the sun
// melsh.capalot
// somewhere in september

let sunX; // X position for the sun
let sunY = 150; 
let duckX = 300; // Initial X position for the duck
let duckY = 0; // Initial Y position for the duck
let duckYSpeed = 2; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  sunX = width / 2; // Start the sun in the middle
}

function draw() {
  
  let brightness = map(sunX, 0, width, 0, 255);
  background(brightness, 100, 200); 
  fill(32, 173, 197); 
  rect(0, height / 2, width, height / 2); 

  // Draw the sun
  fill(255, 255, 0); // Sun color
  ellipse(sunX, sunY, 100, 100); 


  sunX = mouseX;


  sunX = constrain(sunX, 0, width);
  
  // Draw the duck
  fill(236, 250, 34); // Duck color
  ellipse(duckX, height / 2 + duckY, 40, 20); // the duck


  duckY += duckYSpeed; 
  if (duckY > 20 || duckY < -20) { 
    duckYSpeed *= -1; 
  }
}
