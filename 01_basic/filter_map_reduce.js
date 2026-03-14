// - Loop (जैसे for, while) → Control structure है। आप manually index
//     चलाते हो, condition लगाते हो, और iteration manage करते हो।
// - Functions (map, filter, reduce, forEach) → ये array methods हैं। 
//     ये internally loop चलाते हैं, लेकिन आपको loop लिखने की ज़रूरत नहीं होती।

///map that is secoond type of map
//its return array

let array=[1,2,3,4,5]
 let modifyarray=array.map((ele)=>ele*2)
 console.log(modifyarray);

 
 //filter
 //its return selected array elements

 let num=[1,2,3,4,5,6]
 let filterednum=num.filter((num)=>num>3)
 console.log(filterednum);

 
let pens=[
    {
      pencol:"black",
      pencom:"pentonic"
    },
    {
      pencol:"red",
      pencom:"pentonic"
    },
    {
      pencol:"blue",
      pencom:"pentonic"
    },
]
let penfilter=pens.map((pens)=>pens.pencol)
console.log(`pen color :) ${penfilter}`);

//reduce
//accumlator jo har iteration me value stored rakhta hai
 
let pensinfo=[
    {
      pencol:"black",
      pencom:"pentonic",
      price:10
    },
    {
      pencol:"red",
      pencom:"pentonic",
      price:30
    },
    {
      pencol:"blue",
      pencom:"pentonic",
      price:40
    }
]

 let penTotalPrice=pensinfo.reduce((acc,item)=>acc+item.price,0)
//  console.log(penTotalPrice);
 
 let Totalpens=pensinfo.reduce((acc,item)=>{ 
    
       
 })
 console.log(Totalpens);
 
 

 //kyoki ye sabhi methods value return karte hai so inhe variable me store kiya jata hai

  //nesting
let pensinfo2=[
    {
      pencol:"black",
      pencom:"pentonic",
      price:10
    },
    {
      pencol:"red",
      pencom:"ritometer",
      price:30
    },
    {
      pencol:"blue",
      pencom:"sparcale",
      price:40
    }
]

// let totalitem=pensinfo2.map((item,i)=>{
//     return item
// }).reduce((acc,item)=>acc+item.price,0)///jo array map se aayega useko fir ye proccess karata hai
//        console.log(totalitem);
       

  //nesting
let pensinfo3=[
    {
      pencol:"black",
      pencom:"pentonic",
      price:10
    },
    {
      pencol:"red",
      pencom:"ritometer",
      price:30
    },
    {
      pencol:"blue",
      pencom:"sparcale",
      price:40
    }
]

let maps=pensinfo3.map((ele)=>{return ele
}).filter((ele)=>ele.pencom=="pentonic").reduce((acc,item)=>acc+item.price,0)
console.log(maps)



