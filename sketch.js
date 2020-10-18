
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  

	paper=new Paper(100, 200, 30);
	ground=new Ground(800, 680, 1600, 20);
	dustbin = new Dustbin();
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paper.display();
  ground.display();
  dustbin.display();

  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:220,y:-120});

	}
}



