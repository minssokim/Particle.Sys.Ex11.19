// A simple Particle class
class Particle {
    constructor(x, y) {
      this.pos = createVector(x, y); // 초기 위치
      this.baseY = y; // 기준 Y 위치
      this.size = random(5, 15); // 파티클 크기
      this.color = color(random(50, 150), random(150, 255), random(200, 255), 200); // 색상
      this.offset = random(0, TWO_PI); // 개별 파티클의 위상 차이
      this.amp = random(20, 50); // 진폭
      this.freq = random(0.02, 0.1); // 주파수
    }

    update(mouseX, mouseY) {
        // 마우스와의 거리 계산
        let distance = dist(this.pos.x, this.pos.y, mouseX, mouseY);
    
        // 사인파 기반 움직임
        let wave = sin(waveOffset + this.offset) * this.amp;
        let attraction = map(distance, 0, width / 2, 50, 0); // 마우스 근처로 끌림
    
        // 마우스에 가까울수록 강하게 반응
        if (distance < width / 2) {
          this.pos.x += (mouseX - this.pos.x) * 0.02;
          this.pos.y += (mouseY - this.baseY) * 0.02 + wave;
        } else {
          this.pos.y = this.baseY + wave; // 멀리 있으면 기본 파도 움직임
        }
      }
    
      // 파티클 그리기
      show() {
        noStroke();
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.size);
      }
      update(mouseX, mouseY) {
        let distance = dist(this.pos.x, this.pos.y, mouseX, mouseY);
        let attraction = map(distance, 0, width / 2, 1, 0);
      
        if (distance < width / 2) {
          this.pos.x += (mouseX - this.pos.x) * 0.02 * attraction;
          this.pos.y += (mouseY - this.pos.y) * 0.02 * attraction;
        }
      
        // 물속처럼 느린 감속
        this.pos.x *= 0.99; 
        this.pos.y *= 0.99;
      
      }
    
    }
  
    class Bubble {
        constructor(x, y) {
          this.pos = createVector(x, y);
          this.size = random(5, 15);
          this.speed = random(1, 3);
        }
      
        update() {
          this.pos.y -= this.speed; // 위로 이동
          if (this.pos.y < 0) this.pos.y = height + random(50); // 화면 위를 넘어가면 재생성
        }
      
        show() {
          noStroke();
          fill(255, 150); // 반투명 흰색
          ellipse(this.pos.x, this.pos.y, this.size);
        }
      }
      
