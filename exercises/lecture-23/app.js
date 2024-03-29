const alert = document.querySelector('.alert');

// завдання 1. Знайти на сторінці кнопку з класом btn-primary.
// Призначте знайденому елементу подію onclick.
// Написати функцію обробки події onclick, що додає CSS-клас alert-primary до елемента з классом = alert
// та змінює значення властивості textContent цього елемента на "A simple primary alert—check it out!".

const btnPrimary = document.querySelector('.btn-primary'); // Знаходимо кнопку із класом "btn-primary"

btnPrimary.onclick = function() {
    alert.classList.add('alert-primary'); //Додаємо CSS-клас "alert-primarу"
    alert.textContent = "A simple primary alert - check it out!"; // Змінюємо текстовий вміст елемента
};
//----------------------------------------------------------------------------------------------

// завдання 2. Знайти на сторінці кнопку з класом btn-secondary.
// Додати до кнопки прослуховувач події "click".
// Написати функцію обробки події click, що додає CSS-клас alert-primary до елемента з классом = alert
// та змінює значення властивості textContent цього елемента на "A simple secondary alert—check it out!"

const btnSecondary = document.querySelector('.btn-secondary'); // Знаходимо кнопку із класом "btn-secondary"

btnSecondary.addEventListener('click', function() {
    alert.classList.add('alert-primary'); //Додаємо CSS-клас "alert-primarу"
    alert.textContent = "A simple secondary alert—check it out!"; // Змінюємо текстовий вміст елемента
});
//----------------------------------------------------------------------------------------------

// завдання 3. Знайти на сторінці кнопку з класом btn-success.
// Додати до кнопки прослуховувач події "mouseover".
// Написати функцію обробки події mouseover, що додає CSS-клас alert-success до елемента з классом = alert
// та змінює значення властивості textContent цього елемента на "A simple success alert—check it out!"

const btnSuccess = document.querySelector('.btn-success'); // Знаходимо кнопку із класом "btn-success"

btnSuccess.addEventListener('mouseover', function() {
    alert.classList.add('alert-success');
    alert.textContent = "A simple success alert—check it out!";
});

// Додати до кнопки прослуховувач події "mouseout".
// Написати функцію обробки події mouseout, що видаляє CSS-клас alert-success з елемента alert
// та змінює значення властивості textContent цього елемента на пустий рядок.
btnSuccess.addEventListener('mouseout', function() {
    alert.classList.remove('alert-success');
    alert.textContent = "";
});
//----------------------------------------------------------------------------------------------

// завдання 4. Знайти на сторінці кнопку з класом btn-danger.
// Додати до кнопки прослуховувач події "focus".
// Написати функцію обробки події focus, що додає CSS-клас alert-danger до елемента з классом = alert та змінює значення властивості textContent цього елемента на "A simple danger alert—check it out!"
// Додати до кнопки прослуховувач події "focusout".
// Написати функцію обробки події focusout, що видаляє CSS-клас alert-danger з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.

const dangerButton = document.querySelector('.btn-danger'); // Знаходимо кнопку із класом "btn-danger"

function handleFocus() {
    alert.classList.add('alert-danger'); // Додаємо CSS-клас alert-danger
    alert.textContent = "A simple danger alert—check it out!"; // Змінюємо текстовий вміст елемента
}
function handleFocusOut() {
    alert.classList.remove('alert-danger'); // Видаляємо CSS-клас alert-danger
    alert.textContent = ""; // Очищаємо текстовий вміст елемента
}
dangerButton.addEventListener('focus', handleFocus); // Додаємо прослуховувачі подій
dangerButton.addEventListener('focusout', handleFocusOut);
//----------------------------------------------------------------------------------------------

// завдання 5. Знайти на сторінці кнопки з класом btn-dark та btn-light.
// Написати функцію toggleMode, що перемикає клас «dark-mode» елемента document.body за допомогою методу classList.toggle().
// Одночасно при перемиканні класу dark-mode потрібно приховувати або показувати відповідну кнопку.
// Якщо ввімкнено режим dark-mode, показати кнопку btn-light та сховати кнопку dark-mode,
// і навпаки, якщо вимкнено режим dark-mode, показати кнопку btn-dark та сховати кнопку btn-light

function toggleMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    btnDark.classList.toggle("hide");
    btnLight.classList.toggle("hide");
}
const btnDark = document.querySelector('.btn-dark');
const btnLight = document.querySelector('.btn-light');

btnLight.classList.toggle("hide");

btnDark.addEventListener("click", toggleMode);
btnLight.addEventListener("click", toggleMode);
//----------------------------------------------------------------------------------------------

// завдання 6. Знайти на сторінці кнопку з класом btn-info.
// Додати до кнопки прослуховувач події "keypress".
// Написати функцію обробки події keypress, що перевіряє, чи є натиснута клавіша, клавішею "Enter".
// Якщо це так, типову дію події потрібно скасовувати за допомогою методу event.preventDefault().
// Після скасування дії за замовчуванням, додати CSS-клас alert-info до елемента з класом = alert
// та змінити значення властивості textContent цього елемента на "A simple info alert—check it out!";

const infoButton = document.querySelector('.btn-info'); // Знаходимо кнопку із класом btn-info
function handleKeyPress(event) {
    // Перевіряємо, чи була натиснута клавіша Enter
    if (event.key === 'Enter') {
        event.preventDefault(); // Скасуємо типову дію події
        alert.classList.add('alert-info'); // Додаємо CSS-клас alert-info
        alert.textContent = "A simple info alert—check it out!"; // Змінюємо текстовий вміст елемента
    }
}
infoButton.addEventListener('keypress', handleKeyPress); // Додаємо прослуховувач події keypress до кнопки
//----------------------------------------------------------------------------------------------

//завдання 7. Знайти на сторінці всі селектори .card. Використовуючи цикл for, вивести на консоль вміст кожного елемента з класом .card-title

const cards = document.querySelectorAll('.card'); // Знайти на сторінці всі селектори .card.

for (let i = 0; i < cards.length; i++) {
    const cardTitle = cards[i].querySelector('.card-title'); // Знаходимо заголовок кожної картки із класом .card-title
    console.log(cardTitle.textContent);
}
//----------------------------------------------------------------------------------------------

// завдання 8. Знайти на сторінці всі селектори .card.
// Використовуючи цикл for, знайти для кожного елемента .card кнопку з класом .add-to-cart,
// додати для кожної кнопки обробник події click, що викликає функцію, яка виводить на консоль вміст кожного елемента з класом .card-title

//---------------------виконання:
/*const cards = document.querySelectorAll('.card'); //Знайти на сторінці всі селектори .card.

for (let i = 0; i < cards.length; i++) {
    const addToCartButton = cards[i].querySelector('.add-to-cart'); // Знаходимо кнопку додавання до кошика для поточної картки
    // Додаємо обробник події click для кнопки
    addToCartButton.addEventListener('click', function() {
        const cardTitle = cards[i].querySelector('.card-title'); // Знаходимо заголовок кожної картки із класом .card-title

        console.log(cardTitle.textContent);
    });
}*/


