
// needed global values
var optionOne = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var optionTwo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var optionThree = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"";
var optionFour = "0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"";
var optionFive = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"";

var options = [optionOne, optionTwo, optionThree, optionFour, optionFive];

var promptChar = '';
var numNeeded = promptChar;

// working to clean up cases
function getText(optionNum) {
    for(var i = 0; i < promptChar; i++) {
        var randomNumber = Math.floor(Math.random() * options[optionNum - 1].length);
        numNeeded += options[optionNum - 1].substring(randomNumber, randomNumber + 1);
    }
}

// get number of characters user wants
function charLength() {
    //ask how many characters are needed
    var promptChar = window.prompt("How many characters would you like to generate for you password? \nPlease choose from 8 to 128.");

    promptChar = parseInt(promptChar);

    //conditional recursive function
    if(promptChar < 8 || promptChar > 128) {
        window.alert("You need to provide a valid answer! Please try again.")
        return charLength();
    }
    return generatePassword();
}

function generatePassword() {
    // ask what types of characters they would like for their password
    var charSelectPrompt = window.prompt("Which characters would you like to include in your password? \nPlease enter one of the following: 1 for just LETTERS A-Z, 2 for LETTERS and NUMBERS, 3 for LETTERS and SPECIAL CHARACTERS, 4 for NUMBERS and SPECIAL CHARACTERS, 5 for ALL options.")

    charSelectPrompt = parseInt(charSelectPrompt);

    // use switch to choose what characters user want in their password
    switch(charSelectPrompt) {
        case 1:
            getText(charSelectPrompt);
            return numNeeded;
        case 2:
            getText(charSelectPrompt);
            return numNeeded;
        case 3:
            getText(charSelectPrompt);
            return numNeeded;
        case 4:
            getText(charSelectPrompt);
            return numNeeded;
        case 5:
            getText(charSelectPrompt);
            return numNeeded;
        default:
            window.alert("You did not pick a valid option. Try again.");

            //call generator agin so user can pick valid option
            return generatePassword();
    }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = charLength();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);