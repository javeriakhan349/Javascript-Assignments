// //Chapter #06
// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

       
        let a = 10;

        document.write("<h3>Result:</h3>");
        document.write("The value of a is: " + a + "<br>");
        document.write(".................................................<br><br>");

    
        document.write("The value of ++a is: " + (++a) + "<br>");
        document.write("Now the value of a is: " + a + "<br><br>");

     
        document.write("The value of a++ is: " + (a++) + "<br>");
        document.write("Now the value of a is: " + a + "<br><br>");

      
        document.write("The value of --a is: " + (--a) + "<br>");
        document.write("Now the value of a is: " + a + "<br><br>");

   
        document.write("The value of a-- is: " + (a--) + "<br>");
        document.write("Now the value of a is: " + a + "<br>");






// 2. What will be the output in variables a, b & result after
// execution of the following script:
            
        var c = 2;
        var b = 1;
        var result = --c - --b + ++b + b--;

        
        document.write("c is " + c + "<br>");
        document.write("b is " + c + "<br>");
        document.write("result is " + result + "<br>");


        // 3. Write a program that takes input a name from user & greet the user.
        var greetuser = prompt("Enter a name...!              ","Javeria");
        alert("WELCOME TO MY WEBSITE               "+greetuser)
 


        // 4. Write a program to take input a number from user & display it’s multiplication table on your browser. If userdoes not enter a new number, multiplication table of 5should be displayed by default.
        
var tableNo = +prompt("Enter table number...!","5")
document.write("<br>Table Of...       " +tableNo)

var series = 1;

var product = tableNo*series;

document.write("<br>"+tableNo+"  x  "+series+"  =  "+product);
series= ++series;
var product = tableNo*series;
document.write("<br>"+tableNo+"  x  "+series+"  =  "+product);
series= ++series;
var product = tableNo*series;
document.write("<br>"+tableNo+"  x  "+series+"  =  "+product);
series= ++series;
var product = tableNo*series;
document.write("<br>"+tableNo+"  x  "+series+"  =  "+product);
series= ++series;
var product = tableNo*series;
document.write("<br>"+tableNo+"  x  "+series+"  =  "+product);
series= ++series;
var product = tableNo*series;
document.write("<br>"+tableNo+"  x  "+series+"  =  "+product);
series= ++series;
var product = tableNo*series;
document.write("<br>"+tableNo+"  x  "+series+"  =  "+product);
series= ++series;
var product = tableNo*series;
document.write("<br>"+tableNo+"  x  "+series+"  =  "+product);
series= ++series;
var product = tableNo*series;
document.write("<br>"+tableNo+"  x  "+series+"  =  "+product);
series= ++series;
var product = tableNo*series;
document.write("<br>"+tableNo+"  x  "+series+"  =  "+product);
series= ++series;
var product = tableNo*series;



// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user  and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
document.write("<br> <h1>Marksheet:</h1>")
var sub1 = prompt("Enter subject name...","Maths")
var sub2 = prompt("Enter subject name...","Physics")
var sub3 = prompt("Enter subject name...","Computer")
var total1 = 100;
var total2 = 100;
var total3 = 100;
var obt1 = +prompt("Enter obatined marks for Maths " ,"50")
var obt2 = +prompt("Enter obatined marks for Physics:" ,"50")
var obt3 = +prompt("Enter obatined marks for Computer" ,"50")
document.write("<br> Obatained marks for   "+sub1+"  is  "+obt1)
document.write("<br> Obatained marks for   "+sub2+"  is  "+obt2)
document.write("<br> Obatained marks for   "+sub3+"  is  "+obt3)
var totalMarks = 300;
var obtTotal = obt1+obt2+obt3
document.write("<br> Obtained marks are  "+obtTotal+" out of 300")
var percent = (obtTotal/totalMarks)*100;
document.write("<br>Your percentage is ....   "+percent);