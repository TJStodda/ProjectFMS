//draws a basic circle for testing purposes

var backButton;
function setup(){
  createCanvas(400, 400);
 
}

function draw(){
   background(220);
  backButton = createButton();
  backButton.position(300,300);
  
  fill('#FFA524');
  circle(50,50,50);
}
