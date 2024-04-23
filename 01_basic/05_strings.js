const name="shubh";
const repoCount=10;

// console.log(name + repoCount+" has this much repos");

// new syntax string interpolation
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName= new String('Countra');

console.log(gameName[0]);

console.log(gameName.__proto__);


console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('C'));

const newString=gameName.substring(2,6);
console.log(newString);

const anotherString=gameName.slice(0,4);
console.log(anotherString);

const newStirngOne="    ser    ";
console.log(newStirngOne.trim());

const url="http://twitter/Ezee%20Dev";

console.log(url.replace('%20',''));

console.log(url.includes("twitter"));

console.log(url.split('/'));