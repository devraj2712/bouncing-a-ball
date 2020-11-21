const Engine =Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;
var abc,world,object,ball;

function setup() {
  createCanvas(400,400);
  abc =Engine.create();
  world=abc.world;
  var option={
    isStatic:true
  }
  object=Bodies.rectangle(200,390,200,20,option);
  World.add(world,object);
  var balloption={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,balloption);
  World.add(world,ball);

}

function draw() {
  background(255,255,255); 
  Engine.update(abc);
  rect(object.position.x,object.position.y,50,50);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}