class ParticleSystem {
    constructor(position) {
        this.origin = position.copy();
        this.particles = [];
        this.emitters=[];
    }

    addParticle() {
        this.particles.push(new Particle(this.origin));
    }

    applyGravity(g) {
        this.applyForce(g);
    }

    applyForce(force) {
        for (let p of this.particles) {
            p.applyForce(force);
        }
    }

    run() {
        for (let i = this.particles.length-1; i >= 0; i--) {
            let p = this.particles[i];
            p.run();
            if (p.isDead()) {
              this.particles.splice(i, 1);
            }
          }
    }
}
class Attractor {
    constructor() {
      this.position = createVector(width / 2, height / 2);
      this.mass = 20;
    }
  
    attract(mover) {
      let force = p5.Vector.sub(this.position, mover.position);
      let distance = force.mag();
      distance = constrain(distance, 5, 25);
      let strength = (G * this.mass * mover.mass) / (distance * distance);
      force.setMag(strength);
      return force;
    }
  
    show() {
      stroke(0);
      fill(175, 200);
      circle(this.position.x, this.position.y, this.mass * 2);
    }
  }