document.write("<h2> <br> Program to check whether the given input is a number, uppercase letter or lowercase letter::</h2>");
var character = prompt("Enter a character:");

var ascii = character.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    document.write("The given input is a number.<br>");
}
else if (ascii >= 65 && ascii <= 90) {
    document.write("The given input is an uppercase letter.<br>");
}
else if (ascii >= 97 && ascii <= 122) {
    document.write("The given input is a lowercase letter.<br>");
}
else {
    document.write("The given input is a special character.<br>");
}

document.write("<h2> <br> Program to check which of the two given integers is larger or whether they are equa:</h2>");

var num1 = +prompt("Enter first integer:");
var num2 = +prompt("Enter second integer:");

if (num1 > num2) {
    document.write(num1 + " is larger than " + num2);
}
else {
  document.write("Both integers are equal.<br>");
}
document.write("<h2> <br> Program to check whether the given number is positive, negative or zero:</h2>");

var num = +prompt("Enter a number:");


if (num > 0) {
    document.write("The number is positive.<br>");
}
else if (num < 0) {
    document.write("The number is negative.<br>");
}
else {
    document.write("The number is zero.<br>");
}

document.write("<h2> <br> Program to check whether the given character is a vowel or not:</h2>");
var character = prompt("Enter a vowel:");

if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u")
     {
    document.write("true.<br>");
}
else {
    document.write("false.<br>");
}
document.write("<h2> <br> Program to check whether the entered password is correct or incorrect:</h2>");
var correctPassword = "12345";

var password = prompt("Enter your password:");

if (password == "") {
    document.write("Please enter your password");
}
else if (password == correctPassword) {
    document.write("Correct! The password you entered matches the original password.<br>");
}
else {
    document.write("Incorrect password.<br>");
}
document.write("<h2> <br>Program to take time as input in 24-hour clock format and display the appropriate greeting:</h2>");

var time = +prompt("Enter time in 24-hour format:");


if (time >= 0 && time < 1200) {
    document.write("Good Morning.<br>");
}
else if (time >= 1200 && time < 1700) {
    document.write("Good Afternoon.<br>");
}
else if (time >= 1700 && time < 2100) {
    document.write("Good Evening.<br>");
}
else {
    document.write("Good Night.<br>");
}