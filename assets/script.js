
//needed global values
var optionOne = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var optionTwo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var optionThree = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"";
var optionFour = "0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"";
var optionFive = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"";

var options = [optionOne, optionTwo, optionThree, optionFour, optionFive];

var promptChar, numNeeded = '';
var charSelectPrompt;

//working to clean up cases
function getText(charSelectPrompt) {
    numNeeded = '';
    if (!(charSelectPrompt > 0 && charSelectPrompt < 6)) {
        window.alert("You did not pick a valid option. Try again.");

            //call generator agin so user can pick valid option
            generatePassword();
    }
    else {
        for(var i = 0; i < promptChar; i++) {
            var randomNumber = Math.floor(Math.random() * options[charSelectPrompt-1].length);
            numNeeded += options[charSelectPrompt-1].substring(randomNumber, randomNumber + 1);
        }
    }
}

// generator code here
function charLength() {
    //ask how many characters are needed
    promptChar = window.prompt("How many characters would you like to generate for you password? \nPlease choose from 8 to 128.");

    promptChar = parseInt(promptChar);

    //conditional recursive function
    if(promptChar < 8 || promptChar > 128) {
        window.alert("You need to provide a valid answer! Please try again.")
        return charLength();
    }
    return generatePassword();
}

function generatePassword() {
    //ask what types of characters they would like for their password
    charSelectPrompt = window.prompt("Which characters would you like to include in your password? \nPlease enter one of the following: 1 for just LETTERS A-Z, 2 for LETTERS and NUMBERS, 3 for LETTERS and SPECIAL CHARACTERS, 4 for NUMBERS and SPECIAL CHARACTERS, 5 for ALL options.")

    charSelectPrompt = parseInt(charSelectPrompt);
    getText(charSelectPrompt);
    return numNeeded;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");
    passwordText.value = "";

    passwordText.value = charLength();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);