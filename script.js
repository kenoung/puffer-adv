const units = [...document.querySelectorAll('.unit')];
const progressCount = document.getElementById('progress-count');

function updateProgress() {
  const complete = units.filter((unit) => unit.dataset.done === 'true').length;
  progressCount.textContent = `${complete} / ${units.length} units completed`;
}

units.forEach((unit, idx) => {
  const controls = document.createElement('div');
  controls.className = 'unit-controls';

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'mark-done';
  button.textContent = 'Mark unit complete';
  button.setAttribute('aria-pressed', 'false');

  button.addEventListener('click', () => {
    const done = unit.dataset.done === 'true';
    unit.dataset.done = String(!done);
    button.setAttribute('aria-pressed', String(!done));
    button.textContent = done ? 'Mark unit complete' : 'Completed ✓';
    updateProgress();
  });

  controls.appendChild(button);
  unit.appendChild(controls);

  const topicLink = document.querySelector(`.topic-list a[href="#${unit.id}"]`);
  if (topicLink) {
    unit.addEventListener('mouseenter', () => topicLink.classList.add('focus-link'));
    unit.addEventListener('mouseleave', () => topicLink.classList.remove('focus-link'));
  }

  unit.dataset.index = String(idx + 1);
});

updateProgress();
