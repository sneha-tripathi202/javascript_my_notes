let array= [1,2,3,4]
console.log(typeof array.toString());//1,2,3,4
console.log(array.length);//4
console.log(array.at(0));//1

let array2=[5,6,7,8,9]
console.log(array2.join("@"));//form of string 5@6@7@8@9
array2.push(3)
console.log(array2);
array2.pop()
console.log(array2);
array2.shift()
console.log("s",array2);
array2.unshift(9)
console.log(array2);

array2.includes("9")
console.log(array2);
console.log(Array.isArray(array));
let array3=array2.concat(array)
console.log(array3);

//allmethods returns array

let array4=["sneha","ram","syam","lalit", "radha"]
console.log(array4.slice(1,2));//start and end index ["ram","sym","lalit"]
//Returns a copy of a section of an array
console.log(array4.splice("sneha",3))//["sneha","ram","syam"]
//Removes and adding elements from an array and, if necessary,
//  inserts new elements in their place, returning the deleted elements.
console.log(array4.splice(0,2,"sita"))//["lalit", "radha"]
console.log(array4);//["sita"]




