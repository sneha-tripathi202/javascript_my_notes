///object literal this keyword
const object={
    username:"sneha",
    age:23,
    islogged:true,
     method:function(){
        console.log(`hello ${this.username}`);
        
     }
}
console.log(object);

////new keyword(contrutor function) givs always a new instances
///steps= 1.empty object create
///2.construtor call hota hai with new keyword ,constructor rapeed all and return
///3.this me sare arguments inject ho jaate hai
////this keyword allows make multiple intances with object literals

function Keyword(username,age,islogged){
    this.username=username;//properties
    this.age=age;
    this.inlogged=islogged;
}
const user1=new Keyword("utkarsh",20,"true");
const user2=new Keyword("sneha",20,"true");
console.log(user1);
//other property -construtor(show own info),instanceof


  