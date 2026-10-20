// DATE METHODS

// 1. Write a program that displays current date and time in your browser
var today = new Date()
console.log(today);

// 2. Write a program that alerts the current month in words. For example December
var month = today.getMonth()
console.log(month);
var monthNames = ["january","feburary","march","april","may","june","july","august","september","october","november","december"]
var getMonth = monthNames[month]
console.log(getMonth);


// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = new Date()
day = day.getDay()
var currentDay = days[day]
console.log(`Today is ${currentDay.slice(0,3)}`);





// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = new Date()
day = day.getDay()
var currentDay = days[day]
if ( day === 0 || day === 6 ) {
    console.log(`It is fun day `);
    
}



// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
var date = new Date ()
var date = date.getDate()
if ( date > 15 ) {
    console.log("Last days of the month");
    
}else{
    console.log("First fifteen days of the month");
}




// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
var currentDateTime = new Date(); 

totalMilliSecSince1970 = currentDateTime.getTime();


totalMinutesSince1970 = Math.floor(totalMilliSecSince1970 / 1000 / 60);

console.log(`Current Date : ${currentDateTime}`);
console.log(`Minutes since Jan. 1, 1970     : ${totalMinutesSince1970}`);
console.log(`Milliseconds since Jan. 1, 1970: ${totalMilliSecSince1970}`);




// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
var time = new Date ()
time = time.getHours()
console.log(time);
if( time<=12 ){
    alert("Its AM")
}
else{
    alert("Its PM")
}


// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
var laterDate  = new Date(2021,0,0)
console.log(laterDate);



// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015
var ramdanDate = new Date(2015,5,18)
var currentDate = new Date()
var daysPassed = currentDate - ramdanDate ;
console.log(daysPassed);
console.log(`${daysPassed}days have passed since 1st Ramadan, 2015.`);


// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
var beginingOf2015 = new Date(2015,0,1)
var referenceDate = new Date(2015,11,5)
var secondsPassed = (referenceDate - beginingOf2015)/1000 ;
console.log(` On  ${referenceDate} ${secondsPassed} seconds has passed since begining of 2015`);

// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
var todayDate = new Date()
console.log(`Current Date: ${todayDate}`);
var hours = todayDate.getHours()
todayDate.setHours(todayDate.getHours() - 1);
console.log(`1 hour ago it was ${todayDate}`);


// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
var todayDate = new Date()
var hunBack = new Date()
hunBack.setFullYear(todayDate.getFullYear() - 100); 

console.log("Current Date:"+todayDate.toDateString() + "   Hundread years back it was , " + hunBack.toDateString());


// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
var age = prompt("Enter your age")
var today = new Date()
var currentYear = today.getFullYear()
var birthYear = currentYear-age ; 
console.log("Your age is  " +  age + "Your birth year is " + birthYear);


// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places.
// function greet (firstName , lastName){
//     console.log("welcome  "+firstName+" "+lastName)
// }
// greet()
// var first = prompt("Enter your first name")
// var last = prompt("Enter your last name")
// let arr = [1, 2, 3 ,  ,   , 6];
// arr[5] = 6;
// console.log(arr.length, arr[3]);$0
// let funcs = [];
// for (var i = 0; i < 4 ; i++) {
//   funcs.push(() => i);
// }
// console.log(funcs[0]());$0
// let name = "JavaScript";
// name = name.toUpperCase();
// let cut = name.slice(0, 4);
// console.log(cut);$0

// console.log(Math.floor(-4.9))
// console.log( 0.1+0.2 === 0.3);
// console.log(Math.floor(-3.1));$0
// let d = new Date(2026, 0, 15);
// console.log(d.getMonth());$0

// function foo(foo) { return 1; }
// var bar = function() { return 2; };$0
// console.log(foo());
// console.log(bar());
let val = "5";
switch(val) {
  case 5:
    console.log("Num");
    break;
  case "5":
    console.log("Str");
  default:
    console.log("Def");
}

1. What happens if you execute ALERT("Hello World"); in JavaScript?

• A) An alert box with "Hello World" pops up.
• B) The browser ignores it because JavaScript is case-insensitive for keywords.
• C) The script stops running because alert is a case-sensitive keyword.
• D) It prints "Hello World" to the developer console instead.

2. Which of the following is an illegal variable name in JavaScript?

• A) user_response
• B) 1stPresident
• C) faveBreed
• D) userAlert

3. If a user enters 5 into the prompt var entry = prompt("Enter a number"); and you run var result = entry + 5;, what is the value of result?

• A) 10
• B) "55"
• C) undefined
• D) NaN

4. What will alert("2 plus 2 equals " + 2 + 2); display?

• A) "2 plus 2 equals 4"
• B) "2 plus 2 equals 22"
• C) "4 equals 4"
• D) It will throw a syntax error.

Group 2: Math Expressions & Operators (Chapters 5–7)


5. What is the value of whatsLeftOver after running var whatsLeftOver = 10 % 3;?

• A) 3
• B) 3.333
• C) 1
• D) 0

6. Look at the code: var num = 1; var newNum = num++; What are the values of num and newNum?

• A) num = 1, newNum = 2
• B) num = 2, newNum = 2
• C) num = 2, newNum = 1
• D) num = 1, newNum = 1

7. Look at the code: var num = 1; var newNum = ++num; What are the values of num and newNum?

• A) num = 2, newNum = 1
• B) num = 2, newNum = 2
• C) num = 1, newNum = 2
• D) num = 1, newNum = 1

8. What is the result of var totalCost = 1 + 3 * 4; according to JavaScript precedence rules?

• A) 16
• B) 13
• C) 12
• D) 7

Group 3: Conditionals & Comparison (Chapters 10–14)


9. What is the author's preferred style convention for spacing the first line of an if statement?

• A) if(x === y){
• B) if (x === y) {
• C) if (x===y) {
• D) if(x===y) {

10. What is the technical difference between == and === in JavaScript?

• A) == checks for value and type, while === only checks for value.
• B) === checks both value and data type (strict equality), while == performs type coercion.
• C) They are completely identical in every scenario.
• D) === can only be used to compare numbers, not strings.

11. Which comparison evaluates to false?

• A) "Rose" !== "rose"
• B) 1 >= 1
• C) "Vatican" === "vatican"
• D) 0 <= 1

Group 4: Arrays & Loops (Chapters 15–20)


12. Which array method removes the first element from an array?

• A) pop()
• B) push()
• C) shift()
• D) unshift()

13. Which method can insert elements anywhere into an array without overwriting existing elements?

• A) slice()
• B) splice()
• C) shift()
• D) concat()

14. In a for loop, what keyword is used to stop the loop completely when a match or condition is found?

• A) stop
• B) exit
• C) break
• D) return

Group 5: String Manipulation & Conversion (Chapters 21–30)


15. If var text = "Hello";, what does text.charAt(0); return?

• A) "H"
• B) "e"
• C) 0
• D) undefined

16. What is the output of parseInt("23.5")?

• A) 23.5
• B) 23
• C) 24
• D) NaN

17. How do you force a floating-point number to have exactly two decimal places (e.g., 9.95)?

• A) Math.round(num, 2)
• B) num.toFixed(2)
• C) parseInt(num)
• D) num.toString(2)

Group 6: Dates, Times, & Functions (Chapters 31–40)


18. What index does JavaScript return for the month of January when running new Date().getMonth()?

• A) 1
• B) 0
• C) Jan
• D) -1

19. What happens if a variable is declared inside a function using the keyword var?

• A) It becomes a global variable.
• B) It can be accessed anywhere outside the function.
• C) It is a local variable and only exists inside that function.
• D) It throws an error unless declared outside first.

20. In a switch statement, what happens if you omit the break statement at the end of a matching case block?

• A) The code throws a runtime exception.
• B) The execution falls through into the next case automatically.
• C) The switch block completely resets.
• D) It skips directly to the default block.
