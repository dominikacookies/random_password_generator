var generateBtn = document.querySelector("#generate");

function generatePassword() {
	// Function variables
	let password = "";
	
	// Password criteria variables
	let uppercaseChoice = false;
	let lowercaseChoice = false;
	let numericChoice = false;
	let specialChoice = false;

	// Password criteria arrays
	const uppercaseArray = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
	const lowercaseArray = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
	const numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
	const specialArray =  ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];

	// Arrays used to generate desired password
	let concArray = [];
	let passwordArray = [];


	// Password length declared by user
	let lengthChoice = prompt("How long would you like your password to be?");

	
	validateLengthChoice ();

	// Password length input is validated
	function validateLengthChoice () {
		// Password cannot be shorter than 8 or more than 128 characters. Th password must be a number.
		if ( !lengthChoice || isNaN(lengthChoice) ) {
			alert("Please enter the password length you would like using numerical values only.");
		} else if ( lengthChoice > 128 || lengthChoice < 8) { 
			alert("Please enter a password length that's more than 8 and less than 128 characters.");
		} else { criteriaChoice ()
		}
	}

	// Password criteria selection by user
	function criteriaChoice () {
		const uppercaseChoice = confirm("Would you like to include uppercase letters in your password?");
		const lowercaseChoice = confirm("Would you like to include lowercase letters in your password?");
		const numericChoice = confirm("Would you like to include numbers in your password?");
		const specialChoice = confirm("Would you like to include any special characters in your password?");
		
		criteriaValidation (uppercaseChoice,lowercaseChoice,numericChoice,specialChoice)
	}

	// Password criteria is validated
	function criteriaValidation (uppercaseChoice,lowercaseChoice,numericChoice,specialChoice) {
		if (!uppercaseChoice && !lowercaseChoice && !numericChoice && !specialChoice) {
			alert("Please start again and select at least one password criteria to generate a password.");
		} else { generate (uppercaseChoice,lowercaseChoice,numericChoice,specialChoice);
		}	
	}

	// Secure password is generated
	function generate (uppercaseChoice,lowercaseChoice,numericChoice,specialChoice) {
		
		// Push one character from chosen criteria to the final password array
		if (uppercaseChoice) {
			const randomIndex = Math.floor(Math.random() * uppercaseArray.length);
			passwordArray.push(uppercaseArray[randomIndex]);
			lengthChoice -= 1;
		}
		
		if (lowercaseChoice) {
			const randomIndex = Math.floor(Math.random() * lowercaseArray.length);
			passwordArray.push(lowercaseArray[randomIndex]);
			lengthChoice -= 1;
		}

		if (numericChoice) {
		const randomIndex = Math.floor(Math.random() * numericArray.length);
		passwordArray.push(numericArray[randomIndex]);
		lengthChoice -= 1;
		}

		if (specialChoice) {
			const randomIndex = Math.floor(Math.random() * specialArray.length);
			passwordArray.push(specialArray[randomIndex]);
			lengthChoice -= 1;
		}
		
		concanateArrays ()

		// User's chosen criteria arrays are joined into a single array
		function concanateArrays () { 
			if (uppercaseChoice) {
				concArray = concArray.concat(uppercaseArray);
			}

			if (lowercaseChoice) {
				concArray = concArray.concat(lowercaseArray);
			}
			
			if (numericChoice) {
				concArray = concArray.concat(numericArray);
			}
			
			if (specialChoice) {
				concArray = concArray.concat(specialArray);
			}
		}

		// Remaining password characters are generated from the single array 
		for (var i = 0; i < lengthChoice; i++) {
			const randomIndex = Math.floor(Math.random() * concArray.length);
			passwordArray.push(concArray[randomIndex]);
		}

		// The passwordArray is translated into a string and declared against variable password
		password = passwordArray.join("");
	}
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
