


const openBurgerButton = document.getElementById('openBurger');
const closeBurgerButton = document.getElementById('closeBurger');
const burgerMenu = document.querySelector('.burger-menu');

// Обработчик нажатия на кнопку открытия бургер-меню
openBurgerButton.addEventListener('click', function() {
  burgerMenu.classList.add('burger-menu-show');
});

// Обработчик нажатия на кнопку закрытия бургер-меню
closeBurgerButton.addEventListener('click', function() {
  burgerMenu.classList.remove('burger-menu-show');
});

/*switcher*/
const switch1 = document.getElementById('switch1');
const switch2 = document.getElementById('switch2');

switch1.addEventListener('click', function() {
  switch1.classList.add('active');
  switch2.classList.remove('active');
  console.log('Switch 1 is active');
});

switch2.addEventListener('click', function() {
  switch2.classList.add('active');
  switch1.classList.remove('active');
  console.log('Switch 2 is active');
});

/*question*/
const questCards = document.querySelectorAll('.s-quest-card');

questCards.forEach(card => {
  card.addEventListener('click', () => {
    const answer = card.querySelector('.c-quest-answer');
    const arrow = card.querySelector('.quest-arrow');

    // Проверяем, была ли уже нажата текущая карточка
    const isCardAlreadyOpen = card.classList.contains('s-quest-card-show');

    // Удаляем все классы у всех ответов
    const allAnswers = document.querySelectorAll('.c-quest-answer');
    allAnswers.forEach(answer => answer.classList.remove('c-quest-answer-show'));

    // Удаляем все классы у всех карточек и стрелок
    questCards.forEach(card => {
      card.classList.remove('s-quest-card-show');
      const arrow = card.querySelector('.quest-arrow');
      if (arrow) {
        arrow.classList.remove('quest-arrow-show');
      }
    });

    // Если карточка уже была открыта, просто выходим из функции
    if (isCardAlreadyOpen) {
      return;
    }

    // Добавляем классы к текущей карточке
    answer.classList.add('c-quest-answer-show');
    card.classList.add('s-quest-card-show');
    if (arrow) {
      arrow.classList.add('quest-arrow-show');
    }
  });
});
