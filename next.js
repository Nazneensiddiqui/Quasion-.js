//Q.23 Write a JavaScript program to print 1 to 20 even number using while loop.
var a =1
while(a<=20){
    if(a%2==0)
        {
     console.log(a)
        } 
      a++
    }

    //......................................................................................................
    //Q.24 Write a Java script code to find factorial of a given number.
//     function factorial(n) {
//         let result = 1;
//         for (let i = 1; i <= n; i++) {
//             result *= i;
//         }
//     return result;
//     }
//      // callback function
//    let number = parseInt(prompt("Enter a number to find its factorial:"));
//     let fact = factorial(number);
    
//     console.log("The factorial of " + number + " is: " + fact);
//     alert("The factorial of " + number + " is: " + fact);

//........................................................................................
    //Q25. Create an array object and Apply any six array methods in your program.
    const array = ['Mango', 'Grapes', 'Apple' , 'Pinapple' , 'Banana']
    console.log(array);

    array.push('Orenge');
    console.log(array);

    array.pop();
    console.log(array);

    array.unshift('Stroberry');
    console.log(array);

    array.shift();
    console.log(array);

    array.sort()
    console.log(array)

    array.splice(1,3,"Pears")
    console.log(array)
//............................................................................................................
//Q26. Write a JavaScript function that changes the background colour of an element when a mouse enters it.  
function fun(){
    document.getElementById("demo").innerHTML = "<h1>this is my paragraph </h1>"
    document.getElementById("demo").style.backgroundColor = "pink"
    document.getElementById("demo").style.Color = "red"
    document.getElementById("demo").style.border = "2px solid"
    document.getElementById("demo").style.height = "200px"
    document.getElementById("demo").style.width = "400px"
}



//.................................................................................................................................................
//Q27. Write a Java Script Program to create Counter Program using setInterval() method. 

let n = 1;
let counter = setInterval(()=>{
    if(n==10){
        clearInterval(counter); 
    }
console.log(n++)},1000)

//.................................................................................................
//Q31. Write a JavaScript program to create an image changes that displayed   different image when a  onmouseenter. 
function pic1(){
    let img = document.getElementById("change_image")
    img.src = "../bag1.webp";
}

function pic2(){
    let img1 = document.getElementById("change_image")
    img1.src = "../bag2.webp";
}
function pic3(){
    let img2 = document.getElementById("change_image")
    img2.src = "../bag4.webp";
} 

//.......................or................................................
//Q30. Write a JavaScript program to create an image changes that displayed   different image when a  firstButton  or  SecondButton button is clicked. 

function change(){
    document.getElementById("change").src = "../bag2.webp";
}

function change1(){
    document.getElementById("change").src = "../bag4.webp";
}









//..................................................................................................................
//Q8 WAP to change the background color of body with click on buttons {3buttons green,black,orange}
function col1(){
    let a = document.body;
    a.style.backgroundColor = "green"
}

function col2(){
    let a = document.body;
    a.style.backgroundColor = "black"
    
}

function col3(){
    let a = document.body;
    a.style.backgroundColor = "orange"
}