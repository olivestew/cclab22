//walk set up
let walkX, walkY;

//wave set up
let waveXpo;
let waveX, waveY;
let waveC1, waveC2;
let waveColor;

//wave velocity
let waveXspeed = 0.02;
let waveYspeed = 0.02;
let waveAmp = 0.4;
let waveSize = 0;

function setup() {
  createCanvas(600, 400);
  //gif
  setupGif(5);
  background(20);

  //walk setup
  walkX = width / 24;
  walkY = height / 24;
  ellipseMode(CENTER);

  //wave setup
  waveColor = color(random(255), random(225), random(255));
  waveSize = random(1, 25);
  waveXpo = -waveSize / 4;
}

function draw() {
  //gif
  beginGif();

  strokeWeight(1);

  //walk path
  walkX += random(-1, 1.5);
  walkY += random(-1, 1.5);

  //color change with walk
  let r = map(walkX, 0, width, 0, 250);
  let g = 0;
  let b = map(walkY, 0, height, 250, 0);

  //walk position
  let walkXpo = constrain(walkX, 0, width);
  let walkYpo = constrain(walkY, 0, height);

  if (walkYpo == height || walkYpo == 0) {
    walkX += -walkX;
    walkY += -walkY;
  }
  console.log(walkXpo, walkYpo);

  //create walk ellipses
  fill(r, g, b);
  stroke(r / 2, g / 1, b / 0.5);
  ellipse(walkXpo, walkYpo, 10, 10);
  ellipse(walkXpo + 100, walkYpo, 15, 15);
  ellipse(walkXpo + 225, walkYpo, 20, 20);
  ellipse(walkXpo + 350, walkYpo, 25, 25);
  ellipse(walkXpo + 475, walkYpo, 30, 30);

  //wave path and reset
  waveXpo = waveXpo + 2;
  if (waveXpo > width) {
    waveColor = color(random(200), random(225), random(220));

    waveXpo = -waveSize / 4;

    waveAmp = random(0.01, 0.2);
    waveXspeed = random(0.01, 0.2);
    waveYspeed = random(0.01, 0.2);

    waveSize = random(5, 75);

    waveX = waveXpo * 0.2;
    waveY = sin(waveX * waveYspeed) * waveAmp;
  }

  // draw the rect on waves
  fill(waveColor);
  stroke(10, 200);
  rect(waveXpo, height + waveY * height, waveSize, waveSize);

  endGif(1750);
}
