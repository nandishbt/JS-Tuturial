const arr = [1,2,3,4,5]

for(const num of arr){
    // console.log(num); // 1 2 3 4 5
    
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

const map = new Map()

map.set('In','India')
map.set('US','America')

// console.log(map);

for (const [key,value] of map) {
    console.log(key);
    console.log(value);
      
}

//map does not contain duplicates , 

//for of loop used to print values not keys so it is not used in object
//for of loop used only in array, string, map but not in objects
