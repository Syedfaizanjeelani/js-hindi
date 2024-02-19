// for

// for (let index = 0; index < 10 ; index++)     output 9 tk ayega 
for (let i = 0; i <= 10; i++) {     // agar 10 tak print krana hai to index <= 10 ye or lgaado
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number")
    }
    // console.log(element);

}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop : ${j} and Inner loop ${i}`)
        // console.log(i + `*` + j + `=` +  i*j)         // print table 0 to 10
    }
}

let myArr = ["Flash", "Batman", "Superman"]
console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
    
}


//break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        // console.log(`5 detected`);
        break                                             //  break
    }
//    console.log(`Value of i is  ${index}`);
    
}


for (let index = 1; index <= 20; index++) {
    if(index == 5){
         console.log(`5 detected`);
        continue                                             //continue
    }
         console.log(`Value of i is  ${index}`);
    
}
