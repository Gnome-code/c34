var bob1, bob2, bob3, bob4, bob5, rope1, rope2, rope3, rope4, rope5, Roof;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Roof = new roof(400, 50, 200, 20)
	bob1 = new Paper(320, 350, 20)
	bob2 = new Paper(360, 350, 20)
	bob3 = new Paper(400, 350, 20)
	bob4 = new Paper(440, 350, 20)
	bob5 = new Paper(480, 350, 20)
	rope1 = new Rope(bob1.body,Roof.body,-80,0)
	rope2 = new Rope(bob2.body,Roof.body, -40,0)
	rope3 = new Rope(bob3.body,Roof.body, 0,0)
	rope4 = new Rope(bob4.body,Roof.body, 40,0)
	rope5 = new Rope(bob5.body,Roof.body, 80,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  
  drawSprites();
  Roof.Display();
  rope1.Display();
  rope2.Display();
  rope3.Display();
  rope4.Display();
  rope5.Display();
  bob1.Display();
  bob2.Display();
  bob3.Display();
  bob4.Display();
  bob5.Display();

}



function keyPressed(){
if(keyCode === UP_ARROW)
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:-25});

}