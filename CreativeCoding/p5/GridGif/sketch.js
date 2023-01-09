let gif;

function preload(){
  gif=loadImage(assets/graphicGIF.gif);
}
function setup() {
  createCanvas(windowWidth,windowWidth);
  background(255,255,0);
}

function draw() {
  fill(255,0,0);
  strokeWeight(1);

  var numSquares=30;
  var sideLen=windowWidth/numSquares;
  for (var x=0;x<numSquares*numSquares;x+=1){ //this loop creates a row in the x direction
    var yCounter = int(x/numSquares);
    square((x%numSquares)*sideLen,yCounter*sideLen,sideLen);
    image(gif,x,y,sideLen,sideLen);

  }









}
