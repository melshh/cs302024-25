// Drawing challenge
// melsh.capalot
// sept 13 2024
//
let rX = 150;  let rY = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  fill(200,255,155);
  square(rX, rY + 20, 50  );
  circle(rX,rY,50, 50, 25);
}
