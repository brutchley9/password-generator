// Assignment code here
/*var uppercaseLetters = confirm("Welcome to my password generator! Would you like to include uppercase letters? (yes/no)")
var lowercaseLetters = confirm("Would you like to include lower case letters? (yes/no)")
var numbers = confirm("Would you like to include numbers? (yes/no)")
var specialCharacters = confirm("Would you like to include special characters? (yes/no)")
var passwordLength = prompt("How long should password be (between 8 and 128 characters)?")*/

// these are my assortment of variables for the password generator, with an associated array below

var specialCharacterTypes = ["!", "?", "@", "#", "$", "%", "^", "&", "*", ";"]
var uppercaseLettersTypes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"]
var lowercaseLettersTypes = ["a", "b", "d", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numberTypes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

//this is my function designed to produce a random assortment of values from each array if chosen as part of password

/*function gitrandomindex(arraylength) {
  return Math.floor(Math.random() * arraylength)
}*/

/*function generatePassword() {
  if (uppercaseLetters) {
    let random = Math.random() * uppercaseLettersTypes.length;
    return Math.floor(random)
  } else {
    console.log("No Uppercase");
  }

  if (lowercaseLetters) {
    let random = Math.random() * lowercaseLettersTypes.length;
    return Math.floor(random)
  } else {
    console.log("No Lowercase")
  }
  
  if (numbers) {
    let random = Math.random() * numberTypes.length;
    return Math.floor(random)
  } else {
    console.log("No Numbers")
  }
  
  if (specialCharacters) {
    let random = Math.random() * specialCharacterTypes.length;
    return Math.floor(random)
  } else {
    console.log("No Special Characters")
  }
}*/


function generatePassword() {
  var passwordText = [];
  let uppercaseLetters = confirm("Welcome to my password generator! Would you like to include uppercase letters? (yes/no)");
  
  if (uppercaseLetters == true) {
    console.log('Uppercase!')
    passwordText.push(uppercaseLettersTypes.join(''))
    console.log(passwordText.join(''))
  } else {
    console.log('No Uppercase!')
  }

  let lowercaseLetters = confirm("Would you like to include lower case letters? (yes/no)");
  
  if (lowercaseLetters == true) {
    console.log('Lowercase!')
    passwordText.push(lowercaseLettersTypes.join(''))
    console.log(passwordText.join(''))
  } else {
    console.log('No Lowercase!')
  }

  let numbers = confirm("Would you like to include numbers? (yes/no)");

  if (numbers == true) {
    console.log('Numbers!')
    passwordText.push(numberTypes.join(''))
    console.log(passwordText.join(''))
  } else {
    console.log('No numbers!')
  }

  let specialCharacters = confirm("Would you like to include special characters? (yes/no)");

  if (specialCharacters == true) {
    console.log('Special characters!')
    passwordText.push(specialCharacterTypes.join(''))
    console.log(passwordText.join(''))
  } else {
    console.log('No special characters!')
  }

  let passwordLength = prompt("How long should password be (between 8 and 128 characters)?");

  if (passwordLength > 128) {
    console.log('Too many characters!')
    return;
  } else if (passwordLength < 8) {
    console.log('Not enough characters!')
    return;
  } else {
    console.log(passwordLength)
  }


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