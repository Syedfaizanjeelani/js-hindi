function sayMyName(){
    console.log("F")
    console.log("a");
    console.log("i");
    console.log("z");
    console.log("a");
    console.log("n");

}
// sayMyName()

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);

// }



// function addTwoNumbers(number1 , number2){
//     // console.log(number1 + number2);                           //return krne k baad koi cheez print nhi hoti unreacheble code dikhadega
//     return number1 + number2

// }
//  const result = addTwoNumbers(3,7)
//  console.log(`result : ${result}`);



function loggedInUser(username = "Faizan"){
    if(!username){
        console.log("Please enter your usernme");
        return

    }
        return `${username} now logged in`;
}

// console.log(loggedInUser("Syed Faizan"))


function calculateCartPrice(value1, value2 ,...num1){                   //(...) ise rest operator bhi khete hai or spread method bhi khete hai
    return num1
}

// console.log(calculateCartPrice(200,210,230, 400));     // phela number or dusra number value1 or value2 mai jayegi baaki array mai



//object 
const user = {
    username : "Faizan",
    price : 199

}

 function handleObject(anyobject){
        console.log(`the username is ${anyobject.username} and the price is ${anyobject.price}`);
 }
//  handleObject(user)
handleObject({            //object direct bhi ese desakte hai
    username:"Jeelani",
    price : 399
})


// array pass function mai

const myNewArray = [200, 300, 400, 500];
function returnSecondValue(anyArray){
    return anyArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([400,500,600,700]));         //direct value bhi de sakte hai
