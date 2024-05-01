// 1. const userEmail="xya@gmail.com";
// 2. const userEmail="";
// 3. const userEmail=[];
// 4. const userEmail=function(){}

// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email");
// }
// 1. here we arn't checking any true value or false value which is starnge. String is assumed to be true.

// 2.  whereas in this case it is assumed to be false that's why else block executed. 
 
// 3. in case of empty array it is assumed to be true

// false values -> 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// except them all are treated as truthy valuse in js
// turthy values ->
// "0", 'false', " ", [], {}, function(){},

// if(userEmail.lenth===0){
//     console.log("Empty array");
// }

// const emptyObj={};

// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty ");
// }
// to check if the object is empty or not. 


// console.log(false==0); -->true
// console.log(false==''); -->true
// console.log(0==''); --> true


// Nullish Coalescing Operator (??): null undefined 

let val1;
// val1=5 ?? 10; -> 5
// val1=null?? 10; -> 10
// val1=undefined?? 10; -> 10
// val1=undefined?? null; ->null
// val1=null ?? undefined; -> undefined
// val1 =10?? null; ->10
// val1= 10?? undefined; -> 10
// val1 = null?? 10 ?? 20; ->10 

// console.log(val1);
// nullish operator check if the values are null or undefined if the first value is not null and undefined it will assign the first value to the variable. If the fist value is undefined or null it will assign the second value to the variable (no matters then the second value is null or undefined it will assign blindly). 

// Terniary Operator 

// condition ? ture : false

const iceTeaPrice = 100;
iceTeaPrice>=80? console.log("greater than 80"):console.log("less than 80");