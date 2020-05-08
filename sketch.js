var fixedrect, movingrect
function setup() {
  createCanvas(800,400);
fixedrect= createSprite(400, 200, 50, 50);
fixedrect.shapeColor = "green";
movingrect = createSprite(400,100,50,50);
movingrect.shapeColor = "green";

}

function draw() {
  background(0); 
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if(fixedrect.width/2 + movingrect.width/2 > fixedrect.x - movingrect.x && 
    fixedrect.width/2 + movingrect.width/2 > movingrect.x - fixedrect.x &&
    fixedrect.height/2 + movingrect.height/2 > movingrect.y - fixedrect.y &&
    fixedrect.height/2 + movingrect.height/2 > fixedrect.y - movingrect.y){
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
    }
    else{
        fixedrect.shapeColor = "green";
        movingrect.shapeColor = "green";
    }
  drawSprites();
}