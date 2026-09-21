//CHAPTER 17-20: ARRAYS AND LOOP 

var multiArr = [[],[],[]];

// 2. Declare and initialize a multidimensional array representing the following matrix:
multiArr = [ [0,1,2,3] , [1,0,1,2] , [2,1,0,1] ]
document.write(`${multiArr[0][0]}`)
document.write(`    ${multiArr[0][1]}`)
document.write(`    ${multiArr[0][2]}`)
document.write(`    ${multiArr[0][3]} <br>`)

document.write(`    ${multiArr[1][0]}`)
document.write(`    ${multiArr[1][1]}`)
document.write(`    ${multiArr[1][2]}`)
document.write(`    ${multiArr[1][3]} <br>`)

document.write(`    ${multiArr[2][0]}`)
document.write(`    ${multiArr[2][1]}`)
document.write(`    ${multiArr[2][2]}`)
document.write(`    ${multiArr[2][3]} <br><br><br>`)

// 3. Write a program to print numeric counting from 1 to 10.
for( i =1 ; i<=10 ; i++)
{
    console.log(`${i} `);
    
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var num = +prompt("Enter any table number...")
var numLength = +prompt("Enter table length...")
for( j = 1 ; j <= numLength ; j++){
    document.write(`${num} x ${j} = ${ num*j } <br>`);
}
document.write(` <br><br><br>`)
// 5. Write a program to print items of the following array
// using for loop:
fruits = [ "apple" , "banana" , "mango" , "orange" , "strawberry"]
for( i = 0 ; i<=4 ; i++){
document.write(`Element at index ${i} is ${fruits[i]} <br>`)
}


// 6. Generate the following series in your browser. See
// example output.
var counting = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

document.write(`<br> <h1>Counting </h1>`)
document.write(` ${counting}`)

var reverse = [ 10,9,8,7,6,5,4,3,2,1]

document.write(`<br> <h1>Reverse Counting </h1>`)
document.write(` ${reverse}`)

var even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
document.write(`<br> <h1>Even Numbers </h1>`)
document.write(` ${even}`)

var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
document.write(`<br> <h1>Odd Numbers </h1>`)
document.write(` ${odd}`)

// 7. You have an array Write a program to enable “search by user input” in an array.After searching, prompt the user whether the given item is
// found in the list or not.
var items = [ "apple pie" , "cookie" , "cake" , "chips" , "patties"]
var userItem = prompt("Enter a sweet item...")
var flag = "false";
for( i=0 ; i<=items.length ; i++){
    if(items[i] === userItem)
    {
        flag = "true"
        document.write(`<br><br>${userItem} is avaliable at index  ${i}`)
    }
}
if(flag === "false"){

document.write(`<br><br>${userItem} is not avaliable `)

}

// 8. Write a program to identify the largest number in the
// given array.
var largest = [24, 53, 78, 91, 12]
var number = largest[0]
document.write(`<br> Array items:    ${largest} <br>`)
for( k=0 ; k<=largest.length ; k++){
    if(largest[k] > number){
        number = largest[k]
        
    }
}document.write(`The largest number is  ${number}`)


// 9. Write a program to identify the smallest number in the
// given array.
A = [24, 53, 78, 91, 12]
var smallest = A[0]
document.write(`<br> <br><br>Array items:    ${A} <br>`)
for ( t=0 ; t<=smallest.length ; t++){
    if(A[t] < smallest){
        smallest = A[t]
    }
}document.write(`The Smallest number is  ${smallest}`)


// 10. Write a program to print multiples of 5 ranging 1 to 100.
var multiples =[]
for( u=0 ; u<=100 ; u+=5){
    multiples.push(u)

} document.write(`<br><br>Multiples of 5: `)
 document.write("<br>"+multiples)