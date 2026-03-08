//create promise1 
// console.log('promise1 ');

let fpromise=new Promise(function(resolve,reject){
    setTimeout(() => {
       console.log('promise1');
        resolve();
    },1000);
})
fpromise.then(function() { //promise consumed
    console.log('promise1 resolved1');
    
})

//promise2
// console.log('promise2');
new Promise( function(resolve,reject){
     setTimeout(() => {
       console.log('promise2');
        resolve(); //directly connected with then and also gives it  parameters
    },1000);
}).then(function(){
    console.log('resolved2');
    
})


///promise3
// console.log('promise3 ');
let thpromise=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"sneha",age:20})
    },1000)
}).then(function(user){
    console.log("promise3",user);
    })

////promise4
// console.log('promise4 ');
let promiseFourth=new Promise(function(resolve,reject){
    let error=false;
    if(!error){
        resolve({userName:"sneha",password:"123"})
    }else{
        reject(console.log('ERROR:rejected4'))
    }
})
promiseFourth.then((user)=>{
    console.log("4",user);
    return user.userName;//returning value in other then
    
}).then((userName)=>{ //channing then
    console.log("44",userName);
    
}).catch((error)=>{//its connected with reject
    console.log(error);
}).finally(()=>console.log('promise is completed or rejected'))
 //finally always give value either promise rejected or resolved


 ////promise5

 let promiseFive=new Promise(function(resolve,reject){
    let error=false;
    if(!error){
        // console.log('promise5 ');
        resolve({userName:"utkarsh",password:"123"})
    }else{
        reject(console.log('ERROR:rejected'))
    }
})
 async function promisefive() { //kuchh der wait krta hai kaam ke pura hone ka nhi to 
    ///vhi pe error deta hai ye error ko grasefully haldlr nhi karta hai
   try {
     const wait= await promiseFive //print value like then connected with response
    console.log("5",wait);
    
   } catch (error) {
    console.log(error);
    
   }
} promisefive();

async function fetchfunction(){
    try {
        const response=await fetch('https://api.github.com/users/hiteshchoudhary')
    const json=await response.json();
    console.log(json);
    
    } catch (error) {
        console.log('e',error);
        
    }
}
fetchfunction();

////with then
// console.log('promise6 ');
// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response)=>{
//     return response.json()
// }).then((data)=>
// {   console.log('withthennnnnnnnnnnnnnnn.......');

//     console.log(data)
// }).catch((error)=>{console.log(error);
// })