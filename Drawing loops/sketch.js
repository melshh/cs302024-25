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
  myBackground();
  myForeground();
}

function myBackground(){
  background(200)
  
  for(let x = 0 ; x < width ; x = x + 1){
    fill(0);
    circle (x, height/2,40);
    fill(255);
    text(x, x,height/2);
    }
    let starCount = 0;
    fill (255,0,0);
    while (starCount < 100){
      let x = random (0, width);
      let y = random (0, height);
      circle(x,y,10);
      startCount++
    }}