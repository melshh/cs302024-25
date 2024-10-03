// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) {
 print(event.delta);
 //neg: UP SCROLL
 //pos: DWON SCROLL
 if(event.delta > 0)
  d = 5;

}
 