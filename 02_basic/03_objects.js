// we can declare objects in ways 
// 1-> literal  --------> in this singleton object is not formed 
// 2-> constructor -------> always singleton if we are making it with constructor.
// Object.create

// object literals


const mySymbol=Symbol("key1");

const JsUser={
    name:"XYZ",
    "full name":"Choii shabh",
    [mySymbol]:"key1",
    age:10,
    location:"NYC",
    email:"xyz@google.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Friday"]
};

// how to access object 
// console.log(JsUser.age);
// console.log(JsUser[email]); -->ReferenceError: email is not defined

// why to learn this syntax ??
// console.log(JsUser["email"]);

// now if in case of "full name" you can't access the property with (.) 
// console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySymbol); //--> string   
// if i want this to be a symbol then have to use [] brackets.
// console.log(JsUser[mySymbol]);
// still type of this is stirng but now it is working 
// as a symbol. 

JsUser.email="xyz@openai.com";
// Object.freeze(JsUser); //after this you cnt make changes in the object anymore;
JsUser.email="xyz@cloudfare.com";

// console.log(JsUser);

// adding function into object

JsUser.greeting=function(){
    console.log("hello JS user");
}

// console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting());

// JsUser.greeting2=function(){
//     console.log(`Hello ${JsUser.name}`);
// }
JsUser.greeting2=function(){
    console.log(`Hello ${this.name}`);
}
console.log(JsUser.greeting2());




