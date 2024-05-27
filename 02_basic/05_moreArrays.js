const myArr = [];
// %DebugPrint(myArr);

// In Javascript we have 2 types of array:-
//     1.Continuous
//     2.Holey

// And we have 3 kind of optimizations on arrays:-
//     1. SMI(small integer)
//     2. Packed Element
//     3. Double(float, string,function)

const arrTwo = [1, 2, 3, 4, 5];
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0);
// PACKED_DOUBLE_ELEMENTS

arrTwo.push("7");
// PACKED_ELEMENTS

arrTwo[10] = 11;
// HOLEY_ELEMENT

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// how array find the value of an index?
// 1.bound check
// 2.hasOwnProperty(arrTwo,9)
// 3.hasOwnProperty(arrTwo.prototype,10)
// 4.hasOwnProperty(Object.prototype,10)

// holes are very expensive in js

const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[8]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(4);
// just 4 holes. HOLEY_SIM_ELEMENTS
// how array downgrades
arrFour[0] = "1"; // HOLEY_ELEMENTS
arrFour[1] = "2"; // HOLEY_ELEMENTS
arrFour[2] = "3"; // HOLEY_ELEMENTS

const arrFive = [];
arrFive.push('1') //PACKED_ELEMENTS
arrFive.push('2') //PACKED_ELEMENTS
arrFive.push('3') //PACKED_ELEMENTS

const arrSix=[1,2,3,4,5];
arrSix.push(NaN);
arrSix.push(Infinity);