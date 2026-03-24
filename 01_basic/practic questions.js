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

//que3
let values = [0, "", null, undefined, NaN, "false"];
let falsyvalue=values.filter((ele)=>!ele)
console.log(falsyvalue);

//que 4
let num=[1,2,3,4,5]
let squrenum=num.map((ele)=>ele*ele);
console.log(squrenum);

//que 5

let numb=[1,2,3,4,5,6,7,8]
let evennum=numb.filter((ele)=>{
    if(ele%2==0){
        return ele
    }
})
console.log(evennum);

//que 6
let number=[1,2,3,4,5]
let sum=number.reduce((acc,cv)=>acc+cv,0)
console.log(sum);

//que 7
let Input= [10, 25, 60, 40, 70]
let find=Input.find((ele)=>ele>50)// first element in an array that satisfies a given condition (callback function). If no element matches, it returns undefined.
 console.log(find);
 




