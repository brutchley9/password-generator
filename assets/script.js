// Assignment code here
var uppercaseLetters = prompt("Welcome to my password generator! Would you like to conlude Uppercase letters?")
var lowercaseletters = prompt("Would you like to include lower case letters?")
var numbers = prompt("Would you like to include numbers?")
var specialCharacters = prompt("Would you like to include special characters?")
var passwordLength = prompt("How long should password be (between 8 and 128 characters)?")

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