const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var piso;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    piso = new Sueloycaja(200, 385 , 400 , 30)
    box2 = new Box(180 , 100 , 150 , 50 )
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    piso.display();
    box2.display();
   
}