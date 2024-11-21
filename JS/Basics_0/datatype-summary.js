//primitive datatype

//String,Number,Boolean,BigInt, null, undefined,symbol

let unique = Symbol("123") 

let anotherUnique = Symbol("123")  //symbol create the uniqueness to value 

console.log(unique == anotherUnique); //false

let bigNumber = 154541564564561545645645445n;


//Reference Datatype-NOn Primitive
//Arrays,Objects,Functions

// reference are stored in memory

const obj = {
    name:"Nandish",
    age:22
}

obj.name = "jay"
console.log(obj);

console.log(typeof obj); //Object type

//all reference types are of object types



/* 
//datatypes are based on memory allocation
Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory
These variables are assigned a value and stored in stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory


JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.





*/

let a = 10; //a is stored in Stack memory holding value 10
let b = a; //b is also stored in stack which copies the value of a 

let obj = {
    name:"nandish"}  //obj,obj2 variables is stored in stack memory and actual object is stored in heap obj points to object
                    //i.e   stack------------------heap
let obj2 = obj      //       a=10,
                    //       b=10
                    //      obj,obj2 ---------------->>>{name:"nandish}"
                     //               







