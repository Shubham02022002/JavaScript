class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
     this.password=password;
  }

  get password() {
    return `${this._password}${this.username}`
  }

  set password(value) {
    this._password = value.toUpperCase();
  }
}

const user1 = new User("Shubham", "shubham@gmail.com", "password");
console.log(user1);
console.log(user1.password);
