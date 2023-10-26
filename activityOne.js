

var backButton;
function setup(){
  createCanvas(600, 400);
 
}

function draw(){
   background(220);
  textSize(32);
  text("Activity One",250,150)
  backButton = createButton("back");
  backButton.position(300,300);
  backButton.mousePressed(window.open("https://editor.p5js.org/tjstodda/full/92J081UKo" ));
  
  fill('#FFA524');
  circle(50,50,50);
}
