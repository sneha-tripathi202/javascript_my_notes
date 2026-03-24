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
console.log("aaaa....",array4);

console.log(array4.splice("sneha",3))//["sneha","ram","syam"]
//Removes and adding elements from an array and, if necessary,
//  inserts new elements in their place, returning the deleted elements.
console.log(array4.splice(0,2,"sita"))//["lalit", "radha"]
console.log(array4);//["sita"]

let arraysplice=[1,2,3,4,5,6,7]
console.log(arraysplice.splice(1,1,"sneha"));
console.log(arraysplice);


//que1
let Input= [1,2,3,4,5,6,7]
function input(k){
    let last=Input.slice(7-k)
    Input.splice(7-k)
    let first=Input
     console.log(last.concat(first));}

input(3)

// second approch

function inputrevisre(arr,k){
    let first= arr.slice(arr.length-k)
    let last=arr.slice(0,arr.length-k)
    console.log(last);
    
    return first.concat(last)
}
console.log(inputrevisre([1,2,3,4,5,6,7],3));



