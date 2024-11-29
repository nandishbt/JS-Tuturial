

if(true){
    // let a = 10 // a is visible in block only
// const b = 20 // b is visible in this block only
// var c = 30 //visible everywhere

}

// console.log(`a = ${a} , b = ${b}, c = ${c}`)

let a = 10;
const b = 20;
var c = 30;

if(true){
    
    // console.log(`a = ${a} , b = ${b}, c = ${c}`) //a = 10 , b = 20, c = 30
}


//inner functions

function One(){
    const name = "nandish"
    function Two(){
        const age = 23;
        console.log(name);
        
    }
    // console.log(age); //gives error because age variable not visible outside its block

    Two()
    
}

// One()


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //Gives 6 
function addone(num){
    return num + 1
}


addTwo(5) //Gives Error
const addTwo = function(num){
    return num + 2
}




