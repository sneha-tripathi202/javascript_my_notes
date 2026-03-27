// excution order
// syncronys code => then.callback(microtask)=>async(microtask)=>settimeout(macrotask)

//promise

const promise=new Promise((res,rej)=>{
    setTimeout(()=>{
    console.log("Welcome");
    res();
    },2000)
})
promise.then(()=>{
    console.log("to website");
    
})

//problem 1console.log("Start");

console.log("Start");

const promise1 = new Promise((resolve) => {
  console.log("Inside Promise 1");
  resolve("Resolved 1");
});

promise1.then((res) => {
  console.log(res);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Inside setTimeout");
    resolve("Resolved 2");
  }, 0);
});

promise2.then((res) => {
  console.log(res);
});

console.log("End");


//  Promise.all
// - Purpose: Multiple Promises ko ek saath run karna aur tabhi resolve karna jab sab resolve ho jaayein.
// - Agar ek bhi reject ho jaata hai → pura Promise.all reject ho jaata hai.
// - Use case: Jab tumhe parallel tasks ka result ek saath chahiye (jaise multiple API calls).


//  Promise.race
// - Purpose: Multiple Promises ko ek saath run karna, lekin jo sabse pehle settle (resolve/reject) ho jaaye, uska result return karna.
// - Baaki Promises ignore ho jaate hain.
// - Use case: Jab tumhe fastest response chahiye (jaise multiple servers se data fetch karna aur pehle wale ka use karna).

let p1=new Promise((res,rej)=>res("sneha"))
let p2=new Promise((res,rej)=>res("tripathi"))
let p3=new Promise((res,rej)=>res("utkarsh"))

Promise.all([p1,p2,p3]).then((user)=>console.log(user))
Promise.race([p1,p2,p3]).then((user)=>console.log(user))

async function test() {
  try {
    await Promise.reject("Failed");
    console.log("After await");
  } catch (err) {
    console.log("Caught:", err);
  }
}

test();




const clickme = new Promise((resolve, reject) => {

    setTimeout(() => {
        var i = false;
        if (i == true) {
            console.log("promise one .........");
            resolve({
                name: "sneha",
                age: 21
            });
        }
        else {
            reject();
        }
    }, 2000);
})


///promise cosumtion
clickme.then((personalinfo) => {
    console.log(personalinfo);
    return personalinfo.name;

}).then((name) => {
    console.log(name);

}).catch((err) => {
    console.log("error");

}).finally(() => {
    console.log("promise is completed");

})

const click = new Promise((resolve, reject) => {
    setTimeout(() => {
        var i = false;
        if (i == true) {
            console.log("promise one .........");
            resolve({
                name: "sneha",
                age: 21
            });
        }
        else {
            reject();
        }
    }, 2000);
})

console.log("async funtion");

async function changeme() {
    try {
        let promise = await click
        console.log(promise);

    } catch (error) {
        console.log("Error in asyc");

    }
}
changeme();

///promise

//promise creation 

const promisepra=new Promise((res,rej)=>{
  let name="sneha"
  if(name=="sneha"){
    setTimeout(()=>{
      console.log('hello sneha');
      res()
    },2000)
  }else{
    rej()
  }
}).then(()=>{
  console.log(" completed");
  
 }).catch(()=>{
  console.log("not complete");
  
})

const mypromise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("welcome back :)"); 
   let name="seha"
    return name;
  },2000)
})
mypromise.then(nam)
console.log("my name",nam).catch(()=>{
  console.log(" Error occurs");
  
})

