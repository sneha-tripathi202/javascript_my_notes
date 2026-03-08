// forofloop used to iterate over iterable objects like arrays,strings,maps,sets etc
const array=[1,3,4,5,6]

for(const i of array)
{
    console.log(i);
}

 const map=new Map();
   map.set(1,"sneha");
   map.set(2,"aasha");
   map.set(3,"swati");
    console.log(map);
    console.log(map.get(2));

    for(const[key,value]of map){
        console.log(key,value);
        
    }


    // for-in loops using objects and arrays
const obj={
    name:"sneha",
    age:25,
    belongsto:"India"
}
for(const key in obj){
    console.log(`${key} value is ${obj[key]} `);
    
}
  for(const i in array){
      console.log(`Index ${i} has value ${array[i]}`);
  }
  
    