let object={
    name:"sneha",
    age:21,
    course:"btech cse"
}
for (const key in object) {
    console.log(`${key} and their value ${object[key]}`);
    
}

//////ARRAY

let array=[1,2,3,4,5]

for (const key in array) {
    
    console.log(key);//its gives index of array because array key is its index
     console.log(array[key]);
    
}