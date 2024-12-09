// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log("DB Connected");
    
})(); //semicolon very important to stop iife and to write next iife


(
    (name)=>{
        console.log(`${name}`);
        
    }
)('nandish'); //to pass arguments 

//named iife not possible with es6