let music;
let fft;

function preload(){
  
music = loadSound("grimes.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  music.play();
  music.pause();
  music.loop();
  fft = new p5.FFT();
}

function draw() {
  background(220);
  
  let wave = fft.waveform();
  background(0);
  beginShape();
  noFill();
  for(let i = 0; i < wave.length; i++){
    let amp = wave[i];
    let x = map(i,0,width/2,0,wave.length);
    let y = map( amp, -1, 1, 0, height*2);
   // stroke(i,255,255);
    vertex(x,y/2)
   line(windowWidth/2,windowHeight/2,-x,-y);
    stroke(255,i,255);
    line(windowWidth/2,windowHeight/2,x,-y)
   stroke(i,255,255);
    line(windowWidth/2,windowHeight/2,x,y);
    stroke(255,255,i);
    
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
