document.addEventListener('DOMContentLoaded', () => {
  const counterValueSpan = document.getElementById('value');
  const decrementButton = document.querySelector('[data-action="decrement"]');
  const incrementButton = document.querySelector('[data-action="increment"]');

  let counterValue = 0;
  
  const updateNum = () => {
    counterValueSpan.textContent = counterValue;
  };

  // Dodaj event listener dla przycisku dekrementacji
  decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    updateNum();
  });

  // Dodaj event listener dla przycisku inkrementacji
  incrementButton.addEventListener('click', () => {
    counterValue += 1;
    updateNum();
  });
});
