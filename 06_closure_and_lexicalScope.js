//lexical scope
function outer(){
    let a;
    function inner1(){
     a=10;
    //  console.log(a);
     
    }
    function inner2(){
         a=+1;
         return a;
    }

    inner1();
    inner2();
}
outer();

//main
function func2(a){
    return a;
}
//  const func=func2(4);
//  console.log(func);
 func2(4);

 //closures
 function funcClosure(n){
    let a=n;
    return function funcInnerClosure(){
        return a++;
    }
}

const closures= funcClosure(5);

// console.log(closures());


//lexical scope practice 

function lexicalscope(){
    let a=10;
    function innerfunc(){
    console.log(a);}

    innerfunc();
}
lexicalscope();

//closuer

function outerClosuer()
{
    let a;
    return  function InnerClosure(){
        console.log(a=12);
        
    }
}

let closuerFunc=outerClosuer();
console.log(closuerFunc());








 

