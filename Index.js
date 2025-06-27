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
img.src = 'images/avatar_animation.webp'; 
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
