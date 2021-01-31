class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.4,
            //length:50
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
    }
    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.pointB
        strokeWeight(5)
        //line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
