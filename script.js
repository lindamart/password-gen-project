// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var passMin = 8
    var passMax = 128
    var userChoices = "";

    // Question prompts
    // Password length questions of 8-128 chars
    var passwordLength = parseInt(window.prompt("Please choose the amount of chracters you would like in your password between 8 and 128"));

    console.log(passwordLength);
}
// lowercase char option
var littleLetters = window.confirm("Would you like lowercase letters in your password?");

console.log("little letters", littleLetters)
// uppercase char option
var bigLetters = window.confirm("Would you like uppercase letters in your password?");


console.log("big letters", bigLetters)
// number char option
var numbers = window.confirm("Would you like a number in your password?");

console.log("numbers", numbers)
// special char option
var specialChar = window.confirm("Would you like a special character in your password?");

console.log("special characters", specialChar)


var functArray = {
    getNumbers: function () {
        return String.fromCharCode(Math.floor(Math.random() * 10));
    },

    getlittleLetters: function () {
        return String.fromCharCode(Math.floor(Math.random() * 26));
    },

    getbigLetters: function () {
        return String.fromCharCode(Math.floor(Math.random() * 26));
    },

    getspecialChar: function () {
        return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};


if (numbers === true) {


}


// After prompting user on what they wany and testing with "if" statements create a for loop and test aginst your passwordLength variable and handle your randomizing inside the foor loop.


// // go to w3 schools and check out Math.random and Math.floor 
// // check out method .charAt();

var password = "";
var passwordText = document.querySelector("#password");

passwordText.value = password;



// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
