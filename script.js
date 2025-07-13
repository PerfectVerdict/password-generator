
let generatePassword = function() {
const specialCharacters = [
'!', '"', '#', '$', '%', '&', "'", '(', ')', '*',
'+', ',', '-', '.', '/', ':', ';', '<', '=', '>',
'?', '@', '[', '\\', ']', '^', '_', '`', '{', '|',
'}', '~'
];
const capitalLetters = [
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
'U', 'V', 'W', 'X', 'Y', 'Z'
];
const lowercaseLetters = [
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
'u', 'v', 'w', 'x', 'y', 'z'
];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// TODO ask user for lowercase letters
  // Make sure they continue with the program and choose between 8 - 128 chars
  let numOfChars = prompt("How many charactors shall be your password?\nIt must be between 8 and 128.")
  if (numOfChars == null) {
    window.alert("Please let me make you a password")
    generatePassword()
  } else if (numOfChars < 8 || numOfChars > 128) {
    window.alert("It must be between 8 and 128")
    generatePassword()
  // Ask for parameters and make sure they choose one char type
  } else {
  let userSpecialSymbols = window.confirm("Do you want special symbols?") 
  let userLowercase = window.confirm("Do you want lowercase ?") 
  let numbers = window.confirm("Do you wat special numbers?") 
  let capitals = window.confirm("Do you wat special capital letters?") 
    if (userSpecialSymbols == false && numbers == false && capitals == false) {
     window.alert("You have to choose atleast one type of charactor") 
      generatePassword()

    } else {
    let passArr = []      
      if (userSpecialSymbols == true) {
        passArr.push(specialCharacters)
      } if (numbers == true) {
        passArr.push(digits)
      } if (capitals == true) {
        passArr.push(capitalLetters)
      } if (userLowercase == true) {
        passArr.push(lowercaseLetters)
      }
      let availChars = passArr.flat();
      // mix them up
      let shuffledAvailChars = availChars.sort((a, b) => 0.5 - Math.random());
      //get numOfChar amount of random ones. that is the password.
      let password = ""
      for (i = 0; i < numOfChars; i ++) {
        let randomIndex = Math.floor(Math.random() * availChars.length);
        password += availChars[randomIndex];
      }
      let displayedPassword = document.getElementById("displayPassword")
      displayedPassword.innerText = password
      return password;
    }
  }
}

generatePassword()
