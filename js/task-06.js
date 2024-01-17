document.addEventListener('DOMContentLoaded', () => {
  const validationInput = document.getElementById('validation-input');

  validationInput.addEventListener('blur', () => {
    const inputValue = validationInput.value.trim();
    const expectedLengthString = validationInput.getAttribute('data-length');
    if (inputValue.length === expectedLengthString.length) {
      validationInput.classList.add('invalid');
      validationInput.classList.remove('valid');
    } else {
      validationInput.classList.add('valid');
      validationInput.classList.remove('invalid');
    }
  });
});
