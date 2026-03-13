// string is a sequence of character useed to represent text 

let string="sneha"
console.log(string.length);
console.log(string.toString());
console.log(string.split("",3));//seperator sepecial char like ""
                            // 3 is limit return array to cut part of string
console.log(string.replace('ne',"a"));//saha
console.log(string.indexOf("sneha"));// 0 puri sting ko 1 leta 
console.log(string.charAt(2));// e
console.log(string.slice(0,2));// utni index ke string ko alag karke deta hai


// when string have empty then charAt returns -1


// Template literals

let intro=`my name is sneha`
console.log(intro);

//string interpolation

console.log(`${intro} i am btech student `);

let obj={
    name:"sneha",
    age:21
}
console.log(`name is ${obj.name} and age is ${obj.age}`);




let str1="sneha";
let str2= str1.concat(" utkarsh");
function checkString(s){
if(s===Number&& s===''){console.log("its not string");}else{console.log('its string');}}
checkString('str');