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
const validateIsNumber = (passwordLength) => {
  const isNumber = typeof passwordLength;
  return isNumber;
};

// check password length is >=8 and <= 128
const validateNumberValue = (passwordLength) => {
  const validValue = passwordLength >= 8 && passwordLength <= 128;
  return validValue;
};

const getPasswordLength = () => {
  const passwordLength = prompt(
    "Please select a password length between 8 and 128 characters."
  );
  return Number(passwordLength);
};

// check if lowercase characters is chosen
const getIsLowercase = () => {
  const isLowercase = confirm("Include lowercase characters?");
  return isLowercase;
};

// check if uppercase characters is chosen
const getIsUppercase = () => {
  const isUppercase = confirm("Include uppercase characters?");
  return isUppercase;
};

// check if numeric characters is chosen
const getIsNumeric = () => {
  const isNumeric = confirm("Include numeric characters?");
  return isNumeric;
};

// check if special characters is chosen
const getIsSpecial = () => {
  const isSpecial = confirm("Include special characters?");
  return isSpecial;
};

// compile password criteria selections
const getCriteria = () => {
  // get password length
  const passwordLength = getPasswordLength();
  const isValid =
    validateIsNumber(passwordLength) === "number" &&
    validateNumberValue(passwordLength);
  if (isValid) {
    // get password character choices
    const isLowercase = getIsLowercase();
    const isUppercase = getIsUppercase();
    const isNumeric = getIsNumeric();
    const isSpecial = getIsSpecial();
    // check not all false
    if (isLowercase || isUppercase || isNumeric || isSpecial) {
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
const getRandomLower = () => {
  // get random index integer
  const randomInteger = Math.floor(Math.random() * lowerCase.length);
  // select random character from array
  const randomLower = lowerCase[randomInteger];
  return randomLower;
};

// get random uppercase character
const getRandomUpper = () => {
  // get random index integer
  const randomInteger = Math.floor(Math.random() * upperCase.length);
  // select random character from array
  const randomUpper = upperCase[randomInteger];
  return randomUpper;
};

// get random numeric character
const getRandomNumeric = () => {
  // get random index integer
  const randomInteger = Math.floor(Math.random() * numeric.length);
  // select random character from array
  const randomNumeric = numeric[randomInteger];
  return randomNumeric;
};

// get random special character
const getRandomSpecial = () => {
  // get random index integer
  const randomInteger = Math.floor(Math.random() * special.length);
  // select random character from array
  const randomSpecial = special[randomInteger];
  return randomSpecial;
};

// create array of "get character" functions
const getChoicesArray = (passwordCriteria) => {
  const choicesArray = [];
  if (passwordCriteria.isLowercase) {
    choicesArray.push(getRandomLower);
  }
  if (passwordCriteria.isUppercase) {
    choicesArray.push(getRandomUpper);
  }
  if (passwordCriteria.isNumeric) {
    choicesArray.push(getRandomNumeric);
  }
  if (passwordCriteria.isSpecial) {
    choicesArray.push(getRandomSpecial);
  }
  return choicesArray;
};

const generateRandomPassword = (passwordCriteria, choicesArray) => {
  const passwordCharacters = [];

  for (let i = 0; i < passwordCriteria.passwordLength; i++) {
    // get random index from choicesArray
    const randomChoicesArrayIndex = Math.floor(
      Math.random() * choicesArray.length
    );

    // get random choice from choicesArray
    const randomChoicesFunction = choicesArray[randomChoicesArrayIndex];

    // get random character by calling randomChoicesFunction
    const randomCharacter = randomChoicesFunction();

    // push random character into password array
    passwordCharacters.push(randomCharacter);
  }
  //  convert array to string
  const password = passwordCharacters.join("");

  return password;
};

const generatePassword = () => {
  // get password criteria
  const passwordCriteria = getCriteria();

  // get choices array
  const choicesArray = getChoicesArray(passwordCriteria);

  // get random password
  const password = generateRandomPassword(passwordCriteria, choicesArray);
  return password;
};

// PROVIDED CODE
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
