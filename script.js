// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

function setup() {
  var myCanvas=createCanvas(800, 250);
  myCanvas.parent('mySketch'); //this is very important to link things
  background(32,29,72);
}

function draw() {
  // statements here
  //set up variables
  //moving pupil
  var x;
  var y;
  //the pupil's height technically, not width
  var pupilHeight;

  if (mouseIsPressed){
  pupilHeight=10;
  } else {
    pupilHeight=30;
}

if (mouseX<310){
    x=310;
} else if (mouseX>=311 && mouseX<=490) {
  x=mouseX;
  }
else{
  x=490;
    }

if (mouseY<80){
        y=81;
  } else if (mouseY>=81 && mouseY<=160) {
      y=mouseY;
      }
    else{
      y=160;
        }
  //eye body

  //draw background layer
  fill(192,193,255);
  noStroke();
  ellipse(400, 125, 225, 100);

  //draw iris = will be moving, change to x and y
  fill(235,89,111)
  noStroke();
  ellipse(x,y,60,60);

  noFill();
  stroke(189,159,34);
  ellipse(x,y,40,40);

  //pupil
  noStroke();
  fill(27,30,191);
  ellipse(x,y,30,pupilHeight);

  //eye's outline (stationary)
  noFill();
  stroke(32,29,72);
  strokeWeight(50);
  ellipse(400, 125, 275, 150);


  noFill();
  stroke(29,72,38);
  strokeWeight(15);
  ellipse(400, 125, 225, 100);
}
