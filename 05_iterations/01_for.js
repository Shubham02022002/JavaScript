// for 

//   initilization condition    updation 
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element==5){
//         // console.log("5 is best number");
//     }
//     // console.log(element);
// }
// console.log(element);
// we don't have access to the elements outside the scope 

// for (let i = 1; i < 10; i++) {
//     // console.log(`Outer loop value: ${i}`);
//     for (let k = 1; k < 10; k++) {
//         // console.log(`Inner loop value ${k} and outer loop value ${i}`);
//         // console.log(i+ ' * '+ k +' = '+i*k);
//     }
// }

// let myArray=["Ironman","Hulk","Thor"];
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// break and continue
// break --> it makes the control out of the current scope;
// continue --> it skips the current condition once.And rerun the loop. 

// for (let index = 1; index <=20; index++) {
//     if(index==5){
//         console.log(`Index at ${index}`);
//         break;
//     }
//     console.log(`Value of index is ${index}`);
// }

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`Index at ${index}`);
        continue;
    }
    console.log(`Value of index is ${index}`);
}