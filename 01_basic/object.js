// constructor se singalton bnta hai literal se nhi bnta
//javascript ko three type se declare kiya jata hai
//1.literals 2.new keyword 3.consturctor

// literals
const object={
    name:"object",
    work:"store value",
    isObject:"true"
}

//accsessing
console.log(object.name);
console.log(typeof object);//object

object.age=12
console.log(object);

console.log(object['name']);

//how to use symbol in object

const person={}
person.name="ram"
person.age=21
let quality=Symbol()
person[quality]="good man"

console.log(person);
console.log(person[quality]);

//function in object

person.ability=function(){
    console.log(`${this.name} is good ruuner`);
    return this.age
}
console.log(person.ability());

// object.freeze(object);

//concating object
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign({},obj1,obj2)//target,source fistmethod (value copy karta hai dono sources se and target me paste karta hai)
console.log(obj3);
const obj4={...obj1,...obj2}//second method
console.log(obj4);

//advance properties
console.log(Object.keys(object));//object ki keys array ke form milti hai jisse ham looping kar sakte hai
console.log(Object.values(object));
console.log(Object.entries(object));
console.log(object.hasOwnProperty("name"));//checking key in object


///object destructuring

const book={
    bookName:"untold Story",
    bookauth:"us chauhan"
}
 //kyoki hame jab in key ko multiple times access karna hota hai 
 // to bar bar yr likhna padta hai
  
console.log( book.bookName);
//isliye destructuring ki jati hai

const {bookName,bookauth}=book
console.log(`${bookName} by ${bookauth}`);

const {bookName:name}=book//give new name
console.log(name);





