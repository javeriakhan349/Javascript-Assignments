// //  CHAPTERS :FUNCTION
// function todayDate (datefunction){
//     var today = new Date()
//     console.log(today);
    
// }
// todayDate()

// function greetUser (greeting){
//     var firstName = prompt("Enter your first name")
//     var lastName = prompt("Enter your last name")
//     firstName = firstName.charAt(0).toUpperCase()+firstName.slice(1)
//     lastName = lastName.charAt(0).toUpperCase()+lastName.slice(1)
//     var fullName = firstName+" "+lastName
//     console.log(`Wecome to my website ${fullName}`);
    
// }
// greetUser()
// function add ( a , b ){
// console.log(`sum of ${a} + ${b} is ${a+b}` );
// }
// var num1 = +prompt("Enter first number")
// var num2 = +prompt("Enter second number")
// add(num1,num2)


function calculator (num1,num2,operand){
 var result;
 if( operand === '+'){
    result = num1+num2 ;
 }
 else if ( operand === '-'){
    result = num1 - num2 ;
 }
 else if ( operand === '*'){
    result = num1 * num2 ;
 } 
 else if ( operand === '%'){
    result = num1%num2 ;
 }
  else {
        return "Error: Invalid operator. Please use +, -, *, /, or %.";
    }
  return result

  
}
var number1 = +prompt("Enter first number")
var number2 = +prompt("Enter second number")
var op = prompt("Enter your desired operation ")

var calculationResult = calculator(number1, number2, op);
var output = number1 + " " + op + " " + number2 + " = " + calculationResult;
console.log(output);
