let age =11//num
  age="11"//string
console.log(typeof age);

let name=null
 name=undefined//typeof undefined

const bigint=1233n
console.log(typeof bigint);//bigint
console.log(typeof name);//object


//conversion in number
console.log(typeof Number(age));
   
age="abc11"
console.log(typeof Number(age));//number
console.log( Number(age));//NaN (not a number)

//conversion in boolean
let isName=""//false
  isName="sn"//true
  isName=null//false
  isName=undefined//false
console.log(Boolean(isName));

//conversion in String

const friendno=12345
console.log( typeof String(friendno));//string


console.log(2+"1")//21
console.log("3"+1);//31

console.log("2"+2+1);//221
console.log(2+2+"1")//41

//practice

let alpa=34
let empty={ }//true
let empty2=[ ]//true
let empty3="" //false
let empty4=" " //true

console.log( Boolean(empty4) );
console.log( typeof String(alpa));//34 type string
console.log(BigInt(alpa));//34n
console.log(Symbol(alpa));//symbol 34







