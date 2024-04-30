// var c=300;
// var lets you reinitialize and redeclare which is bad, also we can access it outside the block scope which is not good. 

let a=300;
// this is global scope
// if(true){
//     let a=10;
//     const b=20;
//     c=30;    
//     console.log("Inner: ",a);
//} // this is block scope


// console.log(a);
// console.log(b);
// console.log(c);

// if we check scope in browser that is totally different from what we have in node(global scope)


function one(){
    const userName="xys";

    function two(){
        const website="Youtube";
        console.log(userName);
    }
    // console.log(website);

    two();
}

// one();

// when nested functions are there then child function can access the parent variable (closure)

if(true){
    const userName="something";
    if(userName==="something"){
        const website=" YoutubeIN";
        // console.log(userName+ website);
    }
    // console.log(website);

}
// console.log(userName);



// console.log(addOne(4));
// addOne(5); totally fine
function addOne(num){ // simple function 
    return num+1;
}

// addTwo(); ReferenceError: Cannot access 'addTwo' before initialization
const addTwo= function(num){// expression 
    return num+2;
}

