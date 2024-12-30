
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


function rest(val1, val2, ...val3){ //REST opertator is always placed in last

    console.log(val3);
    

}

rest(1,2,3,4,5) //val1 = 1, val2= 2, val3 = [3,4,5]


