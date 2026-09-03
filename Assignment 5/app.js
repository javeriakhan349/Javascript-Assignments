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

var remainder = num1 % num2;
document.write(" <br> Modulus of ....  " + num1 + " and  " + num2 + "  is  " + remainder)


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Valueafter addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is:12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.


var num;
document.write("<br> Value after variable declaration is...." + num);
num = 5;

document.write("<br> Initial value is:   " + num)
num = ++num;

document.write("<br> Value after increment is:   " + num)
num = num + 7;

document.write("<br> Value after addition is:   " + num)
num = --num;

document.write("<br> Value after decrement is:   " + num)
num = num % 3;
document.write("<br> The remainder  is:      " + num)



// 4. Cost of one movie ticket is 600 PKR. Write a script tostore ticket price in a variable & calculate thecostofbuying 5 tickets to a movie.

var ticketprice = "600";
var ticketquantity = "5";
var totalcost = ticketprice * ticketquantity;
document.write("<br> Total cost of buying    " + ticketquantity + "  tickets to a movie is    " + totalcost)



// 5. Write a script to display multiplication table of any number in your browser.
var tableNo = +prompt("Enter table number...!", "5")
document.write("<br>Table Of...       " + tableNo)

var series = 1;

var product = tableNo * series;

document.write("<br>" + tableNo + "  x  " + series + "  =  " + product);
series = ++series;
var product = tableNo * series;
document.write("<br>" + tableNo + "  x  " + series + "  =  " + product);
series = ++series;
var product = tableNo * series;
document.write("<br>" + tableNo + "  x  " + series + "  =  " + product);
series = ++series;
var product = tableNo * series;
document.write("<br>" + tableNo + "  x  " + series + "  =  " + product);
series = ++series;
var product = tableNo * series;
document.write("<br>" + tableNo + "  x  " + series + "  =  " + product);
series = ++series;
var product = tableNo * series;
document.write("<br>" + tableNo + "  x  " + series + "  =  " + product);
series = ++series;
var product = tableNo * series;
document.write("<br>" + tableNo + "  x  " + series + "  =  " + product);
series = ++series;
var product = tableNo * series;
document.write("<br>" + tableNo + "  x  " + series + "  =  " + product);
series = ++series;
var product = tableNo * series;
document.write("<br>" + tableNo + "  x  " + series + "  =  " + product);
series = ++series;
var product = tableNo * series;
document.write("<br>" + tableNo + "  x  " + series + "  =  " + product);
series = ++series;
var product = tableNo * series;



// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

document.write("<br> <h1>The Temperature Converter:</h1>")
var celsius = +prompt("Enter a number...!", "100")
var Fahrenheit = (9 / 5 * celsius) + 32;
document.write("<br>" + celsius + "°C" + "  is  " + Fahrenheit + "°F");


var Fahrenheit = +prompt("Enter a number...!", "100")
var celsius = (Fahrenheit - 32) * 5 / 9;
document.write("<br>" + Fahrenheit + "°F" + "  is  " + celsius + "°C");



// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser
document.write("<br><h1>Checkout process of a shopping cart system for an e-commerce website.</h1>")
var price1 = 650;
var price2 = 100;
var quantity1 = +prompt("Quantity of item 1...", "1")

var quantity2 = +prompt("Quantity of item 2...", "1")
var dc = 250;
var totalcharges = (price1 * quantity1) + (price2 * quantity1) + dc;

document.write("<br> Total cost of your order is ....." + totalcharges);



// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
document.write("<br><h1> Marksheet: </h1>")
var totalmarks = +prompt("Enter Total Marks...!", "1100");
var obtainMarks = +prompt("Enter Marks Obtained...!", "440");
var percentage = (obtainMarks / totalmarks) * 100;
document.write("<br> Total marks  :  " + totalmarks);
document.write("<br> Obtain marks :   " + obtainMarks);
document.write("<br>  Percentage  : " + percentage);



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write ascript to convert the total currency to Pakistani Rupees.Perform all calculations in a single expression.
document.write("<br> <h1>CURRENCY IN PKR:</h1>");
var dollars = +prompt("Enter Dollars...", "10");
var riyals = +prompt("Enter Riyals...", "25");
var totalCurrency = (277.60 * dollars) + (73.96 * riyals);
document.write("<br> Total currency  in PKR is:    " + totalCurrency);



// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
document.write("<br><h1>Arithemetic Expressions </h1>")
var number = 5;
document.write("<br> Initial value is:   " + number);
number = number + 5;
document.write("<br> Value after adding 5 :   " + number);
number = number * 10;
document.write("<br> Value after multiplying 10 :   " + number);
number = number / 2;
document.write("<br> Value after dividing 2 :   " + number);


// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
document.write("<br><h1>Calculate Calculator: </h1>")
var birthYear = +prompt("Enter your birth year....", "2010")
document.write(" <br>Your Birth Year:"
    + birthYear
)
var currentYear = +prompt("Enter Current year....", "2026")
document.write(" <br>Your Current Year:"
    + currentYear
)
var age = currentYear - birthYear;
document.write("<br>Your Age is :"
    + age)



//     12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
document.write("<br><h1>The Geometrizer: </h1>")
var radius = +prompt("Enter radius of a circle !", "20")
document.write("<br> Radius of circle is    ;" + radius);

var circumference = 2 * 3.142 * radius;
document.write("<br> Circumference of circle is    ;" + circumference);

var area = 3.142 * radius * radius;
document.write("<br> Area of a circle is    ;" + area);



// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is Wonder no more.
// a.Store your favorite snack into a variable
// b.Store your current age into a variable.
//  c.Store a maximum age into a variable.
//  d.Store an estimated amount per day(as a number).
//  e.Calculate how many would you eat total for the rest of your life
document.write("<br><h1>The Lifetime Supply Calculator:</h1>")
var snack = "burger ";
document.write("<br> Favourite Snack :       "+snack);

var currentAge = 16;
document.write("<br>  current age:       "+currentAge);

var maxAge = 60;
document.write("<br>  Estimated Maximum  age:       "+maxAge);

var amount = 3 ;
document.write(" <br> Amount of snacks per day :       "+amount);

var yearsRemaining = maxAge - currentAge;
var totalNeeded = yearsRemaining * 365 * amount;

document.write(
  "<br> You will need " + totalNeeded +
  " " + snack +
  " to last you until the ripe old age of " + maxAge
);