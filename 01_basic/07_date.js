

let myDate= new Date();

// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString()); //Fri Apr 26 2024

// console.log(myDate.toISOString()); //2024-04-26T07:23:52.239Z

// console.log(myDate.toJSON()); //2024-04-26T07:23:52.239Z

// console.log(myDate.toLocaleTimeString()); //7:23:52 AM

// console.log(myDate.toUTCString()); // Fri, 26 Apr 2024 07:23:52 GMT

// console.log(myDate.toLocaleString()); // 4/26/2024, 7:23:52 AM

// type of date is Object.. 

// let createdDate = new Date(2024,6,12);

// console.log(createdDate.toDateString());

// let newDate= new Date(2024,6,12,0,0,0,0);
// let newDate= new Date("2024-12-07");
// let newDate= new Date("07-12-2024");

// console.log(newDate.toLocaleString());

let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(newDate.getTime());

// console.log(newDate-myTimeStamp);

// console.log(Math.floor(Date.now()/1000));


const newDate= new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('Default',{
    weekday:"long",
    dateStyle:"full",
});
