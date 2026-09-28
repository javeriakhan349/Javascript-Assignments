// // Chapter 21-25 STRING METHODS
// // 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
// var firstName = prompt("Enter your first name:")
// var lastName = prompt("Enter your last name:")
// console.log("Welcome "+firstName + lastName);

// // 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
// var phoneModel = prompt("Enter your favourite model")
// console.log("My favorite phone is "+ phoneModel);
// console.log("The length of your entered string is "+phoneModel.length);

// // 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
// var userString = "Pakistani";
// var flag = "false";
// for( i=0 ; i<userString.length ; i++)
// {
//     if( "n" === userString[i] ){
//    flag = "true";
//    console.log("The index of 'n' in Pakistani  is " + i );
//     }
// }


// // 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
// var myString = "Hello World"
// console.log("String : " + myString );
// console.log( "Last index of 'l' in "+myString+" is "+myString.lastIndexOf("l"));


// // 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// var str = "Pakistani"
// console.log("String : "+str);
// console.log("Chracter at index  3 is :  "+ str.charAt(3));


// // 7. Write a program to replace the “Hyder” to “Islam” in the  word “Hyderabad” and display the result in your browser
// var city = "Hyderabad" ;
// var newCity = city.replace("Hyder" , "Islam")
// console.log("City : "+city);
// console.log("After replacement: "+newCity );


// // 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = "Javeria and Sara are best friends. They Play cricket and football together and they have lots of fun"
// var messageTransform = message.replaceAll("and" , "&")
// console.log("Old Message"+message);
// console.log("New Message : "+messageTransform);


// // 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
// var numString = "472";
// console.log("Value : "+numString);
// console.log("Type : "+typeof(numString));
// numString = 472 ; 
// console.log("Value : "+numString);
// console.log("Type : "+typeof(numString));



// // 10. Write a program that takes user input. Convert and show the input in capital letters.
var userWord = prompt("Enter a word : ")
// console.log("User Input : "+userWord);
// console.log("Upper Case : "+userWord.toUpperCase());

// 11. Write a program that takes user input. Convert and show the input in title case.
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log("User Input : "+userWord);
console.log("Title Case : "+ toTitleCase(userWord));