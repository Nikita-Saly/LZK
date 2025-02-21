
document.addEventListener('DOMContentLoaded', function() {

   
// Функция для открытия модального окна
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

// Функция для закрытия модального окна
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function closeModalOutside(modalId, event) {
  if (event.target.classList.contains('modal')) {
    closeModal(modalId);
  }
}

const modal1 = document.getElementById('modal1');
const menuLinks1 = document.querySelectorAll('a');

window.addEventListener('click', (event) => {
  if (event.target == modal1) {
    modal1.style.display = 'none';
  }
});

menuLinks1.forEach(link => {
  link.addEventListener('click', () => {
    modal1.style.display = 'none';
  });
});


const modal2 = document.getElementById('modal2');
const menuLinks2 = document.querySelectorAll('a');

window.addEventListener('click', (event) => {
  if (event.target == modal2) {
    modal2.style.display = 'none';
  }
});

menuLinks2.forEach(link => {
  link.addEventListener('click', () => {
    modal2.style.display = 'none';
  });
});

// Назначаем обработчики событий для кнопок закрытия
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.parentElement.parentElement.id;
    closeModal(modalId);
  });
});

// Обработчик клика по ссылке
const modalTriggers = document.querySelectorAll('.modal-trigger');
modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем переход по ссылке
    const modalId = trigger.dataset.modal;
    openModal(modalId);
  });
});
});


