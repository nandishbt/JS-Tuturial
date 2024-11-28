
function myfun(){
    console.log("hi this is function");
    
}

const abc = myfun()

// console.log(abc); //undefined //if function does not return anyhting it will return undefined by default 


function myfun2(n1 ="hi"){ //parameters // n1 == hi by default if dont pass arguments while calling 

    if(!n1){
        console.log("please give n1");
        return
        
    }
    return n1;


}

console.log(myfun2()) // if we dont pass arguments then n1 will eqauls to undefined if doesn't gave default value



function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))
