var world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
var drops=[]
var ground;
var maxDrops=100;
var umbrella,dropsG;


function preload(){
    
}

function setup(){
   createCanvas(400,700)
   engine = Engine.create();
	world = engine.world;
    ground=new Ground(200,height,400,10)
    umbrella=new Umbrella(200,500)
    dropsG=new Drop(200,0)
    for (var k=0;k<maxDrops;k++ ){
        if (frameCount%10===0){
        drops.push(new Drop(random(1,400),0))
        
        }
    }
    
}

function draw(){
    background(0)
    Engine.update(engine)
    umbrella.display()
   // drops.update()
   dropsG.display()
   dropsG.update()
 
    
    drawSprites()
}   

