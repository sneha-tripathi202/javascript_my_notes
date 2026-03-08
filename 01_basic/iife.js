//immediatly invoked function expressions
//reason of uses-
//immediatly invoked ho jaye 
//global scope se function pollute na ho

(function dbconnection(){
    console.log('db connection');
    
})();//semicolon lgaya jata hai jab ham aise hi multi function use karte hai

((a,b)=>{
    console.log(a+b);
    
})(3,4);