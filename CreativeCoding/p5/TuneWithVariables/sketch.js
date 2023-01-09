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
    }
  }
  // var numSquares=30;
  // var sideLen=windowWidth/numSquares;
  // for (var x=1;x<=numSquares*numSquares;x+=1){ //this loop creates a row in the x direction
  //   var yCounter = int(x/numSquares);
  //   square((x%numSquares)*sideLen,yCounter*sideLen,sideLen);
  // }










}
