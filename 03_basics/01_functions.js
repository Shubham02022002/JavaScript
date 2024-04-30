function sayMyName() {
  console.log("BOT");
}
// this is function declaration.

// sayMyName  this is refrence to the function.

// sayMyName() this is function execution.
// sayMyName();

// function addTwoNumbers(num1,num2){ // parameters
//     console.log(num1+num2);
// }
function addTwoNumbers(num1, num2) {
  // let result=num1+num2;
  // return result;
  return num1 + num2;
  console.log("DONE"); // after return function terminates.
}

// addTwoNumbers(3,2); // these are called arguments

// const result=addTwoNumbers(3,3);
// console.log("Result: ",result);
// 6
// Result:  undefined

// const result=addTwoNumbers(3,3);
// console.log("Result: ",result);

function logInUserMessage(userName = "DummyUser") {
  // to avoid this all undefined thing pass a dummy value

  // if(userName===undefined){
  //     console.log("Please enter a username");
  //     return;
  // }
  if (!userName) {
    console.log("Please enter a username");
    return;
  }
  return `${userName} just logged in!`;
}

// const message=logInUserMessage("shu");
// console.log(message);
// console.log(logInUserMessage(""));// gives just...
// console.log(logInUserMessage())// undefined just lo...

// dummy user gets overwrite if we pass an argument.
// console.log(logInUserMessage("Cheeta"));

// function calculateCartPrice(num1){
//     return num1;
// }
function calculateCartPrice(...num1) {
  // here we are saying this rest operator
  return num1;
}

// ... this is called rest as well as spread depending upon the use case..

// console.log(calculateCartPrice(2000,322,4234)); // 2000 only
// console.log(calculateCartPrice(2000,322,4234));
//[ 2000, 322, 4234 ]

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
// console.log(calculateCartPrice(2000, 322, 749, 4234));
// [ 749, 4234 ] val1 takes 2000, val2 takes 322 and num1 takes the left over.

const user = {
  name: "Something",
  age: 12,
};

// function handleObject(anyObject){
//     console.log(`Username is ${this.name} and age is ${this.age}`);
// }  this cann't be use here

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);
}

// handleObject(user);

// handleObject({
//     name:"newUser",
//     age:13
// })

const myNewArray=[ 2000, 322, 4234 ];

function returnSecondValue(array){
    return array[1];
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([23,34,345,342]));

