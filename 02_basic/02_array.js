const marverHeros=["Ironman","thor","hulk"];
const dcHeros=["Superman","Batman","Flash"];


// marverHeros.push(dcHeros);

// console.log(marverHeros);
// console.log(marverHeros[3][1]);

const team=marverHeros.concat(dcHeros);
// concat return a new array 
// console.log(team);

// spread operator think of this like a glass of water
// if you drop it it will spreaded and everything is 
// in individal part. 
const newTeam=[...dcHeros,...marverHeros];
// console.log(newTeam);


const abc= [1,2,3,[4,5,6],7,[6,5,[4,5]]];
// flat takes the depth upto which you want to flat. 
const usableAbc=abc.flat(Infinity);
// console.log(usableAbc);

// console.log(Array.isArray("cheeta"));

// console.log(Array.from("cheeta"));
// converts into array

// console.log(Array.from({name:"xyx"}));
// returns an empty array we have to define that what we want keys or values..

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));
// of is used when we'r storing something in variables and then wants then in array.

