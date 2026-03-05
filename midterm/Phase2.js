function setup() {
  createCanvas(100, 100); // Set the size of canvas
  noStroke(); // Disable drawing the stroke
}

function draw() {
  background(0) //black background
  let y = color(225, 225, 0) //color yellow
  fill(y); // Fill in with yellow
  triangle(0, 100, 25, 50, 50, 100); //draw triangles
  triangle(50, 100, 75, 50, 100, 100); 
  triangle(25, 50, 50, 0, 75, 50); 
}