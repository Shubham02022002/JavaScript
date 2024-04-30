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

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// [ 'id', 'name', 'isLoggedIn']
// console.log(Object.values(tinderUser));
// [ '123abc', 'sassy', false ]
// console.log(Object.entries(tinderUser));
// [ [ 'id', '123abc' ], [ 'name', 'sassy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course={
    courseName:"xyds",
    price:999,
    couseInstructor:"first",

}

// course.couseInstructor
// const {couseInstructor}= course;
const {couseInstructor:teacher}= course;

console.log(teacher);


// const navbar=(props.company) =>{

// }

const navbar=({company}) =>{

}
navbar(company="OpenAI");
// all about object destructuring 


// api's can be seen like whenever we are give our taks to someone and after that we are not worried that how they do it. eg. asking for a samosa in a resturant (we don't need to know how things working behind the seens.)

// If we look few years back then the response we get from api's are in xml format, but now a days we have json. (just a object with no name);

// {
//     "name":"Shu",
//     "price":599,
//     "courseName":"rust "
// }

// it is giving red swiglly because it is not a object. Here it is treated as json and in json key and values are also in " ";

// [
//     {},
//     {},
//     {},
// ]

// RESPONSE FROM AN API CAN BE IN ARRAY OR IN JSON/OBJECT 

