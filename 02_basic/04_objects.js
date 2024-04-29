// const tinderUser= new Object();
const tinderUser={};

tinderUser.id="123abc";
tinderUser.name="sassy";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Some",
            lastName:"One"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);
// optional chaining is useful here and should be used;\

const obj1={
    1:"a",
    2:"b",
}
const obj2={
    3:"c",
    d:"d",
}

// const newObj={obj1,obj2};
// const newObj=Object.assign(obj1,obj2);
                            // Source, Target
// const newObj=Object.assign({},obj1,obj2);

const newObj={...obj1,...obj2};
// console.log(newObj);


const users=[
    {
        id:1,
        email:"first@gmail.com",
    },
    {
        id:2,
        email:"second@gmail.com",
    },
    {
        id:3,
        email:"third@gmail.com",
    },

];
// users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
// [ 'id', 'name', 'isLoggedIn']
console.log(Object.values(tinderUser));
// [ '123abc', 'sassy', false ]
console.log(Object.entries(tinderUser));
// [ [ 'id', '123abc' ], [ 'name', 'sassy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
