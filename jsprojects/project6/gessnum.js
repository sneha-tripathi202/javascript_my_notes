let button=document.querySelector(".button")
let input=document.querySelector(".input")
let method= Math.floor(Math.random()*100+1)

///input
button.addEventListener("click",()=>{
  let sel=input.select()
  if(sel===method){
    button.innerText=`Right gess ${method}`
  }
    else {
    button.innerText=`Wrong gess`
    }

 

  })


  input.addEventListener("click",()=>{
    button.innerText=`Submit Gess`
  })
  //inputs array
 let inputArray=[]

  button.addEventListener("click",()=>{
    let inputtext=input.value
  let array= inputArray.push(inputtext)
     let map=inputArray.map((ele)=>{
    return ele
  })
  document.querySelector(".pregess").innerHTML=map
  
  
  })
    //remaining attemps
let count=10

button.addEventListener("click",()=>{
    if(count>0){ count= count-1
    document.querySelector(".remgess").textContent=count}
    else{
        document.querySelector(".innerh3").innerHTML ="Attemps end" 
    }
})





