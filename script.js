const darkModeBtn = document.querySelector('#btn')
const btnTransition = document.querySelector('#btn-transition')
const root = document.querySelector('#root')

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }

darkModeBtn.addEventListener('click', function() {
    root.classList.toggle('dark')
    btnTransition.classList.toggle('translate-x-5')
})

localStorage.theme = 'light'
localStorage.theme = 'dark'