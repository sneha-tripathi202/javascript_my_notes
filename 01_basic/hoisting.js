// 1.hoisting: Hoisting is JavaScript’s default behavior of moving declarations 
//            (not initializations) to the top of their scope.
// 2.Function Declarations: Entire function bodies are hoisted, so you can call a 
//                          function before it’s defined.
// 3. Variables with var: Hoisted but initialized with undefined. Accessing them
//                       before assignment gives undefined.
// 4.Variables with let and const: Hoisted but remain in the Temporal Dead Zone (TDZ)
//                                  until initialized. Accessing them before declaration 
//                                   throws a ReferenceError.
// 5.Classes: Also hoisted but behave like let/const—they cannot be accessed before declaration.


//function hoisting

name();//declaration
function name(){
    console.log("sneha")
}

//variable hoisting

console.log(age)//it gives undefied work like var age;
var age=4

console.log(school);//ReferenceError: Cannot access 'school' before initialization
let school="srsr"

//variable expression

console.log(student("sneha"));//ReferenceError: Cannot access 'student' before initialization

const student =function(name){
    return name;
}




