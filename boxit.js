function drawLine(num){
   return '\u2500'.repeat(num);
}
function drawTopBorder(num){ 
    return "\u250C"+'\u2500'.repeat(num)+"\u2510";
}
function drawMiddleBorder(num){     
    return "\u251C"+'\u2500'.repeat(num)+"\u2524";
}
function drawBottomBorder(num){         
    return "\u2514"+'\u2500'.repeat(num)+"\u2518";
}

function drawBarsAround(string){         
    return "\u2502"+string+"\u2502";
}


function boxIt(ar){
    let return_string='';
    let max_length=0;

    for(let i=0;i<ar.length;i++){ 
        if(ar[i].length>max_length){
            max_length=ar[i].length;
        }
    } 
    //console.log(max_length);
    return_string = "\u250C"+'\u2500'.repeat(max_length)+"\u2510" +"\n";    
    for(i=0;i<ar.length;i++){
        return_string += "\u2502"+ar[i]+' '.repeat(max_length-ar[i].length)+"\u2502" +"\n";    
        if(i==ar.length-1){
            return_string += "\u2514"+'\u2500'.repeat(max_length)+"\u2518" +"\n";
        }else{
            return_string += "\u251C"+'\u2500'.repeat(max_length)+"\u2524" +"\n";
        }

    }
    return return_string;

}
/* 
if(process.argv.length==2){
    console.log("\u250C"+"\u2510");
    console.log("\u2514"+"\u2518");

}else{

let max_length=0;
for(let i=2;i<process.argv.length;i++){
    //console.log(process.argv[i]);
    //console.log(process.argv[i].length);
    if(process.argv[i].length>max_length){
        max_length=process.argv[i].length;
    }
}
//console.log(max_length);
console.log("\u250C"+'\u2500'.repeat(max_length)+"\u2510");
//console.log("\u250C"+"\u2500"+"\u2511");
//console.log(("\u25)00").repeat(max_length);

for(i=2;i<process.argv.length;i++){
    console.log("\u2502"+process.argv[i]+' '.repeat(max_length-process.argv[i].length)+"\u2502");    
    if(i==process.argv.length-1){
        console.log("\u2514"+'\u2500'.repeat(max_length)+"\u2518");
    }else{
        console.log("\u251C"+'\u2500'.repeat(max_length)+"\u2524");
    }

}
}
*/
if(process.argv.length==2){
    console.log("\u250C"+"\u2510");
    console.log("\u2514"+"\u2518");

}else{
    let ar=new Array;
    for(i=2;i<process.argv.length;i++){
        ar.push(process.argv[i]);
    }
    console.log(boxIt(ar));
}
/*
console.log(drawLine(4));
console.log(drawLine(8));

console.log(drawTopBorder(4)); // returns '┏━━━━┓'
console.log(drawTopBorder(0)); // returns '┏┓'

console.log(drawMiddleBorder(8)); // returns '┣━━━━━━━━━┫'
console.log(drawMiddleBorder(0)); // returns '┣┫'

console.log(drawBottomBorder(2)); // returns '┗━━┛'


console.log(drawBarsAround("My name is Dan")); // returns "┃My name is Dan┃"
console.log(drawBarsAround("You are Jane  ")); // returns "┃You are Jane  ┃"
console.log(drawBarsAround("  You are Bill")); // returns "┃  You are Bill┃"


console.log(boxIt(['Jon Snow', 'Cersei Lannister']));

console.log(boxIt(['Jon Snow']));*/