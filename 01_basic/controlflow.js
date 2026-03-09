//   if

if(2==2){
    console.log("equal");
    
}

//ifelse

let age=18;
if(age>18){
    console.log("major age");
} 
else console.log("minor age");

///nested ifelse

let login=true
let debitcard=true
let gmailLogin=false
let googlelogin=true
if(login&&debitcard){
    console.log("user loggedin");
    
}
else if(gmailLogin||googlelogin) console.log("user logged in");

else{
    console.log("please signup");
    
}

///truthy and falsy value
//truthy "0"," ",{},[],"false",function(){}
//falsey = 0, bigint=0n, -0 ,"",null ,undefind,NaN
//true and false value jimka matalab phle se pta hota hai ki 
// vo true ya false hai

//like
if(" "){
    console.log("true");
    
}

// check array and object  is it empty or not 
let array=[1]
let object={}
if(array.length==0){
    console.log("array empty");
    
} else if(Object.keys(object).length==0){
    console.log("object empty");

}else{
    console.log("no empty");

}

// nullish coalescing operator(??) for null and undefind 
    let variable;
    variable=5??6;//5
    variable=undefined??7??8;//7
     variable=null??7??8 //7
     //when comes null or undefind value then its special operator
    //  gives null or undefind and gives us for handling situation with
    //  calling function or any other functionallity
    console.log(variable);  


// ++++++++++++++++++ ternary operator +++++++++++++++++++++
// condition?true:false

 let ramAge=20;
 let ramStatus= ramAge>=18?"ram is adult":"he is not adult";
//  console.log(ramStatus);  



// +++++++++++++++++++++++ switch case +++++++++++++++++++++

const books=(bookPrice)=>{
switch(bookPrice){
    case "history" :
        console.log("book price is 100");
        break;
        case "maths" :
        console.log("book price is 300");
        break;
        case "geography" :
        console.log("book price is 900");
        break;
        case "science" :
        console.log("book price is 300");
        break;
        default:
            console.log("book not found");
}}
    // books("science");/

   
   