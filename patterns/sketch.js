var r;
var g;
var b;

function setup() {
  createCanvas(600, 400);

background(0);

  r = random(150);
  g = random(150);
  b = random(150);

  let chart = 20;
  let jump = chart + 5;
  let angle = random(PI);
  let x,y;
  
  

  for (let x = 0; x <= width; x += chart + jump) {
    for (let y = 0; y <= height; y += chart + jump) {
        push();
        translate(x, y);
        scale(2);
        rotate(PI/2);
        fill(r*10,g/10);
        triangle(50, 50, 50, 0, 0, 0);
        fill(r/2,g/2,b/2);
        triangle(25, 50, 10, 0, 0, 0);
        translate(x, y);
        fill(r,g,b);
        ellipse(10, 50, 25);
        fill(r/2,g/2,b/2);
        ellipse(10, 50, 20);
        fill(r/3,g/3,b/3);
        ellipse(10,50,10);
        scale(.5);
        rotate(PI);
        fill(r*2,g*2,b*2);
        ellipse(5, 50, 25);
       pop();
      
     
      
      
   // saveCanvas('olivia stewart', 'png');
      }
    }
  }
  
