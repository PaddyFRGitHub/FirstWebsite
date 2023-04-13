src="https://smtpjs.com/v3/smtp.js"

// We want to see some non-trivial Javascript code
// At a minimum, you should demonstrate a few simple uses of event-driven JavaScript for DOM manipulation
// You should use ES6 syntax throughout: e.g. don't use "var", use the modern tools (template literals, arrow functions).
// There should be no JavaScript errors in the browser console

// For more marks, we like to see a bit more complex use of JavaScript, perhaps some looping and/or more complex DOM manipulation.
// Accessing APIs is a great option if it fits with your project, or you can work with your own, local data.
// Your code should be DRY, if you have repeated code, consider refactoring as a function with arguments for example.
// We like to see what you can do. Be creative.

console.log("Obviously, you should replace this with some event handlers.")


paddy = document.querySelector(".paddy");
			paddy.onclick = function() {
				navBar = document.querySelector(".nav-bar");
				navBar.classList.toggle("active");
				console.log("Menu bar clicked")
			}		

const logo = document.getElementById('centrallogo');
let opacity = 0;
let direction = 1;

function fadeInOut() {
  if (opacity < 0.1 || opacity > 0.9) {
    direction *= -1;
  }
  opacity += direction * 0.1;
  requestAnimationFrame(fadeInOut);
}

fadeInOut();



