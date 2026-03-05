# Midterm Documentation 

##Phase 1

1. For phase 1 all I had to do was choose a drawing. I decided to do this 3 traingle shape that you can find in the jpeg file called "Phase1". I chose this because it is the triforce from zelda and zelda is cool. 

##Phase 2
 

1. First I coppied this code to p5.js from the midterm read me so I get a rough idea of what I am doing. 
```javascript
function setup() {
  createCanvas(150, 150); // Set the size of canvas
  noStroke(); // Disable drawing the stroke
}

function draw() {
  fill(0); // Fill in with black color
  rect(40, 10,  60, 10); // Draw rectangles
  rect(40, 10,  5, 50);
  rect(100, 10,  5, 50);
  ellipse(30, 60, 30, 20); // Draw ellipses
  ellipse(90, 60, 30, 20);
}
```

2. I then changed the canvas size to 20 because I thought that would be an easier number to divide by. I also decided I wanted to make it the color yellow because thats what color it is in Zelda. I went to the p5 reference and after some hunting in the color section I found the code ```  // Create a p5.Color object using RGB values. let c = color(255, 204, 0);``` I assumed that this meant that I could use this to input any rgb value and make a variable to call that specific color. I searched up the rgb value for yellow. This is what I came up with, all though the code would not run. 
```javascript
function setup() {
  createCanvas(20, 20); // Set the size of canvas
  noStroke(); // Disable drawing the stroke
}
let yellow = (225, 225, 0);
function draw() {
  fill(yellow); // Fill in with black color
  rect(40, 10,  60, 10); // Draw rectangles
  rect(40, 10,  5, 50);
  rect(100, 10,  5, 50);
  ellipse(30, 60, 30, 20); // Draw ellipses
  ellipse(90, 60, 30, 20);
}
```

3. I figured that I probably just put yellow in the wrong spot so I moved it into the setup function. I figured this would work because im "setting up" the color yellow. This code also did not work. I then finally put it under the function draw() and it made the music note yellow. 

```javascript
function setup() {
  createCanvas(20, 20); // Set the size of canvas
  noStroke(); // Disable drawing the stroke
}

function draw() {
  let y = (225, 225, 0);
  fill(y); // Fill in with black color
  rect(40, 10,  60, 10); // Draw rectangles
  rect(40, 10,  5, 50);
  rect(100, 10,  5, 50);
  ellipse(30, 60, 30, 20); // Draw ellipses
  ellipse(90, 60, 30, 20);
}
```

4. I then knew that I had to make 3 triangles and in the p5 reference found out that its 3 cordinates. First is the left side of the triangle, 2nd is the top, 3rd is the right. I then tried to set the coridantes for the 20x20 canvas and I thought "Im making this harder than it needs to be" so I changed the canvas size to 100x100 and inputed the proper cordiantes to create the drawing. I also added a black backgournd because it looks nice by using backgound(0) which is code i found in the code along for functions. 
```javascript
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
```
##Phase 3
1. First I copied the code from the README so I could get a start. I inputed my code from Phase 2. 
```javascript
function setup() {
  createCanvas(400, 400); // Set the size of canvas
  noStroke(); // Disable drawing the stroke
}

function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);
	background(0); //black background
	let y = color(225, 225, 0); //color yellow
  fill(y); // Fill in with yellow
  triangle(0, 100, 25, 50, 50, 100); //draw triangles
  triangle(50, 100, 75, 50, 100, 100); 
  triangle(25, 50, 50, 0, 75, 50);
}

function draw() {
  drawObject(0, 0, 1);
  drawObject(0, 200, 1);
}

```

2. I had an issue where it was displaying the drawing in the wrong spot. This whole issue took me a long time to figure out. At first I thought the issue was that the 2nd object wasnt displaying and the 1st object wasnt displaying in the correct spot. I messed with the placment of the translate and scale code by I eventually tried deleting the background code because that was the only thing not present in the README and it should both objects displayed in the correct spot. This showed me that the actual issue was the the background was being displayed after the first object was drawn and then the 2nd object was being displayed correctly. I then tried pretty much every spot to put the background code and couldnt get it to work. I then realised that the problem was the code would draw the object then when its asked to draw another object it would make a new background which would draw itself over top the original drawing. This led to me putting the background code in the function draw so that it only displays it one time before any of the objects are drawn. This finally made the code work. 

```javascript
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
```

##Phase 4
1. I first started with a prompt to type how much you want the grid divided by because I think the prompts are cool and it was the easist thing I could think to start with. I then knew i needed a loop for the object drawing so I did the best I could. I then relised that whatever my prompt gave me would not be an adiquite number for the objects to go by so I tried dividing by 100 because I dont know why. This is what I had and it did not work. 
```
function setup() {
  createCanvas(400, 400);
  noStroke();

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

grid = prompt("How much do you want the grid divided by?");

function draw() {
  background(0);

  for (let x = 0; x < grid; x++) {
    for (let y = 0; y < grid; y++) {

      drawObject(x, y, grid / 100);}
  }
}
```
2. At this point I was pretty much trying random things. I figured part of the reason it probably wasnt showing anything was that in the draw object grid/100 would be super small. I relised it probably would need to be just the regular grid value but in the for statments the need the actual pixel size of the cell so that when they move past that cell thats when they will make another. I came up with this code and now it just made one really big picture. 
```javascript
function setup() {
  createCanvas(400, 400);
  noStroke();

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

grid = prompt("How much do you want the grid divided by?");
cellsize = 400/grid

function draw() {
  background(0);

  for (let x = 0; x < cellsize; x++) {
    for (let y = 0; y < cellsize; y++) {

      drawObject(x, y, grid);}
  }
}
```
3. At this point I decided I couldnt figure it out and I asked chat gpt how to do it. It gave me this code and sure enough it worked. Im not really sure why i have to make another x and y variable and multiply it by the size of the cell. Its really confusing to me but I wasnt as far off as I thought I was. 
```
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
```
![ChatGpt 1](ChatGpt%201.png)
![ChatGpt 2](ChatGpt%202.png)
![ChatGpt 3](ChatGpt%203.png)
![ChatGpt 4](ChatGpt%204.png)