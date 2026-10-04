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

// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.