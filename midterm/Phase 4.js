let grid;
let cellSize;

function setup() {
  createCanvas(400, 400);
  noStroke();

  grid = prompt("How much do you want the grid divided by?");
  grid = int(grid);

  cellSize = width / grid;
}

function drawObject(x, y, s) {

  push();
  translate(x, y);
  scale(s);

  let yellow = color(225, 225, 0);
  fill(yellow);

  triangle(0, 100, 25, 50, 50, 100);
  triangle(50, 100, 75, 50, 100, 100);
  triangle(25, 50, 50, 0, 75, 50);

  pop();
}

function draw() {
  background(0);

  for (let x = 0; x < grid; x++) {
    for (let y = 0; y < grid; y++) {

      let posX = x * cellSize;
      let posY = y * cellSize;

      drawObject(posX, posY, cellSize / 100);
    }
  }
}