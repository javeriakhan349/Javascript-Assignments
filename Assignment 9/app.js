//CHAPTER : ARRAYS


// 1. Declare an empty array using JS literal notation to store
// student names in future
var myArray = []
var myArray2 = new Array("Javeria", "Sara")
console.log(myArray, myArray2);



// 3. Declare and initialize a strings array.
var studentNames = ["Ali", "Ahmed", "Sara", "Ayesha"];



// 4. Declare and initialize a numbers array.
var numbers = [10, 20, 30, 40, 50];



// 5. Declare and initialize a boolean array.
var status = [true, false, true, false];



// 6. Declare and initialize a mixed array.
var mixedArray = ["Ali", 20, true, "Student", 50];


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
var eduquali = ["SSC", "HSC", "BCS","BS", "BCOM", "MS"," M-Phil" , "PhD"]
document.write(`<br> <h3>QUALIFICATIONS:</h3>
    <br> ${eduquali[0]}
    <br> ${eduquali[1]}
    <br> ${eduquali[2]}
    <br> ${eduquali[3]}
    <br> ${eduquali[4]}
    <br> ${eduquali[5]}
    <br> ${eduquali[6]}
    <br> ${eduquali[7]}`)


// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.Assume that total marks are 500 for each student, display the scores & percentages of students like:
var student = ["Micheal", "John", "Tony"]
var score = [320, 230, 480]

document.write(`<br>Score of ${student[0]} is ${score[0]}. Percentage : ${score[0] / 500 * 100}% <br> `)
document.write(`Score of ${student[1]} is ${score[1]}. Percentage : ${score[1] / 500 * 100}% <br> `)
document.write(`Score of ${student[2]} is ${score[2]}. Percentage : ${score[2] / 500 * 100}% <br>`)


// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then


var colors = ["Pink", "Blue", "Black", "White", "Grey"]
console.log(colors)

colors.unshift("Purple")
console.log(colors)

var userClr = prompt("Color you want in the end")

colors.push(userClr)
console.log(colors)

colors.unshift("Red", "Brown")
console.log(colors)

colors.shift()
console.log(colors)

colors.pop()
console.log(colors)

var userIndex = +prompt("Which Index")
var userClr = prompt("which Color")

colors.splice(userIndex, 0, userClr)
console.log(colors)

var deltIndex = +prompt("at which index you want to delete a color?")
var colorQuantity = +prompt("How many colors you want to remove?")

colors.splice(deltIndex, colorQuantity)
console.log(colors)


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var cityName = ["Karachi", "Lahore", "Islamabd", "Quetta", "Peshawar"]
var newCity = cityName.slice(1, 4)
console.log(newCity)


// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var stuScore = [320,230,480,120]
document.write(`<br> <h2>SORT:</h2>`)
document.write(`<br><h5>Before Sorting:</h5> ${stuScore}`)
stuScore.sort()
document.write(`<br><h5>After Sorting:</h5> ${stuScore}`)


// 2. Write a program to create a single string from the
// below mentioned array:
var joinf = ["This  ","  is" ,"  my" ,"  cat"];
document.write(`<br> <h5>ARRAY  </h5>:${joinf}
    <br> <h5>STRING: </h5>`)

var singleString = joinf.join("");
document.write(`${singleString}`)


// 3. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
var devices = [];

devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

document.write(`<br> Devices:<br>${devices}<br><br>`);

document.write(`Out:<br>${devices.shift()}<br>`);
document.write(`Out:<br>${devices.shift()}<br>`);
document.write(`Out:<br>${devices.shift()}<br>`);
document.write(`Out:<br>${devices.shift()}<br>`);

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
var devicesOut = [];

devicesOut.push("keyboard");
devicesOut.push("mouse");
devicesOut.push("printer");
devicesOut.push("monitor");

document.write(`Devices:<br>${devices}<br><br>`);

document.write(`Out:<br>${devicesOut.pop()}<br>`);
document.write(`Out:<br>${devicesOut.pop()}<br>`);
document.write(`Out:<br>${devicesOut.pop()}<br>`);
document.write(`Out:<br>${devicesOut.pop()}<br>`);


// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method: