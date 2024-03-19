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

// ŞEKİLLERİ KÜÇÜLTME VE BÜYÜTME BUTONLARI
const smallerButton = document.getElementById("smallButton");
const largerButton = document.getElementById("largeButton");
const enlargeSize = document.getElementById("enlargeSize");

let interval;
// buraya bir daha bir bak 0dan aşağı iniyor!!

// MOUSE CLICK
smallerButton.addEventListener("mousedown", function(){
  if(enlargeButton != 0){
    interval = setInterval(function() {
      if(enlargeButton != 0){
        enlargeButton -= 10;;
      }
  }, 75);
  }
})


smallerButton.addEventListener('mouseup', function() {
  clearInterval(interval);
});

largerButton.addEventListener("mousedown", function(){
  interval = setInterval(function() {
    enlargeButton += 10;;
}, 75);
})

largerButton.addEventListener('mouseup', function() {
  clearInterval(interval);
});

// TOUCH SCREEN
smallerButton.addEventListener("touchstart", function(event) {
  event.preventDefault();
  if (enlargeButton > 0) {
    interval = setInterval(function() {
      enlargeButton -= 1;
      if (enlargeButton < 0) {
        enlargeButton = 0;
      }
    }, 75);
  }
});

smallerButton.addEventListener("touchend", function() {
  clearInterval(interval);
});

largerButton.addEventListener("touchstart", function(event) {
  event.preventDefault();
  interval = setInterval(function() {
    enlargeButton += 1;
  }, 100);
});

largerButton.addEventListener("touchend", function() {
  clearInterval(interval);
});

// Büyüklüğü ekranda göster
interval = setInterval(() => {
  enlargeSize.innerHTML = enlargeButton;
}, 10);




function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  shapeX = 0;
  shapeY = 0;
}



function draw() {
  //strokeWeight(0); // şekillerin border'ı
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

 
}
