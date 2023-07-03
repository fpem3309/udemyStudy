/**
 if ~ else if
 */

const dayOfWeek = 'Monday';

if (dayOfWeek === 'Monday') {
  console.log("UGHHH I HATE MONDAYS!");
} else if (dayOfWeek === 'Saturday') {
  console.log("YAY I LOVE Saturdays");
} else if (dayOfWeek === 'Friday') {
  console.log("Fridays are decent, especially after work!");
}


/**
 if ~ else if ~ else
 */

const random = Math.random();
if (random > 0.5) {
  console.log("GREATER THAN 0.5");
} else if (random < 0.5) {
  console.log("LESS THAN 0.5");
} else {
  console.log("0.5!")
}
console.log(random);


/**
 * nesting
 */

const password = '12 34';
if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
    console.log("Good job! No space!")
  } else {
    console.log("Password cannot contain spaces!")
  }
} else {
  console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}


/**
 * TRUTHY AND FALSY VALUES
 */

// const userInput = prompt("Enter something")
const userInput = ''

if (userInput) {
  console.log("TRUTHY!")
} else {  // 0, '', null, undefined, NaN, false
  console.log("FALSY!")
}


/**
 * Logical Operators
 */

// and 연산자 &&
let password2 = '123456';
if (password2.indexOf(' ') === -1 && password2.length >= 6) {
  console.log("VALID PASSWORD!")
} else {
  console.log("INCORRECT FORMAT FOR PASSWORD!")
}

// or 연산자 ||
let age = 9;
if ((age > 0 && age < 5) || age >= 65) {
  console.log("FREE")
} else if (age >= 5 && age < 10) {
  console.log("$10")
} else if (age >= 10 && age < 65) {
  console.log("$20")
} else {
  console.log("INVALID AGE")
}

// not 연산자 !
age = 4
if (!(age > 0 && age < 5 || age >= 65)) {
  console.log("YOU ARE NOT A BABY OR SENIOR")
}


/**
 * switch ~ case
 */
let day = 5
switch(day){
  case 1:
    console.log("MONDAY")
    break;
  case 2:
    console.log("TUESDAY")
    break;
  case 3:
    console.log("WEDNESDAY")
    break;
  case 4:
    console.log("THURSDAY")
    break;
  case 5:
    console.log("FRIDAY")
    break;
  case 6:
  case 7:
    console.log("WEEKEND!")
    break;
  default:
    console.log("I DONT KNOW THAT!")    
}