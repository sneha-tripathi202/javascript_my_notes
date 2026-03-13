let date=new Date()
console.log(date);//2026-03-13T06:39:39.974Z
console.log(Date.now());//1773384014955 Returns the number of 
// milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time

let specifcdate=new Date(2026,3,12)
console.log("s" , specifcdate);//s 2026-04-11T18:30:00.000Z al din pehle
//  ki date btata hai
const datefromTimestamp=new Date(1773384013955) // timestamp de sakte hai
//  1 jan 1970 ke hisab se
console.log(datefromTimestamp);//2026-03-13T06:40:13.955Z

let specifcdates=new Date()
console.log( "t" ,specifcdates.getTime());
console.log(specifcdates.getFullYear());
console.log(specifcdates.getMonth());
console.log(specifcdates.getDate());//12
console.log(specifcdates.getDay());//25
console.log(specifcdates.getHours());//12
console.log(specifcdates.getMinutes());//25
console.log(specifcdates.getSeconds());//1
console.log(specifcdates.getMilliseconds());//232

console.log(specifcdates.toDateString());
console.log(specifcdates.toString());//Fri Mar 13 2026 12:28:47 GMT+0530 (India Standard Time)
console.log(specifcdates.toLocaleString());//13/3/2026, 12:28:47 pm india time





