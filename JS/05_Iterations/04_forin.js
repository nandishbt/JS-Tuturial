
const arr = [1,2,3,4,5]

for (const index in arr) {
//    console.log(index); // 0 1 2 3 4
   
}

const obj = {
    en:'english',
    hi:'Hindi',
    ka:'kannada'
}

for (const key in obj) {
    // console.log(key); //en , hi, ka
    console.log(key + '->' + obj[key]);
    
    
}


const str = "nandish"

for (const index in str) {
    // console.log(index); // 0 1 2 3 4 5 6
    // console.log(str.charAt(index));
    
}




// for in loop used to print keys/ indices only not values , It is not applied to map