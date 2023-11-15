var cnv; 

var circleX = []; // arrays to store circle data
var circleY = [];
var circleRad = [];
var circleColorRed = [];
var circleColorGreen = [];
var circleColorBlue = [];
var isClicked=[]; //0 when not visible, 1 when clicked
var currentCircle =0;
var gameLevel =0;
var numCircles=0;
var congratsMessage = " ";

function createCircles() {
  numCircles = 3+(2*gameLevel);
  currentCircle = numCircles-1;//set current circle to index of smallest circ
  let x,y,radius;
  for (var i=0;i<numCircles;i++) {
    radius = random(30,150);
    x = random(50,550);
    y= random(50,350);
    circleX[i]=x;
    circleY[i] =y;
    circleRad[i] = radius;
    isClicked[i]=0;
    circleColorRed[i] = random(255);
    circleColorGreen[i] = random(255);
    circleColorBlue[i] = random(255);
    
  }
  
}

function checkClick() {
 
  if (currentCircle>=0&&dist(mouseX,mouseY,circleX[currentCircle],circleY[currentCircle])<circleRad[currentCircle]/2) {
     isClicked[currentCircle]=1;
    console.log(currentCircle);
    currentCircle--;
     }
}

function circleOrder() { //sorts circles from largest to smallest
  var temp,j;
  for(let i=0;i<=numCircles;i++) {
    temp = circleRad[i];
    j=i-1;
    
    while(j>=0 && circleRad[j]<temp) {
          circleRad[j+1] = circleRad[j];
      j=j-1;
          }
    circleRad[j+1] = temp;
  }
  
  
}

function buttonFunc() {
  window.open("https://editor.p5js.org/tjstodda/full/92J081UKo" );
}

function nextLevel() {
  backButton.hide();
  continueButton.hide();
  gameLevel++;
  createCircles();
  circleOrder();
}

function setup() {
  cnv = createCanvas(600, 400);
   backButton = createButton("back");
  backButton.position(400,300);
  backButton.mousePressed(buttonFunc);
  backButton.hide();
  continueButton = createButton("Continue");
  continueButton.position(200,300);
  continueButton.mousePressed(nextLevel);
  continueButton.hide();
}



function draw() {
  background(220);
  if (gameLevel==0) {
      fill(0);
  textSize(32);
  text("Click the smallest circle available until",50,100);
  text("all circle are clicked!",75,150);
    continueButton.show();
      }
  for (var i=0;i<numCircles;i++) {
    if (isClicked[i]==0) {
    fill(circleColorRed[i],circleColorGreen[i],circleColorBlue[i]);
    circle(circleX[i],circleY[i],circleRad[i]);
    }
  }
   cnv.mousePressed(checkClick);
    if (isClicked[0]==1) {
        for(var i=0;i<=1000;i++) {
          if (i==1000) {
              fill('#345678');
            textSize(32);
            congratsMessage = "Congrats you beat level: " + gameLevel;
            text(congratsMessage,125,200);
            backButton.show();
            continueButton.show();
              }
        }
        }
}


