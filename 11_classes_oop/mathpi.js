const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 3.13132;
// console.log(Math.PI);

// const myNewObj= Object(null);
const myNewObj = {
  name: "Shubham",
  role: "Developer",
  ctc: 1000000,
  language:function(){
    console.log(`I prefer to code in javascript`);
  }
};

// console.log(myNewObj);
console.log(Object.getOwnPropertyDescriptor(myNewObj, "ctc"));

Object.defineProperty(myNewObj, "ctc", {
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(myNewObj, "ctc"));

// Object.defineProperty(Math, "PI", {
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// const descriptor1 = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor1);

for (let [key, value] of Object.entries(myNewObj)) {
    if(typeof value!=='function')
    console.log(`${key}: ${value}`);
}
