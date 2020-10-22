
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paperball;
var dustbin1, dustbin2, dustbin33;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperball = new Paper(50,50,0,0);
	ground = new Ground(600,height,1200,20);
	dustbin1 = new Dustbin(600,600,10,50);

	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(125);


  paperball.display();
  ground.display();
  dustbin1.display();

  keyPressed();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paperObyect.body,paperObject.body.position,{x:85,y:-85});


	}

}



