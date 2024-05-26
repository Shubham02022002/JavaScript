// let myName = "Shubham        ";
// console.log(myName.truelength);

let myHeros = ["ironman", "thor"];
let heroPower = {
  ironman: "jarvis",
  thor: "hammer",
  getThorPower: function () {
    console.log(`Thor power is ${this.thor}`);
  },
  getIronmanPower: function () {
    console.log(`Ironman power is ${this.ironman}`);
  },
};
// heroPower.getIronmanPower();

Object.prototype.Shubham = function () {
  console.log(`Shubham is attached to all objects.`);
};
// heroPower.Shubham();

// myHeros.Shubham();

// myName.Shubham();

Array.prototype.newShubham = function () {
  console.log(`This is new Shubham`);
};

// myHeros.newShubham();
// heroPower.newShubham(); so when we attach or make a prototype of array it is not passed to objects.

// inheritance

const user = {
  name: "Shubham",
  email: "dummymail@gmail.com",
};
const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const taSupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

teacher.__proto__ = user;

//modern sytax

Object.setPrototypeOf(teachingSupport,teacher);

let anotherUsername="Shubham         ";

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.truelength();

"shubham".truelength();