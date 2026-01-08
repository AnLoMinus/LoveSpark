const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
const rouletteList = document.querySelector('#rouletteList');
const rouletteSpin = document.querySelector('#rouletteSpin');
const rouletteTitle = document.querySelector('#rouletteTitle');
const rouletteText = document.querySelector('#rouletteText');
const rouletteGoal = document.querySelector('#rouletteGoal');
const cardNodes = document.querySelectorAll('.spark-card');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
}

const cards = Array.from(cardNodes).map((card) => ({
  title: card.querySelector('h3')?.textContent ?? 'קלף אהבה',
  text: card.querySelector(':scope > p')?.textContent ?? '',
  goal: card.querySelector('.card-footer')?.textContent ?? 'מטרה: חיבור',
}));

let rouletteIndex = 0;
let spinTimer = null;

const renderRoulette = () => {
  if (!rouletteList) return;
  rouletteList.innerHTML = '';
  cards.forEach((card, index) => {
    const item = document.createElement('li');
    item.className = 'roulette-item';
    item.textContent = card.title;
    if (index === rouletteIndex) {
      item.classList.add('active');
    }
    rouletteList.appendChild(item);
  });
};

const updateResult = (card) => {
  if (!card) return;
  if (rouletteTitle) rouletteTitle.textContent = card.title;
  if (rouletteText) rouletteText.textContent = card.text;
  if (rouletteGoal) rouletteGoal.textContent = card.goal;
};

const spinRoulette = () => {
  if (!cards.length || !rouletteSpin) return;
  rouletteSpin.disabled = true;
  const totalSpins = Math.floor(Math.random() * 20) + 20;
  let spins = 0;
  const targetIndex = Math.floor(Math.random() * cards.length);

  spinTimer = setInterval(() => {
    rouletteIndex = (rouletteIndex + 1) % cards.length;
    renderRoulette();
    spins += 1;
    if (spins >= totalSpins && rouletteIndex === targetIndex) {
      clearInterval(spinTimer);
      updateResult(cards[rouletteIndex]);
      rouletteSpin.disabled = false;
    }
  }, 80);
};

if (cards.length) {
  rouletteIndex = Math.floor(Math.random() * cards.length);
  renderRoulette();
  updateResult(cards[rouletteIndex]);
}

if (rouletteSpin) {
  rouletteSpin.addEventListener('click', spinRoulette);
}
