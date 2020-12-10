class Rope{
    constructor(body1,point){
        var options={
            bodyA:body1,
            pointB:point,
            length:10,
            stiffness:0.04
        }
        console.log(options);
        this.sling=Constraint.create(options);
        
        World.add(world,this.sling);
       
    }
    fly(){
this.sling.bodyA=null;

    }
    display(){
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}
