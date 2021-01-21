//variable image
var zombie,zombieImg;
var peaG, shootG,cherryG,flowerG,wallG,powerG;
var peashooter,sunflower,wallNut,cherryBomb,bg;

function preload(){
  zombieImg= loadAnimation("Images/z1.jpeg","Images/z2.jpeg","Images/z3.jpeg");
  peashooter = loadImage("Images/peashooter.png")
  sunflower = loadImage("Images/sunflower.jpg")
  wallNut = loadImage("Images/wall nut.jpg")
  cherryBomb = loadImage("Images/cherry bomb.png")
  bg = loadImage("Images/pvz bg.jpg")
}
function setup() {
  createCanvas(windowWidth, windowHeight); 
  
  //creating groups
  peaG = createGroup()
  shootG = createGroup()
  cherryG = createGroup()
  flowerG = createGroup()
  wallG = createGroup()
  powerG = createGroup()
}
function draw() {
  background(bg);    
  
  spawnPeas()
  
  drawSprites();
}
/*
spawnZombie-- >> just like spawnClouds in trex game, x axis will be windowWidth
cheries - explode ---->> ill do in class
wallnut- block and defence ----> like pea
sunflower- gives power-- drops the power when planted ----> like pea

spawnPeas-shoot
*/
function spawnPeas(){
  var pea = createSprite(100,100,30,30)
  pea.addImage(peashooter)
  pea.scale = 0.1
  if(frameCount % 40 === 0){
    var shoot = createSprite(pea.x, pea.y-20,30,30);
    //shoot.addImage()
    shoot.velocityX = 6;
    //pea.lifetime

    
 }
}

  