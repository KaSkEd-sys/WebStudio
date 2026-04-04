const backdrop = document.querySelector('[data-modal]');
const openBtns = document.querySelectorAll('[data-modal-open]');
const closeBtn = document.querySelector('[data-modal-close]');

function openModal() {
  backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  backdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
}

openBtns.forEach(btn => btn.addEventListener('click', openModal));
closeBtn.addEventListener('click', closeModal);


backdrop.addEventListener('click', (e) => {
  if (e.target === backdrop) closeModal();
});


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !backdrop.classList.contains('is-hidden')) {
    closeModal();
  }
});