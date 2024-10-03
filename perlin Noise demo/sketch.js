// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  line(width/2,0, width/2, height);

  // draw with random ()
randomCircle();
  // draw with noise ()
}
function randomCircle(){
  // draw a circle that uses random)()
  // unpredictable size (later, color)
  let cSize = random (10,200)
  circle(width*0.25,height/2,cSize)
}