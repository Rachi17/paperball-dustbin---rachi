class Paper {
    constructor(x, y) {
      var options = {
         isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
     width = width;
      height = height;
      
      World.add(world, this.body);
    }
  display(){
       
        var pos =this.body.position;
        
     // var angle = this.body.angle;
      push();
      //rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(pos.x,pos.y,width, height);
      pop();
    }
};
