function Printme(username){
    this.username=username
}

function callPrint(username,email,password){
    Printme.call(this,username)
    this.email=email
    this.password=password
}

let chai=new callPrint("sneha","st@gmail.com",123)
console.log(chai);
