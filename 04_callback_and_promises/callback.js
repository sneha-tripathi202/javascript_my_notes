///first way  of callback

// function add(a,b, callback){
//   let sum= a+b;
//   callback(sum);
// }

// let callback =(sum)=>{
//     console.log("two no sum",sum);
    
// }
// add(4,5,callback);

// //second way of callback 

// let printName=(name,callback)=>{
//   callback(name);
//   console.log(name);
  
// }

// printName ("sneha",(n)=>{
    // let para= document.createElement('h1').innerText=n;
    // let h= document.querySelector("h1");
    // h.append(para);

    

// })

function add (num1,num2,callback)
{
  let add=num1+num2
  callback(add)
} 

let callback=(add)=>{
  console.log("adiiton of two no",add);
  
}
add(2,3,callback)

//question 

 function printme(params) {
  console.log("sneha");
  
}
const printsneha=setTimeout(printme,2000)


//  Callback Hell
// - Structure: Nested pyramid of callbacks (ek callback ke andar dusra, phir uske andar teesra).
// - Problem:
// - Code unreadable ho jaata hai (indentation chaos).
// - Error handling har level pe karna padta hai.
// - Debugging aur maintenance mushkil.
// - Har callback apne parent ke result ka wait karta hai.
// - Is wajah se code pyramid jaisa lagta hai.



//  Promises
// - Structure: Flat chaining with .then(). 
// - Improvement:
// - Nesting khatam ho jaata hai.
// - Centralized error handling with .catch().
// - Code zyada readable.
// - Promises me bhi dependency hoti hai, lekin wo flat chain ke through handle hoti hai.
// - Har .then() apne parent ke resolved value ko receive karta hai.


// Async/Await (Linear Dependency)
// - Async/await me dependency aur bhi clear ho jaati hai, kyunki code synchronous jaisa lagta hai.



