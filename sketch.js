var car,wall;
var speed,weight;
var car1,car2,car3;
var wall1,wall2,wall3;

function setup() {
  createCanvas(1600,400);
 
  car1=createSprite(50,350,50,50);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,100);
  wall1=createSprite(1500,350,60,100);
}

  
  

function draw() {
  //walll.color(80,80,80);
  background(255,255,255);
  
  car.velocityX= 10; 
  car1.velocityX= 11; 



  speed=random(55,90);
  weight=random(400,1500);

  
 

  if(wall.x-car.x<(car.width+wall.width)/2 ){
    car.velocityX = 0;
  var deformation=0.5*weight*speed*speed/22500;
  if(deformation>180){

  car.shapeColor=color(255,0,0);
  } 
  if(deformation>180 && deformation>100){

   car.shapeColor=color(230,230,0);
}
  if(deformation<100){

  car.shapeColor=color(0,255,0);
  }
  }


  if(wall1.x-car1.x<(car1.width+wall1.width)/2 ){
    car1.velocityX = 0;
  var deformation=0.5*weight*speed*speed/22500;
  if(deformation>180){

  car1.shapeColor=color(255,0,0);
  } 
  if(deformation>180 && deformation>100){

   car1.shapeColor=color(230,230,0);
}
  if(deformation<100){

  car1.shapeColor=color(0,255,0);
  }
  }
  drawSprites();
}