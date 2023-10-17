function setup() {
  createCanvas(600,400);
}

function draw() {
  background(220);
  
  fill(180,180,190);
  rect(0,0,600,400);
 
  fill(140,140,160);
  
  rect(180, 100, 240, 50,10,10,10,10)
  
  rect(15,20,120,50,10,10,10,10);
  rect(465,15, 120, 50,10,10,10,10);
  
  rect(15, 330, 120, 50,10,10,10,10)
  rect(165, 330, 120, 50,10,10,10,10)
  rect(315, 330, 120, 50,10,10,10,10)
  rect(465, 330, 120, 50,10,10,10,10)
  
  textSize(25)
  fill(220,220,220)
  text("Activity 1",25,360)
  text("Activity 2", 175, 360)
  text("Activity 3", 325, 360)
  text("Activity 4", 475, 360)
  
  text("Settings", 30, 50)
  text("Quit", 500, 50)
  
  textSize(35)
  text("Main Menu", 215, 135)
  
  
  
}
