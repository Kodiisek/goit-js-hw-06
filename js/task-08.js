document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (emailInput.value.trim() === '' || passwordInput.value === '') {
      alert('Wszystkie pola powinny być wypełnione');
    } else {
      const formData = {
        email: emailInput.value,
        password: passwordInput.value,
      };
      
        console.log(formData);
      loginForm.reset();
    }
  });
});

