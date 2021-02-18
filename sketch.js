var edges;
var bruse,bruseImg;
var daniel,danielImg;
var david,davidImg;
var hero,heroImg;
var backgroundImg,backGround2Img;
var enemy;
var enemyGroup;
var gameState=0;
var coin,coinGroup,coinImg;
var score=0;
var enemy2,enemyGroup2;
var hulk,hulkImg;
var thanos,thanosImg;
var venom,venomImg;

function preload(){
  bruseImg=loadImage("bruse.jpg");
  danielImg=loadImage("daniel.png");
  davidImg=loadImage("david.png");
  heroImg=loadImage("hero.png");
  backgroundImg=loadImage("background.jpg");
  coinImg=loadImage("coin.png");
  hulkImg=loadImage("hulk-removebg-preview.png");
  thanosImg=loadImage("thanos-removebg-preview.png");
  venomImg=loadImage("venom-4-removebg-preview.png");
  backGround2Img=loadImage("bacGround 2.jpg");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);

  hero=createSprite(690, 550, 50, 50);
  hero.addImage(heroImg);
  hero.scale=(0.5);

  hero.debug=true;

  edges=createEdgeSprites();

  enemyGroup=new Group();
  coinGroup=new Group();
  enemyGroup2=new Group();
}

function draw() {
  background(backgroundImg);

  textSize(40);
  text("score: "+score,displayWidth-300,40);
  
  hero.bounceOff(edges);
  if (keyDown("up")){
    hero.velocityX=0;
    hero.velocityY=-2;
}

if (keyDown("down")){
  hero.velocityX=0;
  hero.velocityY=2;
}

if (keyDown("left")){
hero.velocityX=-2;
hero.velocityY=0;
}

if (keyDown("right")){
hero.velocityX=2;
hero.velocityY=0;
}
  if(gameState===0){
    spawnEnemys();
    spawnCoins();
  

  if(score>10){
    gameState=2;

  }

  
}

if(gameState==2){
  background("backGround2Img");
  spawnCoins();
  spawnEnemy2();
  if(coinGroup.isTouching(hero)){
    score=score+1;
    coinGroup.destroyEach();
  }
  if(enemyGroup2.isTouching(hero)){
    gameState=1;
}
}

if(gameState===1){
  textSize(40);
  stroke("red");
  text("game over",displayWidth/2,displayHeight/2);

  hero.destroy();
  enemyGroup.destroyEach();


}

  drawSprites();
}

function spawnEnemys(){
  if (frameCount%100===0){
      enemy=createSprite(0,0,10,10);
      enemy.x=Math.round(random(50,displayWidth-50));
      enemy.y=Math.round(random(50,displayHeight-50));

      var r=Math.round(random(1,3));
      switch(r){
        case 1:enemy.addImage(bruseImg);
        break;
        case 2:enemy.addImage(danielImg);
        break;
        case 3:enemy.addImage(davidImg);
        break;

      }
      enemy.scale=0.5;
      enemy.velocityX=Math.round(random(-5,5));
      enemy.velocityY=Math.round(random(-5,5));

      enemyGroup.add(enemy);
    }

}

function spawnCoins(){
  if(frameCount%100===0){
    coin=createSprite(0,0,20,20);
    coin.x=Math.round(random(50,displayWidth-50));
    coin.y=Math.round(random(50,displayHeight-50));

   coin.addImage(coinImg);
   coin.scale=(0.2);

   coinGroup.add(coin);
  }
}

function spawnEnemy2(){
  if (frameCount%100===0){
      enemy2=createSprite(0,0,10,10);
      enemy2.x=Math.round(random(50,displayWidth-50));
      enemy2.y=Math.round(random(50,displayHeight-50));

      var r=Math.round(random(1,3));
      switch(r){
        case 1:enemy2.addImage(hulkImg);
        break;
        case 2:enemy2.addImage(venomImg);
        break;
        case 3:enemy2.addImage(thanosImg);
        break;

      }
      enemy2.scale=0.5;
      enemy2.velocityX=Math.round(random(-5,5));
      enemy2.velocityY=Math.round(random(-5,5));

      enemyGroup2.add(enemy);
    }

}


