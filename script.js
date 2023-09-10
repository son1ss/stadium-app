const buttonContainer = document.querySelector('.map__overlay');

buttonContainer.addEventListener('click', e => {
  const button = e.target.closest('.map__button')
  const title = button.querySelector('.map__button-title')
  const value = button.querySelector('.map__button-value')
  title.classList.toggle('map__button-title_hidden')
  value.textContent === '+' ? value.textContent = '-' : value.textContent = '+'
})