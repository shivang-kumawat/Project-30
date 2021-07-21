class Polygon{
    constructor(x,y){
    var options = {
        isStatic : false,
        'restitution': 0.4,
        'friction':0,
        'density':0.5
    }
    this.body = Bodies.rectangle(x,y,40,40 ,options);
    
    World.add(world,this.body);
    this.image = loadImage("polygon.png");
    }
    
    
    display(){
    
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    
    image(this.image,0,0,40,40);
    
    pop();
    
    }
  };