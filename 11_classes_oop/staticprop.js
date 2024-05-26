class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const user = new User("Shubham");
// const id = user.createId();
// console.log(id);

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}

const teacher1= new Teacher("ShubhamOG","shubham@gmail.com");
teacher1.logMe();