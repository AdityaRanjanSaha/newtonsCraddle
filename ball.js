class Ball{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution:1,
            friction:0.5,
            density:1.2
        }
        
        this.body = Matter.Bodies.circle(x ,y, r/2 ,options);
        this.x = x;
        this.y = y;
        this.r = r;
        

        Matter.World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        fill("red");
        translate(pos.x, pos.y);
        circle(0,0, this.r );
        pop();
    }
}