const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground,leftwall,rightwall,leftroad,rightroad;
var bridge,joinPoint,stone

var stones=[]

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
ground=new Base(windowWidth/2,windowHeight,2000,100)
leftwall=new Base(0,windowHeight/2,60,2000)
rightwall=new Base(windowWidth,windowHeight/2,90,2000)
leftroad=new Base(100,windowHeight/2,200,50)
rightroad=new Base(windowWidth-100,windowHeight/2,200,50)
 joinPoint=new Base(width-210,height/2+10,40,20)
 bridge=new Bridge(26,{x:width/2-630,y:height/2})



Matter.Composite.add(bridge.body,joinPoint);
jointLink=new Link(bridge,joinPoint);

for(var i=0;i<=8;i++){

  var x=random(width/2-200,width/2+300);
  var y=random(-10,140);
  var stone=new Stone(x,y,80,80);
  stones.push(stone);
  }

}

function draw() {
  background(51);
  ground.show()



  leftwall.show()
  rightwall.show()
  leftroad.show()
  rightroad.show()
  bridge.show()
  for (var stone of stones){
    stone.show()
  }
  
  Engine.update(engine);

}
