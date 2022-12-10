'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  const loginFormData = {
    email: email.value,
    password: password.value,
  };

  console.log(loginFormData);
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
