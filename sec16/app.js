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

if(userInput){
  console.log("TRUTHY!")
}else{  // 0, '', null, undefined, NaN, false
  console.log("FALSY!")
}


/**
 * Logical Operators
 */
let password2 = '123456';
if (password2.indexOf(' ') === -1 && password2.length >=6) {
  console.log("VALID PASSWORD!")
}else{
  console.log("INCORRECT FORMAT FOR PASSWORD!")
}
