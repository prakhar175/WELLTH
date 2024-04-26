const cards = document.querySelectorAll('.card');
const expandedCard = document.querySelector('.expanded-card');
const expandedContent = document.querySelector('.expanded-content');
const backBtn = document.querySelector('.back-btn');
const expandedImg = expandedContent.querySelector('img');
const expandedTitle = expandedContent.querySelector('h3');
const expandedText = expandedContent.querySelector('p');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const cardImg = card.querySelector('img').src;
    const cardTitle = card.querySelector('h3').textContent;
    const cardText = card.querySelector('p').textContent;

    expandedImg.src = cardImg;
    expandedTitle.textContent = cardTitle;
    expandedText.textContent = cardText;
    expandedCard.style.display = 'flex';
  });
});

backBtn.addEventListener('click', () => {
  expandedCard.style.display = 'none';
});