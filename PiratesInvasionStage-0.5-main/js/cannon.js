class cannon{
    constructor(x,y,width,hieght,angle){
this.x = x
this.y = y
this.width = width
this.hieght = hieght
this.angle = angle
    }
display(){
    fill("black")
    if (keyIsDown("right")){
            this.angle +=0.03
    }
    arc(this.x,this.y,this.width,this.hieght,PI,TWO_PI)
    rect(this.x,this.y-150,this.width-100,this.hieght-50)
    
}
    
}