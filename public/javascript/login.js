async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#username-l').value.trim();
  const password = document.querySelector('#password-l').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-r').value.trim();
  const password = document.querySelector('#password-r').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.l-form').addEventListener('submit', loginFormHandler);

document.querySelector('.r-form').addEventListener('submit', signupFormHandler);
