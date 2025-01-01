//ES6
class User{

    constructor(username,age){
        this.username = username
        this.age = age
    }

    capitalize(){  //method
        return `${this.username.toUpperCase()}`
    }
}

const u1 = new User("nandish",23)

// console.log(u1.capitalize());


//behind the scenes

function User2(username,age){
    this.username = username
    this.age = age

}


User2.prototype.toUpper = function(){
    return this.username.toUpperCase()
}


const u2 = new User2("nandish",21)

console.log(u2.toUpper());

