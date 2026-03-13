// JavaScript is a dynamically typed language, meaning
//  variable types are determined at runtime and can change
//  as the program executes.

let age=11//num
    age="11 12 13"//string
    age=[11,12 ,13]//array
    //not required any definition of variable


//data ko memory me kaise store karte hai aur kaise accses karte hai 
// iske hisab se two parts me define kiya gaya hai


//1. primitive datatype

//number,string,null,undefined, 
// bigint=big scientific values,boolean,symbol=define unique value

//ye data type call by value se accses kiye jate
//hai inki copy milti hai jise manipulate karte hai
//na  main reference milta hai


//2.non-primtive data type(call by reference)

//array,object,funtions


///++++++++++++++++++++++++++++++++++++++++++++++++++++
//HEAP AND STACK
//stack(primitive):isme copy ke form me value milti hai
//heap(non-primitive):isme direct accese milta hai jo
//  data ko direct change karta hai

//stack

let nameOne="sneha";
let nameTwo=nameOne
    nameTwo="ram"
console.log(nameOne);//sneha
console.log(nameTwo);//two

//heap

let object={
    name:"sneha"
}
const objectCopy=object
objectCopy.name='ram'
console.log(object);//ram
console.log(objectCopy);//ram

//practice
// heep 
let variable=34
 let variabletwo=variable
   variabletwo=67
   console.log(variable,variabletwo);

   //stack me 
   let array=[2,34,5,6]
    let arraytwo=array
     arraytwo.push(4)
     console.log(array,arraytwo);            
     console.table(array,arraytwo);   //tabluler form stucture
               
     
   