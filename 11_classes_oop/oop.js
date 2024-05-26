const user = {
  username: "Shubham",
  loginCount: 23,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`)
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, signedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.signedIn = signedIn;
  this.greetings= function(){
    console.log(`Welcome ${this.username}`);
  }
  return this;
}

const userOne = new User("Shubham", 14, true);
const userTwo = new User("User2", 3, false);
// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);

