class Dustbin{
    constructor(){
        var options={
            isStatic:true,
            friction:0.5
        }
        this.leftBody=Bodies.rectangle(900, 630, 20, 155, options);
        this.rightBody=Bodies.rectangle(1100, 630, 20, 155, options);
        this.bottomBody=Bodies.rectangle(1000, 670, 200, 20, options);

        this.image = loadImage("dustbingreen.png");

        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
        World.add(world,this.bottomBody);
    }
    display(){
        var pos = this.bottomBody.position;

        //rectMode(CENTER);
       // fill("red");
        //rect(900, 630, 20, 130);
        //rect(1100, 630, 20, 130);
        //rect(1000, 670, 200, 20);
        imageMode(CENTER)
        image(this.image,pos.x,pos.y-100,200, 250)

    }
}