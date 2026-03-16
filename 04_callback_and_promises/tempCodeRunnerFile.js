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

