//events (mouse keyboard)
//melsh.capalot
// september 12
//
//global variable scope
let tsize =40;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

 if (mouseIsPressed) tSize = random(20,80)
  textSize(tSize);
let postiton = mouseX + ", " + mouseY
text(postion, mouseX,mouseY);
}

function mousePressed(){
  tSizez = random (20, 200)
}
