let currentPattern = 0; 

let x = 0;
let y = 717;
let path = [];
let pathIndex = 0;

let x1 = 600;
let y1 = 704;
let path1 = [];
let path1Index = 0;



let xbeer = 0;
let ybeer = 723;
let pathbeer = [];
let pathbeerIndex = 1;

let xbeer1 = 600;
let ybeer1 = 707;
let pathbeer1 = [];
let pathbeer1Index = 1;

let xbeer2 = 438;
let ybeer2 = 552;
let pathbeer2 = [];
let pathbeer2Index = 1;



let xbottle = 0;
let ybottle = 741;
let pathbottle = [];
let pathbottleIndex = 2;

let xbottle1 = 600;
let ybottle1 = 758;
let pathbottle1 = [];
let pathbottle1Index = 2;

let xbottle2 = 439;
let ybottle2 = 514;
let pathbottle2 = [];
let pathbottle2Index = 2;

let mFont;
let s0 = "FLOATING"
let s1 = "BEIJING"

function preload(){
  mFont = loadFont("./AdobeHebrew-Regular.otf")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont("mFont")

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



  stroke(255, 147, 147);

  pathbeer.push(createVector(0, 723));
  pathbeer.push(createVector(294, 723));
  pathbeer.push(createVector(281, 716));
  pathbeer.push(createVector(167, 473));
  pathbeer.push(createVector(169, 457));
  pathbeer.push(createVector(193, 445));
  pathbeer.push(createVector(303, 704));
  pathbeer.push(createVector(327, 694));
  pathbeer.push(createVector(216, 437));
  pathbeer.push(createVector(244, 425));
  pathbeer.push(createVector(353, 681));
  pathbeer.push(createVector(381, 668));
  pathbeer.push(createVector(275, 414));
  pathbeer.push(createVector(303, 400));
  pathbeer.push(createVector(413, 652));
  pathbeer.push(createVector(448, 638));
  pathbeer.push(createVector(405, 533));

  pathbeer1.push(createVector(600, 707));
  pathbeer1.push(createVector(340, 707));
  pathbeer1.push(createVector(465, 651));
  pathbeer1.push(createVector(476, 626));
  pathbeer1.push(createVector(452, 572));
  pathbeer1.push(createVector(476, 585));
  pathbeer1.push(createVector(509, 572));
  pathbeer1.push(createVector(518, 549));
  pathbeer1.push(createVector(444, 385));
  pathbeer1.push(createVector(421, 374));
  pathbeer1.push(createVector(390, 384));
  pathbeer1.push(createVector(384, 406));
  pathbeer1.push(createVector(448, 552));
  pathbeer1.push(createVector(465, 558));
  pathbeer1.push(createVector(400, 406));
  pathbeer1.push(createVector(406, 392));
  pathbeer1.push(createVector(421, 384));
  pathbeer1.push(createVector(435, 392));
  pathbeer1.push(createVector(503, 544));
  pathbeer1.push(createVector(503, 558));
  pathbeer1.push(createVector(477, 572));

  pathbeer2.push(createVector(438, 552));
  pathbeer2.push(createVector(353, 362));
  pathbeer2.push(createVector(368, 371));
  pathbeer2.push(createVector(381, 366));
  pathbeer2.push(createVector(386, 345));
  pathbeer2.push(createVector(368, 312));
  pathbeer2.push(createVector(340, 312));
  pathbeer2.push(createVector(340, 288));
  pathbeer2.push(createVector(288, 265));
  pathbeer2.push(createVector(269, 293));
  pathbeer2.push(createVector(275, 326));
  pathbeer2.push(createVector(256, 348));
  pathbeer2.push(createVector(232, 322));
  pathbeer2.push(createVector(199, 322));
  pathbeer2.push(createVector(184, 357));
  pathbeer2.push(createVector(184, 400));
  pathbeer2.push(createVector(161, 390));
  pathbeer2.push(createVector(139, 405));
  pathbeer2.push(createVector(142, 437));
  pathbeer2.push(createVector(168, 445));
  pathbeer2.push(createVector(327, 371));
  pathbeer2.push(createVector(340, 380));
  pathbeer2.push(createVector(394, 500));




  stroke(166, 255, 170);

  pathbottle.push(createVector(0, 741));
  pathbottle.push(createVector(268, 741));
  pathbottle.push(createVector(155, 684));
  pathbottle.push(createVector(148, 657));
  pathbottle.push(createVector(293, 392));
  pathbottle.push(createVector(315, 382));
  pathbottle.push(createVector(254, 358));
  pathbottle.push(createVector(247, 338));
  pathbottle.push(createVector(255, 323));
  pathbottle.push(createVector(277, 315));
  pathbottle.push(createVector(323, 358));
  pathbottle.push(createVector(319, 344));
  pathbottle.push(createVector(330, 324));
  pathbottle.push(createVector(341, 320));
  pathbottle.push(createVector(489, 395));
  pathbottle.push(createVector(493, 408));
  pathbottle.push(createVector(340, 327));
  pathbottle.push(createVector(336, 338));
  pathbottle.push(createVector(404, 374));

  pathbottle1.push(createVector(600, 758));
  pathbottle1.push(createVector(285, 758));
  pathbottle1.push(createVector(314, 748));
  pathbottle1.push(createVector(463, 468));
  pathbottle1.push(createVector(459, 453));
  pathbottle1.push(createVector(323, 383));
  pathbottle1.push(createVector(327, 373));
  pathbottle1.push(createVector(451, 436));
  pathbottle1.push(createVector(455, 426));
  pathbottle1.push(createVector(331, 363));
  pathbottle1.push(createVector(338, 351));
  pathbottle1.push(createVector(483, 429));
  pathbottle1.push(createVector(489, 418));
  pathbottle1.push(createVector(410, 377));

  pathbottle2.push(createVector(439, 514));
  pathbottle2.push(createVector(368, 564));
  pathbottle2.push(createVector(316, 560));
  pathbottle2.push(createVector(259, 638));
  pathbottle2.push(createVector(224, 607));
  pathbottle2.push(createVector(197, 614));
  pathbottle2.push(createVector(172, 658));
  pathbottle2.push(createVector(175, 676));
  pathbottle2.push(createVector(283, 739));
  pathbottle2.push(createVector(308, 732));
  pathbottle2.push(createVector(402, 561));
  pathbottle2.push(createVector(357, 596));
  pathbottle2.push(createVector(321, 589));
  pathbottle2.push(createVector(268, 658));
  pathbottle2.push(createVector(219, 628));
  pathbottle2.push(createVector(202, 638));
  pathbottle2.push(createVector(193, 658));
  pathbottle2.push(createVector(279, 716));
  pathbottle2.push(createVector(308, 709));
  pathbottle2.push(createVector(352, 622));
  pathbottle2.push(createVector(327, 644));
  pathbottle2.push(createVector(308, 638));
  pathbottle2.push(createVector(279, 676));
  pathbottle2.push(createVector(237, 662));
  pathbottle2.push(createVector(252, 686));
  pathbottle2.push(createVector(291, 701));
  pathbottle2.push(createVector(316, 662));



}

function draw() {

  if (currentPattern === 0) {
    drawglass();
  } else if (currentPattern === 1) {
    drawbeer();
  }

  if (currentPattern === 1) {
    drawbeer();
  } else if (currentPattern === 2) {
    drawbottle();
  }

  if (currentPattern === 2) {
    drawbottle();
  } else if (currentPattern === 0) {
    drawglass();
  }
}

function drawglass(){
  fill(0);
  rect(0,0,600,800,);

  noFill();
  beginShape();
  for (let i = 0; i < pathIndex; i++) {
    vertex(path[i].x, path[i].y);
  }
  vertex(x,y)
  endShape();

  fill(255, 241, 192);

  ellipse(x, y, 10, 10);

  let target = path[pathIndex];
  let dx = target.x - x;
  let dy = target.y - y;
  let speed = 4;

  if (dist(x, y, target.x, target.y) > speed) {
    x += dx / dist(x, y, target.x, target.y) * speed;
    y += dy / dist(x, y, target.x, target.y) * speed;
  } else {
    pathIndex++;
    if (pathIndex >= path.length) {
      pathIndex = 0;
    }
  }


  noFill();
  beginShape();
  for (let i = 0; i < path1Index; i++) {
    vertex(path1[i].x, path1[i].y);
  }
  vertex(x1,y1)
  endShape();

  fill(255, 241, 192);

  ellipse(x1, y1, 10, 10);

  let target1 = path1[path1Index];
  let dx1 = target1.x - x1;
  let dy1 = target1.y - y1;
  let speed1 = 4;

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

function drawbeer(){
  fill(0,18,84);
  rect(0,0,600,800,);

  noFill();
  beginShape();
  for (let i = 0; i < pathbeerIndex; i++) {
    vertex(pathbeer[i].x, pathbeer[i].y);
  }
  vertex(xbeer,ybeer)
  endShape();

  fill(255, 147, 147);

  ellipse(xbeer, ybeer, 10, 10);

  let targetbeer = pathbeer[pathbeerIndex];
  let dxbeer = targetbeer.x - xbeer;
  let dybeer = targetbeer.y - ybeer;
  let speedbeer = 4;

  if (dist(xbeer, ybeer, targetbeer.x, targetbeer.y) > speedbeer) {
    xbeer += dxbeer / dist(xbeer, ybeer, targetbeer.x, targetbeer.y) * speedbeer;
    ybeer += dybeer / dist(xbeer, ybeer, targetbeer.x, targetbeer.y) * speedbeer;
  } else {
    pathbeerIndex++;
    if (pathbeerIndex >= pathbeer.length) {
      pathbeerIndex = 0;
    }
  }


  noFill();
  beginShape();
  for (let i = 0; i < pathbeer1Index; i++) {
    vertex(pathbeer1[i].x, pathbeer1[i].y);
  }
  vertex(xbeer1,ybeer1)
  endShape();

  fill(255, 147, 147);

  ellipse(xbeer1, ybeer1, 10, 10);

  let targetbeer1 = pathbeer1[pathbeer1Index];
  let dxbeer1 = targetbeer1.x - xbeer1;
  let dybeer1 = targetbeer1.y - ybeer1;
  let speedbeer1 = 4;

  if (dist(xbeer1, ybeer1, targetbeer1.x, targetbeer1.y) > speedbeer1) {
    xbeer1 += dxbeer1 / dist(xbeer1, ybeer1, targetbeer1.x, targetbeer1.y) * speedbeer1;
    ybeer1 += dybeer1 / dist(xbeer1, ybeer1, targetbeer1.x, targetbeer1.y) * speedbeer1;
  } else {
    pathbeer1Index++;
    if (pathbeer1Index >= pathbeer1.length) {
      pathbeer1Index = 0;
    }
  }

  noFill();
  beginShape();
  for (let i = 0; i < pathbeer2Index; i++) {
    vertex(pathbeer2[i].x, pathbeer2[i].y);
  }
  vertex(xbeer2,ybeer2)
  endShape();

  fill(255, 147, 147);

  ellipse(xbeer2, ybeer2, 10, 10);

  let targetbeer2 = pathbeer2[pathbeer2Index];
  let dxbeer2 = targetbeer2.x - xbeer2;
  let dybeer2 = targetbeer2.y - ybeer2;
  let speedbeer2 = 4;

  if (dist(xbeer2, ybeer2, targetbeer2.x, targetbeer2.y) > speedbeer2) {
    xbeer2 += dxbeer2 / dist(xbeer2, ybeer2, targetbeer2.x, targetbeer2.y) * speedbeer2;
    ybeer2 += dybeer2 / dist(xbeer2, ybeer2, targetbeer2.x, targetbeer2.y) * speedbeer2;
  } else {
    pathbeer2Index++;
    if (pathbeer2Index >= pathbeer2.length) {
      pathbeer2Index = 0;
    }
  }

  fill(255);
  stroke(255, 147, 147);
  text(s0, 100, 48);

  text(s1, 140, 100);

}

function drawbottle(){
  fill(53,0,72);
  rect(0,0,600,800,);

  noFill();
  beginShape();
  for (let i = 0; i < pathbottleIndex; i++) {
    vertex(pathbottle[i].x, pathbottle[i].y);
  }
  vertex(xbottle,ybottle)
  endShape();

  fill(166, 255, 170);

  ellipse(xbottle, ybottle, 10, 10);

  let targetbottle = pathbottle[pathbottleIndex];
  let dxbottle = targetbottle.x - xbottle;
  let dybottle = targetbottle.y - ybottle;
  let speedbottle = 4;

  if (dist(xbottle, ybottle, targetbottle.x, targetbottle.y) > speedbottle) {
    xbottle += dxbottle / dist(xbottle, ybottle, targetbottle.x, targetbottle.y) * speedbottle;
    ybottle += dybottle / dist(xbottle, ybottle, targetbottle.x, targetbottle.y) * speedbottle;
  } else {
    pathbottleIndex++;
    if (pathbottleIndex >= pathbottle.length) {
      pathbottleIndex = 0;
    }
  }

  noFill();
  beginShape();
  for (let i = 0; i < pathbottle1Index; i++) {
    vertex(pathbottle1[i].x, pathbottle1[i].y);
  }
  vertex(xbottle1,ybottle1)
  endShape();

  fill(166, 255, 170);

  ellipse(xbottle1, ybottle1, 10, 10);

  let targetbottle1 = pathbottle1[pathbottle1Index];
  let dxbottle1 = targetbottle1.x - xbottle1;
  let dybottle1 = targetbottle1.y - ybottle1;
  let speedbottle1 = 2;

  if (dist(xbottle1, ybottle1, targetbottle1.x, targetbottle1.y) > speedbottle1) {
    xbottle1 += dxbottle1 / dist(xbottle1, ybottle1, targetbottle1.x, targetbottle1.y) * speedbottle1;
    ybottle1 += dybottle1 / dist(xbottle1, ybottle1, targetbottle1.x, targetbottle1.y) * speedbottle1;
  } else {
    pathbottle1Index++;
    if (pathbottle1Index >= pathbottle1.length) {
      pathbottle1Index = 0;
    }
  }

  noFill();
  beginShape();
  for (let i = 0; i < pathbottle2Index; i++) {
    vertex(pathbottle2[i].x, pathbottle2[i].y);
  }
  vertex(xbottle2,ybottle2)
  endShape();

  fill(166, 255, 170);

  ellipse(xbottle2, ybottle2, 10, 10);

  let targetbottle2 = pathbottle2[pathbottle2Index];
  let dxbottle2 = targetbottle2.x - xbottle2;
  let dybottle2 = targetbottle2.y - ybottle2;
  let speedbottle2 = 4;

  if (dist(xbottle2, ybottle2, targetbottle2.x, targetbottle2.y) > speedbottle2) {
    xbottle2 += dxbottle2 / dist(xbottle2, ybottle2, targetbottle2.x, targetbottle2.y) * speedbottle2;
    ybottle2 += dybottle2 / dist(xbottle2, ybottle2, targetbottle2.x, targetbottle2.y) * speedbottle2;
  } else {
    pathbottle2Index++;
    if (pathbottle2Index >= pathbottle2.length) {
      pathbottle2Index = 0;
    }
  }

  fill(255);
  stroke(166, 255, 170);
  text(s0, 100, 48);

  text(s1, 140, 100);

}
function mouseClicked(){
  currentPattern = (currentPattern + 1) % 3;
}

