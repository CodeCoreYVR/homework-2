class Turtle {
    constructor (x, y) {
        this.x = x || 0;
        this.y = y || 0;
        this.maxX=5;
        this.minX=0;
        this.maxY=5;
        this.minY=0;
        this.direction = 'x+';        
        this.steps_array = [];
        this.steps_array.push([this.x, this.y]);
    }; 
    print(){
        const turtleFootprint = (x, y) => {
            for (let step of this.steps_array) {
                if (step[0] === x && step[1] === y)
                return true;
            }
            return false;
        };

        console.log('-- BEGIN LOG');
        for (let j = this.minY; j < this.maxY; j++){
            let row = '';
            for (let i = this.minX; i <= this.maxX; i++){              
                if (turtleFootprint (i, j)) {   
                    row += ' ■ ';
                } else {
                    row += ' □ ';
                }
            }
            console.log(row);
        } 
        console.log('-- END LOG');
    }
    forward (step) {
       // console.log(this.direction);
        for (let i = 0; i < step; i++) {
            if (this.direction === 'x+') {
                this.x++;                
                if(this.x>=this.maxX){ //if turtule step over the board
                    this.maxX++;
                } 
            } else if (this.direction === 'y-') {                
                this.y--;        
                if(this.y<=this.minY){  
                    this.minY--;
                }       
            } else if (this.direction === 'x-') {
                this.x--;
                if(this.x<this.minX){  
                    this.minX--;
                }  
            } else if (this.direction === 'y+') {
                this.y++;
                if(this.y>=this.maxY){  
                    this.maxY++;
                }  
            } else {
                return this;
            }         
            this.steps_array.push([this.x, this.y]);
                   
        }
        return this;
    }
    right () {      
        if (this.direction === 'x+') {
            this.direction='y+';
        } else if (this.direction === 'y+') {
            this.direction='x-';
        } else if (this.direction === 'x-') {
            this.direction='y-';
        } else if (this.direction === 'y-') {
            this.direction='x+';
        }                
        return this;
    };
    left () {      
        if (this.direction === 'x+') {
            this.direction='y-';
        } else if (this.direction === 'y-') {
            this.direction='x-';
        } else if (this.direction === 'x-') {
            this.direction='y+';
        } else if (this.direction === 'y+') {
            this.direction='x-';
        }        
        return this;
    };
    allPoints(){
        return this.steps_array;
    }    
};


/*new Turtle(0, 0).print();
new Turtle(2, 3).print();
new Turtle(0, 0).forward(3).print();
new Turtle(0, 0).forward(3).right().forward(2).print();
new Turtle(0, 4).forward(3).left().forward(3).print();

console.log(new Turtle(0, 4).forward(3).left().forward(3).allPoints());

const flash = new Turtle(0, 4).forward(3).left().forward(3);
console.log(flash.allPoints());*/

new Turtle(0, 4)
.forward(3)
.left()
.forward(3) 
.right()
.forward(5)
.right()
.forward(8)
.right()
.forward(5)
.right()
.forward(3)
.left()
.forward(3)
.print();
 
