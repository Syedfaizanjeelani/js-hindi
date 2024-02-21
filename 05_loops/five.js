const coding  = ["js", "cpp", "python", "java", "c"]
// coding.forEach(function(val1){                         // call back function mai kabhi function ka naam nhi likhte bas parameter dete hai
//     console.log(val1)
// })

// coding.forEach((val1)=>{         //by arrow function
// console.log(val1)
// })

// function printMe (item){
//     console.log(item)
// }                                        //  ese bhi karsakte hai
// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName : " Javascript",
        languageFileName : "js"

    },

    {
        languageName : " java",
        languageFileName : "java"

    }, 

    {
        languageName : " cpp",
        languageFileName : "c++"

    }
]

myCoding.forEach((item)=>{
    // console.log(item)
    console.log(item.languageName)
})
