let username = 'Daric';

const result = !username ? 'Hello!' : `Hello, ${username}!`;
console.log(result);
let userQuestion = 'where the hoes?'
console.log(userQuestion);
let randomNumber = Math.floor(Math.random() * 8)
let a;
console.log('randomNumber = ', randomNumber);
switch (randomNumber) {
  case 0:
    a = 'It is certain';
    break;
  case 1:
    a = 'it is cecidedly so';
    break;
  case 2:
    a = 'Reply hazt try again';
    break;
  case 3:
    a = 'Cannot predict now';
    break;
  case 4:
    a = 'Do not count on it';
    break;
  case 5:
    a = 'My sources say no';
    break;
  case 6:
    a = 'Outlook not so good';
    break;
  case 7:
    a = 'Signs point to yes';
    break;
}
console.log(a);
let eight2;
if (randomNumber === 0) {
  eight2 = 'Yes';
} else if (randomNumber === 1) {
  eight2 = 'No';
} else if (randomNumber === 2) {
  eight2 = 'Maybe';
} else if (randomNumber === 3) {
  eight2 = 'Suck it';
} else if (randomNumber === 4) {
  eight2 = 'Not a chance';
} else if (randomNumber === 5) {
  eight2 = 'Fuck off';
} else if (randomNumber === 6) {
  eight2 = 'Sure thing you dirty bastard';
} else if (randomNumber === 7) {
  eight2 = 'Try again later';
}

console.log('Second eightball says', eight2);