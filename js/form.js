const myButton = document.getElementById("sendBtn");

myButton.addEventListener("click", function() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  if (nameInput.value && emailInput.value && messageInput.value) {
    alert("Message sent. Thank you for your enquiry!");
  } else {
    alert("Please fill in all the fields before sending the message.");
  }
});






