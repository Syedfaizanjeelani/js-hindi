
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



console.log(typeof myFunction);
