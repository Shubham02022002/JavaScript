// var c=300;
// var lets you reinitialize and redeclare which is bad, also we can access it outside the block scope which is not good. 

let a=300;
// this is global scope
if(true){
    let a=10;
    const b=20;
    c=30;    
    console.log("Inner: ",a);
} // this is block scope


console.log(a);
// console.log(b);
// console.log(c);

// if we check scope in browser that is totally different from what we have in node(global scope)