// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // all your code goes here
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Special characters: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~

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
const specialCharacters = ['!', '"', '#', '$', '%', '&', ''', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\', ']', '^', '_', '`', '{', '|', '}', '~' ]; 

// PSEUDO CODE
// user clicks button

// getPasswordCriteria
// prompt for passwordLength (8-128 ch)
// convert to integer
// validate is within range
// if true
// store passwordLength
// move to next question
// else
// alert "Please enter a number from 8-128"
// confirm lowercase choice Y/N
// store in isLowerCase (true/false)
// confirm upper choice Y/N
// store in isUpperCase (true/false)
// confirm numeric choice Y/N
// store in isNumeric (true/false)
// confirm special character choice Y/N
// store in isSpecial (true/false)
// check if all false
// if true
// alert "Please choose at least one type of character."
// else return criteria choices (to an array?)
