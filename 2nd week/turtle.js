class Turtle {
    constructor (x, y) {
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
        if(this.x>=5){ 
            this.maxX=this.x;
        }else{
            this.maxX=5;
        }  
        if(this.x<0){ 
            this.minX =this.x;
        }else{
            this.minX=0;
        }  
        if(this.y>5){ 
            this.maxY=this.y;
        }else{
            this.maxY=5;
        }  
        if(this.y<0 ){ 
            this.minY=this.y;
        }else{
            this.minY=0;
        }  
        this.direction = 'x+';        
        this.steps_array = [];
        this.steps_array.push([this.x, this.y]);
    }; 
    print(file_name=''){ 
        const turtleFootprint = (x, y) => {
            for (let step of this.steps_array) {
                if (step[0] === x && step[1] === y)
                return true;
            }
            return false;
        };
        let return_string='';
        
        return_string += '-- BEGIN LOG\n';
        for (let j = this.minY; j <= this.maxY; j++){
            let row = '';
            for (let i = this.minX; i <= this.maxX; i++){  
                if (i === this.x && j === this.y){
                    if (this.direction === 'x+') {
                        row += ' > ';
                    } else if (this.direction === 'y-') {                
                        row += ' ^ ';
                    } else if (this.direction === 'x-') {
                        row += ' < ';
                    } else if (this.direction === 'y+') {
                        row += ' v ';
                    }
                    
                }else{           
                    if (turtleFootprint (i, j)) {   
                        row += ' ■ ';
                    } else {
                        row += ' □ ';
                    }
                }
            
            }
            return_string += row+'\n';
        } 
        return_string += '-- END LOG\n';
        if(file_name ===''){
            console.log(return_string);
        }else{             
            
            fs.writeFile(file_name,return_string , function (err) {
            if (err) return console.log(err);
                 console.log("🐢 Drawing written to "+file_name);
            });
        }
        return this;
    }
    forward (step_para) {
        let step=Number(step_para);
        //console.log('\nPosition:'+this.x+","+this.y+ " Direction:"+this.direction+" Step:"+step);
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
        //console.log('Position:'+this.x+","+this.y+ " Direction:"+this.direction);
        if (this.direction === 'x+') {
            this.direction='y+';
        } else if (this.direction === 'y+') {
            this.direction='x-';
        } else if (this.direction === 'x-') {
            this.direction='y-';
        } else if (this.direction === 'y-') {
            this.direction='x+';
        }   
       // console.log('turn right:'+this.x+","+this.y+ " Direction:"+this.direction);             
        return this;
    };
    left () {   
       // console.log('Position:'+this.x+","+this.y+ " Direction:"+this.direction);   
        if (this.direction === 'x+') {
            this.direction='y-';
        } else if (this.direction === 'y-') {
            this.direction='x-';
        } else if (this.direction === 'x-') {
            this.direction='y+';
        } else if (this.direction === 'y+') {
            this.direction='x+';
        }        
       // console.log('turn left:'+this.x+","+this.y+ " Direction:"+this.direction); 
        return this;
    };
    allPoints(){
        return this.steps_array;
    }    
};

/*
new Turtle(0, 0).print();
new Turtle(2, 3).print();
new Turtle(5, 5).print();
new Turtle(0, 0).forward(3).print();
new Turtle(0, 0).forward(3).right().forward(2).print();
new Turtle(0, 4).forward(3).left().forward(3).print();

console.log(new Turtle(0, 4).forward(3).left().forward(3).allPoints());

const flash = new Turtle(0, 4).forward(3).left().forward(3);
console.log(flash.allPoints());

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
 
*/


if(!process.argv[2]){
    new Turtle(0, 0).print();
}else{    
    let file_name='';
    if(process.argv[2].substr(0,9)==="--output="){
        file_name=process.argv[2].substr(9);       
        if(process.argv[3]){
            process.argv[2]=process.argv[3];
        }
    }else if(process.argv[3] && process.argv[3].substr(0,9)==="--output="){
        file_name=process.argv[3].substr(9);
    }

    let run_string='';
    if(process.argv[2].indexOf('t')){
        run_string='flash = new Turtle()';        
    } 
    const arg_array = process.argv[2].split("-");  
    for (let arg of arg_array) {   
        if (arg.substr(0,1)  === 't') {             
            const pos_array = arg.substr(1).split(",");             
            run_string += " flash = new Turtle("+pos_array[0]+","+pos_array[1]+")";                        
        } else if (arg.substr(0,1)  === 'f') {
            run_string +=".forward("+arg.substr(1)+")";
        } else if (arg.substr(0,1)  === 'r') {
            run_string +=".right()";
        } else if (arg.substr(0,1)  === 'l') {
            run_string +=".left()";
        }        

   }
   fs = require('fs');
   
   //console.log(run_string);
   if(file_name===''){
        run_string +=".print(); ";
        eval(run_string);
   }else{
        run_string +=".print('"+file_name+"'); ";  
        eval(run_string);       
   }

}
