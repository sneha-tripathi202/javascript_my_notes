// for off array or maps me use hota hai object me nhi

let array=[1,2,3,4,5]
for (const ele of array) {
    console.log(ele*2);
    
}

// maps two types of maps used in js
// this map used like object and holds key and pair values

const map=new Map()

//set map

map.set("name","saniya")
map.set("age",20)

//get map
map.get("age")
console.log(map.get("age"));

//for off loop in map

for (const [key,value] of map) {
    console.log(key,value);
    
}

let fruits=["mango","gavava","banana"]
for(const i of fruits){
    console.log(i);
    
}

let newMap=new Map();
newMap.set("name","saneha")
console.log(newMap.get("name"));

//que

console.log(sumnum([1,2,3,4,5,6]));

function sumnum(arr){
    let sum=0;
    for(const i of arr) {
     sum+=i;}
     return sum
}

//que

let string="snehaaahaa"
 
for (const element of string) {
    string.map((ele)=>ele)
    
}

