const descriptions = [
 {
  id: 'gulubuntu',
  text: 'Автор форка Lubuntu. Оптимизирую, упрощаю, добавляю полезное в систему. Делаю Linux доступным и лёгким для всех, сохраняя баланс между минимализмом и практичностью.',
  str: 'OS',
  timeout: 5
 },
 {
  id: 'lubuntu',
  text: 'Lubuntu стал для меня первым десктопным дистрибутивом Linux. Использую с 10.07.2024.',
  str: 'OS',
  timeout: 5
 },
 {
  id: 'ubuntu',
  text: 'Ubuntu стал для меня первым серверным дистрибутивом Linux. Использую с 10.07.2020.',
  str: 'OS',
  timeout: 5
 },
 {
  id: 'windows',
  text: 'Хорошо разбираюсь в Windows. Оптимизирую систему, уменьшая её потребление.',
  str: 'OS',
  timeout: 5
 },

 {
  id: 'php',
  text: 'Хорошо владею PHP. Опыт 3.5 года.',
  str: 'LANG',
  timeout: 5
 },
 {
  id: 'html',
  text: 'Разметка — без проблем.',
  str: 'LANG',
  timeout: 5
 },
 {
  id: 'javascript',
  text: 'Уверенно владею, на уровне PHP.',
  str: 'LANG',
  timeout: 5
 },
 {
  id: 'userscript',
  text: 'Пишу пользовательские скрипты на стороне браузера — упрощаю взаимодействие, изменяю дизайн интерфейса.',
  str: 'LANG',
  timeout: 5
 },
 {
  id: 'css',
  text: 'Хорошо владею адаптивной вёрсткой, пока без анимаций.',
  str: 'LANG',
  timeout: 5
 },
 {
  id: 'java',
  text: 'Знаю основы, есть небольшой опыт.',
  str: 'LANG',
  timeout: 5
 },
 {
  id: 'python',
  text: 'Владею, на уровне Java. Не по вкусу то что синтаксис не C-подобный. Печать строки через умножение? Спасибо, но нет.',
  str: 'LANG',
  timeout: 5
 },
 {
  id: 'bash',
  text: 'Часто применяю в Linux для автоматизации.',
  str: 'LANG',
  timeout: 5
 },
 {
  id: 'bat',
  text: 'Редко применяю в Windows, чаще использую Linux.',
  str: 'LANG',
  timeout: 5
 }, 
 {
  id: 'sql',
  text: 'Хорошо понимаю структуру SQL-запросов. Использую для работы с базами данных.',
  str: 'LANG',
  timeout: 5
 },
 
 {
  id: 'DBP',
  text: 'Есть базовый опыт разработки Discord-ботов на PHP. В будущем планирую реализовать полноценный проект.',
  str: 'FW',
  timeout: 5
 },
 {
  id: 'MCPES',
  text: 'Начинал с серверов Minecraft PE на PHP (PocketMine-MP) — это стало отправной точкой в сфере, которой занимаюсь сейчас.',
  str: 'FW',
  timeout: 5
 },

 {
  id: 'apache2',
  text: 'Владею классическим, почти пенсионерским навыком работы с Apache2. Но если серьёзно — пора переходить на Nginx.',
  str: 'STACK',
  timeout: 5
 },
 {
  id: 'termux',
  text: 'Владею Termux: запускаю скрипты на Bash, держу Apache2 для локального тестирования сайтов, подключаюсь к VDS.',
  str: 'STACK',
  timeout: 5
 },
 {
  id: 'sqlite',
  text: 'Применяю SQLite в локальных проектах и тестировании.',
  str: 'STACK',
  timeout: 5
 },
 {
  id: 'mysql',
  text: 'Работаю с MySQL на практике: веб-проекты, связка с PHP.',
  str: 'STACK',
  timeout: 5
 },
 {
  id: 'chatgpt',
  text: 'Кто-то, возможно, осудит меня за то, что я добавил нейросети в свой рабочий процесс, но для меня это — инструмент, который при грамотном подходе ускоряет поиск информации и разработку. Я не копирую вслепую — важно понимать, что именно ты берёшь и как это применять. Нейросеть не заменяет документацию и не диктует каждый шаг. Я использую её для черновых решений, макетов, шаблонов, которые потом дорабатываю вручную. Иногда — для рутинных задач вроде форматирования кода, чтобы сэкономить время. Нейросеть не заменит людей, которые действительно знают своё дело и развиваются в нём — по крайней мере, в ближайшее время. Обучение ИИ требует немалых ресурсов, а поток входных данных ограничен. Чтобы нейросеть могла работать с крупными проектами, их нужно дробить и собирать по частям — а это требует понимания структуры и сути задачи. Без осознания того, что ты делаешь, автоматизация не работает. Я верю, что будущее — в связке человека и ИИ. Программист остаётся у руля: анализирует результаты нейросети, корректирует их и направляет процесс. В итоге ИИ помогает быстрее прийти к нужному результату.',
  str: 'STACK',
  timeout: 45
 },
 {
  id: 'claude',
  text: 'Использую Claude в веб-разработке для написания черновых вариантов и макетов сайтов — благодаря глубокому мышлению он справляется с задачами не только из сферы программирования, но и образования. Однако для генерации текста и изображений предпочитаю ChatGPT — здесь он даёт более качественный результат.',
  str: 'STACK',
  timeout: 5
 },
 {
  id: 'kling',
  text: 'Использую Kling для генерации коротких, реалистичных видео. Есть нюансы: длительность 5–10 секунд, точность — не всегда гарантирована, но при грамотном подходе можно получить достойный результат. Моя гиф-аватарка — результат двух промптов и лёгкого монтажа.',
  str: 'STACK',
  timeout: 5
 },
];
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
attachAllHandlers();
const img = new Image();
img.src = 'images/avatar_animation.webp'; 
img.onload = () => document.getElementById('avatar').src = img.src;
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