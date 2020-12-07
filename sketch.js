const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function preload() {
 polygon_img=loadImage("polygon.png")

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground(600,550,1200,20);
   
    base= new Ground(450,430,160,10);
   
    block1= new Box(390,410,20,30);
    block2= new Box(410,410,20,30);
    block3= new Box(430,410,20,30);
    block4= new Box(450,410,20,30);
    block5= new Box(470,410,20,30);
    block6= new Box(490,410,20,30);
    block7= new Box(510,410,20,30);
   
    block8= new Box2(415,390,20,30);
    block9= new Box2(435,390,20,30);
    block10= new Box2(455,390,20,30);
    block11= new Box2(475,390,20,30);
    block12= new Box2(495,390,20,30);
   
    block13= new Box3(440,370,20,30);
    block14= new Box3(460,370,20,30);
    block15= new Box3(480,370,20,30);

    block16= new Box4(460,350,20,30);

    //ploygon= Bodies.circles(50,200,20);
    World.add(world,polygon)

    slingShot= new SlingShot(this.polygon,{x:100,y:200});
}

function draw(){
    background("black");
    Engine.update(engine);
    
    
    ground.display();
   base.display();
   block1.display();
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

   image(CENTER)
   image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}