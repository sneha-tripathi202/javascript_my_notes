// globalscope

let a=3
const b=4

console.log("global a&b",a,b);

//jab kisi block ke baher variable define akrte hai 
//var har jgeh accesible hota hai block se bhi

//block

if(true){
    let a=6
    let b=8
    console.log("inner or block a& b",a,b);
    c=9 //ye bhi baher accesible hota hai
}
console.log("c",c);
