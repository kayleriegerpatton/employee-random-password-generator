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

// FUNCTION DECLARATIONS
var generateBtn = document.querySelector("#generate");

const getPasswordLength = function () {
  const passwordLength = prompt(
    "Please select a password length between 8 and 128 characters."
  );
  return Number(passwordLength);
};

// check password length is a number (not a string)
const validateIsNumber = function (passwordLength) {
  const isNumber = typeof passwordLength;
  return isNumber;
};

// check password length is >=8 and <= 128
const validateNumberValue = function (passwordLength) {
  const validValue = passwordLength >= 8 && passwordLength <= 128;
  return validValue;
};

// check if lowercase characters is chosen
const getIsLowercase = function () {
  const isLowercase = confirm("Include lowercase characters?");
  return isLowercase;
};

// check if uppercase characters is chosen
const getIsUppercase = function () {
  const isUppercase = confirm("Include uppercase characters?");
  return isUppercase;
};

// check if numeric characters is chosen
const getIsNumeric = function () {
  const isNumeric = confirm("Include numeric characters?");
  return isNumeric;
};

// check if special characters is chosen
const getIsSpecial = function () {
  const isSpecial = confirm("Include special characters?");
  return isSpecial;
};

// compile password criteria selections
const getCriteria = function () {
  // get password length
  const passwordLength = getPasswordLength();
  const isValid =
    validateIsNumber(passwordLength) === "number" &&
    validateNumberValue(passwordLength) === true;
  if (isValid) {
    // get password character choices
    const isLowercase = getIsLowercase();
    const isUppercase = getIsUppercase();
    const isNumeric = getIsNumeric();
    const isSpecial = getIsSpecial();
    // check not all false
    if (
      isLowercase === true ||
      isUppercase === true ||
      isNumeric === true ||
      isSpecial === true
    ) {
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

const generatePassword = function () {
  // declare passwordCharacters array
  const passwordCharacters = [];

  // randomly choose a character type array from the chosen (true) options
  // randomly choose character from array
  // generate random integer to set the passwordCharacters array length
  const randomInteger = Math.floor(Math.random() * passwordLength);

  return;
};

// EXECUTION (what to do/call from above)
// function generatePassword() {
// get password criteria
const passwordCriteria = getCriteria();
console.log(passwordCriteria);

// generate random password
// create empty passwordCharacters array
// // for loop through the value of passwordLength
// for (let i = 0; i < passwordLength; i++) {
// const getRandomInteger = Math.floor(Math.random() * passwordLength);
//   // pick random object property using randomInteger
//   // get randomCharacterNumber between 0 and index length-1
//   // pick random character number from object properties using randomCharacterNumber
//   // assign character to passwordCharacters array
// }

// // PROVIDED CODE
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
