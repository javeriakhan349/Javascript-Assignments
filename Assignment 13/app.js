// Chapter 21-25 STRING METHODS
// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
var firstName = prompt("Enter your first name:")
var lastName = prompt("Enter your last name:")
console.log("Welcome "+firstName + lastName);

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
var phoneModel = prompt("Enter your favourite model")
console.log("My favorite phone is "+ phoneModel);
console.log("The length of your entered string is "+phoneModel.length);

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
var userString = "Pakistani";
var flag = "false";
for( i=0 ; i<userString.length ; i++)
{
    if( "n" === userString[i] ){
   flag = "true";
   console.log("The index of 'n' in Pakistani  is " + i );
    }
}


// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
var myString = "Hello World"
console.log("String : " + myString );
console.log( "Last index of 'l' in "+myString+" is "+myString.lastIndexOf("l"));


// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
var str = "Pakistani"
console.log("String : "+str);
console.log("Chracter at index  3 is :  "+ str.charAt(3));


// 7. Write a program to replace the “Hyder” to “Islam” in the  word “Hyderabad” and display the result in your browser
var city = "Hyderabad" ;
var newCity = city.replace("Hyder" , "Islam")
console.log("City : "+city);
console.log("After replacement: "+newCity );


// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
var message = "Javeria and Sara are best friends. They Play cricket and football together and they have lots of fun"
var messageTransform = message.replaceAll("and" , "&")
console.log("Old Message"+message);
console.log("New Message : "+messageTransform);


// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
var numString = "472";
console.log("Value : "+numString);
console.log("Type : "+typeof(numString));
numString = 472 ; 
console.log("Value : "+numString);
console.log("Type : "+typeof(numString));



// 10. Write a program that takes user input. Convert and show the input in capital letters.
var userWord = prompt("Enter a word : ")
console.log("User Input : "+userWord);
console.log("Upper Case : "+userWord.toUpperCase());

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

// 12. Write a program that converts the variable num to string
var number = 35.36 ;
console.log("Number : " + number);
console.log("Result : "+number.toString().replace("." , ""));

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. 
var userNameInput = prompt("Enter your name")
var userArray = Array.from(userNameInput)
for( i = 0 ; i < userArray.length ; i++)
{
    var code = userNameInput.charCodeAt(i)
   if ( (code === 33) || (code === 44) ||(code === 46) ||(code === 64) ) {
    alert("Please enter a valid username")
   }
    

    

}



// 14.Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
arr = [ "cake", "apple pie", "cookie", "chips", "patties"]
var userItem = prompt("Enter your desired dessert")
var Flag = "false" ;
for( i=0 ; i<arr.length ; i++ ){
    if ( userItem.toLowerCase() === arr[i] ){
var Flag = "True" ;
    }
}
if( Flag === "True"){
    console.log(userItem+" is avaliable"+" in our bakery");
    
}
else{
    console.log(userItem+"  is not avaliable");
}




// 16. Write a program to convert the following string to an array using string split method.
var university = "University of Karachi";
var universityArray = university.split("");
for (var i = 0; i < universityArray.length; i++) {
    console.log(universityArray[i]);

}

// 17. Write a program to display the last character of a user input
var userCity = prompt("Enter a city name : ")
console.log("User Input : "+ userCity);
console.log("Last Character of input : " + userCity.charAt(userCity.length - 1));


// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string
var text = "The quick brown fox jumps over the lazy dog" ;
var words = text.toLowerCase().split(" "); 
var count = 0 ;
for( i=0 ; i< words.length ; i++){
    if( words[i] === "the"){
        count++ ; 
    }
}
console.log(text);
console.log("There are "+ count+" occurence(s) of the word 'the' ");

// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
var password = prompt("Enter your password")
var hasAlphabets = false
var hasNumbers = false
var startWithNumber = false
if( password.length<6 ){
    alert("Password must contain 6 chracters")

}
for (let i = 0; i < password.length; i++) {
    
    
}