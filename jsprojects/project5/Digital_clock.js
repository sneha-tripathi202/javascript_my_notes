let D_clock=document.querySelector(".clock")
console.log("hello");

setInterval(()=>{
 let date=new Date()
 D_clock.innerHTML=date.toLocaleTimeString()
},1000)