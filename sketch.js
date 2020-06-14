var snake, food;
var score = 0;
var scal = 20;
var body = []

cols = 20;
rows = 20;

function setup() {
  createCanvas(400,400);

  frameRate(15)

  snake = new Snake();
  food = new Food();

  food.setLocation();




}

function draw() {
  background(50);  


  snake.display();
  food.display();
  if(snake.chomp(food.x, food.y)){

    food.setLocation();

    score = score + 1;

  }





}

function keyPressed(){

  if(keyCode === 	82){
    snake.reset();
  }


  if(keyCode === 	UP_ARROW){
    snake.changeDirection(0,-1); 
  }


  else if(keyCode === 	DOWN_ARROW){
    snake.changeDirection(0,1); 
  }


  else if(keyCode === 	RIGHT_ARROW){
    snake.changeDirection(1,0); 
  }


  else if(keyCode === 	LEFT_ARROW){
    snake.changeDirection(-1,0); 
  }
}