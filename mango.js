class Mango  {
  constructor(x, y,r){
    var options={
      isStatic:true,
      restitution:0,
      friction:1
    }
    this.x=x;
    this.y=y;
    this.r=r;

    this.body=Bodies.circle(this.x,this.y,this.r,options);
    this.image = loadImage("mango.png");
    World.add(world,this.body);
  }
display(){
  imageMode (CENTER);
  image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
}
}
