const accountId=344234;
let accountEmail="xyz@gmail.com";
var accountPassword="OIJRRU)DJ#)jeJ#)JF0";
accountCity="New York";
let accountState; // in JS if you just declare a variable and don't assign it a value it consider   it as undefined 
// accountId=43242; // you can't reassign const 

// accountEmail="zxy@gmail.com";  here (in let) we can reassing 

// accountPassword="dsljfadslf";  we can also reassign inside var 

accountCity="SF"; // in JS we can declare and assign a variable without giving 
                  // it any of (var,let,const) but it's never recommended to do so.

console.table([accountCity,accountPassword,accountEmail,accountId,accountState]);

/*
Prefer not to use var -> Because issue in block scope and functionl scope.
*/

// console.log(accountCity);
// console.log(accountPassword);
// console.log(accountEmail);
// console.log(accountId);