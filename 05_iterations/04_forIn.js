const myObj={
    js:'JavaScript',
    cpp:'C++',
    rb:'Ruby',
    py:'Python',
    swift:'Swift by apple'
}

for (const key in myObj) {
    // console.log(myObj[key]);
    // console.log(`${key} is shorthand for ${myObj[key]}`);
}

const myArr=["Lion","Tiger","Bear"];

for (const index in myArr) {
    // console.log(index);
    // console.log(`${myArr[index]} is on ${index} index`);
}

const map =new Map();

map.set("IN","India");
map.set("USA","United States of America");
map.set("FR","France");
// maps are not iteratable as of now, will see some other methods later. 
// for (const key in map) {
//     console.log(map[key]);
// }