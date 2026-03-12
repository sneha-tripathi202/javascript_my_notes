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

// question
