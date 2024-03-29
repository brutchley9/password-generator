// Assignment code here
// these are my assortment of variables for the password generator, with an associated array below

var specialCharacterTypes = ["!", "?", "@", "#", "$", "%", "^", "&", "*", ";"]
var uppercaseLettersTypes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"]
var lowercaseLettersTypes = ["a", "b", "d", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numberTypes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

//this is my function designed to produce a random assortment of values from each array if chosen as part of password

function generatePassword() {
  var passwordText = [];
  let uppercaseLetters = confirm("Welcome to my password generator! Would you like to include uppercase letters? (yes/no)");
  
  if (uppercaseLetters == true) {
    console.log('Uppercase!')
    var upperText = passwordText.concat(uppercaseLettersTypes)
    console.log(upperText)
  } else {
    console.log('No uppercase!')
    var upperText = []
    console.log(upperText)
  }

  let lowercaseLetters = confirm("Would you like to include lower case letters? (yes/no)");
  
  if (lowercaseLetters == true) {
    console.log('Lowercase!')
    var lowerText = upperText.concat(lowercaseLettersTypes)
    console.log(lowerText)
  } else {
    console.log('No lowercase!')
    var lowerText = upperText
    console.log(upperText)
  }

  let numbers = confirm("Would you like to include numbers? (yes/no)");

  if (numbers == true) {
    console.log('Numbers!')
    var numberText = lowerText.concat(numberTypes)
    console.log(numberText)
  } else {
    console.log('No numbers!')
    var numberText = lowerText
    console.log(lowerText)
  }

  let specialCharacters = confirm("Would you like to include special characters? (yes/no)");

  if (specialCharacters == true) {
    console.log('Special characters!')
    var specialText = numberText.concat(specialCharacterTypes)
    console.log(specialText)
  } else {
    console.log('No special characters!')
    var specialText = numberText
    console.log(numberText)
  }

  let passwordLength = prompt("How long should password be (between 8 and 128 characters)?");

  if (passwordLength > 128) {
    console.log('Too many characters!')
    return `Too many characters! Press button to try again.`;
  } else if (passwordLength < 8) {
    console.log('Not enough characters!')
    return `Not enough characters! Press button to try again.`;
  } else {
    console.log(passwordLength)
    console.log("Your password characters are " + specialText)
    
  }

  console.log(specialText + " are your available characters as a single array. Now creating randomized string " + passwordLength + " characters long")

  var fullCharacterArray = specialText.concat(specialText, specialText, specialText, specialText, specialText, specialText, specialText, specialText, specialText, specialText, specialText, specialText,)
  console.log(fullCharacterArray)
  var characterShuffle = fullCharacterArray.sort(() => (Math.random() > .5) ? 1 : -1);
  console.log(characterShuffle)
  var selectedPassword = characterShuffle.slice(0, passwordLength)
  console.log(selectedPassword)
  var finalPassword = selectedPassword.join('')
  console.log("Your Password: " + finalPassword)
  return finalPassword;

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