class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        
        


        World.add(world, this.sling);
    }

   

    display(){
        
         if(this.sling.bodyA!==null){  
              var pointA = this.sling.bodyA.position;
              var pointB = this.pointB;
         
            strokeWeight(7);
            stroke(48,22,8);
            line(pointA.x+10,pointA.y,pointB.x,pointB.y)

         }
            
        
    }
    fly(){
        this.sling.bodyA = null;
        
}
attach(body){
    this.sling.bodyA=body;
}
    
}