const arr = [1,2,3]

Array.prototype.Myname = function(){
    console.log("My Name is Array");
    
}

//Myname method is added to the prototype of Array Object now it is availbale everywhere in this file in arr

// arr.Myname()

const arr2 = [4,5,6]

// arr2.Myname()

//Object

Object.prototype.chai = function(){
    console.log("Welcome to drink chai");
    
}

//chai method  is added to prototype of Object 

// arr.chai()
//since array, string, object are all of Object type only so they can access chai method which is in proto of Object


const obj = {
    name:'nandish',
    age:26
}

// obj.chai()


//Inheritance

const school = {
    schoolName:"STJ", 
}

const stu = {
    name:"nandish",
    __proto__:school //all the prop and methods in school are inherited to student
}

// stu__proto__ = school

console.log(stu.schoolName); //STJ


//Moder Syntax of Inheritance

const Country = {
    countryName : "India"
}

const member1 = {
    name:"Nandish"
}

Object.setPrototypeOf(member1,Country)

console.log(member1.countryName);

//Task -> define truelength method which will print true lenghth irrespective of spaces


String.prototype.trueLength = function(){
    console.log(`true length ${this} is ${this.trim().length}`);
    
}

const str = "nandish       "

console.log(str.trueLength());




