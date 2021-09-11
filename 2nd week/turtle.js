class Turtle {
    constructor (x, y) {
        this.x = x || 0;
        this.y = y || 0;
        this.maxX=5;
        this.maxY=5;
        this.step_array=new Array(this.maxX);
        for (var i = 0; i < this.maxX; i++) {          
            this.step_array[i] = new  Array(this.maxY);            
        }
        this.step_array[this.x][this.y]=1;
        this.direction = 'x+';
        this.angle = 0;
        this.steps = [
            [this.x, this.y]
        ];

       
        //return instance;

    };
   /* Turtle(){
        for (let j = 0; j < this.maxY; j++){
            let row = '';
            for (let i = 0; i < this.maxX; i++){
               
                    row += ' □ ';
                }
            }
            console.log(row);
        } 
    }*/
    print(){
        for (let j = 0; j < this.maxY; j++){
            let row = '';
            for (let i = 0; i < this.maxX; i++){              
                if(this.step_array[i][j]){    
                    row += ' ■ ';
                } else {
                    row += ' □ ';
                }
            }
            console.log(row);
        } 
    }
    forward (step) {
        for (let i = 0; i < step; i++) {
            if (this.direction === 'x+') {
                this.x++;
            } else if (this.angle === 'y-') {
                this.y--;
            } else if (this.angle === 'x+') {
                this.x--;
            } else if (this.angle === 'y-') {
                this.y++;
            } else {
                return this;
            }
            this.step_array[this.x][this.y]=1;            
        }
        return this;
    }
    right () {      
        if (this.angle === 90) {
            this.direction = 'south';
        } else if (this.angle === 180) {
            this.direction = 'west';
        } else if (this.angle === 270) {
            this.direction = 'north';
        } else {
            this.direction = 'east';
            this.angle = 0;
        }
        return this;
    };
   /* const turtleFootprint = (x, y) => {
        for (let step of this.steps) {
            if (step[0] === x && step[1] === y)
            return true;
        }
        return false;
    };*/
   /* forward (step) {
        for (let i = 0; i < step; i++) {
            if (this.angle === 0) {
                this.x++;
            } else if (this.angle === 90) {
                this.y--;
            } else if (this.angle === 180) {
                this.x--;
            } else if (this.angle === 270) {
                this.y++;
            } else {
                return this;
            }
            this.steps.push([this.x, this.y]);
        }
        return this;
    }

    right () {
        this.angle += 90;
        if (this.angle === 90) {
            this.direction = 'south';
        } else if (this.angle === 180) {
            this.direction = 'west';
        } else if (this.angle === 270) {
            this.direction = 'north';
        } else {
            this.direction = 'east';
            this.angle = 0;
        }
        return this;
    };

    left () {
        this.angle -= 90;
        if (this.angle === 90) {
            this.direction = 'south';
        } else if (this.angle === 180) {
            this.direction = 'west';
        } else if (this.angle === -90 || this.angle === 270) {
            this.angle = 270;
            this.direction = 'north';
        } else {
            this.direction = 'east';
            this.angle = 0;
        }
        return this;
    };

    allPoints () {
        return this.steps;
    };
/*
    print1 () {
        let maxX = -Infinity;

        let maxY = -Infinity;
        let minX = Infinity;
        let minY = Infinity;

        let maxX = 5;
        let maxY = 5;
        let minX = 0;
        let minY = 0;
        for (let step of this.steps) {
            if (step[0] > maxX) {
                maxX = step[0];
            }
            if (step[1] > maxY) {
                maxY = step[1];
            }
            if (step[0] < minX) {
                minX = step[0];
            }
            if (step[1] < minY) {
                minY = step[1];
            }
        };

        const turtleFootprint = (x, y) => {
            for (let step of this.steps) {
                if (step[0] === x && step[1] === y)
                return true;
            }
            return false;
        };
        
        console.log('-- BEGIN LOG');
        for (let y = maxY + 1; y >= minY; y--) {
            let row = '';
            for (let x = minX; x <= maxX + 1; x++ ) {
                if (turtleFootprint (x, y)) {
                    row += ' ■ ';
                } else {
                    row += ' □ ';
                }
            }
            console.log(row);
        }
        console.log('-- END LOG');
    };*/
};


//new Turtle(0, 0).print();
//new Turtle(2, 3).print();
//new Turtle(0, 0).forward(3).print();
new Turtle(0, 0).forward(3).right().forward(2).print();
/*
.forward(5)
    .right()
    .forward(5)
    .right()
    .forward(5)
    .right()
    .forward(5)
    .print()

//new Turtle(2,3);

/*
const turtle = new Turtle();

turtle.forward(3)
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
    .print();*/
