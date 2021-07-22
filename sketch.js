
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

var ground;

var top_wall;
var ball;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  var ground_options ={
    isStatic: true
  };
 
 
/* 
 ground = Bodies.rectangle(0,400,400,20,ground_options);
 World.add(world,ground); */
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
   
  
  

  //ground =new Ground(200,390,400,20);
 
 top_wall = new Ground(50,370,80,30);
 top_wall1 = new Ground(150,370,80,30);
  top_wall2 = new Ground(250,370,80,30);
  top_wall3 = new Ground(350,370,80,30);

  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
 // rect(ground.position.x,ground.position.y,400,20);
    top_wall.show();
 top_wall1.show();
top_wall2.show();
  top_wall3.show();
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  


