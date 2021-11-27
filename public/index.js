const btn = document.getElementById('bar');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
  alert('hello');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});
