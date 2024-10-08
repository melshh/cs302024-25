// working with images
// melsh.caplot
// Oct 4th, 2024

let lionL, lionR;

function preLoad(){
  lionL = loadImage ("assets/lion-left.png");
  lionR = loadImage ("assets/lion-right/png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  imageMode(CENTER) 
    image(lionR, mouseX, mouseY, lionR.width / 2, lionR.height /2 );
  
  }

  image(lionL, mouseX, mouseY, lionL.width / 2, lionL.height /2 );


