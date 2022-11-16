# Third-Week-Challange
USER STORY
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

ACCEPTANCE 
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

HOW I SOLVED
Using the starter code I plugged in a function to randomly generate charaters into a password. I learned about Math.random and how it can be used to randomly pick
charaters from a set when used in a fuction. I did read that math.random isnt the most secure way to generate passwords but further calrity would be needed for me to understand why this is.

RESEARCH LINKS
https://w3collective.com/random-password-generator-javascript/
https://dev.to/code_mystery/random-password-generator-using-javascript-6a
https://hashnode.com/post/lets-create-a-simple-random-password-generator-with-javascript-ckm6f1o650686rbs1dps1450j
