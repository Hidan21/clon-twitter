const moreBtn = document.querySelector('#moreBtn');
const subItemsBox = document.querySelector('.MainLeft-sub');
const sublik = document.querySelectorAll('.MainLeft-sub-item');
const overlay = document.querySelector('.overlay');

moreBtn.addEventListener('click', () => {
  subItemsBox.classList.add('active');
});

sublik.forEach((btn) => {
  btn.addEventListener('click', () => {
    subItemsBox.classList.remove('active');
  });
});
