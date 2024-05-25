const buttons = document.querySelectorAll('.button'); // this gives us nodeList
console.log(buttons);
const body= document.querySelector('body');

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e); // shows the event 
        console.log(e.target); // shows frome wehre the event is comming 

        switch (e.target.id) {
            case 'pink':
                body.style.backgroundColor=e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor=e.target.id;
                break;
            case 'green':
                body.style.backgroundColor=e.target.id;
                break;
            case 'red':
                body.style.backgroundColor=e.target.id;
            default:
                break;
        }
    })
})
