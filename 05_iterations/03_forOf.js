// for of 
// these loop are array specific 


const arr= [1,2,3,4,5];

for (const num of arr) {
    // console.log(num);
}

const greetings= "namaste javascript💀"

for (const index of greetings) {
    if(index==' ')continue;
    // console.log(index);
}


// Maps 

const map= new Map();
map.set('IN','INDIA');
map.set('USA','United States of America');
map.set('Fr','France');
map.set('Fr','France');

// console.log(map);
// in maps in js unique values are there and their order is same as at the time of insetion. 


// for (const key of map) {
//     console.log(key);
// }
// [ 'IN', 'INDIA' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

for (const [key,value] of map) {
    // console.log(key,value);
}

const myObj={
    'game1':"NFS",
    'game2':"Vice City"
}

// for (const key of myObj) {
//     console.log(key);
// }
// myObj is not iterable

