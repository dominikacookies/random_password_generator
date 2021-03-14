// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare a new function on line 3
function generatePassword() {
	// Function variables
	var password = '';

	declareLength ();

	function declareLength () {
		// Password length declaration by user
		const lengthChoice = prompt("How long would you like your password to be?");
		// Can't be shorter than 8 or more than 128
		if ( !lengthChoice || isNaN(lengthChoice) ) {
    	alert("Please enter the password length you would like using numerical values only.");
		} else if ( lengthChoice > 128 || lengthChoice < 8) { 
			alert("Please enter a password length that's more than 8 and less than 128 characters.");
		} else { criteriaChoice ();
		}
	}

	function criteriaChoice () {
		// Criteria selection by user
		// Uppercase letters
		const uppercaseChoice = confirm("Would you like to include uppercase letters in your password?");
		console.log(uppercaseChoice)
		// Lowercase letters
		const lowercaseChoice = confirm("Would you like to include lowercase letters in your password?");
		// Numerics
		const numericChoice = confirm("Would you like to include numbers in your password?");
		// Special characters
		const specialChoice = confirm("Would you like to include any special characters in your password?");
		if (!uppercaseChoice && !lowercaseChoice && !numericChoice && !specialChoice) {
			alert("Please start again and select at least one password criteria to generate a password.");
		} else {
			// call function to generate password
		}	

	}






  // sample special characters @%+\\/'!#$^?:,)(}{][~-_.

	// Return our created password
	//return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
