//File sketches the canvas and has the draw function which is called 60 times per second by default
//Buttons are working,  window.open target is giving a weird error though

const target = "_self";

var activityOneButton;
var activityTwoButton;
var activityThreeButton;
var activityFourButton;
var settingsButton;



function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(32);
  text("this is the home screen.",20,40);
   activityOneButton =  createButton("activity 1");
  activityOneButton.position(20,100);
   

  activityTwoButton =  createButton("activity 2");
  activityTwoButton.position(200,100);
  
  activityThreeButton =  createButton("activity 3");
  activityThreeButton.position(20,200);
  
  activityFourButton =  createButton("activity 4");
  activityFourButton.position(200,200);
   settingsButton =  createButton("settings");
  settingsButton.position(300,300);
}

function draw() {
  activityOneButton.mousePressed(window.open("activityOne.html", target));
//  activityTwoButton.mousePressed(window.open("activityTwo.html"));
       // activityThreeButton.mousePressed(window.open("activityThree.html"));
   // activityFourButton.mousePressed(window.open("activityFour.html"));
// settingsButton.mousePressed(window.open("settings.html")); 
  
}



