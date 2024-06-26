const coding = ["javascript", "rust", "golang", "cpp"];

// const values=coding.forEach((item)=>{
// console.log(item);
// return item; // gives undefined
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => num > 4); // filter basically checks for some conditions on that basis it filters the array. Important thing to notice here is it returns the array. Which forEach doesn't.
console.log(newNums);

// what if i want this to be done by the forEach loop

const newNums2 = [];

myNums.forEach((num) => {
  if (num > 5) {
    newNums2.push(num);
  }
});

console.log(newNums2);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// const userBooks = books.filter((book) => book.genre === "History");

// const userBooks = books.filter((book) => {
//   if (book.genre === "History") return book;
// });

const userBooks=books.filter((book)=>book.publish>1995 && book.genre==="History");

console.log(userBooks);
