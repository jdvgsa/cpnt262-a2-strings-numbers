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
