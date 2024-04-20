// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt 

const score=3;
const scoreValue=100.3;
const isLoggedIn= false;
const outsideTemp=null;
let useEmail;

const id=Symbol('12');
const anotherId=Symbol('123');

// console.log(id===anotherId);

// const bigNumber=43040295803234242958n;


// Reference (Non primitive)

// Arrays, Objects, Functions 

const heros=["saktiman","naagraj","doga"];

const userDeatils={
    username:"username",
    firstName:"first name",
    age:12
}

const myFunction=function(){
    console.log("Hello from myFunction");
}

myFunction();

console.log(typeof userDeatils);

console.log(typeof heros);

console.log(typeof anotherId);