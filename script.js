const bar = document.querySelector('.fa-bars');
const navbar = document.querySelector('.respo-navbar');
const close = document.querySelector('.close');

bar.addEventListener('click', function () {
  navbar.classList.add('active');
});

close.addEventListener('click', function () {
  navbar.classList.remove('active');
});
