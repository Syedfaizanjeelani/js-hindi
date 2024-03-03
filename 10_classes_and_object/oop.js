
// JO APKA OBJECT HAI WAHI AAPKA OBJECT LITERAL HAI
const user = {
    username : "Faizan",
    loginCount : 8,
    signedIn : true,

    getUserDetail: function() {
        // console.log("Get User Detail From database");
        // console.log(`Username : ${this.username}`);
        console.log(this)
    }
}

// console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this);


//constructor function 
//  YE JO (NEW) WORD HAI YE CONSTRUCTOR FUNCTION BOLTE  HAI 
// const promise = new Promise();
// const date = new Date(); 

function User(username, userLoggedIn, userLoggedOut){
   this.username = username;
   this.login= userLoggedIn;
   this.userLoggedOut = userLoggedOut;

//    return this                  ISKI KOI ZRURAT NHI HAI

}

const userOne = new User("faizan", 21, 21);
const userTwo = new User("Jeelani", 11 , 3)
console.log(userOne);
console.log(userTwo)



