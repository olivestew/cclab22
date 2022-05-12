let music;
let fft;

function preload(){
  
music = loadSound("ss.mp3");
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSB);
  music.play();
  music.pause();
  music.loop();
  fft = new p5.FFT();
  //space = width/50;
}

function draw() {
  background(0);
  translate(width/2, height/2);
  let dance = fft.analyze();  

  beginShape();
  for(let i = 0; i < dance.length; i++){
    let amp = dance[i];
    let rad = map(amp, 0, 100, 0, 150);
    let x = rad* -sin(i);
    let y = rad* -cos(i);
    vertex (x,y);
    fill(i,255,255);
    stroke(255,255,i);
    strokeWeight(12);
  }
  endShape();
}


function mousePressed(){
  if(music.isPlaying()){
    music.pause();
    background(0);
  }
  else{
    music.play();
    background(255);
  }
}
