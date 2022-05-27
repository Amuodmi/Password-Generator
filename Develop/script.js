
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
//var passwordCharacters = ["/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/"];
//above help code found at:  https://www.w3resource.com/javascript/form/password-validation.php)


function generatePassword(){
  var passwordLength = window.prompt("How long would you like your password to be? (Enter a number between 8 - 128)");
if (passwordLength <= 7 || passwordLength >= 129) {
  window.prompt("Please enter a number between 8 - 128")
  return passwordLength();
} 

switch 
var symbols = confirm ("Would you like to include symbols/special characters?");
var numbers = confirm ("Would you like to include numbers?");
var lowerCase = confirm ("Would you like to use at least one lowercase letter?");
var upperCase = confirm ("Would you like to use at least one uppercase letter?");


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

