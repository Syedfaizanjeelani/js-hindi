// Singleton





// Object literals
const mySym = Symbol["key1"]

const jsUser = {
    name : "Faizan",
    "full name" : "Syed Faizan",
    [mySym]: "myKey1",                       // agar ise symbol ki trah use krna hai to variable pe square bracket lgana hau []
    age : 16,
    location : "Jaipur",
    email : "Faizan@google.com",
    isLoggedIn : false,
    lastLoginDay : ["Monday", "Saturday"]
}

console.log(jsUser)
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


// jsUser.email = "faizan@chatgpt.com"
// Object.freeze(jsUser)
// jsUser.email = "faizan@microsoft.com"


jsUser.greeting = function(){
    console.log("hello js User")
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo());

