document.addEventListener('DOMContentLoaded', () => {
  const counterValueSpan = document.getElementById('value');
  const decrementButton = document.querySelector('[data-action="decrement"]');
  const incrementButton = document.querySelector('[data-action="increment"]');

  let counterValue = 0;
  
  const updateNum = () => {
    counterValueSpan.textContent = counterValue;
  };

  decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    updateNum();
  });

  incrementButton.addEventListener('click', () => {
    counterValue += 1;
    updateNum();
  });
});
