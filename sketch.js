//File sketches the canvas and has the draw function which is called 60 times per second by default
//TODO: GET WORKING BUTTONS, WINDOW.OPEN()??
var fileName;

function goTo(fileName) {
  window.open(filename);
}


function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(32);
  text("this is the home screen.",20,40);
 var activityOneButton =  createButton("activity 1");
  activityOneButton.position(20,100);
    activityOneButton.mousePressed(goTo("activityOne.html"));

  activityTwoButton =  createButton("activity 2");
  activityTwoButton.position(200,100);
}

function draw() {
   
  
}



