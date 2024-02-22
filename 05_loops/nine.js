const myNums = [1,2 ,3]

// const myTotal = myNums.reduce( function( acc, currval){
//     console.log(`acc value ${acc} and currval ${currval}`);
//         return acc + currval
// }, 0)


// in arrow function
// const myTotal = myNums.reduce( (acc , currval) =>  acc + currval ,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course ",
        itemPrice : 2999
    },
    {
        itemName : "py course ",
        itemPrice : 999
    },
    {
        itemName : "mobile dev course ",
        itemPrice : 5999
    },
    {
        itemName : "data science  course ",
        itemPrice : 12999
    },
]

 const pricePaye = shoppingCart.reduce ( (acc, item) =>  acc + item.itemPrice ,0)
console.log(pricePaye);