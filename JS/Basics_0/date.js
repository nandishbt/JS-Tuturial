let date = new Date()
// console.log(date); //2024-11-24T11:06:40.862Z

// console.log(date.toDateString());//Sun Nov 24 2024

// console.log(date.toISOString()); //2024-11-24T11:08:10.504Z

// console.log(date.toJSON());////2024-11-24T11:08:10.504Z

// console.log(date.toString());//Sun Nov 24 2024 11:10:16 GMT+0000 (Coordinated Universal Time)

// console.log(date.toLocaleDateString('en-IN')); //24/11/2024 ->gives indian format

// console.log(date.toLocaleString('en-IN')); //24/11/2024, 11:13:10 am



console.log(Date.now()); //1732446884086


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()+1);

// `${newDate.getDay()} and the time `

let yy = newDate.toLocaleString('en-IN', {
    weekday: "long",
    month:"long",
    day:"2-digit",
    year:"numeric"
    
})


yy = yy.split(" ");//[ 'Sunday', '24', 'November,', '2024' ]

const[weekday,day,month,year] = yy;

console.log(weekday); //Sunday











