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


// function calculator (num1,num2,operand){
//  var result;
//  if( operand === '+'){
//     result = num1+num2 ;
//  }
//  else if ( operand === '-'){
//     result = num1 - num2 ;
//  }
//  else if ( operand === '*'){
//     result = num1 * num2 ;
//  } 
//  else if ( operand === '%'){
//     result = num1%num2 ;
//  }
//   else {
//         return "Error: Invalid operator. Please use +, -, *, /, or %.";
//     }
//   return result

  
// }
// var number1 = +prompt("Enter first number")
// var number2 = +prompt("Enter second number")
// var op = prompt("Enter your desired operation ")

// var calculationResult = calculator(number1, number2, op);
// var output = number1 + " " + op + " " + number2 + " = " + calculationResult;
// console.log(output);


// function squaring (number){
//     var number = number*number
//     return number ;
// }
// var square = +prompt("Enter a number...")
// var result = squaring(square) ;
// var output = "The square of "+square+" is " + result
// console.log(output);


// function calculateFactorial (number){
//     var factorial ; 
//     if(number < 0 ){
//         return "Error: Factorial is not defined for negative numbers.";
//     }
//     var result = 1; 
//    for( i=1 ; i <= number ; i++){
//         result = result*i
//     }
//     return result ; 
// }
// var numF = +prompt("Enter a number to find its factorial...")
// var output = calculateFactorial(numF)
// var finalResult = "The factorial of "+numF+" is "+output
// console.log(finalResult);



// function counting ( numStart , numEnd ){
//     for( i=numStart ; i<= numEnd ; i++){
//         console.log(i);
        
//     }
// }
// var start = +prompt("Enter a number from where counting starts")
// var end = +prompt("Enter a number where counting ends")
// counting(start, end);


// function pythagorousTheorem (bas,perp){
//     square()
//    hyp = Math.sqrt(bas+perp)
//     function square (){
//         bas = bas*bas;
//         perp = perp*perp ; 
//         return bas ; 
//         return perp ;
//     }
//     return hyp ; 
// }
// var base = +prompt("Enter the base of your triangle")
// var perpendicular = +prompt("Enter the perpendicular of your triangle")
// result = pythagorousTheorem(base,perpendicular)
// output = "The hypotenuse of your triangle with base  "+base+"  and perpendicular  "+perpendicular+"  is "+result ;
// console.log(output);



function areaCalculator (len,bread){
    
}