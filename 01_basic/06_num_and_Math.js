const score = 400;
// console.log(score);
const balance = new Number(2000);
// console.log(balance);

// console.log( balance.toString().endsWith('8')); --> false

// console.log(balance.toFixed(3)); // 2000.000

const otherNumber = 123.893538;

// console.log(otherNumber.toPrecision(3)); //124

const hundreds = 10000000000;
// console.log(hundreds.toLocaleString('en-IN'));

// -------------------------Maths------------------------

// console.log(Math);

// console.log(Math.abs(-34342));
// console.log(Math.round(243.98));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.99));
// console.log(Math.min(23,3,24,4,24,23,1));
// console.log(Math.max(23,3,24,4,24,23,1));

// console.log(Math.random());
// console.log(Math.random()*10+1);
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.random() * (max - min + 1));
console.log(Math.floor(Math.random()*(max-min+1)+min));