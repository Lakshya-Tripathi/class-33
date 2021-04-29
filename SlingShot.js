class SlingShot{ 
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.02,
            length:10
        }
    this.slingShot=Constraint.create(options);
    this.sling1 = loadImage("sprites/sling1.png")
     this.sling2 = loadImage("sprites/sling2.png")
      this.sling3 = loadImage("sprites/sling3.png")
        
        World.add(world,this.slingShot)
    }
   
   fly(){
       this.slingShot.bodyA = null
   }
   attach(body){
    this.slingShot.bodyA = body
   }
    display(){
        image(this.sling1,200,20)
         image(this.sling2,170,20)
       
        if(this.slingShot.bodyA){

            var pointA = this.slingShot.bodyA.position
            var pointB = this.slingShot.pointB
            push()
            if(pointA.x<220){
                strokeWeight(5)
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y)
                image(this.sling3,pointA.x-25,pointA.y-10,15,30)
            }
            else{
                strokeWeight(5)
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y)
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y)
                image(this.sling3,pointA.x+25,pointA.y-10,15,30)
            }
            pop()
           
       
        }
        
    }
}