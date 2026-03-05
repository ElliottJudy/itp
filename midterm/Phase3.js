function setup() {
  createCanvas(400, 400); // Set the size of canvas
  noStroke(); // Disable drawing the stroke
}

function drawObject(x, y, s) {
	
  push();
  translate(x, y);
   scale(s);
  let yellow = color(225, 225, 0); //color yellow
  fill(yellow); // Fill in with yellow
  triangle(0, 100, 25, 50, 50, 100); //draw triangles
  triangle(50, 100, 75, 50, 100, 100); 
  triangle(25, 50, 50, 0, 75, 50); 
  pop();

}
function draw() {
  background(0); //black background
  drawObject(0, 0, 2);
  drawObject(0, 200, 2);
}