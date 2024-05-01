const coding = ["js", "cpp", "py", "ruby"];

// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// callback functions don't have their name;

function printMe(item) {
  // console.log(item);
}

// coding.forEach(printMe); // you only need to pass the reference.

// coding.forEach((item, index, arr) => {
//   // console.log(`On index ${index} in ${arr} we have ${item}`);
// });

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "C++",
    languageFileName: "cpp",
  },
  {
    languageName:"Python",
    languageFileName:"py"
  },
];

// myCoding.forEach(({languageName,languageFileName})=>{
//     console.log(`For ${languageName} the file extension is ${languageFileName}`);
// })

// myCoding.forEach((item)=>{
//     console.log(item.languageName);
// })


