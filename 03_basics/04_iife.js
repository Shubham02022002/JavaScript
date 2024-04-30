// Immediately Invoked Function Expressinos (IIFE)

// function connectDB(){
//     console.log(`DATABASE CONNECTED`);
// }
// connectDB();

// (function connectDB(){
//     console.log(`DATABASE CONNECTED`);
// }())

// (function connectDB(){
//     console.log(`DATABASE CONNECTED`);
// })()

        // ()                   ()
        // ^                    ^
        // |                    |
// Defination           execution 

// what are iife ? why we need them ?
// those function which executes immediately after declarationn are called iife. Sometimes we have problem with pollution of global scope and to remove those variables we need iffe. 

// ( () =>  {
//     console.log(`Connected`);
// } )(); // semicolumn need to tell that where to stop the context. 

// ( ()=> {
//     console.log(`connected`);
// } )();

// ( function connectDB() { named iife
//     console.log(`connected`);
// } )()

// ((string)=>{         unnamed iife/ normal iife
//     console.log(`Db connected with ${string}`);
// })("mongodb://password/user..");

