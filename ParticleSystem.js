class ParticleSystem {
  constructor() {
    this.particles = [];
    for (let i = 0; i < 200; i++) {
      this.particles.push(new Particle(random(width), random(height)));
    }
  }

  applyForce(force) {
    // 모든 파티클에 힘 적용
    for (let p of this.particles) {
      p.applyForce(force);
    }
  }

  update() {
    // 모든 파티클 업데이트
    for (let p of this.particles) {
      p.update();
      p.edges();
    }
  }

  show() {
    // 모든 파티클 렌더링
    for (let p of this.particles) {
      p.show();
    }
  }
}

