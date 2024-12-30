let a = "33"
a = Number(a);
// console.log(a); //33
// console.log(typeof a); // Number


let b = "hbf";
b = Number(b);
// console.log(typeof b); //Number
// console.log(b); //NaN(Not a Number) -> anything which is not a string number converted to number will gives naN


let c = null
c = String(c)
// console.log(c); //Null
// console.log(typeof c); //String

let d = 56;
d = String(d)
// console.log(d); //56
// console.log(typeof d); //String

let e = undefined
e = String(e)
// console.log(e); //undefined
// console.log(typeof e); //String

let f = 0; //0 null undefined Nan "" will give boolean value as false
f = Boolean(f);
// console.log(typeof f); //Boolean
// console.log(f); //false



//******************************************************OPERATIONS*************************************************************** */

/* String conversion of a Number */  //This will perform concatenation
// console.log(1 + 1); //2
// console.log(1 + "1"); // 11
// console.log("1" + 1); //11
// console.log("1" + 1 + 1); //111
// console.log(1 + 1 + "1"); //21 


/* Number conversion of a String */ //performs substraction 
console.log(2 - "1"); // 1
console.log("2" - "1"); //1
console.log("2" - 1); //1

// console.log(+true); //1
// console.log(+""); //0


let bb = 45
let cc = bb++; //this is assign value first and increment next
// console.log(bb); //46
// console.log(cc); //45


let dd = 100
let ee = ++dd //this will increment first and then assign 
// console.log(dd);
// console.log(ee);



// while(bb<50){
    
//     console.log(bb);
//     bb;
    
// }


















