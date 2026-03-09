//for  loops
//loop1
for (let i = 0; i < 5; i++) {
    console.log(`value of ${i}`);
    
}

//loop2
for (let i = 0; i < 5; i++) {
    console.log(`value of ${i}`);
    for (let j = 0; j < 4; j++) {
    console.log(`value of ${j}*${i}=${j*i}`);
        
    }
}

//loop3 with aaray
let array=["ram","sita","utkarsh","sneha","swati","santosh","aasha"]
for (let i = 1; i < array.length; i++) {
    const element = array[i];
    console.log(`array elements ${i}:)${element}`);
}

//break and continue
//loop4 with break
for (let i = 0; i < 5; i++) {
 if(i==3){
    console.log("detected");
    break;
 }  
 console.log(i);
   
}
//loop5 with continue
for (let i = 0; i < 5; i++) {
 if(i==3){
    console.log("detected");
    continue;//use specific state ko chood deta hai aur aage bad 
    // jata ha jise ham detect kar rahe hote hai 
 }  
 console.log(i);
   
}
//while loop
let a=1
  while (a<=10) {
    console.log("love you");
    a++;
  }

  //do while

  let b=2
  do {
   console.log("b is good");
    b++
  } while (b<5);