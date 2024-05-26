// ES6

class User {
  constructor(username, email, password) {
    (this.username = username), (this.email = email);
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const user1 = new User("Shubham", "shubham@gmail.com", "1333e234");
console.log(user1.encryptPassword());
console.log(user1.changeUserName());

// behind the scene

function user(username,email,password){
    this.username=username;
    this.password=password;
    this.email=email;
}

user.prototype.encryptPassword=function(){
    return `${this.password}abcd`
}

user.prototype.changeUserName=function(){
    return `${this.username.toUpperCase()}`
}

const userNew= new user("Shubham","shubham@gmail.com","23342");

console.log(userNew.encryptPassword());
console.log(userNew.changeUserName());
