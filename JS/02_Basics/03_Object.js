//singleton //Object.create

//Object Literals

let b = Symbol("Email")

const obj = {
    name:"nandish", //"name" : "nandish"
    age:23,
    [b] : "nandishbt@gmail.com"

}

let a = 'name'


console.log(obj.name);

console.log(obj[a]); //obj['name']

console.log(obj);

// Object.freeze(obj) //we dont be able make changes to obj

obj.Myfun = function(){
    console.log(`hello ${this.name}`); //this keyword reffered to current object i. e obj
    
}

console.log(obj.Myfun()); //Hello nandish

console.log(obj);







