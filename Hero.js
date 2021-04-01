class Hero
{

    constructor(x,y)
    {   
        var options =
         {
            'density' : 1,
            'frictionAir' : 1,
            'restitution' : 0.8
            
        }
        this.x = x;
        this.y = y;
        this.radius = 55;
        this.image = loadImage("superhero1.png")
        this.body = Bodies.circle(x,y,55,options);
        World.add(world,this.body);








    }

    display()
    {   
        var position = this.body.position;

        push();
        translate(position.x,position.y);
        rotate(this.body.angle);

        imageMode(CENTER)
        image(this.image,0,0,290,160);
        pop();



    }














}