//30 minutes everyday for 15 days.
//Cycling for for 30 minutes burned 225 calories.
let caloriesPerHour = 450;
let numTimesSamCycle = 15;
let cycleHoursPerDay = 0.5;
let totalHoursCycling = numTimesSamCycle * cycleHoursPerDay;
let totalCaloriesBurned = caloriesPerHour * totalHoursCycling;
console.log(`Great Work, Sam! After ${cycleHoursPerDay} hour/s of cycling every day for ${numTimesSamCycle} days, 
you may lose a total of ${totalCaloriesBurned} calories.`)