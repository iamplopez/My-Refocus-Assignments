// convertToKelvin(tempCelsius)  that converts Celsius to Kelvin. K = C + 273.15 

function convertToKelvin(tempCelsius){
    let tempKelvin = tempCelsius + 273.15;
    return tempKelvin;
}

console.log(convertToKelvin(0)) //0 C = 273 K

// convertToKelvin(tempFahrenheit) that converts Fahrenheit to Kelvin. K = 5/9 (tempFarenheit + 459.67)

function convertToKelvin(tempFahrenheit){
    let tempKelvin = (tempFahrenheit + 459.67) * 5 / 9;
    return tempKelvin;
}

console.log(convertToKelvin(32)) //32 F = 273 K