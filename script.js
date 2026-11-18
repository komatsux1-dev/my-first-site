const title = document.getElementById('title');
const text = document.getElementById('text');
const button = document.getElementById('btn');

let count = 0;

button.addEventListener('click', function() {
    count = count + 1;
    title.textContent = 'Кнопка работает!';
    text.textContent = 'Количество нажатий: ' + count;
});