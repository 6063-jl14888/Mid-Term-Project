let x = 0;
let y = 717;
let path = [];
let pathIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  noFill();
  stroke(255, 255, 0);

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
}

function draw() {

fill(0);
  rect(0,0,600,800,);

  beginShape();
  for (let i = 0; i < path.length; i++) {
    vertex(path[i].x, path[i].y);
  }
  endShape();

  ellipse(x, y, 10, 10, 255, 200, 0);

  // 更新图形的位置
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
}
