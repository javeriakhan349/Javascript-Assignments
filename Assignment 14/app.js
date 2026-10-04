// // MATH METHODS

// // 1. Write a program that takes a positive integer from user & display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number
// var userInput = +prompt("Enter a positive integer")
// console.log("Number: "+userInput);
// console.log("Number roundoff: "+Math.round(userInput));
// console.log("Number Floor: "+Math.floor(userInput));
// console.log("Number Ceil: "+Math.ceil(userInput));

// // 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// var negUserInput = +prompt("Enter a negative integer")
// console.log("Number: "+negUserInput);
// console.log("Number roundoff: "+Math.round(negUserInput));
// console.log("Number Floor: "+Math.floor(negUserInput));
// console.log("Number Ceil: "+Math.ceil(negUserInput));

// // 3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// var userValue = +prompt("Enter a value")
// console.log(`The absolute value of ${userValue} is  ${Math.abs(userValue)}`);

// // 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.
// var dice = Math.ceil(Math.random()*6)
// console.log(`Random dice value is ${dice}`);

// // 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
// var coin = Math.floor(Math.random()*2)+1
// console.log(`Random coin value is : ${coin}`);
// if ( coin === 1 ) {
//     console.log("Heads");
    
// }
// else{
//     console.log("Tails");
    
// }
 
// // 6. Write a program that shows a random number between 1 and 100 in your browser.
// var randomValue = Math.floor(Math.random()*100)+1 ;
// console.log(`Random value between 1 and 100 is ${randomValue}`);

// // 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// var userWeight = prompt("Enter your weight")
// var weight = parseFloat(userWeight)
// if (!isNaN(weight)) {
//     console.log(`The weight of user is ${weight} kilograms`);
    
// } else {
//     console.log("Invalid input!Please enter a valid number for weight");
    
// }

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
var secretInput = +prompt("Enter a number between 1 and 10")
console.log(`User Input : ${secretInput}`);

var userRandom = Math.ceil(Math.random()*10)
console.log( ` The secret number is  ${userRandom}`);
if ( secretInput === userRandom) {
    console.log(`You win!!!`);
    
}
else{
    console.log(`You lost`);
    
}