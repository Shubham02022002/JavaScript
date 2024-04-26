
// const myArr=[0,1,2,3,4,5,"cheeta",false];
const myArr=[0,1,2,3,4,5];
// console.log(myArr[2]);
// const myArr2= new Array(13,432,432,4,234,23,4);
// console.log(myArr2);

// console.log(myArr2.length);

// -----------------Array Methods-----------------------


// myArr.push(4);
// myArr.push(10);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();
// console.log(myArr.includes(5));
// console.log(myArr.indexOf(9));

// const newArr=myArr.join();
// console.log(newArr);
// console.log(typeof newArr); --> string 
// console.log(myArr);

// slice, splice 

console.log("A ",myArr);

const myNa1=myArr.slice(1,3);
console.log(myNa1);

console.log("B ",myArr);

const myNa2=myArr.splice(0,3);

console.log("C ",myArr);

console.log(myNa2);