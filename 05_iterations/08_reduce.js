const myNums = [1, 2, 3];

const val = myNums.reduce((acc, curr) => (acc += curr), 0);

console.log(val);

const shoppingCart = [
  {
    itemName: "js Course",
    price: 2999,
  },
  {
    itemName: "python Course",
    price: 2999,
  },
  {
    itemName: "sol Course",
    price: 2999,
  },
  {
    itemName: "cpp Course",
    price: 9999,
  },
];

// const totalCartValue = shoppingCart
//   .map((val) => val.price)
//   .reduce((acc, curr) => (acc += curr), 0);

const totalCartValue=shoppingCart.reduce((acc,item)=>acc+item.price,0);  
console.log(totalCartValue);
