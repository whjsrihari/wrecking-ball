class Ball{
    constructor(x,y,width,height,angle){
      var options={
        'frictionAir':0.005,
        'density':1
      }
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.width=width
      this.height=height
      World.add(world,this.body)
    }
    display(){
      var p=this.body.position
      var a=this.body.angle 
      push()
      translate(p.x,p.y)
      rotate(a)
      ellipse(0,0,this.width,this.height)
      pop()
    }
  }
  