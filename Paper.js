class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
			restitution:1,
            friction:0,
            frictionAir: 0,
			density:0.8,
            inertia: Infinity
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        World.add(world,this.body,)
    }
     Display(){
        ellipseMode(CENTER)
        fill(255,0,255)
        ellipse(this.body.position.x,this.body.position.y,this.radius*2)
        //var paperpos=this.body.position;		

			//push()
			//translate(paperpos.x, paperpos.y);
			//rectMode(CENTER)
			//strokeWeight(3);
			//fill(255,0,255)
			//ellipse(0,0,this.r, this.r);
			//pop()
     }
    }