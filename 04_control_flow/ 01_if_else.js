// if
// if the codition inside the parentheses is true then only the control reaches in the if block.
if(true){

}
if(false){
    
}

const temperature=45;

// if(temperature<50){
//     console.log(`Temperate is below ${temperature} degree`);
// }
// console.log(`Temperature is greater than 50`);

// out of if block everthing will exectute. 
// we have else block used in condition where if block fails. From if and elese only one will be executed. 

// const score=200;

// if(score>100){
//     const power="fly";
//     console.log(`User power is ${power}`);
// }
// console.log(`User power is ${power}`);
// scope of power in not defined outside the if block.


// const balance=1000;

// if(balance>=1000)console.log("Yes");

// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else{
//     console.log("less than 2000");
// }


const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;


if(userLoggedIn && debitCard && 2==3){
    console.log("You can purchase courses");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("Welcome to website");
}