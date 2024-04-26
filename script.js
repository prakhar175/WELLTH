const typingText = document.querySelector('.text');
const text = 'Good things come to those who sweat.';
let index = 0;

function type() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 200);
  } else {
    setTimeout(clearText, 1700);
  }
}

function clearText() {
  typingText.textContent = '';
  index = 0;
  setTimeout(type, 200);
}

type();

