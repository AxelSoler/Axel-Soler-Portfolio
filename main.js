const ham = document.querySelector('.tools')
const header = document.querySelector('.header2')


ham.addEventListener('click', () => {
    header.classList.toggle('header2_activate')
  }
);