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