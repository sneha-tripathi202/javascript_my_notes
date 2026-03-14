// - ये array के हर element पर एक function चलाता है।
// - Important: ये नया array return नहीं करता, बस काम करके undefined देता है।
// - Break/return नहीं कर सकते → मतलब बीच में loop रोकना possible नहीं है।
// - Side effects के लिए best है → जैसे console.log, DOM update, या external variable बदलना।
// - अगर आपको नया array चाहिए → map() या filter() use करें।

let array=  ["ram","sira","smayra","radhu"]


array.forEach((ele)=> {
    console.log(ele+" good");
    
});
array.forEach(( ele,index,array)=>{
    console.log( index + "->:" +ele + "->" + array);
    
    
})
// 0->:ram->ram,sira,smayra,radhu
// [ 'ram', 'sira', 'smayra', 'radhu' ]
// 1->:sira->ram,sira,smayra,radhu
// [ 'ram', 'sira', 'smayra', 'radhu' ]
// 2->:smayra->ram,sira,smayra,radhu
// [ 'ram', 'sira', 'smayra', 'radhu' ]
// 3->:radhu->ram,sira,smayra,radhu
// [ 'ram', 'sira', 'smayra', 'radhu' ]

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
pens.forEach((items)=> {
    console.log(items);
    console.log(items.pencol);
    
    
});
const arra=[4,5,6,7,8]
arra.forEach((value,i,array)=>{
console.log(`${i} : ${value} :) ${array}`);

})

pens.forEach((ele)=>{
   console.log(ele.pencol);
   
})