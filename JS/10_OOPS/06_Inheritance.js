class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Hey Im in User and my username is ${this.username}`);
        
    }
}


class Teacher extends User{
    constructor(username,age,sex){
        super(username)
        this.age  = age
        this.sex = sex
    }

    course(){
        console.log(`welcome to my course im ${this.age} years old`);
        
    }
}


const u1 = new Teacher("nandish",23,"male")

u1.logMe()
console.log(u1);
u1.course()


