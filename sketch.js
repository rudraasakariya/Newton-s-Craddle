
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function preload() {
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,200,600,30);

	bob1 = new Bob(200,500,60);
	bob2 = new Bob(300,500,60);
	bob3 = new Bob(400,500,60);
	bob4 = new Bob(500,500,60);
	bob5 = new Bob(600,500,60);

	bobdiameter=40;

	rope1 = new Rope(bob1.body,roof.body,-bobdiameter*5,0);
	rope2 = new Rope(bob2.body,roof.body,-bobdiameter*3,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,bobdiameter*3,0);
	rope5 = new Rope(bob5.body,roof.body,bobdiameter*5,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,0);

  roof.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function mouseDragged(){
	//Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
	//Matter.Body.setPosition(bob2.body, {x: mouseX , y: mouseY});
	//Matter.Body.setPosition(bob3.body, {x: mouseX , y: mouseY});
	//Matter.Body.setPosition(bob4.body, {x: mouseX , y: mouseY});
    Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});
}

function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}