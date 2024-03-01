const promiseOne = new promise ( function(resolve, reject){
    // Do an async task
    // Db call, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000);
})

promiseOne.then(function(){
    console.log("promise done done")
})


//

new Promise(function(resolve, reject){
    setTimeout( function(){
        console.log("Async one is completed")
        resolve();
    },1000)
}).then(function(){
    console.log("Async two is completed")
})


//
const promiseThree = new promise 