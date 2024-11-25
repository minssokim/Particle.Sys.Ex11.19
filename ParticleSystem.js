class ParticleSystem {
    constructor() {
      this.particles = []; // 파티클 리스트
      this.bubbles = []; // 기포 리스트
      this.waveOffset = 0; // 파도 움직임 오프셋
    }
  
    createParticles() {
      for (let x = 0; x < width; x += 20) {
        for (let y = 0; y < height; y += 30) {
          this.particles.push(new Particle(x, y));
        }
      }
    }
  
    createBubbles() {
      for (let i = 0; i < 20; i++) {
        this.bubbles.push(new Bubble(random(width), random(height)));
      }
    }
  
    update(mouseX, mouseY) {
      this.waveOffset += 0.05; // 파도 움직임 업데이트
      this.particles.forEach((particle) => {
        particle.update(mouseX, mouseY, this.waveOffset);
      });
      this.bubbles.forEach((bubble) => {
        bubble.update();
      });
    }
  
    show() {
      this.particles.forEach((particle) => {
        particle.show();
      });
      this.bubbles.forEach((bubble) => {
        bubble.show();
      });
    }
  
    drawBackgroundLight() {
      noFill();
      stroke(255, 255, 255, 20); // 연한 흰색 선
      strokeWeight(1);
      for (let i = 0; i < 10; i++) {
        let offset = sin(frameCount * 0.02 + i) * 20; // 시간에 따른 흔들림
        beginShape();
        for (let x = 0; x <= width; x += 20) {
          let y = height / 2 + sin(frameCount * 0.02 + x * 0.05) * 50 + offset;
          vertex(x, y);
        }
        endShape();
      }
    }
  
    drawGradientBackground() {
      for (let y = 0; y < height; y++) {
        let c = lerpColor(color(20, 30, 50), color(10, 10, 30), y / height);
        stroke(c);
        line(0, y, width, y);
      }
    }
  }