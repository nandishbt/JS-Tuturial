class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    set email(value){
        this._email = value
    }

    get email(){
        return this._email.toUpperCase()
    }

    set password(value){
        this._password = value
    }

    get password(){
        return `${this._password}ehgkuieryfbcrugyb12346`
    }


}


const u1 = new User("nan@a",123)
console.log(u1.email); //NAN@a it is returned from getter


//another way of using getter and setter earlier

function Teacher(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'email',{
        set:function(value){
            this._email = value
        },

        get:function(){
            return this._email.toUpperCase()
        }
    })


    Object.defineProperty(this,'password',{
        set:function(value){
            this._password = value
        },

        get:function(){
            return this._password + "hjfg145gfh"
        }
    })
}


const teacher1 = new Teacher("t@t.com",1234)

console.log(teacher1.password);


//Using getter and setter in Objects

const obj = {
    _email : "h@h.com",
    _password : "123",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
            this._email = value
    }

}

console.log(obj.email);




