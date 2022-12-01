//40 100 Normal reading.
//101 109 Acceptable to continue home monitoring.
//110 130 Seek advice from health professionals.
//≥ 131 Seek urgent medical advice.

var pulse = 123;

function isPulseNormal(pulse){
    if (pulse >= 131){
        console.log("Seek urgent medical advice");
    } else if ((pulse >= 110) && (pulse <= 130)){
        console.log("Seek advice from health professionals");
    } else if ((pulse >= 101) && (pulse <= 109)){
        console.log("Acceptable to continue home monitoring");
    } else if ((pulse >= 40) && (pulse <= 100)){
        console.log("Normal reading");
    }
}
isPulseNormal(pulse);