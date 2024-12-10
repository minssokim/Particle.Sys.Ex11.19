// Particle 클래스
class Particle {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.vel = createVector(random(-1, 1), random(-1, 1));
      this.acc = createVector(0, 0);
      this.maxSpeed = 2; // 최대 속도
    }
  
    applyForce(force) {
      this.acc.add(force); // 힘을 가속도에 추가
    }
  
    update() {
      this.vel.add(this.acc);
      this.vel.limit(this.maxSpeed); // 속도 제한
      this.pos.add(this.vel);
      this.acc.mult(0); // 가속도 초기화
    }
  
    edges() {
      // 화면 경계에서 입자 위치를 반대편으로 이동
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;
    }
  
    show() {
      noStroke();
      fill(200, 200, 255, 150);
      ellipse(this.pos.x, this.pos.y, 4);
    }
  }
  