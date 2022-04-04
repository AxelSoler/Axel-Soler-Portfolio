const ham = document.querySelector('.tools')
const header = document.querySelector('.header2')
const closeX = document.querySelector('.close_window')
const logo = document.querySelector('.logo')


ham.addEventListener('click', () => {
    header.classList.toggle('activate')
    ham.classList.toggle('delete')
    closeX.classList.toggle('activate')
    logo.classList.toggle('desactivate')
  }
);

document.querySelectorAll('.menu_section').forEach
    (n => n.addEventListener('click', () => {
        header.classList.remove('activate')
        ham.classList.remove('delete')
        closeX.classList.remove('activate')
        logo.classList.remove('desactivate')
    }))