const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username,age){

    this.username = username
    this.age = age
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this //not necessary this will returnrd in default
}

//User is a constructer function which will create and return object

const user1 = new User("nandish",23)
const user2 = new User("swathi",21)

console.log(user1);
console.log(user2);

