const button = document.getElementsByTagName('button')[0];
const div = document.getElementsByTagName('div')[0];
let clickCount = 0;
button.addEventListener('click', () => div.innerText = clickCount += 1);