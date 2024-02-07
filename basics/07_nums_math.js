const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2));

const otherNumber = 123.444
// console.log(otherNumber.toPrecision(4)) //dhyan se used kren


const hundred = 10000000
// console.log(hundred.toLocaleString('en-IN'))



// ************************************ Maths *************************************************

console.log(Math)

console.log(Math.abs(-4));            // sirf negative value positive mai hojati hai
console.log(Math.round(4.3));         // decimal value htadete hai
console.log(Math.ceil(4.2)) ;         // ceil mtlb upr wali value jo number hai uska eak number bdha denege
console.log(Math.floor(4.2)) ;        // floor mtlb neeche se  (lowest value hi lega)
console.log(Math.min(2,4,3,5,1));     // Minimum Value btata hai
console.log(Math.max(2,4,3,7,9));     // Maxium Value btata hai



console.log(Math.random())            // random ki value hamesha 0 or 1 k beech mai hi value ati hai
console.log(Math.floor((Math.random() *10) +1));    //+1 isliye lgate hai kyu ki minimum value 1 hi ayegi agar 1 nhi lgate to value 0 mai bhi ja sakti thi


const min = 10;
const max = 20;

console.log(Math.floor (Math.random() * (max - min +1) + min))    //https://www.youtube.com/watch?v=_KqpeDc47Ro&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=13