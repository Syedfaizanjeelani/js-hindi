
// DATA TYPE CHECK
//  1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



// PRIMITIVE 

// 7 Types : STRING, NUMBER, BOOLEAN , NULL, UNDEFINED, SYMBOL, BIGINT 

const score = 100
const scoreValue = 100.3
const loggedIn = false
const value = null
let myEmail;

// SYMBOL ( AGAR KISI CHEEZ KO HAM EUNIQUE BNANA HAI)
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 2223332332323n //n lgado to bigint ho jata hai 
// console.log(typeof bigNumber);





// REFRENCE TYPE (NON PRIMITVE

// ARRAY, OBJECTS, FUNCTIONS

const hero = ["Hulk", "IronMan", "Thor"]

let obj = {
    name : "Faizan",
    age  : 21
}

const myFunction = function(){
    console.log("Hello WorlD")
}



// console.log(typeof myFunction);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// STACK(PRIMITIVE) AND HEAP(NON PRIMITIVE) MEMORY 
// STACK MAI AGAR HAM KOI CHEEZ LENGE TO HAMKO USKA EAK COPY HE MILTA HA
// HEAP MAI AGAR KOI VALUE RAKHTE HAI TO HAMO USKA REFRENCE HE MILTA HAI
// HEAP = JO BHI CHANGES KRTE HAI USKI ORIGINAL VALUE MAI HI KRTE HAI BUT STACK MAI HAME USKA COPY MILTA HAI

let myYoutubeName = "bratvabeast"
let anotherName = myYoutubeName
anotherName = "Faizan"

console.log(myYoutubeName)
console.log(anotherName)


let userOne = {
    email : "faizan@google.com",
    age : 21
}

let userTwo = userOne
userTwo.email = "Jeelani@google.com",

console.log(userOne)
console.log(userTwo)
