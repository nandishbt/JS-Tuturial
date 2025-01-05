// console.log(this); // {} where as in browser it gives window object

function add(){
    console.log(this); //global object  
}

// add()

const add2 = ()=>{
    console.log(this); //{}
}

// add2()


const obj = {
    username : "nandish",
    age:23,
    greet : function(){
        // console.log(this); 
        //{ username: 'nandish', age: 23, greet: [Function: greet],greet2:[Function:greet2] }

        const innergreet = ()=>{
            console.log(this); //{ username: 'nandish', age: 23, greet: [Function: greet],greet2:[Function:greet2] }
            
        }

        innergreet()


        
    },

    greet2 : ()=>{
        console.log(this); //{}
        
    }
}




function abcd(){
    // console.log(this);
    const abcd2 = ()=>{
        console.log(this); //global
        
    }

    abcd2()
    
}

abcd()


// obj.greet()

//this keyword in es5 function will referred to its current object or context where it lies 

//this keyword in es6 function will referred to value of this keyword in its outer function if there is no outer function 
//it gives empty object in  nodejs  env


//+++++++++++++++++++++++++++++++++++++++++Arrow functions +++++++++++++++++++++++++++++++++++++++++++++++++

const arrow = (n1,n2)=>{
    console.log("this is a simple arrow function");
    
}

const arrow2 = (n1,n2) => n1+n2 //with implicit return 


const arrow3 =()=>({username:"nandish"}) //to return object

//value of this keyword in browser

//global --> window object
//inside function(both es5 and es6) --> window object
//indide es5 method --> current object
//inside es6 method --> window object



