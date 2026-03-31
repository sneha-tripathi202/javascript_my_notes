////this keyword
// this means current context

const object={
    name:"Sneha",
    greet:function(){
        return `${this.name} , hello`// current value btayega updation karke
    }
}
console.log(object.greet());
object.name='swati'
console.log(object.greet());

function thisinfo(){
    let username="santosh"
    console.log(`${this.usertname}`);//undefined value not working this in function
    console.log(this);//function ke ander bhut sari info milti hai object ke form me
    
}
thisinfo()

console.log(this);//gives empty {} in node environment
//browswer me this ka global variable window hota hai jisme sari cheeje hoti hai


/////ArrowFunction
//finc1
const arrowfunc=()=>{
     let username="santosh"
     console.log(`${this.usertname}`);//undefined
    console.log(this);//gives {}
    
}
arrowfunc()

//func2
const add=(a,b)=>{
    return a+b
}
console.log(add(3,4));

// func3
const sub=(a,b)=>a-b//implicit return(usne maan liya ki hamne return likha hai)

//fun4
const mul=(a,b)=>(a*b)

//fun6 with object

const objectafunc=()=>({username:"sneha",age:21})
console.log(objectafunc().username);

function Person(name) {
  this.name = name;
}
const p = new Person("Sneha");
console.log(p.name); // "Sneha"




