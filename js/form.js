const form1 = document.querySelector('.contact');

form1.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form1);
  const data = Object.fromEntries(formData);
  
  fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
  
});