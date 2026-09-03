// CHAPTER # 05 : MATH EXPRESSIONS

// 1. Write a program that take two numbers & add them in a new variable.Show the result in your browser
var num1 = +prompt("Enter a number!")
var num2 = +prompt("Enter a number!")

var sum = num1 + num2;
document.write("Sum of  " + num1 + " and  " + num2 + "  is  " + sum)


// 2. Repeat task1 for subtraction, multiplication, division & modulus.
//Subtraction

var difference = num1 - num2;
document.write("<br> Difference of...  " + num1 + " and  " + num2 + "  is  " + difference)


//Multiplication

var product = num1 * num2;
document.write("<br>Product of...  " + num1 + " and  " + num2 + "  is  " + product)


//Division

var quotient = num1 + num2;
document.write(" <br> Division of ....  " + num1 + " and  " + num2 + "  is  " + quotient)



//Modulus

 var remainder = num1%num2;
document.write(" <br> Modulus of ....  " + num1+ " and  "+ num2 + "  is  " + remainder)