class Drop{
    constructor(x,y){
        this.x = x;
        this.y = y;
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.drop = Bodies.circle(x,y,3, options)
        World.add(world,this.drop)
        this.radius = 10
        this.image = loadImage("drop.png");
    }

    showDrop(){
        /* fill("blue")
        ellipseMode(RADIUS)
        ellipse(this.drop.position.x,this.drop.position.y,this.radius,this.radius) */
        imageMode(CENTER)
        image(this.image,this.drop.position.x,this.drop.position.y,this.radius,this.radius)

    }

    fall(){
        if(this.drop.position.y > height){
            Matter.Body.setPosition(this.drop, {x: random(0,width),y:random(0,height)})
        }
    }
}