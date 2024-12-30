const arr1 = [1,2,3]
const arr2 = [4,5,6]

// arr1.push(arr2); //modifies the original array
// console.log(arr1); //[1,2,3,[4,5,6]]

const concat_arr = arr1.concat(arr2) //returns new concatenated array
console.log(concat_arr); //[1,2,3,4,5,6]


//spread operator
const spred = [...arr1, ...arr2] 
console.log(spred); //[1,2,3,4,5,6]


//flat method
const arr3 = [1,2,3,[4,5,6],7,8,[9,10,[11,12]]]
console.log(arr3.flat(Infinity)) //[1,2,3,4,5,6,7,8,9,10,11,12] //returns new array does not modify original


//isArray, from,of

const name = "Nandish"
const arr4 = [4,5,6,7]
const obj = {name:"hari"}

console.log(Array.isArray(name)); //false
console.log(Array.isArray(arr4)); //true

console.log(Array.from(name)); //['N', 'a', 'n',  'd', 'i', 's', 'h' ]

console.log(Array.from(obj)); //[] //we have to specify whether to create create array from keys or columns

console.log(Object.keys(obj)); //['name']

console.log(Object.values(obj)); //['hari']


const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3)); //[100,200,300]











