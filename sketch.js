let particleSystem;

function setup() {
  createCanvas(800, 400);
  particleSystem = new ParticleSystem();
}

function draw() {
  background(30, 30, 50, 50); // 투명 배경으로 흔적 남기기

  // 바람 방향 (마우스 위치에 따라 변화)
  let windForce = createVector(map(mouseX, 0, width, -0.5, 0.5), 0);

  // 파티클 시스템 업데이트 및 렌더링
  particleSystem.applyForce(windForce);
  particleSystem.update();
  particleSystem.show();
}