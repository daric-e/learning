let raceNumber = Math.floor(Math.random() * 1000);

console.log('start', raceNumber)
const registeredEarly = false;
const age = 18;
let bob
if (age > 18 && registeredEarly === true) {
  bob = raceNumber + 1000
  console.log('change', bob)
}
if (age > 18 && registeredEarly === true) {
  console.log(`Race starts at 9:30 ${raceNumber}`)
}
else if (age > 18 && registeredEarly === false) { console.log(`Race starts at 11:00 ${raceNumber}`) }
if (age < 18) {
  console.log(`“Youth registrants run at 12:30 pm ${raceNumber}`)
}
else {
  console.log(`see the registation deek`)
}