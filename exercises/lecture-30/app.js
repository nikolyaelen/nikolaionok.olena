
const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
`;

// завдання 1. Написати асинхронну функцію, що чекає 10 секунд, поки користувач заповнює поля форми.
        // Після чого функція читає значення полів форми, зберігає їх у змінних firstName і lastName та перевіряє чи вони не пусті.
        // Якщо обидва значення пусті, функція змінює контент h1 на I'm miss You.
        // Якщо хоча б одне зі значень заповнене, функція змінює контент h1 на Hello firstName lastName!
function checkForm() {
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;

    if (!firstName && !lastName) {
        document.getElementById('waiting').innerText = "I'm miss You";
    } else {
        document.getElementById('waiting').innerText = `Hello ${firstName} ${lastName}!`;
        fetchData();
    }
}
setTimeout(checkForm, 10000);

// завдання 2. Створити новий об'єкт xhr, як екземпляр XMLHttpRequest.
// Надіслати запит на веб-сервер https://jsonplaceholder.typicode.com/posts, використовуючи методи open() і send().
function fetchData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.send();

// завдання 3. Використовуючи подію xhr.onload, напишіть функцію зворотного виклику, що отримує результат запиту з сервера,
        // за допомогою JSON.parse перетворює результат на об'єкт,
        // будує за допомогою шаблона template стрічку публікацій та поміщає отриманий результат всередину елемента з id="demo".
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const demoElement = document.getElementById('demo');
            demoElement.innerHTML = data.map(template).join('');
        } else {
            console.error('Request failed. Status:', xhr.status);
        }
    };
}
