// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare a new function on line 3
function generatePassword() {
	// Function variables
	var password = '';
	const uppercaseArray = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
	const lowercaseArray = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
	const numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
	const specialArray =  ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];


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
		} else { concateArrays ();
		}	
	}

	// Concate chosen criteria arrays into one long array 
	// This does not work
	function concateArrays () {
		const concArray = function () {
			if (uppercaseChoice) {
				concArray = concatenatedArray.concat(lowerCaseArray);
			}
			console.log (concateArrays)
		
			if (lowercaseChoice) {
				concArray = concatenatedArray.concat(upperCaseArray);
			}
		
			if (numericChoice) {
				concArray = concatenatedArray.concat(numberArray);
			}
		
			if (specialChoice) {
				concArray = concatenatedArray.concat(specialCharacterArray);
			}
		}
	}

	// for (var i = 0; i < lengthChoice; i++) {
		// let generate = [Math.floor(Math.random() * 62)];
		// password += generate;
	//}

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
