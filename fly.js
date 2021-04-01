class Fly
{
    constructor(bodyA,pointB)
    {
    
        var options = 
        {
            bodyA : bodyA,
            pointB: pointB,
            //length : 10,
            stiffness: 0.009
        }

        this.fly = Constraint.create(options)
         
        World.add(world,this.fly);

    }
    
    display()
    {
        if(this.fly.bodyA)
        {
            var PointA = this.fly.bodyA.position;
            var PointB = this.fly.pointB;

            strokeWeight(0);
            line(PointA.x,PointA.y,PointB.x,PointB.y);
    
        }
    }
    
    
    
    
    
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    