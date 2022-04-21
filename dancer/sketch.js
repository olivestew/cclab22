/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 32).
  2. adjust line 19 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
  
*/
let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);
  // ...except to adjust the dancer's name on the next line:
  dancer = new OliviaDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class OliviaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    // add properties for your dancer here:

    //leafs (leaves?)
    this.leafangle = 0.8;
    this.leafspeed = 0.5;

    //petal rotation
    this.petalangle = 10;
    this.petalangleV = 3;
    this.rotate = 0.5;
    //petal color
    this.petalr = 255;
    this.petalg = 10;
    this.petalb = 235;

    //stem
    this.stemFreq = 5;
    this.stemAmp = 15;

    //sunnies

    this.bridgex = -25;
    this.bridgey = -60;
    this.sunx = 5;
    this.suny = -60;
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    //leaf wiggle
    this.leafy1 = -10 + sin(this.leafangle) + 30;
    this.leafy2 = -10 + sin(this.leafangle * 0.5) + 30;
    this.leafangle += this.leafspeed;

    //petal spin
    this.petalangle += this.petalangleV;

    //petal color change
    if (mouseIsPressed || this.petalb >= 235) {
      this.petalb -= this.petalb;
      this.petalr -= this.petalr;
    } else {
      this.petalb += this.petalb + 10;
    }
    this.petalr = constrain(this.petalr, 10, 255);

    //stem wiggle
    this.stemFreq = frameCount * 0.6;
    this.stemX = (frameCount % this.x) / 10 + 13;
    if (this.stemY >= this.y) {
      this.stemX += -1;
    }

    this.stemY = sin(this.stemFreq) * this.stemAmp;

    //pot
    this.potx = -35;
    this.poty = 30;

    //head
    this.headx = 0;
    this.heady = -50;
    this.headsize = 35;

    //petal
    this.petalaX = 0;
    this.petalaY = 0;
    this.petalbX = 20;
    this.petalbY = -30;
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer here ⬇️

    //this.drawstem(){
    push();
    translate(0, 0);
    push();
    noFill();
    strokeWeight(5);
    stroke(240, 240, 2);
    ellipse(this.stemY / 20, this.stemX - 10, 50, 10);

    pop();
    fill(20, 240, 2);
    circle(this.stemY, this.stemX, 7);
    circle(this.stemY, this.stemX - 5, 7);
    circle(this.stemY, this.stemX - 30, 7);
    circle(this.stemY, this.stemX - 35, 7);
    fill(250, 20, 2);
    circle(this.stemY, this.stemX - 10, 7);
    circle(this.stemY, this.stemX - 15, 7);
    circle(this.stemY, this.stemX - 40, 7);
    circle(this.stemY, this.stemX - 45, 7);
    fill(20, 2, 250);
    circle(this.stemY, this.stemX - 20, 7);
    circle(this.stemY, this.stemX - 25, 7);
    circle(this.stemY, this.stemX - 50, 7);
    circle(this.stemY, this.stemX - 55, 7);
    pop();

    push();

    //this.pot

    fill(10, 40, 120);
    rect(this.potx, this.poty, 70, 70);
    rect(this.potx - 10, this.poty - 10, 90, 30);
    pop();

    //this.head
    fill(240, 240, 2);
    ellipse(this.headx, this.heady, this.headsize, this.headsize);

    //petals
    fill(this.petalr + 10, 130, 200);
    push();
    push();
    translate(-30, -50);
    this.petalrotation = rotate(radians(this.petalangle));
    ellipse(this.petalaX, this.petalaY, 25, 15);
    pop();

    push();
    push();
    translate(30, -50);
    this.petalrotation = rotate(radians(-this.petalangle));
    ellipse(this.petalaX, this.petalaY, 25, 15);
    pop();

    push();
    translate(0, -80);
    this.petalrotation = rotate(radians(-this.petalangle));
    ellipse(this.petalaX + 3, this.petalaY, 15, 25);
    pop();
    push();

    translate(0, -20);
    this.petalrotation = rotate(radians(this.petalangle));
    ellipse(this.petalaX - 3, this.petalaY, 15, 25);
    pop();

    pop();

    push();

    fill(this.petalr, this.petalg, this.petalb);

    ellipse(this.petalbX, this.petalbY - 40, 20, 20);
    ellipse(this.petalbX, this.petalbY, 20, 20);
    ellipse(this.petalbX - 40, this.petalbY - 40, 20, 20);
    ellipse(this.petalbX - 40, this.petalbY, 20, 20);

    pop();
    pop();

    //shades
    push();
    fill(35, 0, 20);

    rect(this.bridgex, this.bridgey, 20, 10);
    rect(this.sunx, this.suny, 20, 10);
    rect(this.sunx - 10, this.suny, 10, 3);
    pop();

    //leaf hands
    push();
    translate(0, 0);
    push();
    fill(10, 200, 40);
    rotate(1);
    ellipse(-this.leafy1 + 45, -this.leafy1, 10, 40);
    pop();
    push();
    fill(20, 200, 40);
    rotate(-1);
    ellipse(this.leafy2 - 45, -this.leafy1, 10, 40);
    pop();
    pop();

    // ⬆️ draw your dancer here ⬆️

    // ******** //
    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
 //   this.drawReferenceShapes();

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmomize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 

*/
