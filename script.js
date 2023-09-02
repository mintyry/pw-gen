// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password
let special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}','{', ']', '[', '~', 
'-', '_', '.'];
console.log(special);

// Array of numeric characters to be included in password
let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
console.log(num);

// Array of lowercase characters to be included in password
let lower = ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
'u', 'v', 'w', 'x', 'y', 'z'];
console.log(lower);

// Array of uppercase characters to be included in password
let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
'U', 'V', 'W', 'X', 'Y', 'Z'];
console.log(upper);

let master = [];

//prompts for password criteria
alert('Please follow the subsequent prompts to generate a random password.');
let userSpecial = confirm('Do you want special characters in your password?');
let userNum = confirm('Do you want numbers in your password?');
let userLower = confirm('Do you want lowercase letters in your password?');
let userUpper = confirm('Do you want uppercase letters in your password?');
let passwordLength = prompt('How long do you want your password to be?\nPlease enter a value of at least 8, but no more than 128.')


function generatePassword () {
    if (userSpecial === true) {
        master.concat.special;
    }
    if (userNum === true) {
        master.concat.num;
    }
    if (userLower === true) {
        master.concat.lower;
    }
    if (userUpper === true) {
        master.concat.upper;
    };

    //if i have 0 apples, and i get one more apple, add it to basket, but stop when i have 5
    // for (let i = 0; i <  ; i++)
    //  {
   // master
    // }

    return;
}

generatePassword();


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);