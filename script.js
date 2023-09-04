// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password
let special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~',
    '-', '_', '.'];
console.log(special);

// Array of numeric characters to be included in password
let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
console.log(num);

// Array of lowercase characters to be included in password
let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'];
console.log(lower);

// Array of uppercase characters to be included in password
let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'];
console.log(upper);


function generatePassword() {

    let master = [];

    let pw = '';

    //prompts for password criteria
    alert('Please follow the subsequent prompts to generate a random password.');
    let userSpecial = confirm('Do you want special characters in your password?');
    let userNum = confirm('Do you want numbers in your password?');
    let userLower = confirm('Do you want lowercase letters in your password?');
    let userUpper = confirm('Do you want uppercase letters in your password?');

       /*This is if user doesn't choose any criteria */
       if (userSpecial + userNum + userLower + userUpper === 0) {
        alert('Do you even want to make a password?\nPlease select at least one criteria.');
        return generatePassword();
    }
    let passwordLength = prompt('How long do you want your password to be?\nPlease enter a value of at least 8, but no more than 128.');
    
        /*This is if user enters a number not within our parameters of 8-128 or isn't even a number. */
        if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
            alert('Practice makes perfect -- let\'s try again.\nPlease enter an amount between 8 and 128.');
            return generatePassword();
        }

    console.log(userSpecial);
    console.log(userNum);
    console.log(userLower);
    console.log(userUpper);
    console.log(passwordLength);

    if (userSpecial === true) {
        master = master.concat(special);
    }
    if (userNum === true) {
        master = master.concat(num);
    }
    if (userLower === true) {
        master = master.concat(lower);
    }
    if (userUpper === true) {
        master = master.concat(upper);
    }

    console.log(master);

    /* The following for loop is saying: "For when I start with 0 characters, i will keep adding one more character until
    I hit how many characters the user indicates they want" */
    /* When this entire condition is true, i want to randomize the characters that have been chosen:
    Math.random be any number between 0 and 1 multiplied by the current master array's length of indices, this way you count
    only until the end of the master array. Math.Floor then rounds that down to nearest whole number (which would be character's index.)
    So for example, let's say master.length is 20 characters. With random and floor, characters will be chosen from indices 0-19. 
    That's what we would like it to do, but as it is written, it only produces a number. 
    Perhaps master then wrapping entire formula in brackets will treat the formula as an index number/accessible character
    PS: It did! */
    /* += allows the new value to be continuously added to the password string(pw) */
    for (i = 0; i < passwordLength; i++) {
        pw += master[Math.floor(Math.random() * master.length)];
        console.log(pw);
    }

    console.log(pw);
    return pw;
}

/* so this should determine the password, but where to store it?
variable (pw) */

/*The return call is used to pass information from one block to another or simply stop the code from continuing */





// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);