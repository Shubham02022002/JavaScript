// JavaScript Execution Context

// jec means how the js will run the file or exectue the file 
// to run a program in js, js divides it into two phases.
// 1. the first thing which is happned is creation of Global exection context. And GEC is refered by (this). 
// in browser the value of this is window object. and in node enviromnent it is {}.

// we have in total 3 Execution Contexts.
// 1-> Gloabal Execution Context
// 2-> Function/functional Execution Context
// 3-> Eval Execution Context 

// the two phase of code running are->
// 1-> Memory Creation Phase/ Creation Phase
// 2-> Execution Phase

// let's look this in code 

let val1=10;
let val2=5;

function addNum(num1,num2){
    let total=num1+num2;
    return total;
}

let result1=addNum(val1,val2);
let result2=addNum(2,3);

// Step 1. Global Execution. and GEC is allocated to this. this step is must. 

// Step 2. Memory Creation Phase.  In this all the variable are collected. 
// here,    in val1---> undefined 
//          in val2---> undefined
//             addNum---> defination
//          in result1---> undefined
//          in result2---> undefined
// this all is the first cycle. 

// Step 3. Execution Phase. 
//          in val1 <-- 10
//          in val2 <-- 5
//  line 22 to 25 got skip as nothing to do there. 
//  on line no 27, addNum is there as it is a function so it will create a seperate (variable environment + Execution thread ) this is known as new executional context. So again memory phase and execution phase will there for line no 27 (addNum).

//      line 27. Memory phase.
//              in val1--->undefined.
//              in val2--->undefined.
//              in total---> undefined.

//      line 27. Execution Context.
//              in num1 <-- 10
//              in num2 <-- 5
//              in total <-- 15
//              this total is returned to GEC.
// now line 27's  executional context will is dumped/ deleted.

// now in result1 we have 15


// similar things happnes in line no 28. 
// new executional context will created.


// next thing came in picture is call stack 
