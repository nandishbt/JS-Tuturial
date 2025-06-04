const arr = [1,2,3,4,5,6]

const arr2 = new Array(0,1,2,3,4,5)

// console.log(arr);
// console.log(arr2);

console.log(arr.indexOf(45)); //-1

arr.pop() //removes last elem
arr.push(6) //add 6 to end of array
arr.shift() //remove first elem
arr.unshift(1) //add elem to start of array

console.log(arr.slice(1,3)) //return portion of the array from index 1 to index 3 where index 3 not included

arr.splice(1,3) //removes  3 elems from index 1 
console.log(arr);



