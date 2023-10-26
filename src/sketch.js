let s = 1;
let rot = 0;

function setup() {
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
  skin = color(255, 194, 125);
}

function draw() {
  background(220);
  drawBackGround();
  drawBearTree();
  drawFish(200, 200, 0.1);
  push();
  if (s >= 0) {
    s = s - 0.001;
  }
  rot = rot + 0.05;
  pop();
  if (s <= 0.5) {
    drawSurprise();
  }
}

function drawSurprise() {
  push();
  translate(200, 150);
  noStroke();
  // Body Structure and Design
  push();
  fill(skin);
  // Body Neck
  quad(-70, 50, 70, 50, 70, 150, -70, 150);
  // Body Head
  ellipse(0, 0, 200, 250);
  pop();
  push();
  fill(0);
  // Suit Jacket
  quad(-70, 150, -70, 250, -180, 250, -180, 200);
  quad(70, 150, 70, 250, 180, 250, 180, 200);
  // Shirt Collar
  quad(-70, 150, 70, 150, 70, 250, -70, 250);
  pop();
  triangle(-72, 150, 72, 150, 0, 200);

  push();
  rotate(rot);

  // Actual Change To Face
  let r = 90;
  let angle = (3 * PI) / 2;
  for (let i = 0; i < 490; i++) {
    strokeWeight(20);
    stroke(0);
    let x = r * cos(angle);
    let y = r * sin(angle);
    point(x, y);

    angle += 0.04;
    r -= 0.2;
  }
  pop();
  pop();
}

function drawBear() {
  push();
  translate(190, 200);
  noStroke();
  fill(140, 161, 133);
  // Bear body
  quad(30, 0, 160, 105, 70, 150, -40, -20);
  quad(160, 105, 180, 155, 130, 170, 70, 150);
  // Bear feet
  ellipse(180, 155, 60, 35);
  // Bear ears
  arc(-25, -25, 30, 30, (2 * PI) / 3, 2 * PI);
  arc(25, -25, 30, 30, PI, PI / 3);
  // Bear head
  ellipse(0, 0, 70, 70);
  // Bear eyes
  fill(0);
  ellipse(-15, -10, 10, 10);
  ellipse(15, -10, 10, 10);
  // Bear nose
  rect(-5, -1, 15, 15, 20, 20);
  pop();
}

function drawFish(x, y, s) {
  push();
  noStroke();
  scale(s);
  rotate(PI / 10);
  translate(x, y);
  fill(255, 124, 43);

  //body/tail
  ellipse(0, 0, 180, 75);
  triangle(-50, 0, -110, 60, -110, -60);

  fill(196, 97, 35);
  quad(-105, 48, -105, -48, -73, -15, -73, 15);

  // eyes
  circle(70, -5, 15);
  circle(55, -5, 15);
  fill(255);
  circle(70, -5, 10);
  circle(55, -5, 10);
  fill(0);
  circle(70, -5, 7);
  circle(55, -5, 7);

  // gills
  stroke(196, 97, 35);
  strokeWeight(3);
  line(25, -10, 25, 10);
  line(30, -10, 30, 10);
  line(35, -10, 35, 10);

  // tail lines
  stroke(188, 196, 24);
  strokeWeight(2);
  line(-105, 40, -73, 10);
  line(-105, 20, -73, 5);
  line(-105, 0, -73, 0);
  line(-105, -20, -73, -5);
  line(-105, -40, -73, -10);

  //mouth
  stroke("black");
  line(60, 15, 75, 10);
  pop();
}

function drawTree() {
  //Figure of Tree
  push();
  translate(150, 400);
  noStroke();
  fill(49, 20, 120);
  rect(-135, 0, 143, -400);
  rotate(PI / 12);
  rect(-100, -150, 200, 200);
  rotate(-PI / 3);
  rect(52, 5, 126, 175);
  pop();
  //Figure of Ground
  fill(105, 255, 157);
  rect(-200, 400, 800, 300);
}

function drawBackGround() {
  push();
  fill(43, 252, 29, 200);
  triangle(75, 100, 300, 240, 65, 380);
  fill(80, 198, 223, 200);
  triangle(290, 60, 360, 200, 120, 290);
  pop();
}

function drawBearTree() {
  push();
  translate(200, 200);
  scale(s);
  translate(-200, -200);
  drawBear();
  drawTree();
  pop();
}
