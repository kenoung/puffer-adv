const buttons = document.querySelectorAll('.reveal');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const answer = document.getElementById(button.dataset.target);
    answer.classList.toggle('show');
  });
});
