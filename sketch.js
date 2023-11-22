//File sketches the canvas and has the draw function which is called 60 times per second by default

var activityOneButton;
var activityTwoButton;
var activityThreeButton;
var activityFourButton;
var settingsButton;

function setup() {
  createCanvas(600, 400);
  background(220);
  
  rect(180, 100, 240, 50,10,10,10,10)
  textSize(32);
  text("Main Menu",215,135);
   activityOneButton =  createButton("Drop Block");
  activityOneButton.position(15,300);
  activityOneButton.size(120,50);
   activityOneButton.mousePressed(openActivityOne);
   
  activityTwoButton =  createButton("typing words");
  activityTwoButton.position(165,300);
  activityTwoButton.size(120,50);
  activityTwoButton.mousePressed(openActivityTwo);
  
  activityThreeButton =  createButton("smallest circle");
  activityThreeButton.position(315,300);
  activityThreeButton.size(120,50);
   activityThreeButton.mousePressed(openActivityThree);
  
  activityFourButton =  createButton("smaller square");
  activityFourButton.position(465,300);
  activityFourButton.size(120,50);
  activityFourButton.mousePressed(openActivityFour);
  
  
}

function openActivityOne() { //Drop Block
  window.open("https://editor.p5js.org/tjstodda/full/SSmmUi7er");
}

function openActivityTwo() { //typing words
  window.open("https://editor.p5js.org/tjstodda/full/3ITSEoq47");
}

function openActivityThree() {//smallest circle
  window.open("https://editor.p5js.org/tjstodda/full/gMhyv9UUd");
}

function openActivityFour() {//smaller square
  window.open("https://editor.p5js.org/tjstodda/full/rE0iRq4B1");
}



function draw() {
   
}
