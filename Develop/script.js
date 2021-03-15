var generateBtn = document.querySelector("#generate");

function generatePassword() {
	// Function variables
	var password = '';
	const uppercaseArray = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
	const lowercaseArray = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
	const numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
	const specialArray =  ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];
	let uppercaseChoice = false;
	let lowercaseChoice = false;
	let numericChoice = false;
	let specialChoice = false;
	let concatArray = [];
	let passwordArray = [];

	// Password length declared by user
	let lengthChoice = prompt("How long would you like your password to be?");

	// Password length input is validated
	validateLengthChoice ();

	function validateLengthChoice () {
		// Password cannot be shorter than 8 or more than 128 characters. Th password must be a number.
		if ( !lengthChoice || isNaN(lengthChoice) ) {
    	alert("Please enter the password length you would like using numerical values only.");
		} else if ( lengthChoice > 128 || lengthChoice < 8) { 
			alert("Please enter a password length that's more than 8 and less than 128 characters.");
		} else { criteriaChoice ()
		}
	}

	function criteriaChoice () {
		// Password criteria selection by user
		const uppercaseChoice = confirm("Would you like to include uppercase letters in your password?");
		const lowercaseChoice = confirm("Would you like to include lowercase letters in your password?");
		const numericChoice = confirm("Would you like to include numbers in your password?");
		const specialChoice = confirm("Would you like to include any special characters in your password?");
		
		// Password criteria is validated
		criteriaValidation (uppercaseChoice,lowercaseChoice,numericChoice,specialChoice)
	}

	function criteriaValidation (uppercaseChoice,lowercaseChoice,numericChoice,specialChoice) {
		if (!uppercaseChoice && !lowercaseChoice && !numericChoice && !specialChoice) {
			alert("Please start again and select at least one password criteria to generate a password.");
		} else { generate (uppercaseChoice,lowercaseChoice,numericChoice,specialChoice);
		}	
	}

	// New password is generated
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

	console.log (lengthChoice)

		
		// Required criteria arrays are joined into a single array
		const concArray = function concArrays () { 
			if (uppercaseChoice) {
				concArray = concArray.concat(upperCaseArray);
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

		console.log (concArray)

		// A for loop is used to generate a password from the single array
		for (var i = 0; i < lengthChoice; i++) {
			let password = concArray[Math.floor(Math.random() * concArray.length)];
		}
	}
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
