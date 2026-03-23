//ques 1
let x="10";
let y=5
let z=x+y
console.log(typeof z);//output:105 type of string
console.log(Number(x)+y);

//ques 2
console.log("8" - 3);   // 5
console.log("8" * "2"); // 16
console.log("8" / "2"); //4

let u="8"/"2"
console.log(typeof u);
let g=3+"two"//3two
 g=3-"two"//nan 
console.log(g);

//js me rule hai ki + two type se work karta hai string concatination and numeric addtion
//baki operator string ko numeric value me convert karne ki koshish karte hai
//if convert nahi hota hai to NaN dete hai
