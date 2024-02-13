const user = {
    username : "Faizan",
    price : 999,


    welcomeMessage :  function(){
            console.log(`${this.username} ,  Welcome to website`)
            // console.log(this);
    } 
}

// user.welcomeMessage()
// user.username = "Sam"               // Context ka mtlb hai simple value
// user.welcomeMessage()

// console.log(this);


// function chai(){                 1- method
    // let username = "Faizan"
    // console.log(this.username)     // ham ye function mai use nhi kar pa rhe hai ye bas object mai use ho rha hai
// }

// chai()


// const chai = function(){          2- method
//     let username = "Faizan"
//     console.log(this.username)
// }
// chai()

const chai = () =>{                // 3 - method arrow function
    let username = "Faizan"
    console.log(this)
}

// chai()


// const addTw0 = (num1 , num2) =>{               //basic arrow function
//     return num1 + num2
// }

// const addTw0 = (num1 , num2) => num1 + num2            //IMPLICIT RETURN ISME (RETURN USE NHI HOTA HAI)HAME PARANTHESIS({}) USE NHI KRNA PADHTE 


// const addTw0 = (num1 , num2) => (num1 + num2)     // RETURN USE HOGA USME PARANTHESIS USE KRNA HI PDHTA HAI

const addTw0 = (num1 , num2) => ({username: "Faizan"})             // ye  object ese return hota hai
 console.log(addTw0(5,5))