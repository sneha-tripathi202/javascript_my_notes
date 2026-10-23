////this keyword
// this means current context

const object={
    name:"Sneha",
    greet:function(){
        return `${this.name} , hello`// current value btayega updation karke
        console.log(this);
        
    }
}
console.log(object.greet());
object.name='swati'
console.log(object.greet());

function thisinfo(){
    let username="santosh"
    console.log(`${this.username}`);//gives undefined value ,not working this in function
    console.log("this",this);//function ke ander bhut sari info milti hai object ke form me
    
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


// Short Notes – JS this & Scope
// this keyword

// Refers to the object that is currently executing the function.

// Value depends on how the function is called, not where it is defined.

// Normal Functions

// Create and bind their own this dynamically.

// Example:

js
const obj = { name: "Sneha", greet() { console.log(this.name); } };
obj.greet(); // "Sneha"

// Arrow Functions

// Do not bind their own this.

// They inherit this from the surrounding lexical scope.


// Example:

js
const obj = { name: "Sneha", arrow: () => console.log(this.name) };
obj.arrow(); // undefined

// Object Literals

// Just containers for properties; they don’t create a new lexical scope.

// That’s why arrow functions inside objects inherit this from the outer/global scope, not the object.

// Lexical Scope

// Scope is determined by where code is written (definition time), not where it’s called.

// Functions and blocks ({} with let/const) create new lexical scopes.

// Objects do not.




