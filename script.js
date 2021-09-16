// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialChar = "!@#$%^&*()-=_+[]";
    var userChoices = "";

    var passwordLength = parseInt(window.prompt("Please choose the amount of chracters you would like in your password between 8 and 128"));

    console.log(passwordLength);

    var littleLetters = window.confirm("Would you like lowercase letters in your password?");

    console.log("little letters", littleLetters)

    var bigLetters = window.confirm("Would you like uppercase letters in your password?");

    console.log("big letters", bigLetters)

    if(littleLetters === true){
        userChoices += lowerCase; 
    }

    if(bigLetters === true){
        userChoices += upperCase; 
    }

    console.log("user choicess", userChoices)

    // After prompting user on what they wany and testing with "if" statements create a for loop and test aginst your passwordLength variable and handle your randomizing inside the foor loop.


    // go to w3 schools and check out Math.random and Math.floor 
    // check out method .charAt();

    var password = "";
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
