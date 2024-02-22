const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const newNums = number.map( (num) => {
//     return num + 10
// })
// console.log(newNums)

// const newNums = number.map().map().filter                                     //CHAINING USE KHETE HAI JO EAK SE ZYADA METHOD USE KRTA HOO


const newNums = number
            .map( (num) => num * 10)
            .map( (num) => num + 1)                  // kitne bhi method lgalo eak sath use chaining khenge
            .filter((num) => num >= 40 )              //filter mai true or flse wala game hai
console.log(newNums)