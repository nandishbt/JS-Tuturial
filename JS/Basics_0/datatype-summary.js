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





