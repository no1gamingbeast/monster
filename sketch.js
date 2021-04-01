const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgImg;
var ground;
var hero;
var fly;
var fly2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11,block12, block13, block14, block15, block16, block17, block18, block19, block20;
var monster;

function preload()
{
//preload the images here
  bgImg = loadImage("bg.jpg")

}

function setup() 
{
  createCanvas(windowWidth,windowHeight);
  
  engine = Engine.create();
  world = engine.world;

  // create sprites here
  ground = new Ground(470,560,1450,17);

  hero = new Hero(300,250);

  fly = new Fly(hero.body,{x : 300, y : 60});

  //bLock1 = new Block(900, 100, 70, 70);
  block2 = new Block(900, 100);
  block3 = new Block(900, 100);
  block4 = new Block(900, 100);
  block5 = new Block(900, 100);
  block6 = new Block(900, 100);
  block7 = new Block(800, 100);
  block8 = new Block(800, 100);
  block9 = new Block(800, 100);
  block10 = new Block(800, 100);
  block11 = new Block(800, 100);
  block12 = new Block(800, 100);
  block13 = new Block(800, 100);
  block14 = new Block(800, 100);
  block15 = new Block(700, 100);
  block16 = new Block(700, 100);
  block17 = new Block(700, 100);
  block18 = new Block(700, 100);
  block19 = new Block(700, 100);
  block20 = new Block(700, 100);
  block22 = new Block(600, 100);
  block23 = new Block(600, 100);
  block24 = new Block(600, 100);
  block25 = new Block(600, 100);
  block21 = new Block(600, 100);
  block26 = new Block(600, 100);
  block27 = new Block(600, 100);
  
  monster = new Monster(1050,480)
  
}

function draw() 
{
  Engine.update(engine);
 
  background(bgImg);

  ground.display();

 
  fly.display();

  //block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();

  hero.display();

  monster.display();

}

function mouseDragged()
{

  Matter.Body.setPosition(hero.body,{x : mouseX, y : mouseY});

}
