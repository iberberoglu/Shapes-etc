let circleX, circleY;
let r, g, b;
let circleWidth = 40;
let circleWidthRandom;
let randomX;
let randomY;
let randomShape;
let triangleXone,
  triangleYone,
  triangleXtwo,
  triangleYtwo,
  triangleXthree,
  triangleYthree;
let triangleRandomXone = 100;
let triangleRandomYone = 100;
let triangleRandomXtwo = 100;
let triangleRandomYtwo = 100;
let triangleRandomXthree = 100;
let triangleRandomYthree = 100;
let maxLength;
let triangleButton = 50;
let circleButton = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  circleX = 0;
  circleY = 0;
  
}

// function mousePressed() {
//   if(mouseX > (windowWidth - 100) && mouseY > (windowHeight - 100)) {
//     circleButton += 10;
//   }
//   if(mouseX > (windowWidth - 200) && mouseX < (windowWidth - 100) && mouseY > (windowHeight - 100)) {
//     circleButton -= 10;
//   }
// }

function touchStarted() {
  if(mouseX > (windowWidth - 100) && mouseY > (windowHeight - 100)) {
    circleButton += 10;
  }
  if(mouseX > (windowWidth - 200) && mouseX < (windowWidth - 100) && mouseY > (windowHeight - 100)) {
    circleButton -= 10;
  }
  
}

function draw() {
  if(mouseIsPressed) {
    if(mouseX > (windowWidth - 100) && mouseY > (windowHeight - 100)) {
      circleButton += 1;
    } else if(mouseX > (windowWidth - 200) && mouseX < (windowWidth - 100) && mouseY > (windowHeight - 100)) {
      circleButton -= 1;
    }
  }
  fill(r, g, b);
  rectMode(CENTER);
  circleWidthRandom = random(circleButton);
  circleWidth = random(1, circleWidthRandom);
  r = random(255);
  g = random(255);
  b = random(255);

  circleX = random(windowWidth);
  circleY = random(windowHeight);

  maxLength = circleButton;
  triangleXone = random(windowWidth);
  triangleYone = random(windowHeight);

  triangleXtwo = triangleXone + random(-maxLength, maxLength);
  triangleYtwo = triangleYone + random(-maxLength, maxLength);
  triangleXthree = triangleXone + random(-maxLength, maxLength);
  triangleYthree = triangleYone + random(-maxLength, maxLength);

  let side1 = dist(triangleXone, triangleYone, triangleXtwo, triangleYtwo);
  let side2 = dist(triangleXtwo, triangleYtwo, triangleXthree, triangleYthree);
  let side3 = dist(triangleXthree, triangleYthree, triangleXone, triangleYone);

  randomShape = random(300);

  if (randomShape > 0 && randomShape <= 100) {
    circle(circleX, circleY, circleWidth);
  } else if (randomShape > 100 && randomShape <= 200) {
    rect(circleX, circleY, circleWidth);
  } else if (side1 < maxLength && side2 < maxLength && side3 < maxLength) {
    triangle(
      triangleXone,
      triangleYone,
      triangleXtwo,
      triangleYtwo,
      triangleXthree,
      triangleYthree
    );
  }
  fill(255);
  let buttonX = windowWidth - 100;
  let buttonY = windowHeight - 50;
  rect(buttonX, buttonY, 200, 100, 25);
  line((windowWidth - 100),(windowHeight - 100), (windowWidth - 100), windowHeight);
  fill(0);
  textSize(5.5);
  text("Şekilleri büyütmek için buraya tıkla", (windowWidth - 90), (windowHeight -50));
  text("Şekilleri küçültmek için buraya tıkla", (windowWidth - 190), (windowHeight -50));
  textSize(10);
  text(circleButton, (windowWidth - 30), (windowHeight -70));
  
}
