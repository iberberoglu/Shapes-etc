let shapeX, shapeY;
let shapeSize, shapeColor;
let baseShapeSize = 40;
let randomSize;
let randomX, randomY;
let randomShapeType;
let triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3;
let triangleBaseX = 100;
let triangleBaseY = 100;
let maxLength;
let enlargeButton = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  shapeX = 0;
  shapeY = 0;
}

function touchStarted() {
  if (mouseX > windowWidth - 100 && mouseY > windowHeight - 100) {
    enlargeButton += 10;
  }
  if (
    mouseX > windowWidth - 200 &&
    mouseX < windowWidth - 100 &&
    mouseY > windowHeight - 100
  ) {
    enlargeButton -= 10;
  }
}

function draw() {
  if (mouseIsPressed) {
    if (mouseX > windowWidth - 100 && mouseY > windowHeight - 100) {
      enlargeButton += 1;
    } else if (
      mouseX > windowWidth - 200 &&
      mouseX < windowWidth - 100 &&
      mouseY > windowHeight - 100
    ) {
      enlargeButton -= 1;
    }
  }

  shapeColor = color(random(255), random(255), random(255));
  fill(shapeColor);
  rectMode(CENTER);
  randomSize = random(enlargeButton);
  shapeSize = random(1, randomSize);

  shapeX = random(windowWidth);
  shapeY = random(windowHeight);

  maxLength = enlargeButton;
  triangleX1 = random(windowWidth);
  triangleY1 = random(windowHeight);

  triangleX2 = triangleX1 + random(-maxLength, maxLength);
  triangleY2 = triangleY1 + random(-maxLength, maxLength);
  triangleX3 = triangleX1 + random(-maxLength, maxLength);
  triangleY3 = triangleY1 + random(-maxLength, maxLength);

  let side1 = dist(triangleX1, triangleY1, triangleX2, triangleY2);
  let side2 = dist(triangleX2, triangleY2, triangleX3, triangleY3);
  let side3 = dist(triangleX3, triangleY3, triangleX1, triangleY1);

  randomShapeType = random(300);

  if (randomShapeType > 0 && randomShapeType <= 100) {
    circle(shapeX, shapeY, shapeSize);
  } else if (randomShapeType > 100 && randomShapeType <= 200) {
    rect(shapeX, shapeY, shapeSize);
  } else if (side1 < maxLength && side2 < maxLength && side3 < maxLength) {
    triangle(triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3);
  }

  fill(255);
  let buttonX = windowWidth - 100;
  let buttonY = windowHeight - 50;
  rect(buttonX, buttonY, 200, 100, 25);
  line(windowWidth - 100, windowHeight - 100, windowWidth - 100, windowHeight);
  fill(0);
  textSize(12);
  text("Bigger shapes", windowWidth - 90, windowHeight - 50);
  text("Smaller shapes", windowWidth - 190, windowHeight - 50);
  textSize(18);
  text(enlargeButton, windowWidth - 30, windowHeight - 70);
}
