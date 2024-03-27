const list = ['html', 'css', 'javascript', 'react.js'];

// Завдання 1. Використовуючи метод createElement, створити невпорядкований список на основі масиву list та вставити його на сторінку.
const newUl = document.createElement("ul");
list.forEach(item => {
    const li = document.createElement(`li`);
    li.textContent = item;
    newUl.appendChild(li);
});
document.body.appendChild(newUl);
console.log(newUl);
//------------------------------------------------------------------------

// Завдання 2. Маємо масив listWithHref
const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"},
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"},
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
    {'react.js': "https://react.dev"}
];
// Використовуючи метод createElement, створити впорядкований список на основі масиву listWithHref,
// де кожний елемент списку є тегом a з відповідним посиланням.
// Наприклад, для першого елемента списку:   <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a>
const newOl = document.createElement("ol");
listWithHref.forEach(item => {
    const [key, value] = Object.entries(item)[0]; // Отримуємо ключ (назву) та значення (посилання) з об'єкта
    const li = document.createElement('li'); // Створюємо елемент списку
    const a = document.createElement('a'); // Створюємо посилання
    a.href = value; // Встановлюємо атрибут href
    a.textContent = key; // Встановлюємо текст посилання

    li.appendChild(a); // Додаємо посилання до елементу списку

    newOl.appendChild(li); // Додаємо елемент списку до впорядкованого списку
});
console.log(newOl);
// Додайте створений список на сторінку.
document.body.appendChild(newOl);
//------------------------------------------------------------------------

// Завдання 3. Маємо масив students
const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]
// Використовуючи метод createElement, створити таблицю на основі масиву students.
// Заголовки стовпчиків таблиці - firstName, lastName, degree.
// Встановити для заголовків стовпчиків таблиці css-властивості: background-color: blue; color: azure;
// Додайте таблицю на сторінку.

// створюємо таблицю:
const table = document.createElement('table');

// створюємо заголовок таблиці
const tableHeader = document.createElement('thead');
const headerRow = document.createElement('tr');

// заголовки столбців
const headersCol = ['firstName', 'lastName', 'degree'];
headersCol.forEach(headerText=> {
    const header = document.createElement('th');
    header.textContent = headerText;
    header.style.backgroundColor = 'blue';
    header.style.color = 'azure';
    headerRow.appendChild(header);
});
// додаєм заголовок таблиці
tableHeader.appendChild(headerRow);
table.appendChild(tableHeader);

// створюємо тіло таблиці
const tableBody = document.createElement('tbody');

// заповнюємо таблицю даними з массива students
students.forEach(student=> {
    const row = document.createElement('tr');
    headersCol.forEach(header =>{
        const cell = document.createElement('td');
        cell.textContent = student[header];
        row.appendChild(cell);
    });
    tableBody.appendChild(row);
});
// додаємо тіло таблиці
table.appendChild(tableBody);

// розміщуємо таблицю на сторінці
document.body.appendChild(table);
console.log(table);




