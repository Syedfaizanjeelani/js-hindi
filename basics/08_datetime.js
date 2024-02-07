// DATES
// Date EAK OBJECT HOTI HAI JAVASCRIPT K ANDAR

let myDate = new Date()
console.log(myDate)
// console.log(myDate.toString())
// // console.log(myDate.toDateString());
// // console.log(myDate.toISOString());
// // console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());


// let newDate = new Date(2024, 0, 14)    // NEW DATE DECLARE METHOD 1
// let newDate = new Date(2024,0,14,5,4)
let newDate = new Date ("01-14-2024")    // MM-DD-YYB 
// console.log(newDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(newDate.getTime())


// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000))


let anotherDate = new Date()
// console.log(anotherDate.getMonth() + 1);
// console.log(anotherDate.getDate());


console.log(anotherDate.toLocaleString('default', {
    weekday:"long",
 

}))

// fulllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll

const date = new Date("2020-05-12T23:50:21.817Z");
date.toString(); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)
date.toDateString(); // Tue May 12 2020
date.toTimeString(); // 18:50:21 GMT-0500 (Central Daylight Time)
date[Symbol.toPrimitive]("string"); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)

date.toISOString(); // 2020-05-12T23:50:21.817Z
date.toJSON(); // 2020-05-12T23:50:21.817Z

date.toUTCString(); // Tue, 12 May 2020 23:50:21 GMT

date.toLocaleString(); // 5/12/2020, 6:50:21 PM
date.toLocaleDateString(); // 5/12/2020
date.toLocaleTimeString(); // 6:50:21 PM


