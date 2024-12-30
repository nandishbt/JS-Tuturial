const arr = new Array(1,2,3)

Array.prototype.myname = function(){
    console.log("Nandi");
    
}

// arr.myname()



function User(username,age){
    this.username = username
    this.age = age
}

User.prototype.printName = function(){
    console.log(`Username is ${this.username}`);
}

//printName method is added inside prototype of object which is created using User constructor


const user1 = new User("nandish",23)

user1.printName();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/






