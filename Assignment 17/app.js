function power(a,b){
  return a**b;
}
var a = +prompt("Enter a number")
var b = +prompt("Enter a number")


var a = +prompt("Enter a number")
var b = +prompt("Enter a number")
console.log(Math.pow(a,b));


var yearCheck = +prompt("Enter a year to check whether it is a leap year or not")
if( yearCheck% 400 === 0){
    console.log(`The year you entered ${yearCheck} is a leap year`);
}else if( yearCheck % 4 ===0){
if (yearCheck%100 === 0) {
    console.log(`The year you entered ${yearCheck} is a leap year`);
}else{
    console.log(`This is not a leap year`);
}
}

function areaOfTri (a,b,c,area,s){
    var s = (a+b+c)/2

    return "The sum of the sides of the triangle is "+s+"cm" ; 
    var area = (s-a)(s-b)(s-c);
    area = Math.sqrt(area)
    return "The area of the triangle is"+area ;
}
var a = +prompt("Enter  the length of one side of triangle")

var b = +prompt("Enter  the length of second side of triangle")

var c = +prompt("Enter  the length of third side of triangle")

console.log( areaOfTri(a,b,c,area,s));


