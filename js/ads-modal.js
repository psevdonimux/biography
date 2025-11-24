const ads = document.getElementById('modalAds');
const timer = document.getElementById('timer');
ads.showModal();
let timeLeft = 10;
timer.textContent = timeLeft;
const countdown = setInterval(() => {
 timeLeft--;
 timer.textContent = timeLeft;
 if(timeLeft == 0){
  clearInterval(countdown);
  ads.close();
 }
}, 1000);














