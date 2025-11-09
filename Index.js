alert('Вернусь: 01.12.2025');
// alert('Вернусь: 15.12.2025');
// alert('Вернусь: 29.12.2025');
// alert('Вернусь: 12.01.2026');
// alert('Вернусь: 26.01.2026');
// alert('Вернусь: 09.02.2026');
// alert('Вернусь: 23.02.2026');
// alert('Вернусь: 09.03.2026');
// alert('Вернусь: 23.03.2026');
// alert('Вернусь: 06.04.2026');
// alert('Вернусь: 20.04.2026');
// alert('Вернусь: 04.05.2026');
// alert('Вернусь: 18.05.2026');
// alert('Вернусь: 01.06.2026');
// alert('Вернусь: 15.06.2026');
// alert('Вернусь: 29.06.2026');
// alert('Вернусь: 13.07.2026');
var descriptions = [];
const clickHandler = (id, text, str, timeout) => {
 const old = document.getElementById(str).innerHTML;
 document.getElementById(str).textContent = text;
 setTimeout(() => {
  document.getElementById(str).innerHTML = old;
  attachAllHandlers();
 }, timeout * 1000);
};
const description = (id, text, str, timeout) => document.getElementById(id).onclick = () => clickHandler(id, text, str, timeout);
const attachAllHandlers = () => descriptions.forEach(item => description(item.id, item.text, item.str, item.timeout));
const init = async () => {
 const response = await fetch('info.json');       
 descriptions = await response.json();   
 attachAllHandlers();
};
init();
const img = new Image();
img.src = 'images/avatar_animation.gif'; 
img.onload = () => document.getElementById('avatar').src = img.src;
const ads = document.getElementById('modalAds');
const timer = document.getElementById('timer');
/*ads.showModal();
let timeLeft = 10;
timer.textContent = timeLeft;
const countdown = setInterval(() => {
 timeLeft--;
 timer.textContent = timeLeft;
 if(timeLeft == 0){
  clearInterval(countdown);
  ads.close();
 }
}, 1000);*/














