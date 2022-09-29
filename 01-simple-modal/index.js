const $modalOpenBtn = document.querySelector('#modal-open-btn');

$modalOpenBtn.addEventListener('click', () => {
  const $modal = document.querySelector('.modal');
  $modal.classList.add('show');
});

const $dimmed = document.querySelector('.dimmed');

$dimmed.addEventListener('click', () => {
  const $modal = document.querySelector('.modal');
  $modal.classList.remove('show');
});