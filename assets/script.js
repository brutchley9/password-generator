// Assignment code here
var uppercaseLetters = confirm("Welcome to my password generator! Would you like to conlude Uppercase letters? (yes/no)")
var lowercaseLetters = confirm("Would you like to include lower case letters? (yes/no)")
var numbers = confirm("Would you like to include numbers? (yes/no)")
var specialCharacters = confirm("Would you like to include special characters? (yes/no)")
var passwordLength = prompt("How long should password be (between 8 and 128 characters)?")

// these are my assortment of variables for the password generator, with an associated array below

var specialCharacterTypes = ["!", "?", "@", "#", "$", "%", "^", "&", "*", ";"]
var uppercaseLettersTypes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"]
var lowercaseLettersTypes = ["a", "b", "d", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numberTypes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

//this is my function designed to produce a random assortment of values from each array if chosen as part of password

function gitrandomindex(arraylength) {
  return Math.floor(Math.random() * arraylength)
}

if (uppercaseLetters) {
  gitrandomindex(uppercaseLettersTypes.length)
} else {
  console.log("")
}

if (lowercaseLetters) {
  gitrandomindex(lowercaseLettersTypes.length)
} else {
  console.log("")
}

if (numbers) {
  gitrandomindex(numberTypes.length)
} else {
  console.log("")
}

if (specialCharacters) {
  gitrandomindex(specialCharacterTypes.length)
} else {
  console.log("")
}

function generatePassword() {
  console.log(numbers)
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);