var snake, food;
var w,h;
var scal = 20;


function setup() {
  createCanvas(400,400);


  w = floor(width/scal); //Setting number of columns
  h = floor(height/scal); //Setting the number of rows
  frameRate(5)


  snake = new Snake();

  setFLocation();



}


function setFLocation(){
  let x = floor(random(w)) //Picking a random column
  let y = floor(random(h)) //Picking a random row
   
  food = createVector(x,y);
}

function keyPressed(){

  if(keyCode === LEFT_ARROW){
    snake.setDirec(-1,0);
  } else if(keyCode === RIGHT_ARROW){
    snake.setDirec(1,0);
  } else if(keyCode === DOWN_ARROW){
    snake.setDirec(0,1);
  } else if(keyCode === UP_ARROW){
    snake.setDirec(0,-1);
  } else if(key == ''){//Control for checking for proper fuctioning of the snake functions
    snake.grow();
  }


}


function draw() {
  
  scale(scal);
  background(220);

  if(snake.eat(food)){

    setFLocation();

  }

  snake.update();
  snake.show();

  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(0,255,0) //Sets green
  rect(food.x, food.y, 1, 1); //Displays Food



}