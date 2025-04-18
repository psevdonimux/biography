function openUrl(url){
 location.replace(url);
}
document.ondblclick = () => {
 let background = document.getElementById('background').style;
 let avatar = document.getElementById('avatar').style;
 background.filter = background.filter == 'invert(0)' ? 'invert(1)' : 'invert(0)';
 avatar.filter = avatar.filter == 'invert(0)' ? 'invert(1)' : 'invert(0)';
};
const descriptions = [
    {id: 'gulubuntu', text: 'Являюсь автором форка Lubuntu и постепенно довожу дистрибутив до ума', str: 'OS'},

    {id: 'php', text: 'Да я довольно хорошо знаю php тебя это удивляет?', str: 'LANG'},
    {id: 'html', text: 'С разметкой всё хорошо', str: 'LANG'},
    {id: 'javascript', text: 'Довольно хорошо владею на том же уровне что и php', str: 'LANG'},
    {id: 'userscript', text: 'Довольно часто пишу их понятное дело это javascript только на стороне клиента а не сервера', str: 'LANG'},
    {id: 'css', text: 'Не владею анимацией, но хорошо владею адаптивной вёрсткой!', str: 'LANG'},
    {id: 'java', text: 'Имею небольшой опыт работы с ним, но знаю основы', str: 'LANG'},
    {id: 'python', text: 'Наверное, точно так же, как и с java, только душа к нему не лежит', str: 'LANG'},
    {id: 'bash', text: 'Использую часто в Linux для автоматизаций рутинных действий, а также добавления команд', str: 'LANG'},
    {id: 'bat', text: 'Использую редко в Windows, так как по душе Linux', str: 'LANG'},
];
function clickHandler(id, text, str) {
    var old = document.getElementById(str).innerHTML;
    document.getElementById(str).textContent = text;
    setTimeout(() => {
        document.getElementById(str).innerHTML = old;
        attachAllHandlers();
    }, 3000);
}
function description(id, text, str) {
    document.getElementById(id).onclick = () => clickHandler(id, text, str);
}
function attachAllHandlers() {
    descriptions.forEach(item => description(item.id, item.text, item.str));
}
attachAllHandlers();