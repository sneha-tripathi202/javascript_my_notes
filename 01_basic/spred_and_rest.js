//  Rest Operator (...)
// - Rest operator का इस्तेमाल तब होता है जब हमें multiple values को एक
//  ही variable में collect करना हो.
// - Syntax: function(...args)
// - Example:


function rest(a,b,...rest){
    console.log(a,b,...rest);
    
}

rest([1,2,3,4,5,6])//return array

// 🌟 Spread Operator (...)
// - Spread operator का इस्तेमाल होता है जब हमें array या object को expand करना हो.
// - Syntax: [...array] या {...object}
// - Example:

let array1=[1,2,3,4]
let array2=[4,5,6]
console.log(...array1,...array2);
