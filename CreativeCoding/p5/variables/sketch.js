function setup() {
  createCanvas(720,720);
  background(255,255,0);
}

function draw() {
  fill(255,0,0);
  strokeWeight(1);
  for (var x=0;x<4;x+=1){ //this loop creates a row in the x direction
    if(x<2){
      square(x*360,0,360);
    }
    else {
      square((x-2)*360,360,360);
    }
  }






}
