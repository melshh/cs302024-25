// Perlin Noise Demo
// Mr. Scott
// Sept 27, 2024

// random()  vs  noise()
let cTime = 0; // Start with 0 for smoother noise progression
const cInterval = 0.02; // Speed of noise progression

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  line(width / 2, 0, width / 2, height);
  
  drawCircle(randomCircle, width * 0.25); // Random circle
  drawCircle(perlinCircle, width * 0.75); // Perlin noise circle
  drawStaircase();
}

function drawStaircase() {
  randomSeed(2); // Reset for consistent random values
  for (let x = 0; x < width; x += 20) {
    fill(0);
    rect(x, height, 20, -random(50, 500));
  }
}

function drawCircle(circleFunc, x) {
  circleFunc(x);
}

function perlinCircle(x) {
  let cSize = map(noise(cTime), 0, 1, 20, 255); // Size between 20 and 255
  fill(map(noise(cTime + 1), 0, 1, 0, 255), 
       map(noise(cTime + 2), 0, 1, 0, 255), 
       map(noise(cTime + 3), 0, 1, 0, 255));
  
  circle(x, height / 2, cSize);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(0);
  text(round(cSize), x, height / 2);
  
  cTime += cInterval; // Increment time for noise progression
}

function randomCircle(x) {
  let cSize = random(1, 255);
  fill(cSize, 255 - cSize, cSize / 2);
  
  circle(x, height / 2, cSize);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(0);
  text(round(cSize), x, height / 2);
}