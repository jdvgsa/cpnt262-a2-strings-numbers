// Declaring constants to hold HTML elements
const showCount = document.getElementById("counter");
const increaseBy1 = document.getElementById("myButton");
const decreaseBy1 = document.getElementById("myButton2");

/* ******************************************************************
Solution 1 to increase and decrease buttons, 
behaves the same way as the eventlistener function.
****************************************************************** */
// var count = 0;
// increaseBy1.onclick = function() {
//   count++;
//   document.getElementById("counter").innerHTML = count;
//   showCount.innerHTML = count;
// };

// decreaseBy1.onclick = function() {
//   count--;
//   showCount.innerHTML = count;
// };


var count = 0;

increaseBy1.addEventListener("click", function() {
  /* count++; would work here but 
     chose to use a function (line 49) for practice */
  increaseCount();
  /* ** document.getElementById("counter").innerHTML = count; **
     if used, will have the same result with syntax below
     opted for shorter variation code for practice.
  */
  showCount.innerHTML = count;
});

decreaseBy1.addEventListener("click", function() {
  /* count--; , would work here but 
     chose to use a function (line 49) for practice */
  decreaseCount();

  /* *********************************************
  ** document.getElementById("counter").innerHTML = count; **
  ** does the same as | showCount.innerHTML = count; **
  ********************************************* */ 
  showCount.innerHTML = count;
});


function increaseCount(){
  count++;
}

function decreaseCount(){
  count--;
}

/* misunderstood first part of assignment where the instructions said
 "increment or decrement a number using ++/--;" 
I thought I would showcase this part of the instruction
in HTML by making a ++/--; button again. however I eventually realized
this was not the intended instructions but will include button made
with the top part of code for the assignment anyway, figuring it couldn't hurt */

//******** work for the assignment ********

/* increment or decrement a number using ++/--; */

const myNum = 10;
let increasedNum = myNum + 1;
let decreasedNum = myNum - 1;

// console.log ("increased number:", increasedNum);
// increased number: 11
// console.log("decreased number:", decreasedNum);
// decreased number: 9

/* use of document.querySelector("#id").innerText to render results in HTML page. */

document.querySelector("#ogNum0").innerText = myNum;
document.querySelector("#ogNum1").innerText = increasedNum;
document.querySelector("#ogNum2").innerText = decreasedNum;


/* convert number (integer to a string with number.toString();) */

let numString = myNum.toString();
document.querySelector("#stringNum").innerText = numString;

// console.log("num to string:", numString);
// num to string: 10
// '10' to 10. unsure if you want values to be different. reused 10.

// ***********************************************************************

/* Convert a number to exponential notation with Number.toExponential(); */
// let myNum = 10; redundant code, reusing number 10 for number to expo.

let expoNum = myNum.toExponential();
document.querySelector("#expoNum2").innerText = expoNum;

// console.log("expoNum:", expoNum);
// expoNum: 1e+1


/* Const vs Let Example, as taught in class:
a variable declared with "let" can be updated,
a variable declared with "const" cannot be modified */

