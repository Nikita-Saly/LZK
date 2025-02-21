
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

const modal = document.getElementById('modal1');
const menuLinks = document.querySelectorAll('a');

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    modal.style.display = 'none';
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


