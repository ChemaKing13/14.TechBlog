const loginFormHandler = async (event) => {
  event.preventDefault(); 

  //collect the values from the login form 
  const name = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (name && password) {

    //send a POST request to the login route 
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      const errorData = await response.json();
      alert(errorData.error);
    }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);