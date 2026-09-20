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