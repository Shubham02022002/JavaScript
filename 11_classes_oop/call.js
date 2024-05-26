function setUserName(username){
    //complex DB calls
    this.username=username;
}

function createUser(username,email,password){
    setUserName.call(this,username);
    this.email=email;
    this.password=password;
}

const user= new createUser('Shubham','shubham@gmail.com','123');
console.log(user);