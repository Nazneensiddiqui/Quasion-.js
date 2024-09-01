//Q1. How to check if an object is an array or not? Provide some code. 		 4

// Ek array aur ek object define karte hain
let arr = [1, 2, 3]; // Yeh ek array hai
let obj = { name: "Nazneen", age: 25 }; // Yeh ek object hai

// Array check karne ke liye Array.isArray() ka use karte hain
document.getElementById("array").innerHTML = (Array.isArray(arr)); 
document.getElementById("object").innerHTML = (Array.isArray(obj));
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));


//............................................................................................................................
//Q2. Write the JavaScript code to change the content and colour of the HTML element below when we click button?

//onclick se
function fun(){
    let mypara = document.getElementById('myElement')
    mypara.innerHTML = "<h1>This is my paragraph is Lorem</h1>";
    mypara.style.color = "red";
    mypara.style.backgroundColor = "pink";
}

//..............................................................................................................

//Q3. Write a function that takes the base and height of a triangle and return its area.   
//  var b = parseInt(prompt('enter the base of the trangle'))  ;
//  var h =  parseInt(prompt('enter the height of the trangle'))  ; 
//  alert(1/2*b*h) ;

//........................or.....................
//  function area(base,height){
    
//     return  0.5*base*height ;
//  }
//  var b = parseInt(prompt('enter the base of the trangle'))  ;
//  var h =  parseInt(prompt('enter the height of the trangle'));
//  area(b,h);
//  alert(area(b,h));

//.......................or.........................
//  function area(){
//     let b = 12;
//     let h = 5;
//     return 0.5*b*h;
//  }
// area();
// console.log(area())


//................................................................................................................
//Q4. Write a JavaScript program to find the maximum number in an array. 
let array = [2,8,7,6,5,4,9,3,4,8];
document.write(array)
console.log(array);
if(array.length == 0){
  
    console.log("array is empty");
    document.write("array is empty");
}
else{

  let  max = array[0];
  for(let i=0; i<array.length ; i++)
  {
    if(array[i]>max)
    {
        max = array[i]; 
    }
     }
     console.log("array of max number=" +" " + max)
     document.write("array of max number=" +" " + max)
     document.write("<br>")
}



//........................................................................................................................
// Q5. Write a JavaScript function that reverses a array.				   6
// Example x = 32243;
// Expected Output: 34223
// var Array = [2,8,7,6,5,4,9,3,4,8];
// console.log(Array)
// for(let i=9 ; i>0 ; i--)
//     console.log(Array[i]);

// function reverse(){
//     var Array = [2,8,7,6,5,4,9,3,4,8];
// console.log(Array)
// for(let i=9 ; i>=0 ; i--)
//    {
//     console.log(array[i])
//     }
// }
// reverse();

//..................................................................................................................................
//Q5. Write a JavaScript function that reverses a number.
function number(n) {
  let n_Str = n.toString();
    let rev_Str = n_Str.split('').reverse().join('');
    let rev_Num = parseInt(rev_Str)
    return Math.sign(n) * rev_Num;
}

// call back function
let x = 12345;
let rev_X = number(x);
console.log(rev_X);  // Output: 54321

//................................................................................................................
//Q6. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  

function calculate(){
    let num1 =parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let M = num1*num2
    let D = num1/num2
        document.getElementById("result").innerHTML="multiple=" +" " + M
        document.getElementById("result1").innerHTML= "division=" +" " + D
}

//Q7. Write a JavaScript program to display the current day and time in the following format.
let date = new Date()
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get current day
const day = days[date.getDay()];
document.getElementById("day").innerHTML = `Today is:   ${day}`;
document.getElementById("clock").innerHTML = `currunt time is:   ${date.toLocaleTimeString()}`;
// console.log(date)
document.getElementById("date").innerHTML = `date is:    ${date.toLocaleDateString()}`; 
//...........................................................................................
//Q8. Write a Java Script Program to create 10-character random password generator. 

function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';  
for (let i = 0; i < 10; i++) {  
        const pass = Math.floor(Math.random() * characters.length);
        password += characters[pass]; 
    }
 return password;    
}
console.log(generatePassword());
document.write("password=" +" " + generatePassword() + "<br>")



//.....................................................................................................................
//Q9. How to check if an object is a string or not? Provide some code. 	  

function isString(obj) {
    return typeof obj === 'string';
    
}
document.getElementById("str1").innerHTML = (isString("Hello")); // true (क्योंकि ये एक string है)
document.getElementById("str2").innerHTML = (isString(123));  
console.log(isString("Hello"))
//..........................or.....................................
x = `Hello eveyone my javascript programe`;
let y = 12345678910
let l = x.length;
console.log(l);
console.log(typeof x);
console.log(typeof y);

//............................................................................................................................
//Q10. Write a JavaScript program to compute the sum and product of an array of integers.
//sum of array
var ar = [1,2,3,4,5,6,7,8,9,10]
var s = 0
for(let  r=0; r<10; r++){
s = s+ar[r]
console.log(s);

document.getElementById("ary").innerHTML = ("array=" +ar)
document.getElementById("plus").innerHTML = ("sum of array=" +s)

}

//product of array
var ar = [1,2,3,4,5,6,7,8,9,10]
var s = 1
for(let  r=0; r<10; r++){
s = s*ar[r]
document.getElementById("product").innerHTML = ("product of array="+s)
console.log(s);
}
//.............................................................................

//Q11. Write a JavaScript program to calculate area of circle when the radius of the circle will be supplied by the user.
//var r = parseInt(prompt("enter the radius of the circle"));
//alert(3.14*r*r);

//..............................................................................................
// //Q12. Write a JavaScript program to check the given number is positive or not.
// var num = parseInt(prompt("enter any number"));
// if(num>0)
// {
//     alert("positive");
// }
// else if(num<0)
// {
//     alert("nagative")
// }
// else{
//     alert("nutral")
// }
//...........................or.................................................
// var num = parseInt(prompt("enter any number"));
// let d = Math.sign(num)
// alert(d)


//................................................................................................................
//Q13. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 

// Function to generate Fibonacci sequence
function fib(n)
{if(n<=1)
{
    return n;
}
return fib(n-2)+fib(n-1);
}

let n = 10;
fib(n)
console.log(fib(n))


//...................................................................................................................................
//Q14. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign	
// var num1 = parseInt(prompt("enter 1st number"));
// var num2 = parseInt(prompt("enter 2nd number"));
// var num3 = parseInt(prompt("enter 3rd number"));
// let result = num1*num2*num3;
// // let d = Math.sign(result)
// // alert(d)

// if(result>0)
// {
//     alert("positive");
// }
// else if(result<0)
// {
//     alert("nagative")
// }
// else{
//     alert("nutral")
// }

//......................................................................................................
//Q16. Write a javascript program using nested loop to print following pattern in console.											6
// 4   3   2   1
// 4   3   2
// 4   3
// 4

    
// Function to print the pattern
for (let i = 4; i >= 1; i--) {
    for (let j = 4; j >= 5 - i; j--) {
          
       document .write(j + " "); 
   }
   document .write("<br> "); 
 }
//  document.write(" <br>")
//  console.log(j)


//......................................................................................

//Q17. Write a JavaScript function to check whether a string is blank or not.

// Function to check if a string is blank
function isBlank(str) {
    // Check if the string is empty or contains only spaces
    return str.trim().length === 0;
}    

// Example usage
console.log(isBlank(""));         // true (empty string)
console.log(isBlank("   "));      // true (spaces only)
console.log(isBlank("Hello"));    // false (not blank)

//......................................................................................................
//Q18. Write a java script program to find area of rectangle when width and height are given.	

let height = 20;
let width = 10;
let area =  height*width;
console.log(area);

//................................................................................................................
//Q19. Write a JavaScript function to capitalize the first letter of a string.	        4    
//Sample Input: cybrom technology bhopal
//Ans : Cybrom Technology Bhopal.	

//   let str = `cybrom tecnology bhopal`
//   let  newstr= str.split(" ")
//  for (let i = 0; i < str.length; i++) 
//    {
//  newstr[i] = newstr[i].charAt(0).toUpperCase() + newstr[i].slice(1);
//      string =  newstr.join(" ")
//    console.log(string)
//   }

//........................or function.........................................
// function capitalizeFirstLetter(str) {
//     let words = str.split(" ");
//     for (let i = 0; i < words.length; i++) {
//        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//      }
//     return words.join(" ");
//     }
//      //callback function
// let inputString = "cybrom technology bhopal";
// let result = capitalizeFirstLetter(inputString);

// console.log(result);
//...........................................................................................................

//Q21. Write a JavaScript program to find maximum of given three number
function findMaximum(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
let number1 = 25;
let number2 = 45;
let number3 = 30;
let maxNumber = findMaximum(number1, number2, number3);
console.log("The maximum number is: " + maxNumber); 

//.....................................................................................................................................
//Q22. Write a JavaScript function to split a string and convert it into an array of words.											6
// Test Data:
// console.log(string_to_array("Cybrom Technology Bhopal"));
// Ans :      ["Cybrom", "Technology”, “Bhopal"]
        
function stringToArray(str) {
    return str.split(" ");
}
console.log(("cybrom tecnology bhopal"))
console.log(stringToArray("Cybrom Technology Bhopal"));

//.........................................................................................................................................................
//Q.23 Write a JavaScript program to print 1 to 20 even number using while loop.
//  let a=1;
//  while(a<=20)
//     if(a%2==0)
//     {
//      a++;
//         console.log(a)
//     }
 
    
    
    