// arrays 

const myArr = [0,1,2,3,4]                              // 1 methods to declare array
const myHeroes = ["IronMan", "Hulk", "Thor"]           // 2 methods to declare array
const myArr2 = new Array(1,2,3,4)                      // 3 methods to declare array

console.log(myArr[3]);


//Arrays Methods

// myArr.push(5,6,7)     //push ke andar jo value dete hai wo un values ko  lgadet hai array mai
// console.log(myArr);


// myArr.pop()           //pop ke andar hame kuch nhi dena padhta hai jo last ki value hoti hai use bs remove krdenge
// console.log(myArr);

// myArr.unshift(0);     // sabse pheli value mai add kregi 
// myArr.shift();           // pheli wali value htadegi    




// console.log(myArr.includes(3));   // includes true or false mai btata hai agar value array mai hogi to true warna false
// console.log(myArr.indexOf(3))     // indeof agar value hogi array to print kradega warna -1 print kradenge mtlb mujhe nhi pta 



// const newArray = myArr.join()    //join hmare array ko bind bhi krdeta hai or type bhi krdeta hai(string)
// console.log( newArray);
// console.log(myArr);


// +++++++++++++++++++ SLICE & SPLCE +++++++++++++++++++++++++++++++++++++++

const myn1 = myArr.slice(1,3)  //slice original array ko manipulate krta hai
console.log("A" ,myArr);       // isme original array same rhega slice lgane ke baad
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)  //splice original array ko manipulate nhi krta hai  
console.log("C",myArr);         // isme original array ko change krdega splice lgaane ke baad
console.log(myn2);