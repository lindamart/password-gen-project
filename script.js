// Assignment Password Generator


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generatePassword);


// Global variables
function generatePassword() {
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var userChoices = "";
    var characterPassword = "";


    // Password criteria question prompts

    var passwordLength = parseInt(window.prompt("How long do you want your password to be?  Please choose between 8 and 128 characters."));

    console.log(passwordLength);

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Please choose a number between 8 and 128");
        return;
    } else {

        var littleLetters = window.confirm("Hit OK if you would like lowercase letters in your password?");
        console.log("little letters", littleLetters)

        var bigLetters = window.confirm("Hit OK if you would like uppercase letters in your password?");


        console.log("big letters", bigLetters)

        var nums = window.confirm("Hit OK if you would like a number in your password?");

        console.log("numbers", numbers)

        var specialCharacters = window.confirm("Hit OK if you would like a special character in your password?");

        console.log("special characters", specialChar)

        // if loops for aswers to questions to be used
        if (littleLetters === true) {
            userChoices += lowerCase;
        }

        if (bigLetters === true) {
            userChoices += upperCase;
        }

        if (nums === true) {
            userChoices += numbers
        }

        if (specialCharacters === true) {
            userChoices += specialChar
        }

        console.log("USER CHOICES", userChoices)

        // Creat random selection for yes answers above for password
        for (var i = 0; i < passwordLength; i++) {

            var password = Math.floor(userChoices.length * Math.random())
            console.log(password)
            characterPassword += userChoices.charAt(password)
            console.log( characterPassword)
        }
        var passwordText = document.querySelector("#password");

        passwordText.value = characterPassword;
    }

}