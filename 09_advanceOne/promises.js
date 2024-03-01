const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // Db call, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000);
})

promiseOne.then(function () {
    console.log("promise done done")
})


//

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async one is completed")
        resolve();
    }, 1000)
}).then(function () {
    console.log("Async two is completed")
})


//
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            userName: "Chai",
            email: "chai@example.com",
        })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

// 
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        // let error = false;
        if (!error) {
            resolve({ name: "faizan", surname: "Syed" })
        } else {
            reject("Error : Something went wrong")
        }
    })
}, 1000)

promiseFour
    .then((user) => {
        console.log(user);
        return user.name
    })
    .then((name) => {
        console.log(name)
    })
    .catch((error) => {
        console.log(error)
    }).finally(() => console.log(`The promise is resolve or either rejected`));


//

const promiseFive = new Promise(function (resolv, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolv({ userNamename: 'Javascript', password: "123" })
        } else {
            reject("Error: Js was wrong")
        }
    })
})
async function consumePromiseFive() {    //async directly error ko handle nhi kar sakte
    try {
        const response = await promiseFive
        console.log(error)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()


//
//  async function getAllUser(){
// try{

//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data)
// }catch(error){
//     console.log("E :" , error);
// }
//  }
//  getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log(error))