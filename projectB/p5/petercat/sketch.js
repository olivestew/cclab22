let music;
let fft;

function preload(){
  
music = loadSound("peter.mp3");
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSB);
  music.play();
  music.pause();
  music.loop();
  fft = new p5.FFT();
  space = width/50;
}

function draw() {
  background(0);
  
  let dance = fft.analyze();  
  //stroke(200);
  for(let i = 0; i < dance.length; i++){
    let amp = dance[i];
     let y = map(amp,0,300,height, 0);
    line(i*space,height, i*space,y);
    stroke(255,i,255);
  }
  
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
