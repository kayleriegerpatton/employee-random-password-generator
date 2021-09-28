// GLOBAL VARIABLES
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Special characters: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
const specialCharacters = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

const getPasswordLength = function () {
  const passwordLength = prompt(
    "Please select a password length between 8 and 128 characters."
  );
  return passwordLength;
};

// check password length is a number (not a string)
const validateIsNumber = function (passwordLength) {
  const notValidNumber = isNaN(passwordLength);
  return notValidNumber;
};

// check password length is >=8 and <= 128
const validateNumberValue = function (passwordLength) {
  const validValue = passwordLength >= 8 || passwordLength <= 128;
  return validValue;
};

const getCriteria = function () {
  // get password length
  const passwordLength = getPasswordLength();
  const isValid =
    validateIsNumber(passwordLength) && validateNumberValue(passwordLength);
  if (isValid) {
    // get password character choices
    const isLowercase = getIsLowercase();
    const isUppercase = getIsUppercase();
    const isNumeric = getIsNumeric();
    const isSpecial = getIsSpecial();
    // check not all false
    if (true) {
      // remove true above
      // create password criteria object
      const passwordCriteria = {
        passwordLength: passwordLength,
        isLowercase: isLowercase,
        isUppercase: isUppercase,
        isNumeric: isNumeric,
        isSpecial: isSpecial,
      };
      return passwordCriteria;
    } else {
      alert("Please select at least one character type.");
      return;
    }
  } else {
    alert("Please enter a whole number from 8 to 128.");
    return;
  }
};

// FUNCTION DECLARATIONS (how to do steps)
function generatePassword() {
  // All code goes here
  const passwordCriteria = getCriteria();
  console.log(passwordCriteria);
}

// APPLICATION STEPS (what to do/call from above)

// generate random password
// for loop through the value of passwordLength
for (let i = 0; i < passwordLength + 1; i++) {
  // getRandomIndexNumber between 1 and passwordLength
  const getRandomIndexNumber = Math.floor(Math.random() * passwordLength - 1);
  // pick random object array using randomIndexNumber
  // get randomCharacterNumber between 0 and array length-1
  // pick random character number from object array using randomCharacterNumber
  // push character into passwordCharacters array (how/where to declare this?)
}
// writePassword to page

// PROVIDED CODE
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
