window.onload = () =>
{
    let button = document.querySelector('#btn');
    button.addEventListener('click',calculateBMI);         //function for calculating BMI
}

function calculateBMI()
{
    //getting input from user into height variable. Input is string so typecasting is necessary.
    let height = parseInt(document.querySelector('#height').value);     

    //getting input from user into weight variable. Input is string so typecasting is necessary.
    let weight = parseInt(document.querySelector('#weight').value);

    let result = document.querySelector('#result');       

    console.log(height);
    //checking if user is providing a proper value or not
    if(height === '' || isNaN(height))                   
        result.innerHTML = 'Provide a valid Height!';

    else if(weight === '' || isNaN(weight))
        result.innerHTML = 'Provide a valid Weight!';

    //when both the input is valid, calculate the bmi
    else
    {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);               //fixing upto 2 decimal places

        //dividing as per the bmi conditions/*
        if(bmi < 18.6)
            result.innerHTML = `Under Weight : <span>${bmi}</span>`;
        else if(bmi >= 18.6 && bmi < 24.9)
           result.innerHTML = `Normal : <span>${bmi}</span>`;
        else
           result.innerHTML = `Over Weight : <span>${bmi}</span>`;
    }
}