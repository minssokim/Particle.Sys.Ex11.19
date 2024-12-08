let system;
let attractor;

let systems = [];

let g; // gravity

let emitters=[];
function mouseClicked(){
  emitters.push(new Emitter(mouseX,mouseY));
}

function setup() {
  createCanvas(720, 400);
  // system = new ParticleSystem(createVector(width / 2, 50));
  g = createVector(0, 0.05);
  wind = createVector(0.03, -0.01);
  attractor = new Attractor();
}

function draw() {
  background(51);
  rule()
  let force = attractor.attract(mover);
  mover.applyForce(force);

  for (let emitter of emitters){
    emitter.emit(5);
    emitter.show();
    emitter.update();
  }

  for (let s of systems) {
    s.addParticle();
    s.applyGravity(g);
    s.run();
  }
}
function mouseClicked() {
  let mPos = createVector(mouseX, mouseY);
  let system = new ParticleSystem(mPos);
  systems.push(system);
}
