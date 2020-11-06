// To make Global variables
var monkey , monkey_running
var banana ,bananaImage,obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var survivalTime=0;

// to load Animations and Images
function preload(){
  
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png",
 "sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
 
}



function setup() {
 
  //to create Objects and add Animation to them
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  //to create Groups
  foodGroup=createGroup();
  obstacleGroup=createGroup();
  
}


function draw() {
  background(255);
  
  //to set monkey on ground
  monkey.collide(ground);
  
  //to make monkey jump when space is pressed
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
  //to infinite the grounds width
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  //to give gravity to monkey
  monkey.velocityY=monkey.velocityY+0.8;

  stroke("white");
  textSize(20);
  fill("white")
  text("score:"+score,500,50);
  
  //to make survival time 
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:"+survivalTime,100,50);
  
 obstacles();
 food();
 drawSprites(); 
  
}


function food() {
  //to spawn the foods
  if (frameCount % 80 === 0) {
    banana = createSprite(800,120,50,50)
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    
     //assign lifetime to the banana
     banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add food to the group
    foodGroup.add(banana);
  }
}

function obstacles() {
  //to spawn the foods
  if (frameCount % 300 === 0) {
    obstacle = createSprite(800,340,100,100)
    obstacle.x = Math.round(random(120,200));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    
     //assign lifetime to the obstacle
     obstacle.lifetime = 200;
    
    //add obstacle to the group
    obstacleGroup.add(obstacle);
  }
}
