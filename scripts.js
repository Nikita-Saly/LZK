document.addEventListener("DOMContentLoaded", function() {
  var triggers = document.querySelectorAll('.modal-trigger');

  triggers.forEach(function(trigger) {
    trigger.addEventListener('click', function(event) {
      event.preventDefault();

      // Определяем уникальный идентификатор текущего блока
      var currentBannerId = trigger.closest('section').id;

      // Получаем родительский div секции
      var parentSection = document.getElementById(currentBannerId);

      // Получаем элементы image и text-info для текущего блока
      var imageBlock = parentSection.querySelector(`[data-id="image-${currentBannerId}"]`);
      var textInfoBlock = parentSection.querySelector(`[data-id="text-info-${currentBannerId}"]`);

      // Проверяем существование элементов
      if (!imageBlock || !textInfoBlock) {
        console.error("Один из нужных элементов не найден!");
        return;
      }

      // Переключаем классы для смены отображаемых элементов
      imageBlock.classList.toggle('hide');
      imageBlock.classList.toggle('show');
      textInfoBlock.classList.toggle('show');
      textInfoBlock.classList.toggle('hide');
    });
  });
});