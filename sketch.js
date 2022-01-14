
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world , engine;

var ground;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;

    var ball_option = {
		isStatic : false,
		restitution:1.2,
		friction:4,
		density:1.5
	}

	//Create the Bodies Here.
    ball = Bodies.circle(400,200,15,ball_option);
	World.add(world,ball);
	console.log(ball);

	

    ellipseMode(CENTER);
	//ground = new Ground(400,680,800,20);
	//World.add(world,ground);
	ground = new Ground(400,640,800,20);

	wall   = new Ground(600,555,10,150)

	wall2  = new Ground(750,380,10,500)
	Engine.run(engine);
	//rectMode(CENTER);

	
}


function draw() {

  background(51);

  //if(keyIsDown("space")){
	
	//}

 ground.show();
 wall.show();
 wall2.show();
  ellipse(ball.position.x,ball.position.y,30,30);

 // ground.show();
 keypressed();
  drawSprites();
}

function keypressed (){
	if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(ball,{x:0,y:0},{x:0.55,y:0.55});
	}
}

