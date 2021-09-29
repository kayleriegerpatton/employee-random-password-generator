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

const special = [
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

const getPasswordLength = function () {
  const passwordLength = prompt(
    "Please select a password length between 8 and 128 characters."
  );
  return Number(passwordLength);
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

// get random lowercase character
const getRandomLower = function () {
  // get random index integer
  const randomInteger = Math.floor(Math.random() * lowerCase.length);
  // select random character from array
  const randomLower = lowerCase[randomInteger];
  return randomLower;
};

// get random uppercase character
const getRandomUpper = function () {
  // get random index integer
  const randomInteger = Math.floor(Math.random() * upperCase.length);
  // select random character from array
  const randomUpper = upperCase[randomInteger];
  return randomUpper;
};

// get random numeric character
const getRandomNumeric = function () {
  // get random index integer
  const randomInteger = Math.floor(Math.random() * numeric.length);
  // select random character from array
  const randomNumeric = numeric[randomInteger];
  return randomNumeric;
};

// get random special character
const getRandomSpecial = function () {
  // get random index integer
  const randomInteger = Math.floor(Math.random() * special.length);
  // select random character from array
  const randomSpecial = special[randomInteger];
  return randomSpecial;
};

const generatePassword = function () {
  // get password criteria
  const passwordCriteria = getCriteria();
  console.log(passwordCriteria);
  // declare empty passwordCharacters array
  const passwordCharacters = [];
  // get randomIndexNumber
  // use randomIndexNumber choose a random character type array from the chosen (true) options
  // get randomCharacterNumber // ARRAY OF FUNCTIONS? HOW?
  // use randomCharacterNumber to choose a character from array
  // const randomInteger = Math.floor(Math.random() * passwordLength);

  return "password123";
};

// EXECUTION (what to do/call from above)
// function generatePassword() {

// const randomSpecial = getRandomSpecial();
// console.log(randomSpecial);

// generate random password
// // for loop through array of functions using the value of passwordLength
// for (let i = 0; i < passwordLength; i++) {
// const getRandomInteger = Math.floor(Math.random() * passwordLength);
//   // pick random object property using randomInteger
//   // get randomCharacterNumber between 0 and index length-1
//   // pick random character number from object properties using randomCharacterNumber
//   // assign character to passwordCharacters array
// }

// PROVIDED CODE
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
