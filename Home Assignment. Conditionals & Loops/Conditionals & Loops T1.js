//≥ 96% Normal reading
//95% Acceptable to continue home monitoring.
//93–94% Seek advice from health professionals.
//≤ 92% Seek urgent medical advice.
var spo2 = 97;

function levelOxygenSaturation(spo2) {
    if (spo2 >= 96){
        console.log("Normal reading");
    } else if (spo2 >= 95){
        console.log("Acceptable to continue home monitoring");
    } else if ((spo2 >= 93) && (spo2 <= 94)) {
        console.log("Seek advice from health professionals");
    } else if (spo2 <= 92){
        console.log("Seek urgent medical advice");
    }

}
levelOxygenSaturation(spo2);