// let score = "33asdf";

// here we know that the typeof score is number 
// but when it comes from some req.body may be 
// it is in string or a object so check the type

// there are two ways to do type check 

// console.log(typeof score); 
// console.log(typeof (score)); // as a method 

// let valueInNumber= Number(score);// here we are trying to conver the string into number which is ok but in the stirng we have "33asdf" so this should be not converted into a number but if we chek the type of valueInNumber it gives us number and on log we are getting NaN. 
// For numbers specifically don't relay on JS


// console.log(typeof valueInNumber);

// console.log(valueInNumber);

// lets try these for null and undefined also :)


// let score=null;
// let valueInNumber=Number(score);
// console.log(typeof valueInNumber); // ->number 
// console.log(valueInNumber); // -> 0 

// let score=undefined;
// let valueInNumber=Number(score);
// console.log(typeof valueInNumber); // number 
// console.log(valueInNumber); // NaN


// "33" => 33
// "33abc" =>NaN (type of NaN is number)
// "true"=>1 ; false=>0

// let isLoggedIn="something";

// let booleanIsLoggedIn =Boolean(isLoggedIn);

// console.log(typeof booleanIsLoggedIn);

// console.log(booleanIsLoggedIn);

// 1=> true; 0=> false;
// "" => false
// "something" => true

// let someNumber=33 
// let stringNumber= String(someNumber);

// console.log(typeof stringNumber);
// console.log(stringNumber);

// -------------------OPERATIONS----------------

let value=3;
let negValue= -value;

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

let str1="hello";
let str2=" World";

let str3=str1+str2;
// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");

// console.log("1"+"2");

// console.log("1"+2+2);

// console.log(1+2+"2");

// console.log(true);
// console.log(+true);

// console.log(+"");

let  num1, num2, num3
num1 = num2 = num2 = 2+2

let gameCounter=100;
gameCounter++;
console.log(gameCounter);
gameCounter--;
console.log(gameCounter);