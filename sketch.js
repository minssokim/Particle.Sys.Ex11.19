let particles = [];
let waveOffset = 0;
let bubbles = [];

function setup() {
  createCanvas(600, 400);

  // 파티클 생성
  for (let x = 0; x < width; x += 20) {
    for (let y = 0; y < height; y += 30) {
      particles.push(new Particle(x, y));
    }
  }
  createBubbles();
}

function draw() {
  background(30, 30, 50); // 어두운 배경

  waveOffset += 0.05; // 전체 파도 움직임

  particles.forEach((particle) => {
    particle.update(mouseX, mouseY); // 마우스에 따라 움직임 업데이트
    particle.show(); // 파티클 그리기
  });
  drawRefraction();
  drawBubbles();
}

function drawRefraction() {
  noFill();
  stroke(255, 50); // 희미한 굴절 효과
  strokeWeight(2);
  for (let i = 0; i < 5; i++) {
    let xOffset = sin(frameCount * 0.01 + i) * 20;
    ellipse(width / 2 + xOffset, height / 2, 300 - i * 50);
  }
}

function createBubbles() {
  for (let i = 0; i < 20; i++) {
    bubbles.push(new Bubble(random(width), random(height)));
  }
}

function drawBubbles() {
  bubbles.forEach((bubble) => {
    bubble.update();
    bubble.show();
  });
}