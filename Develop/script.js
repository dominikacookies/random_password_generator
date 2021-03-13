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
	// Create a variable to store our generated password
	var password = ''

	// Logic would go here
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
