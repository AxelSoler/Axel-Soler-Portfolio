const ham = document.querySelector('.tools');
const header = document.querySelector('.header2');
const closeX = document.querySelector('.close_window');
const logo = document.querySelector('.logo');
const logo2 = document.querySelector('.logo1');

ham.addEventListener('click', () => {
  header.classList.toggle('activate');
  ham.classList.toggle('desactivate');
  closeX.classList.toggle('activate');
  logo.classList.toggle('desactivate');
  logo2.classList.toggle('desactivate');
});
document.querySelectorAll('.menu_section').forEach((n) => n.addEventListener('click', () => {
  header.classList.remove('activate');
  ham.classList.remove('desactivate');
  closeX.classList.remove('activate');
  logo.classList.remove('desactivate');
  logo2.classList.remove('desactivate');
}));

closeX.addEventListener('click', () => {
  header.classList.remove('activate');
  ham.classList.remove('desactivate');
  closeX.classList.remove('activate');
  logo.classList.remove('desactivate');
  logo2.classList.remove('desactivate');
});