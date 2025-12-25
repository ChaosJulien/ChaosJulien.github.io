const textEl = document.getElementById('text');
const texts = JSON.parse(textEl.dataset.text);

let index = 0;
let char = 0;
let deleting = false;
let delay = 120;

function type() {
  const current = texts[index];

  if (!deleting) {
    char++;
    textEl.textContent = current.slice(0, char);
    if (char === current.length) {
      deleting = true;
      delay = 1500;
    } else {
      delay = 120;
    }
  } else {
    char--;
    textEl.textContent = current.slice(0, char);
    if (char === 0) {
      deleting = false;
      index = (index + 1) % texts.length;
      delay = 400;
    } else {
      delay = 60;
    }
  }

  setTimeout(type, delay);
}

type();
