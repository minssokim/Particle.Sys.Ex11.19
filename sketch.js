let particles = [];
let waveOffset = 0;

function setup() {
  createCanvas(600, 400);

  // 파티클 생성
  for (let x = 0; x < width; x += 20) {
    for (let y = 0; y < height; y += 30) {
      particles.push(new Particle(x, y));
    }
  }
}

function draw() {
  background(30, 30, 50); // 어두운 배경

  waveOffset += 0.05; // 전체 파도 움직임

  particles.forEach((particle) => {
    particle.update(mouseX, mouseY); // 마우스에 따라 움직임 업데이트
    particle.show(); // 파티클 그리기
  });
}
