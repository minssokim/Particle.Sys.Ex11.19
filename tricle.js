class tricle extends Particle{
 constructor(position){
 super(position);
}
 display() {
    stroke(200,this.lifespan);
    strokeWeight(2);
    fill(100,this.lifespan);
    rect(this.position.x, this.position.y, this.w*7, this.w*15)
 }
}