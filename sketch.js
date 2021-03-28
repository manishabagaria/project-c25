const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,ground,paper;

function preload()
{
	binImg=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 600);
	binsprite = createSprite(550,500,20,20)
	binsprite.addImage(binImg)
	binsprite.scale=0.5
	

	engine = Engine.create();
	world = engine.world;
		var ground_options={
		isStatic:true
	}

    paper=new Paper(100,575,50,50)
	fill("brown")
    ground=Bodies.rectangle(400,590,800,20,ground_options);
//fill("0")
	
	/*box1= new Box(500,580,195,20);
	box2= new Box(425,550,20,115);
	box3 = new Box(620,550,20,115);*/

	
	//box3 = new Box(620,522,180,200);
	World.add(world,ground);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("blue");

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  drawSprites();
  /*box1.display();
  box2.display();
  box3.display();*/
  paper.display();
}
function keyPressed(){
 if(keyCode===UP_ARROW){
  	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
 }
}