// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let NUM_CIRCLES = 40  LEFT_ARROW
Let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();
}

function drawCircles(){
  noFill();
  for(let i = 0; i<NUM_CIRCLES; 1++){
    let x = random (0,width);
    let y = random (0, height);
    let d = random (20,60);
    circle(x,y,d);
 }
 fill(255,0,0)
 text()




}