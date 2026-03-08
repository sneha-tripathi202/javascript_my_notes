let userName = "ram";
    // console.log(this.userName)
  function myName(name){
    console.log(`${name}`)
       return "sneha!";
  }
  
//   myName();
// =============================================================================

    function restOperator(...num1){
        return num1
    }
    const add= restOperator(1 ,2,3,4,5);

     const object={
        name: "sneha",
        age: 25,
        location: "India"
     };
      const functionObject= function funcObj(anyobject){
        return `${anyobject.name} age is ${anyobject.age} and belongs to ${anyobject.location}`;
      }

    //   console.log(functionObject(object));
    //   console.log(functionObject({name:"utkarsh",age:26,location:"satna"}));

    const arrayFunction= function arrfunc(anyarray){
        return anyarray[1];
    }
    // console.log(arrayFunction(["sneha","Utkarsh i love you, you are my heart","swati","aasha"]));
    
    
    //   ++++++++++++++++++++++ ARROW FUCTION+++++++++++++++++++++++

// this keyword is a current context that is used in object and function.it returns undefined in normal function
// and  the lexical scope in arrow function
//    console.log(this);
    function func(name){
        console.log(this.name);}
    //  func("ram");

    const shoppingCart={
        product:"apple",
        price: 100,
        quantity:2,
        productInfo:function pro(){
            return `${this.quantity} ${this.product} price is ${this.price * this.quantity }`;
        }}
    //    console.log(shoppingCart.productInfo());
    //      console.log(shoppingCart);
     

    const arrowFunction=()=>{
        let userName = "ram";
        console.log(`${this.userName}`)
     console.log(this);
     
    }
    // arrowFunction();


    const emptyObject={ name:"ram"};
    if(Object.keys(emptyObject).length===0){
        // console.log("empty");
    }
    //  console.log(Object.keys(emptyObject).length);

    let variable;
    variable=5??6;
    variable=undefined??7??8;

    // console.log(variable);  


// ++++++++++++++++++ ternary operator +++++++++++++++++++++
// condition?true:false

 let ramAge=20;
 let ramStatus= ramAge>=18?"ram is adult":"he is not adult";
//  console.log(ramStatus);  



// +++++++++++++++++++++++ switch case +++++++++++++++++++++

const books=(bookPrice)=>{
switch(bookPrice){
    case "history" :
        console.log("book price is 100");
        break;
        case "maths" :
        console.log("book price is 300");
        break;
        case "geography" :
        console.log("book price is 900");
        break;
        case "science" :
        console.log("book price is 300");
        break;
        default:
            console.log("book not found");
}}
    // books("science");/

    // ++++++++++++++++++++++++ loops
    //for loop


    for(let i=0;i<=10;i++){
        // console.log(i*2);
    }
    for(let i=1;i<=10;i++){
        // console.log(`table of ${i}`);
        for(let j=1;j<=10;j++){
            // console.log( `  ${j*i}`);
            
        }
    
    }

    // break and countinue

    for(let i=1;i<=10;i++){
        if(i===5){
            // console.log("found 5");
            // break;
            continue;
        }
        // console.log(`${i}`);
    }
    //  while loop

   let name=["rama","ram","sita","gita"];
   let i=0;
    while(i<name.length){
        if(name[i]==="ram"){
            // console.log("correct name");
        
        }else{
            // console.log("not correct name");

        }
        i++
    }

    // do while loop
    let j=1;
     do{
        console.log("hello ram")
        j++;
     }while( j<=10);