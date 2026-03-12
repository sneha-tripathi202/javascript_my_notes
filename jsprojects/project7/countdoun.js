let button=document.querySelector(".button")
let input=document.querySelector(".input")
let count=input.innerHTML

// button.addEventListener("click",()=>{
//   if(count<=0)
//   {
//     const countdown=setInterval(() => {
//         count--;
//         button.innerHTML=count
//     },3000);
//   }

// })
button.addEventListener("click",()=>{
    console.log(count);
    
})