
// var c = 300  // or jo bhar likhte hai use global scope khete hai


// ({}) ye zyadatar language mai scope hota hai
let a = 300
if(true){                      // jo curli braces k andar hote hai use block scope khete hai
    let a = 10
    const b = 20                   // jo value ham scope ke andar likhte hai wo bahar nhi jana chayye
    // console.log("INNER :", a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Faizan"

    function two(){
        const website = "youtube"
        console.log(username);
        console.log(website);
    }
    two()
  
   
}
// one()

if(true){
    const username = "Faizan"
    if(username === "Faizan"){
        const website = " Youtube";
        // console.log(username + website)
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++++

function addone(num){                        // ise Function he bolte hai
    return num + 1   
}

addone(5)


const addTwo = function(num){                // ye bhi function but ise kabhi kabhi expression bhi boldete hai
    return num + 2
}
 
addTwo(6)