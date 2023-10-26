
  
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
   activityOneButton =  createButton("activity 1");
  activityOneButton.position(15,300);
  activityOneButton.size(120,50);
 
   
  activityTwoButton =  createButton("activity 2");
  activityTwoButton.position(165,300);
  activityTwoButton.size(120,50);
  
  activityThreeButton =  createButton("activity 3");
  activityThreeButton.position(315,300);
  activityThreeButton.size(120,50);
  
  activityFourButton =  createButton("activity 4");
  activityFourButton.position(465,300);
  activityFourButton.size(120,50);
   settingsButton =  createButton("settings");
  settingsButton.position(15,30);
  settingsButton.size(120,50);
  
}

function draw() {
  activityOneButton.mousePressed(window.open("https://editor.p5js.org/tjstodda/full/a5JBC5J6I"));
 activityTwoButton.mousePressed(window.open("activityTwo.html"));
        activityThreeButton.mousePressed(window.open("activityThree.html"));
    activityFourButton.mousePressed(window.open("activityFour.html"));
settingsButton.mousePressed(window.open("settings.html")); 
  
}



