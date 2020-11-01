var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,backgroundImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter-image.gif")
	packageIMG=loadImage("package.png")
	backgroundImg=loadImage("background_img.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(100,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.27

	helicopterSprite=createSprite(width/2, 80, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.8

	// groundSprite=createSprite(width/2, height-35, width,10);
	// groundSprite.shapeColor=color("#EAD380")
    // groundSprite.opacity=0.1;


	engine = Engine.create();
	world = engine.world;
	 
	packageBody = Bodies.circle(width/2 , 91, 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	
 
	//Create a Ground
	 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 

	 World.add(world, ground);
 
	 console.log(ground);

	 var bounceOff={
		 restitution:1
	 }

	 ball=Bodies.circle(100,100,50,bounceOff);
	 World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(backgroundImg);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  
 
  ellipseMode(CENTER);
  ellipse(packageSprite.x,packageSprite.y,5,5);
  
  drawSprites();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	 Matter.Body.setStatic(packageBody,false);
  }
}



