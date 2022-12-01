/* 
Underweight = <18.5
Normal weight = 18.5-24.9
Overweight = 25-29.9
Obesity = BMI of 30 or greater 
*/

var bmi = 29;

function bmiresult(bmi){
    if (bmi >= 30){
        console.log("Obesity");
    } else if ((bmi >= 25) && (bmi <= 29)){
        console.log("Overweight");
    } else if ((bmi >= 18) && (bmi <= 24)){
        console.log("Normal Weight");
    } else if ((bmi >= 10) && (bmi <= 17)){
        console.log("Underweight");
    }
}


bmiresult(bmi);