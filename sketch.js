
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine; //constante para mecanismo de fisica
let world; //constante para o nosso mudno
var angle=60; //angulo inicial vai ser 60
var ground; //objeto do chão base
var fan,fan1,fan2,fan3; //objetos para a rotação
var ball; //objeto da bola
var btn2; //objeto para o botão
function setup() {
  createCanvas(400,400); //tela 400 por 400
  engine = Engine.create(); //criação do mecanismo para o programa
  world = engine.world; //adição do mecanismo para o mundo
   var ball_options = { //opção para a bola
    restitution: 0.95, //elasticidade
  }
  var ground_options ={ // opçao para o chao
    isStatic: true //estatico
  };
 ground = Bodies.rectangle(0,400,400,20,ground_options); //cria o chao para a bola cair
 World.add(world,ground); //adiciona o chao ao mundo
  btn2 = createImg('up.png'); //imagem botao
  btn2.position(20,30); //posiçao botao
  btn2.size(50,50); //tamanho do botao
  btn2.mouseClicked(vForce); //quando o mouse é clica, a funçao da força vertical é ativada
  fan = new Ground(50,370,50,30); //cria o corpo que rotaciona usando a classe
  fan1 = new Ground(150,370,50,30); //cria o corpo que rotaciona usando a classe
  fan2 = new Ground(250,370,50,30); //cria o corpo que rotaciona usando a classe
  fan3 = new Ground(350,370,50,30); //cria o corpo que rotaciona usando a classe
  ball = Bodies.circle(200,200,20,ball_options); //cria o corpo da bola
  World.add(world,ball); //adiciona a bola ao mundo
  rectMode(CENTER); //define como criação o centro do retangulo
  ellipseMode(RADIUS); //utiliza a medida de radianos
}


function draw() 
{
  background(51);
  Engine.update(engine); // mecanismo de fisica sendo atualizado a todo momento  
  ellipse(ball.position.x,ball.position.y,20); //desenho da bola na tela
  rect(ground.position.x,ground.position.y,750,20); //desenho do chão na tela
  fan.show(); //exibe o corpo
  fan1.show(); //exibe o corpo
  fan2.show(); //exibe o corpo
  fan3.show(); //exibe o corpo
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05}); // (corpo, {posição inicial}, {velocidade aplicada em x e y})
}
