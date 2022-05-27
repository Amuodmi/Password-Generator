
//Create clickable button that on click alert window pops up to start
//the password criteria information
//minimum password length 8 characters
//must include symbols, numeric, and uppercase
//no more than 128 length
//once successful the password is displayed either in window or on page

var symbolCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "=", "<", ">", "/", ";"];
var numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passwordCharacters = []



function generatePassword(){
  var passwordLength = window.prompt("How long would you like your password to be? (Enter a number between 8 - 128)");
if (passwordLength <= 7 || passwordLength >= 129) {
  window.prompt("Please enter a number between 8 - 128")
  return passwordLength();
} 

var symbols = confirm ("Would you like to include symbols/special characters?");
var numbers = confirm ("Would you like to include numbers?");
var lowerCase = confirm ("Would you like to use at least one lowercase letter?");
var upperCase = confirm ("Would you like to use at least one uppercase letter?");

if (symbols){
   passwordCharacters = passwordCharacters.concat(symbolCharacter);
}

if (numbers) {
  passwordCharacters = passwordCharacters.concat(numberCharacter);
}

if (lowerCase){
  passwordCharacters = passwordCharacters.concat(lowerCaseCharacter);
}
if (upperCase) {
  passwordCharacters = passwordCharacters.concat(upperCaseCharacter);
}

for (var i = 0; i < passwordLength; i++) {
  characterSet.push(passwordCharacters[Math.floor(Math.random() * generation.length)]);
}
return characterSet.join('');

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();//function in a variable, not called?
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









var upper = ['A', 'B', 'C'];
var lower = ['d', 'e', 'f'];
var passwordChars = [];

var wantsUppercase = window.confirm("do you want uppercase letters?");
var wantsLowercase = window.confirm("do you want lowercase letters?");

console.log("before concat", passwordChars);
if (wantsUppercase) {
   passwordChars = passwordChars.concat(upper);
}
if (wantsLowercase) {
   passwordChars = passwordChars.concat(lower);
}

console.log("after concat, before join", passwordChars); //array [ "A", "B", "C", "d", "e", "f" ]
console.log("after join", passwordChars.join("")); //string "ABCdef"