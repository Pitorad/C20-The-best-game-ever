var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "blue";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
}

function draw() {
  background(0);  

  movingRect.y = mouseY;
  movingRect.x = mouseX;

if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
  && movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
  && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2) {
    fixedRect.shapeColor = "Gold";
    movingRect.shapeColor = "Gold"
  } else {
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }

  drawSprites();
}