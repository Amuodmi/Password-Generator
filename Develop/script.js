
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


//to log the received information
var passwordCharacters = []
var generate = []



//function to start generator
function generatePassword(){
  var passwordLength = window.prompt("How long would you like your password to be? (Enter a number between 8 - 128)");
if (passwordLength <= 7 || passwordLength >= 129) {
  window.prompt("Please enter a number between 8 - 128")
  return generatePassword();
} 


//password criteria questions
var symbols = confirm("Would you like to include symbols/special characters?");
var numbers = confirm("Would you like to include numbers?");
var lowerCase = confirm("Would you like to use at least one lowercase letter?");
var upperCase = confirm("Would you like to use at least one uppercase letter?");



//if statements to connect character arrays
if (symbols){
   generate = generate.concat(symbolCharacter);
}

if (numbers) {
  generate = generate.concat(numberCharacter);
}

if (lowerCase){
  generate = generate.concat(lowerCaseCharacter);
}

if (upperCase) {
  generate = generate.concat(upperCaseCharacter);
}

//random math formula to connect + generate unique password
for (var i = 0; i < passwordLength; i++) {
  passwordCharacters.push(generate[Math.floor(Math.random() * generate.length)]);
}
return passwordCharacters.join('');

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
