class boy {
    constructor(x,y,width,height){
        var options={
        restituation :0.3,
        friction : 0.5,
        density : 1.2
        }
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.body = Bodies.circle(this.x,this. y, options);
        this.image = loadImage("walking_1.png")
        World.add(world,this.body);
            }
        display(){
        var paperpos = this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        }
        }