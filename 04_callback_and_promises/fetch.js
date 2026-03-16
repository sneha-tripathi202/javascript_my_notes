









//promise creation

// const clickme = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         var i = false;
//         if (i == true) {
//             console.log("promise one .........");
//             resolve({
//                 name: "sneha",
//                 age: 21
//             });
//         }
//         else {
//             reject();
//         }
//     }, 2000);
// })


// ///promise cosumtion
// clickme.then((personalinfo) => {
//     console.log(personalinfo);
//     return personalinfo.name;

// }).then((name) => {
//     console.log(name);

// }).catch((err) => {
//     console.log("error");

// }).finally(() => {
//     console.log("promise is completed");

// })

// const click = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         var i = false;
//         if (i == true) {
//             console.log("promise one .........");
//             resolve({
//                 name: "sneha",
//                 age: 21
//             });
//         }
//         else {
//             reject();
//         }
//     }, 2000);
// })

// console.log("async funtion");

// async function changeme() {
//     try {
//         let promise = await click
//         console.log(promise);

//     } catch (error) {
//         console.log("Error in asyc");

//     }
// }
// changeme();


//fetch api

async function fetchData() {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');
        if (!response.ok) {
            throw new Error(`respose status :${response.status}`);
        }
//  -  throw ek error uchaal deta hai.(Execution stop, error handling flow trigger)
// - Execution turant ruk jaata hai aur control catch block me chala jaata hai.
// - Agar error handle nahi karte, to program crash ho jaata hai.
// 👉 Easy way: throw = error ko forcefully uchaalna taaki catch usse pakad sake.


        const json = await response.json();
        // console.log(json);
    } catch (error) {
        console.error("ERROR:", error.message)
    }
}
fetchData();


