function add(){
    let num=4+3;
    console.log(num);
    
}
const addition=setTimeout(add,2000)
function cleartime()
{    clearTimeout(addition)
    console.log("timeout is cleared");
    
}

cleartime()

//setinterval

const interval =setInterval(()=>{
    console.log("Welcome!");
    
},2000)
clearInterval(interval)