let canvas;

function setup(){
canvas = createCanvas(windowWidth,windowHeight);
canvas.position(0,0);
canvas.style('z-index','-1');
background(250,240,180);

}

function draw(){

point(mouseX, mouseY);

strokeWeight(20);
stroke(153)
if (mouseIsPressed){
fill(100);
}
else {
  fill(250);
}
rect(50,50,200,200);
}
