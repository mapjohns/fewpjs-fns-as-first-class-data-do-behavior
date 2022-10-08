/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let breakTime = time.split(':');
  let convertTime = parseInt(breakTime[0]);
  if (convertTime < 12) {
    return "Good Morning"
  } else if (convertTime >= 12 && convertTime < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById('greeting').innerHTML = message
}