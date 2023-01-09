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

  var num=30;
  var sideLen=windowWidth/num;

  for (var y = 0; y<windowWidth;y+=sideLen){
    for(var x = 0;x<windowWidth;x+=sideLen){
      square(x,y,sideLen);

      image(gif,x,y,sideLen,sideLen)
    }
  }










}
