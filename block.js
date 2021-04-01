class Block
{
    constructor(x,y)
    {
        var options = 
        {
            'friction' : 0.6,
            'restitution' :1,
            'density' : 1
        }

        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 60;
        this.body = Bodies.rectangle(x,y,60,60);
        World.add(world,this.body);

    }

    display()
    {
        var position = this.body.position;
        push();
        translate(position.x, position.y);
        rotate(this.body.angle);
        
        fill(246,212,38);
        stroke(255,76,56);
        strokeWeight(3);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();






    }


















}