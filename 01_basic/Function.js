///function1
 
function greet(){
    console.log("hello masi");
    
}
greet();
//function2
function studentName(name){
    return `${name} is student of class 8th`
}
console.log(studentName("prince"));


//function3
function userLogin(name="samosa"){//default value
 if(!name){
    console.log("please enter the username");
    return
 }
 return `${name} loggedin`
}
console.log(userLogin("rahul"));//if value nhi di gyi hoti to undefind aata hai
console.log(userLogin());//undefind


//function4 with rest operator
//rest operator and sread both are same but uses of palces is different

function restvalueOfNum(...num){
    return num
}
console.log(restvalueOfNum(1,2,3,45));//output gives in form of array [1,2,3,45]

function restvalues(val1,val2,...val){
   console.log(val1,val2);//2,3
    return val//[4,5,6,7] rest of the value
}
console.log(restvalues(2,3,4,5,6,7));



///function5 with object

     const object={
        name: "sneha",
        age: 25,
        location: "India"
     };

      function funcObj(anyobject){
        console.log(`${anyobject.name} is age ${anyobject.age} and belongs to ${anyobject.location}`);
        }

        funcObj(object)

        //second type

        funcObj({
            name:"utkarsh",
            age:21,
            location:"pateri satna"
        })
   
        
///funtion6 with array

const array=[1,2,3,4,5,6]

function funcArray(anyarray){
   console.log( anyarray[4]);
   
}
 funcArray(array);

 funcArray(['sita','ram','bharat','dashrath','ravan' ])
    
  