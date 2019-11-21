var yPos = 0;
var stageColor = "#0000ff";
var diam1 = 25;

function setup() {
  // put setup code here
   createCanvas(400,800);
}

function draw() {
  // put drawing code here
    
    background(stageColor);
    fill("#00ffff")
    stroke("#40e0d0")
    strokeWeight(20);
    line(0, yPos, 200, 50);
    ellipse(100, yPos, diam1, diam1);
    //if circle goes to bottom of canvas set to 0
    if (yPos > 600){
        yPos = 0;
        diam1 = 25;
    }
    yPos = yPos + 10;
    //style our text
    noStroke();
    textSize(48);
    
    text("(^_^)", mouseX, mouseY);
}

function mousePressed(){
    if(stageColor === "#0000ff"){;
      stageColor = "#690c16";
    } else{
    stageColor = "#0000ff ";
    }
}

