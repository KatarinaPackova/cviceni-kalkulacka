const displayElm = document.querySelector('.display');

displayElm.textContent = 42;

const handleDigitClick = (event) => {
  console.log('Uživatel klikl na tlačítko');
};

document.querySelector('.keypad').addEventListener('click', handleDigitClick);
