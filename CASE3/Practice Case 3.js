//Use the var keyword to declare a variable age. Set it ot 10.
var age = 10
//Add an if statement to check if the age is >65. Inside the if block, console.log the sentence: "You get your income pension".
//Add an else if to check if the age is <65 and >18. Inside the else if block, console.log the sentence: " Each month you get a salary".
//Add another else if to check if the age is <18. Inside the else if block, console.log the sentence: "You get an allowance".
//Add an else statement to capture any other value. Inside the block, type console.log the sentence: "The value of the age variable 
//is not numerical".

function isAgeQualified(age) {
    if(age >=65){
        console.log("You get your income pension");
    } else if ( (age >=18) && (age < 65)) {
        console.log(" Each month you get a salary");
    } else if (age <18){
        console.log("You get an allowance")
    } else {
        console.log("The value of the age variable is not numerical");
    }

}

isAgeQualified(age);