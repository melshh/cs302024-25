// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x=0;
let y=0;
let rectSize = 35;
let speed= 10;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220);
  fill(139,139,134);
  rect(x,y,rectSize,rectSize);
  
  if (x<windowWidth-rectSize && y===0+rectSize) {
    x= x+speed
  }
  if (y<windowHeight-rectSize){
    y=y+speed
  
  }
  if (y<=windowHeight && x>0) {

  }
}
