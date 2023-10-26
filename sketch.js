
  
//File sketches the canvas and has the draw function which is called 60 times per second by default




//mousepressed() will always execute first call in draw function (currently activity 1) will need if statements detecting if mouse location is over the correct box for navigation to work properly

//add mousepressed method to clean up code and make file length shorter

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
 
 activityTwoButton.mousePressed(window.open("https://editor.p5js.org/tjstodda/full/LXztNdYAI"));
  activityThreeButton.mousePressed(window.open("https://editor.p5js.org/tjstodda/full/gMhyv9UUd"));
    activityFourButton.mousePressed(window.open("https://editor.p5js.org/tjstodda/full/gmKIF2re4"));
  
settingsButton.mousePressed(window.open("https://editor.p5js.org/tjstodda/full/AkuDdzqqo"));
  
}
