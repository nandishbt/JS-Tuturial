function UserName(username){
    this.username = username
}

function User(username,age,sex){

    UserName.call(this,username)
    this.age = age
    this.sex = sex

}

const u1 = new User("nandish",23,"male")

console.log(u1);

//call used to specify the value of this keyword inside the function while calling a function we use .call and first argument will be the value of this keyword inside that function
