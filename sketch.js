const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;



function preload() {
     boyImage= loadImage("boy.png");
     treeImage= loadImage("tree.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,590,1200,20);

    
   
    mango1 = new Mango(850,300,40);
    mango2 = new Mango(700,360,40);
  

    mango3 = new Mango(800,350,40);
    mango4 = new Mango(750,300,40);
 

    

    mango5 = new Mango(900,360,40);

   
    stoneObj = new Stone(230,470,40);

    sling= new Rope(stoneObj.body,{x:230,y:480});

   

}

function draw(){
    background("white");
   
    Engine.update(engine);
    
    image (treeImage,800,400,350,400);

    ground.display();

  
    mango1.display();
    detectcollision(stoneObj,mango1);
  
    mango2.display();
    detectcollision(stoneObj,mango2);
   
    mango3.display();
    detectcollision(stoneObj,mango3);

    mango4.display();
    detectcollision(stoneObj,mango4);
   
    mango5.display();
    detectcollision(stoneObj,mango5);
    
    
    sling.display();

    image (boyImage,300,530,250,200);
    
    
    stoneObj.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});


}
function mouseReleased(){
    sling.fly();
}
function detectcollision(body1,body2){
      mangoBodyPosition=body1.body.position
      stoneBodyPosition=body2.body.position
      

      var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
     if(distance<=body1.r+body2.r){
    Matter.Body.setStatic(body1.body,false);
}    }