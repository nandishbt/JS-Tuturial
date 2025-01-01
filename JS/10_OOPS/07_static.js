class User{
    constructor(username){
        this.username = username
    }

    static Myfun(){
        console.log("Im in static");
        
    }
}

const u1 = new User("nandish")

User.Myfun() //gives output

u1.Myfun() // gives error because static methods are object independent