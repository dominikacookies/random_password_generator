// Criteria
// - What password length the user wants?
// > Make use of the `prompt()` function for this.
// - Does the user want lowercase characters?
// > Make use of the `confirm()` function for this.
// - Does the user want uppercase characters?
// > Make use of the `confirm()` function for this.
// - Does the user want special characters?
// > Make use of the `confirm()` function for this.

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare a new function on line 3
function generatePassword() {
	// Function variables
	var password = '';

	// Password length declaration by user
	const lengthChoice = prompt("How long would you like your password to be?");
	// Can't be shorter than 8  or more than 128

	// Criteria selection by user

	// Uppercase letters
  const uppercaseChoice = confirm("Would you like to include uppercase letters in your password?");

	// Lowercase letters
  const lowercaseChoice = confirm("Would you like to include lowercase letters in your password?");

	// Numerics
  const numericChoice = confirm("Would you like to include numbers in your password?");

	// Special characters
  const specialChoice = confirm("Would you like to include any special characters in your password?");

	// Has user selected at least one of the above?



  // sample special characters @%+\\/'!#$^?:,)(}{][~-_.
	...

	// Return our created password
	return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
