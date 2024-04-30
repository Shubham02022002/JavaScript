const user={
    userName:"user",
    price:400,
    welcomeMessage:function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
        //here this refers to the current context
    }
}
//this is used to refer current context.
// user.welcomeMessage();
// user.userName="new User"; // here context is changed 
// user.welcomeMessage(); 


// console.log(this);
// here wer'e in node environment so this refers to an empty object. 
// Earlier, we have only one way to run js which is in our browsers. But currenty we have taken out the js enginer and created node, deno, bun etc. So if I do console.log(this) in browser, will be getting a window object. 

// function fun(){
//     let userName="something";
//     console.log(this); // global Object
//     console.log(this.userName);// gives undefined.
// }
// fun();   

// const fun= function(){
//     let userName="something";
//     console.log(this.userName); //undefined
// }

// fun();

// const fun =()=>{
//     let userName="something";
//     console.log(this); //--> {} (arrow function)
//     // console.log(this.userName);// undefined
// }
// fun();

// const addTwo=(num1,num2)=>{ // normal arrow function
//     console.log(this); // {}
//     return num1+num2;     // explicit return 
// }
// console.log(addTwo(2,5));

// const addTwo=(num1,num2)=> num1+num2; // implicit reuturn

// const addTwo=(num1,num2)=>(num1+num2);

// const addTwo=(num1,num2)=>{userName:"newUser"};
//gives undefined; without parenthesis we can't return an object.

// const addTwo=(num1,num2)=>({userName:"xyz"});
// { userName: 'xyz' }

// console.log(addTwo(2,4));