// console.log("2" > 1); //true
// console.log("10" > "2"); //false only first chars are comapred

console.log(null>0); //false i.e, null = 0
console.log(null == 0); //false, null is not converted
console.log(null>=0);//true i.e, null = 0
/*  null is converted to zero when using comparison operators like greaterthan(>),lesserthan(<) */

console.log("Checking for undefined");

console.log(undefined ==0); //false
console.log(undefined > 0); //false
console.log(undefined >=0); //false

console.log("check for ===");

console.log("2" === 2) //false bcz., datatype is also compared 
console.log(2===2); //true
console.log("2" === "2"); //true
/* here first datatypes are checked then values are checked */














