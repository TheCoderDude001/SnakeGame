class Food {

    constructor(){
        this.x;
        this.y;

    }

    setLocation(){

        this.x = random(380);
        this.y = random(380);
        

    }

    display(){

        fill(255, 0 , 0);
        rect(this.x, this.y, scal,scal)
    }

}