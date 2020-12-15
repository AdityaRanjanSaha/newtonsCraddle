class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options ={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness: 0.05,
        
        }
        this.rope1 = Constraint.create(options);
        World.add(world,this.rope1);
    }
    display(){
     var pointA=this.rope1.bodyA.position;
     var xyz=this.rope1.bodyB.position;

     var px = xyz.x+this.offsetX;
     var py = xyz.y+this.offsetY;

     strokeWeight(5);
     line(pointA.x,pointA.y,px,py);

    }
}