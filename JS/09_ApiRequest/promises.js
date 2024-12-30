new Promise(function(resolve,reject){
    setTimeout(()=>{
        // console.log("1 async task completed");
        resolve()  //once the resolve is called then promise is done no more execution happens in here
        reject() //not executed
          
    },1000)
}).then(()=>{
    console.log("promise 1 consumed")})
  .catch(()=>{
        console.log("Error thrown");
        
    })


const promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(()=>{

        let success = true

        if(success){
            resolve("promise 2 is consumed")
        }

        reject("Something went wrong")
    },1000)
})

promiseTwo
.then((msg)=>{
    console.log(msg);
    return "chain"
    
})

.then(msg=>{
    console.log(msg);
    
})
.catch((msg)=>{
    console.log("ERROR :" + msg);
    
})


const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{

        if(true){
            resolve({name:"nandish"})
        }

        reject("Error")
    },1000)
})


async function threeHandler(){
    try {
        const response = await promiseThree

         console.log(response);  //{ name: 'nandish' }
        
    } catch (error) {

        console.log(error); //Error
        
        
    }
    
}

threeHandler()




// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
