function setup() {
  createCanvas(400, 400);

}

function draw() {
  //background
  setLineDash([0, 0]);
  background(220);
  fill(180,180,190);
  rect(10, 10, 380, 380, 10);
  fill(140,140,160);
  rect(70, 30, 260, 60, 10);

  //text title
  fill(220,220,220);  
  textSize(50);
  text('Settings', 110, 75);
  
  //
  fill('white');
  textSize(23);
  text('example', 105, 138);
  text('example', 105, 200);
  text('example', 105, 262);
  text('example', 105, 324);
  
  setLineDash([5, 5]);
  fill(255,255,255);
  circle(70,130,20);
  circle(70,192,20);
  circle(70,254,20);
  circle(70,316,20);


  
  fill(140,140,160);
  rect(260, 330, 120, 50, 10);
  

  fill(220,220,220);
  text('Back', 280, 370);
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}
