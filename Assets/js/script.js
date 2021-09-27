// Assignment Code
var generateBtn = document.querySelector("#generate");

// Your code goes here
function generatePassword() {
  const getCriteria = function () {
    return;
  };
  //
}

// get password length
  const passwordLength = getPasswordLength ();
  // check passwordLength is >=8 and =<128
// get password character choices
  const isLowercase = getIsLowercase();
  const isUppercase = getIsUppercase();
  const isNumeric = getIsNumeric();
  const isSpecial = getIsSpecial();
// check if choices are invalid (all false)
// if yes - alert and break
// if no - return password criteria

// create password criteria object
const passwordCriteria = {
  passwordLength = getPasswordLength (),
  isLowercase = getIsLowercase (),
  isUppercase = getIsUppercase (),
  isNumeric = getIsNumeric (),
  isSpecial = getIsSpecial (),
};

// generate random password
  // for loop through the value of passwordLength
  for (let i = 0; i<passwordLength + 1; i++)
    // getRandomIndexNumber between 1 and passwordLength
    const getRandomIndexNumber = Math.floor(Math.random() * passwordLength-1)
    // pick random object array using randomIndexNumber
    // pick random character from object array
    // push character into passwordCharacters array (how/where to declare this?)
// writePassword to page


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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
