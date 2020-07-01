class Snake{
   

    constructor(){
      this.body = [];
      this.body[0] = createVector(floor(w/2), floor(h/2));
      this.xdirec = 0;
      this.ydirec = 0;
      this.len = 0;

    }

    setDirec(xChange, yChange){
      this.xdirec = xChange
      this.ydirec = yChange

    }
/*
    update(){
      let head = this.body[this.body.length-1].copy() //Copies the head to be the same as the previous value
      this.body.shift //Shifts all elements back by 1 position
      head.x += this.xdirec //Adding wherever the head was facing to the element
      head.y += this.ydirec //Adding whether the head was going up or down to the element
      //this.body.splice(this.body.length-1,this.len)

      this.body.push(head) //Pushes newest value into array

    }
    */

    update() {
      let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdirec;
    head.y += this.ydirec;
    this.body.push(head);
    }
/*
    grow(){
      let head = this.body[this.body.length-1].copy() //Copies the head to be the same as the previous one
      this.len ++;
      this.body.push(head); //Pushes new value of the head
    }
*/
    grow() {
      let head = this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head);
  }

    endGame() {
      let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x > w-1 || x < 0 || y > h-1 || y < 0) {
       return true;
    }
    for(let i = 0; i < this.body.length-1; i++) {
        let part = this.body[i];
      if(part.x == x && part.y == y) {
          return true;
      }
    }
    return false;
  }
  /*
    eat(pos){
      let x = this.body[this.body.length-1].x
      let y = this.body[this.body.length-1].y

      if(x == pos.x && y == pos.y){ //Checking if the food position is the same position as the head
        this.grow //Growing the body
        return true;
      }

      return false //If the if statement is not true, return false
      
    }
    */

     eat(pos) {
        let x = this.body[this.body.length-1].x;
      let y = this.body[this.body.length-1].y;
      if(x == pos.x && y == pos.y) {
        this.grow();
        return true;
      }
      return false;
    }

    /*
    show(){ //Displaying the this.body array
      for(let i = 0; i < this.body.length; i++){

        fill(0); //Im pretty sure this is a black color, for the body
        noStroke();
        rect(this.body[i].x, this.body[i].y, 1, 1)//Showing all the rectangles in the array, since it is a for loop

      }
    }
    */
   show() {
    for(let i = 0; i < this.body.length; i++) {
      fill(0);
    noStroke();
    rect(this.body[i].x, this.body[i].y, 1, 1)
  }
}

  }