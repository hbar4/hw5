var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];

function setup() {
  createCanvas(400, 400);

  for (var index = 0; index < 20; index = index + 1) {
    x[index] = 100;
    y[index] = 200;
    xSpeed[index] = random(0, 3);
    ySpeed[index] = random(1, 5);
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 100, 20);
  
  // draw drip
  for (var index = 0; index < 100; index = index + 1) {
    ellipse(x[index], y[index], 10);
    x[index] = x[index] + xSpeed[index];
    y[index] = y[index] + ySpeed[index];
  
  
  // if invisible for a full “height” amount…
  if (y[index] > height) {
    //reset
    y[index] = 200;
    x[index] = 100;
  }
}
}
