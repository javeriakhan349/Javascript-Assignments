//CHAPTER#09 
//USER INPUT & CONDITIONAL STATEMENT

// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:“Welcome to city of lights.
var city = prompt("Enter your city name...")
if (city === "Karachi"){
    document.write("Welcome to city of lights")
}


// 2. Write a program to take “gender” as input from user. If theuser is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am
var gender = prompt("Enter gender...")
var male = male;
if (gender === "male"){
    document.write(" <br> Good Morning Sir!")
}
else{
    document.write("<br> Good Morning Ma’am")
}


// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table
document.write("<h3>Signal Color:</h3>")
var color = prompt("Enter traffic signal color...")
if(color ==="red"){
    document.write("<br> RED         :           Must stop ")
}
else if(color === "yellow")
    {
      document.write("<br> YELLOW   :            Ready to move")
}
else if (color === "green")
{
     document.write("<br> GREEN   :            Move Now!")
}
else {
    document.write("Invalid signal color");
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litresshow the message “Please refill the fuel in your car”
document.write("<h3> <br> Input remaining fuel:</h3>")
var remainingfuel = +prompt("Enter your remaining fuel in car (in litres)")
if(remainingfuel <= 0.25)
{
    document.write(" <br> Please refill the fuel in your car")
}
else{
     document.write(" <br> You have enough fuel in your car")
}


// 6. Write a program to take input the marks obtained in threesubjects & total marks. Compute & show the resulting percentage on your page. Take percentage & computegrade as per following table:
var totalmarks = 300;
var marksobt = +prompt("Enter your marks obtained....")
var percent = (marksobt/totalmarks)*100;
document.write("<h1> <br> <br> <br> Mark Sheet:</h1>")
document.write(" <br> Total MArks:"+totalmarks)
document.write(" <br> Marks Obtained:"+marksobt)
document.write(" <br>Percentage: "+percent+"%")
if(percent>="80")
{
    document.write(" <br> Grade: A-one")
    document.write(" <br> Remarks: Excellent")


}
else if(percent>="70")
    {
 document.write(" <br> Grade: A")
    document.write(" <br> Remarks: Good")
    }
else if(percent>="60")
    {
 document.write(" <br> Grade: B")
    document.write(" <br> Remarks: You need to improve")
    }
else
    {
 document.write(" <br> Grade: FAIL")
    document.write(" <br> Remarks: SORRY")
    }



//     7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
document.write("<h1> <br> <br> Guess game:</h1>")
var num = 7;
var secretnum = +prompt("guess the secret number...")
if (secretnum === num)
{
    document.write("<br> Bingo! Correct answer")
}
else if (  secretnum === 8 )
    {
 document.write("<br>Close enough to the correct answer ")
}
else{
    document.write("<br>OOPS!!! Wrong guess")
}


// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var inputNum = +prompt("Enter a number to check whether the given number is divisible by 3 ");
if (inputNum % 3 === 0)
{
    document.write(" <br> <br> <h1>program to check whether the given number is divisible by 3:</h1>")
    document.write("<br> <br> The given number is divisible by 3")
}
else{
    document.write("<br> <br> The given number is not divisible by 3")
}



// 9. Write a program that checks whether the given input is an even number or an odd number
 document.write(" <br> <br> <h1>program to check whether the given number is even number or an odd number</h1>")
var inpuNum2 = +prompt("Enter a number to check whether  input is  even number or odd  ")
if ( inpuNum2%2 === 0)
{
    document.write("<br> The given number is an even number")
}
else{
      document.write("<br> The given number is an odd number")
}


// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
var temp = +prompt("Enter temperature")
if (temp >="40")
{
    document.write("<br> It is too hot outside")
}
else if ( temp >= "30")
{

    document.write(" <br> The Weather today is Normal")
}
else if ( temp >= "20")
{

    document.write(" <br> Today’s Weather is cool")
}
else{
     document.write(" <br>OMG! Today’s weather is so Cool. ")
}


// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
document.write("<br> <br> <h1>program to check whether the given number is even number or an odd number</h1>")
var number1 = + prompt("Enter first number")
var number2 = + prompt("Enter second number")
var operation = prompt("Enter your desired operation")
document.write("<br> First Number:   "+number1)
document.write("<br> Second Number:   "+number2)
document.write("<br> Operation :  "+operation)
if (operation === "+") {
    var sum = number1 + number2;
    document.write("<br> <br>"+sum)
}
else if (operation === "-") {
    var difference = number1 - number2;
    document.write("<br> <br>"+difference)
}
else if (operation === "*") {
    var product = number1 * number2;
    document.write("<br> <br>"+product)
}
else if (operation === "/") {
    var quotient = number1 / number2;
    document.write("<br> <br>"+quotient)
}
else if(operation === "%"){
    var remainder = number1%number2;
       document.write("<br> <br>"+remainder)
}
else{
   document.write("<br> <br> WRONG OPERATION")
}
//chap 11 completed