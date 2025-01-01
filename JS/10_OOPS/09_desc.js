const pi = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(pi);
/* 
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}


*/



const obj = {
    name:"nandish",
    age:"23"
}

console.log(Object.getOwnPropertyDescriptor(obj,"name"));

Object.defineProperty(obj,"name",{
    writable:false, //cant change name in obj
    enumerable:false // cant iterate through name in obj
})

// console.log(Object.getOwnPropertyDescriptor(obj,"name"));

obj.name = "hitesh" //not possible

console.log(obj.name); //nandish




