/*
Javascript Execution Context-

1. Global Execution Context
2. Functional Execution Context
3. Eval Execution Context --used in mongoose

Execution  will be done in 3 steps

1. Global EC

2.Memory creation phase
----> where all the variable and function declarations are stored

3.execution phase
----->where all the execution takes place

*/

let val1 = 5;
let val2 = 10;

function add(num1,num2){
    let result = num1 + num2
    return result
}

let result = add(val1,val2)


/*

Executing above code

memory allocation phase ->

val1 = undefined
val2 = undefined
add = function defn
result = undefined


execution phase->

val1 = 10
val2 = 5
add = separate execution context will be created executed in other thread
result = 15
*/