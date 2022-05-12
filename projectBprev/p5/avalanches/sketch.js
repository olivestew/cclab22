let music;
let fft;
let pixels = [];
let img;
function preload() {
  music = loadSound("avalanche.mp3");
  img = loadImage("bg.jpg");
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  imageMode(CENTER);
  img.filter(BLUR, 10);
  colorMode(HSB);
  music.play();
  music.pause();
  music.loop();
  fft = new p5.FFT();
}

function draw() {
  background(0);
  noFill();
  stroke(240);
  translate(width / 2, height / 2);
    let dance = fft.analyze();
  pix = fft.getEnergy(20, 200);
  push();
  
  if(pix>175){ rotate(random(-0.15,0.9));
  }
  image(img, 0,0,width,height);
  pop();

  beginShape();
  for (let i = 0; i < dance.length; i++) {
    let amp = dance[i];
    let rad = map(amp, 0, 100, 0, 150);

    // translate(width/2,height/2)
    let x = rad * sin(i);
    let y = rad * cos(i);
    vertex(x, y);
  }
  endShape();
}

function mousePressed() {
  if (music.isPlaying()) {
    music.pause();
    background(0);
  } else {
    music.play();
    background(255);
    music.loop();
  }
}
