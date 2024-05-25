const body=document.querySelector('body');
body.style.backgroundColor='whiteSmoke';

// const height=parseInt(document.querySelector('#height').value);
// this will give us empty value 

const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');

    if(height==='' || isNaN(height)|| height<0){
        results.innerHTML="Please give a valid height";
    }else if(weight==='' || isNaN(weight)|| weight<0){
        results.innerHTML="Please give a valid weight";
    } else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6){
            results.innerHTML=`<span>You are under weight with BMI: ${bmi}</span>`
        }else if(18.6<bmi && bmi<24.9){
            results.innerHTML=`<span>You have normal weight with BMI: ${bmi}</span>`
        }else{
            results.innerHTML=`<span>You are over weight with BMI: ${bmi}</span>`
        }
    }
})