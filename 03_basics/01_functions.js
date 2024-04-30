function sayMyName(){
    console.log("BOT");
}
// this is function declaration. 


// sayMyName  this is refrence to the function. 

// sayMyName() this is function execution. 
// sayMyName();

// function addTwoNumbers(num1,num2){ // parameters 
//     console.log(num1+num2);
// }
function addTwoNumbers(num1,num2){ 
    // let result=num1+num2;
    // return result;
    return num1+num2;
    console.log("DONE"); // after return function terminates. 
}


// addTwoNumbers(3,2); // these are called arguments 

// const result=addTwoNumbers(3,3);
// console.log("Result: ",result);
// 6
// Result:  undefined

// const result=addTwoNumbers(3,3);
// console.log("Result: ",result);

function logInUserMessage(userName="DummyUser"){
    // to avoid this all undefined thing pass a dummy value 


    // if(userName===undefined){
    //     console.log("Please enter a username");
    //     return;
    // }
    if(!userName){
        console.log("Please enter a username");
        return;
    }
    return `${userName} just logged in!`
}

// const message=logInUserMessage("shu");
// console.log(message);
// console.log(logInUserMessage(""));// gives just... 
// console.log(logInUserMessage())// undefined just lo...

// dummy user gets overwrite if we pass an argument. 
// console.log(logInUserMessage("Cheeta"));

