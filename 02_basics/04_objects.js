// Singleton

// const tinderUser = new Object()   //Singleton Object
const tinderUser = {}                // Non singleton Object

tinderUser.id = '12abc'
tinderUser.name = "Faizan"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "faizan@google.com",
    fullname:{
      userfullname :{
        firstname : "Syed Faizan",
        lastname : "Jeelani"
      }

    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const object1 = {1: "a", 2 : "b"}
const object2 = {3: "c", 4: "d"}


// const object3 = Object.assign({}, object1, object2)   // empty object leliya target ko & baki object ko source leliya mne
const object3 = {...object1,...object2}              // (...) spread method
// console.log(object3)

const user = [                             // Array ka Object ho
    {
        id : 1,
        gmail : "faizan@google.com"
    },
    {
        id : 1,
        gmail : "faizan@google.com"
    },
    {
        id : 1,
        gmail : "faizan@google.com"
    }
]
user[1].gmail;

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))  // hm jab keys lgayenge to output hmara array mai ayegaa fir ham in sab pe loop lgaa sakte hai
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))      //ye btata hai hmare pass ye property hai  to true btayega nhi hai to false btadega


// course .courseInstructor

const course = {
    coursename : "Faizan ka course",
    price : "999",
    courseInstructor : "faizan"
}

const {coursename} = course;
console.log(coursename);