// A simple Particle class

class Particle {
    constructor(position) {
        this.acceleration = createVector(0, 0);
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(random(0.5,2))
        this.position = position.copy();
        this.lifespan = 255;
        this.w = 4;
    }

    run() {
        this.update();
        this.display();
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.lifespan -= 6;

        this.acceleration.set(0, 0);
    }

    display() {
        stroke(200, this.lifespan);
        strokeWeight(2);
        fill(127, this.lifespan);
        ellipse(this.position.x, this.position.y, this.w, this.w);
    }

    isDead() {
        return this.lifespan < 0;
    }
}

