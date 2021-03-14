	// Declare length of password
	const lengthChoice = prompt("How long would you like your password to be?");

  console.log(lengthChoice)
	// If lengthChoice is submitted empty
  if (!lengthChoice) {
    alert("Please enter the password length you would like.");
  } else {
    
  }


  // Confirm criteria (boolean)
  const uppercaseChoice = confirm("Would you like to include uppercase letters in your password?");
  // Perform action based on if true or false
  if (uppercaseChoice) {
   // add uppercase letters to new password
  } else {
   // do not add uppercase letters to new password
  }