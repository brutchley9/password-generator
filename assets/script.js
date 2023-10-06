// Assignment code here
var uppercaseLetters = confirm("Welcome to my password generator! Would you like to conlude Uppercase letters? (yes/no)")
var lowercaseLetters = confirm("Would you like to include lower case letters? (yes/no)")
var numbers = confirm("Would you like to include numbers? (yes/no)")
var specialCharacters = confirm("Would you like to include special characters? (yes/no)")
var passwordLength = prompt("How long should password be (between 8 and 128 characters)?")

// these are my assortment of variables for the password generator, with paramters included below

var specialCharactertypes = ["!", "?", "@", "#", "$", "%", "^", "&", "*", ";"]
var uppercaseLetterstypes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"]
var lowercaseLetterstypes = ["a", "b", "d", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


//series of functions designed to produce password generator

function gitrandomindex(arraylength) {
  return Math.floor(Math.random() * arraylength)
}

var randomIndex = gitrandomindex(specialCharactertypes.length)

if (uppercaseLetters) {

} else {
  console.log("")
}


if (lowercaseLetters === "yes" && lowercaseLetters === "Yes" && lowercaseLetters === "YES") {
  
} else {
  console.log("")
}


if (numbers === "yes" && numbers === "Yes" && numbers === "YES") {
  console.log(Math.floor(Math.random() * 999))
  
} else {
  console.log("")
}


if (specialCharacters === "yes" && specialCharacters === "Yes" && specialCharacters === "YES") {
  
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