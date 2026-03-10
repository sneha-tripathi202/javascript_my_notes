// question 1
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
];

let productAddprice=products.map((item)=>{
    return item.price+(10%100)
})
console.log(productAddprice);

//question2
const students = [
  { name: "Sneha", marks: 80 },
  { name: "Ravi", marks: 40 },
  { name: "Anita", marks: 65 }
];

let studentmark=students.filter((stu)=>stu.marks>50)
console.log(studentmark);

//question3

const orders = [
  { item: "Pen", qty: 2, price: 10 },
  { item: "Notebook", qty: 3, price: 50 }
].reduce((acc,item)=>acc+item.price,0)

console.log(orders);

//question4
const employees = ["Sneha", "Ravi", "Anita"]
.forEach((ele)=> console.log(ele))
console.log(employees);

// question5

const user = { name: "Sneha", age: 22, city: "Indore" };

for (const key in user){

  console.log(`${key} and value :> ${user[key]}`);
}

// question6
const colors = ["red", "green", "blue"];
for (const element of colors) {
    console.log(element);
    
}





