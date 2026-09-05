//CHAPTER#09 
//USER INPUT & CONDITIONAL STATEMENT

// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:“Welcome to city of lights.
var city = prompt("Enter your city name...")
if (city === "Karachi"){
    document.write("Welcome to city of lights")
}


// 2. Write a program to take “gender” as input from user. If theuser is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am
var gender = prompt("Enter gender...")
var male = male;
if (gender === "male"){
    document.write(" <br> Good Morning Sir!")
}
else{
    document.write("<br> Good Morning Ma’am")
}


// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table
document.write("<h3>Signal Color:</h3>")
var color = prompt("Enter traffic signal color...")
if(color ==="red"){
    document.write("<br> RED         :           Must stop ")
}
else if(color === "yellow")
    {
      document.write("<br> YELLOW   :            Ready to move")
}
else if (color === "green")
{
     document.write("<br> GREEN   :            Move Now!")
}
else {
    document.write("Invalid signal color");
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litresshow the message “Please refill the fuel in your car”
document.write("<h3> <br> Input remaining fuel:</h3>")
var remainingfuel = +prompt("Enter your remaining fuel in car (in litres)")
if(remainingfuel <= 0.25)
{
    document.write(" <br> Please refill the fuel in your car")
}
else{
     document.write(" <br> You have enough fuel in your car")
}


