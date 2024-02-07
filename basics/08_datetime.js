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



