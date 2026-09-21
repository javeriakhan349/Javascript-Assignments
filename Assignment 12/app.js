//STARS PATTERN 

// https://www.geeksforgeeks.org/javascript/nesting-for-loops-in-javascript/

// Star Pattern
for ( i =1; i<=4 ; i++){

for( j =1 ; j<=5 ; j++)
 {
    document.write("*")
 }
 document.write("<br>")
}

document.write(`<br><br>`)


// //Star Pattern in ascending order
document.write(`Star pattern in asscending order <br>`)
document.write(`<br><br>`)
for ( i =5; i>=1 ; i--){

for( j =5 ; j>=i ; j--)
 {
    document.write("*")
 }
 document.write("<br>")
}

document.write(`<br><br>`)


//Dynamic
var userRow = +prompt("Enter Number Of Rows..")
var userCol = +prompt("Enter Number Of Columns..")
var userChar = prompt("Enter your character")
for ( i =1 ; i<=userRow ; i++){
    for( j=1 ; j<=userCol ; j++ ){
        document.write(userChar)
    }
    document.write(  "<br>")
}
document.write(`<br><br>`)



//pyramid pattern 
document.write(`<br><br>Pyramid Pattern`)
let rows = 5;
document.write(`<br><br>`) 
for (let i = 1; i <= rows; i++) {
  let str = "";
  
  for (let j = 1; j <= rows - i; j++) {
    str += " ";
  }
  
  for (let k = 1; k <= (2 * i - 1); k++) 
   {
    str += "*";
  }
  document.write(str+"<br>");
}
document.write(`<br><br>`)





//right-aligned triangle
document.write(`<br><br>right-aligned triangle`)
let rows2 = 5;
document.write(`<br><br>`)
for (let i = 1; i <= rows2; i++) {
    let rowString2 = "";


    for (let j = 1; j <= rows2 - i; j++) {
        rowString2 += " ";
    }

    for (let k = 1; k <= i; k++) {
        rowString2 += "*";
    }

    document.write(rowString2+"<br>");
}
document.write(`<br><br>`)

//inverted right aligned-triangle
document.write(`<br><br> inverted right-aligned triangle`)
let rows1 = 5;
document.write(`<br><br>`)
for (let i = 0; i < rows1; i++) {
    let rowString1 = "";

    for (let j = 0; j < i; j++) {
        rowString1 += " ";
    }

    for (let k = 0; k < rows1 - i; k++) {
        rowString1 += "*";
    }
document.write(rowString1+"<br>");
}