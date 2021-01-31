const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here



}

function setup() {
  createCanvas(1500, 770);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
  hero = new Hero(250,350,380,140);
  
  ground = new Ground(100,650,2200,10);
  rope= new Rope(hero.body,{x:270,y:100});
  box = new Box(700,100,70,70)
  box1 = new Box(700, 100, 70, 70); 
  box2 = new Box(700, 100, 70, 70); 
  box3 = new Box(700, 100, 70, 70); 
  box4 = new Box(700, 100, 70, 70); 
  box5 = new Box(700, 100, 70, 70); 
  box6 = new Box(700, 100, 70, 70); 
  box7 = new Box(600, 100, 70, 70); 
  box8 = new Box(600, 100, 70, 70); 
  box9 = new Box(600, 100, 70, 70); 
  box10 = new Box(600, 100, 70, 70); 
  box11 = new Box(600, 100, 70, 70); 
  box12 = new Box(600, 100, 70, 70);
   box13 = new Box(500, 100, 70, 70); 
   box14 = new Box(500, 100, 70, 70); 
   box15 = new Box(500, 100, 70, 70); 
   box16 = new Box(500, 100, 70, 70);
    box17 = new Box(500, 100, 70, 70); 
    box18 = new Box(500, 100, 70, 70); 
    box19 = new Box(500, 100, 70, 70); 
    box20 = new Box(600, 100, 70, 70); 
    monster = new Monster(950,400,260,260);
    bg = new Ground2(750,370,1500,770)

    

    //ball = new Ball(200, 200, 80, 80); 

}

function draw() {
  Engine.update(engine);
  
  background("");
 bg.display();
  hero.display();
  ground.display();
  monster.display();
  rope.display();
  box.display();
  box1.display(); 
box2.display(); 
box3.display(); 
box4.display() 
box5.display() 
box6.display() 
box7.display() 
box8.display() 
box9.display() 
box10.display()
 box11.display() 
 box12.display() 
 box13.display() 
 box14.display() 
 box15.display() 
 box16.display() 
 box17.display() 
 box18.display() 
 box19.display() 
 box20.display() 

  //drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

