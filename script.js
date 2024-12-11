const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const colorInfo = document.getElementById('color-info');
const randomButton = document.getElementById('random');
const resetButton = document.getElementById('reset');


function updateColor(color) {
  body.style.backgroundColor = color;
  colorInfo.textContent = color;
  document.querySelectorAll('.button').forEach(button => {
    button.classList.remove('active');
  });
  const activeButton = document.getElementById(color);
  if (activeButton) activeButton.classList.add('active');
}


buttons.forEach(button => {
  button.addEventListener('click', e => {
    const color = e.target.id;
    updateColor(color);
  });
});


randomButton.addEventListener('click', () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  updateColor(randomColor);
});


resetButton.addEventListener('click', () => {
  updateColor('Default');
  body.style.backgroundColor = ''; 
});
