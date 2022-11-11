// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz!?@#$&()";
  var plength = 8
  //var pword = " "
  let generate = ""
  for (var i = 0; i < plength; i++){
    generate += symbols.charAt (Math.floor(Math.random() * symbols.length))
    console.log(generate)
}
 //pword += password;
 return generate

}