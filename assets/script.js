// Assignment code here
var uppercaseLetters = prompt("Welcome to my password generator! Would you like to conlude Uppercase letters? (yes/no)")
var lowercaseLetters = prompt("Would you like to include lower case letters? (yes/no)")
var numbers = prompt("Would you like to include numbers? (yes/no)")
var specialCharacters = prompt("Would you like to include special characters? (yes/no)")
var passwordLength = prompt("How long should password be (between 8 and 128 characters)?")

var specialCharactertypes = ["!", "?", "@", "#", "$", "%", "^", "&", "*", ";"]
var uppercaseLetterstypes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"]
var lowercaseLetterstypes = ["a", "b", "d", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

Math.floor(Math.random() * 999)



if (uppercaseLetters === "yes" && uppercaseLetters === "Yes" && uppercaseLetters === "YES") {
  
}


if (lowercaseLetters === "yes" && lowercaseLetters === "Yes" && lowercaseLetters === "YES") {
  
}


if (numbers === "yes" && numbers === "Yes" && numbers === "YES") {
  Math.floor(Math.random() * 999)
  
}


if (specialCharacters === "yes" && specialCharacters === "Yes" && specialCharacters === "YES") {
  
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