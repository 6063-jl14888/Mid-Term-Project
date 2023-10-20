let x = 0;
let y = 717;
let path = [];
let pathIndex = 0;

let x1 = 600;
let y1 = 704;
let path1 = [];
let path1Index = 0;

let s0 = "FLOATING"
let s1 = "BEIJING"

function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont("spot mono")

  textSize(80);
  textAlign(LEFT, TOP);
  
  noFill();
  stroke(255, 241, 192);

  path.push(createVector(0, 717));
  path.push(createVector(287, 717));
  path.push(createVector(323, 511));
  path.push(createVector(306, 483));
  path.push(createVector(330, 229));
  path.push(createVector(419, 247));
  path.push(createVector(356, 490));
  path.push(createVector(330, 511));
  path.push(createVector(295, 717));
  path.push(createVector(355, 740));
  path.push(createVector(228, 717));
  path.push(createVector(0, 717));

  path1.push(createVector(600, 704));
  path1.push(createVector(394, 704));
  path1.push(createVector(339, 713));
  path1.push(createVector(281, 515));
  path1.push(createVector(293, 484));
  path1.push(createVector(239, 237));
  path1.push(createVector(155, 269));
  path1.push(createVector(248, 504));
  path1.push(createVector(273, 520));
  path1.push(createVector(333, 717));
  path1.push(createVector(283, 745));
  path1.push(createVector(394, 704));
  path1.push(createVector(600, 704));
}

function draw() {

  fill(0);
  rect(0,0,600,800,);



  beginShape();
  for (let i = 0; i < path.length; i++) {
    vertex(path[i].x, path[i].y);
  }
  endShape();

  ellipse(x, y, 10, 10);

  let target = path[pathIndex];
  let dx = target.x - x;
  let dy = target.y - y;
  let speed = 2;

  if (dist(x, y, target.x, target.y) > speed) {
    x += dx / dist(x, y, target.x, target.y) * speed;
    y += dy / dist(x, y, target.x, target.y) * speed;
  } else {
    pathIndex++;
    if (pathIndex >= path.length) {
      pathIndex = 0;
    }
  }



  beginShape();
  for (let i = 0; i < path1.length; i++) {
    vertex(path1[i].x, path1[i].y);
  }
  endShape();

  ellipse(x1, y1, 10, 10);

  let target1 = path1[path1Index];
  let dx1 = target1.x - x1;
  let dy1 = target1.y - y1;
  let speed1 = 2;

  if (dist(x1, y1, target1.x, target1.y) > speed1) {
    x1 += dx1 / dist(x1, y1, target1.x, target1.y) * speed1;
    y1 += dy1 / dist(x1, y1, target1.x, target1.y) * speed1;
  } else {
    path1Index++;
    if (path1Index >= path1.length) {
      path1Index = 0;
    }
  }

  fill(255);
  stroke(255, 241, 192);
  text(s0, 100, 48);


  
  text(s1, 140, 100);

}

