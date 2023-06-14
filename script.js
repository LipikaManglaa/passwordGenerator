// Assignment Code
var generateBtn = document.querySelector("#generate");


//upperCaseLetters
let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let upperLetters = upperCaseLetters.split('');

//lowerCaseLetters
let lowercaseLetters = upperCaseLetters.toLowerCase()
let lowerLetters = lowercaseLetters.split('');

//Numeric characters
let numberData = "0123456789";
let numberLetter = Array.from(String(numberData), Number);


//special Characters
let specialSymbol = "!@#$%^&*()_+~|}{[]><.-/\=";
let specialSymbolConvert = specialSymbol.split('');

let password = document.querySelector("#password");

//add event listener for generate password in textbox
generateBtn.addEventListener('click', () => {

  
  password.value = generatePassword()
  

})


let passwordString;
let passwordChoose;
let userInput, userInputNumber, userInputCharacter, userInputLowercase, userInputUppercase, selection;
function generatePassword() {
  //Get input from User
  userInput = parseInt(prompt("How many characters would you like your password to contain?"))

  //if input is empty,alert message show
  if (!userInput) {
    alert("Please enter value between 8 to 128")
  }
  else if (userInput < 8 || userInput > 128) {
    alert("please select between 8 and 128 characters")
  } else {
    userInputNumber = confirm("click ok to confirm including numeric characters");
    userInputCharacter = confirm("click ok to confirm including special characters?");
    userInputUppercase = confirm("click ok to confirm including uppercase letters");
    userInputLowercase = confirm("click ok to confirm including lowerCase letters");
  }

  // Else if for selecting option if user does not select any input
  if (userInputNumber == "" && userInputCharacter == "" && userInputLowercase == "" && userInputUppercase == "") {
    selection = alert("You must aleast choose any selection!");

  }
  else if (userInputNumber && userInputCharacter && userInputLowercase && userInputUppercase) {
    selection = numberLetter.concat(specialSymbolConvert, lowerLetters, upperLetters);

  }
  //Three input selection start here
  //selection three input except upperCase
  else if (userInputNumber && userInputCharacter && userInputLowercase) {
    selection = numberLetter.concat(specialSymbolConvert, lowerLetters);
  }
  //selection three input except lowerCase
  else if (userInputNumber && userInputCharacter && userInputUppercase) {
    selection = numberLetter.concat(specialSymbolConvert, upperLetters);

  }
  //selection three input except special character
  else if (userInputNumber && userInputLowercase && userInputUppercase) {
    selection = numberLetter.concat(lowerLetters, upperLetters);

  }

  //selection three input except numbers
  else if (userInputLowercase && userInputCharacter && userInputUppercase) {
    selection = lowerLetters.concat(specialSymbolConvert, upperLetters);

  }
  //Three input selction ends here

  // Two input selction start here
  //selction two input except lowerCase and upperCase
  else if (userInputNumber && userInputCharacter) {
    selection = numberLetter.concat(specialSymbolConvert);
  }
  //selction two input except lowerCase and Number
  else if (userInputCharacter && userInputUppercase) {
    selection = specialSymbolConvert.concat(upperLetters);

  }
  //selction two input except lowerCase and special characters
  else if (userInputNumber && userInputUppercase) {
    selection = numberLetter.concat(upperLetters);

  }
  //selection two input except uppercase and special characters
  else if (userInputNumber && userInputLowercase) {
    selection = numberLetter.concat(lowerLetters);

  }
  //selection two input except uppercase and Numbers
  else if (userInputCharacter && userInputLowercase) {
    selection = specialSymbolConvert.concat(lowerLetters);

  }
  //selction two input except Numbers and special characters
  else if (userInputLowercase && userInputUppercase) {
    selection = lowerLetters.concat(upperLetters);

  }
  // two input selection ends here

  // Single input from user start here

  else if (userInputLowercase) {
    selection = lowerLetters;

  }
  else if (userInputCharacter) {
    selection = specialSymbolConvert;

  }
  else if (userInputNumber) {
    selection = numberLetter;

  }
  else if (userInputUppercase) {
    selection = upperLetters;

  }

  
let passwordGenerate = [];
  // Single input from user ends here

  // password variable is an array placeholder for user generated amount of length

  // Start random selection variables:
  // Random selection for all variables: 
  for (var i = 0; i < userInput; i++) {
    passwordChoose = selection[Math.floor(Math.random() * selection.length)];
    passwordGenerate.push(passwordChoose);
  }
  
  // This joins the password array and converts it to a string

  passwordString = passwordGenerate.join("");

  return passwordString;
}








