class Snake{
   

    constructor(){

      this.x = 0;
      this.y = 0;
      this.xSpeed = scal;
      this.ySpeed = 0;
    }


    chomp(x, y){

      var objDist = dist(this.x, this.y, x, y)

      //print(objDist)

      if(objDist < 19){

        return true;
      } else if(objDist > 2){
        return false
      }
    }


    changeDirection(xChange, yChange){
      
 



      this.xSpeed = xChange * scal
      this.ySpeed = yChange * scal

    }

    reset(){

      snake.x = 180;
      snake.y = 180;
      snake.xSpeed = 0;
      snake.ySpeed = 0;


    }


    display(){

      if(score === body.length){
        for(var i; i < body.length; i++){

          body[i] = body[i+1];
       }
      }

      body[score-1] = /*rect(this.x, this.y, 20,20)*/ createVector(this.x, this.y)




      fill(255)

      for(var i; i < body.length; i++){
        fill(255)

        rect(body[i].x, body[i].y, 20, 20);
      }
      
      this.x = this.x + this.xSpeed
      this.y = this.y + this.ySpeed

      rect(this.x, this.y, scal,scal)
    }





  }
  