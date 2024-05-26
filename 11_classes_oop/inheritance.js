class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addCourses(){
        console.log(`New course was added by ${this.username}`);
    }

    encryptPassword(){
        return `${this.password}fakdsljfsad`;
    }
}


const teacher1= new Teacher("Shubham","shubham@gmail.com","password");
console.log(teacher1.logMe());
console.log(teacher1.addCourses());
console.log(teacher1.encryptPassword());


const user=new User("shubham");
user.logMe();

console.log(user===teacher1);
console.log(teacher1===Teacher);
console.log(teacher1 instanceof Teacher);
console.log(teacher1 instanceof User);

