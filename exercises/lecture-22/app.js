const classes = ['first', 'second', 'third', 'fourth'];

// завдання 1. Отримати всі елементи з тегом h1.
        let h1Elements = document.getElementsByTagName('h1');
    // Вивести на консоль тип отриманого об'єкту та його розмір.
        console.log("Тип: " + typeof h1Elements);// object
        console.log("Розмір: " + h1Elements.length);// 4
    //Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.
        for (let i = 0; i < h1Elements.length; i++) {
            console.log(h1Elements[i]);
        }
//-------------------------------------------------------------------

// завдання 2. Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1.
        const firstP = document.querySelector('#p1');

    //Встановити для нього стиль background-color = "gold"
        firstP.style.backgroundColor = "gold";
//-------------------------------------------------------------------

// завдання 3. Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2.
        const secP = document.querySelector('#p2');
    // Встановити для нього стилі background-color:gold; color: blue; font-size: 2rem;
        secP.style.backgroundColor = "gold";
        secP.style.color = "blue";
        secP.style.fontSize = "2rem";
//-------------------------------------------------------------------

// завдання 4. Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3.
        const thirdP = document.querySelector('#p3');
    // Призначити для нього клас third
        thirdP.classList.add('third');
//-------------------------------------------------------------------

// завдання 5. Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4.
        const fourthP = document.querySelector('#p4');
    // Призначити для нього класи fourth та border
        fourthP.classList.add('fourth', 'border');
        console.log(fourthP.classList);
//-------------------------------------------------------------------

// завдання 6. Знайти всі елементи з класом container.
        const cont = document.querySelectorAll('.container');
    // Використовуючи цикл for, вивести на консоль перший елемент для кожного зі знайдених елементів.
        for (let i = 0; i < cont.length; i++) {
            const firstElement = cont[i].querySelector(':first-child'); // Отримати перший елемент усередині поточного контейнера
            console.log(firstElement); // вивести на консоль перший елемент для кожного зі знайдених елементів
        }
//-------------------------------------------------------------------

// завдання 7. Знайти всі елементи з класом container.
        const conten = document.querySelectorAll('.container');

    // Використовуючи цикл for, вивести на консоль вміст першого елементу для кожного першого елемента зі знайдених елементів.
        for (let i = 0; i < conten.length; i++) {
            let firstChild = conten[i].firstElementChild; // Отримуємо перший дочірній елемент
            console.log(firstChild.textContent); // Виводимо вміст першого дочірнього елемента
        }
//-------------------------------------------------------------------

// завдання 8. Знайти колекцію всіх елементів з селектором '.container header', зберегти її в змінній headers.
       /* const headers = document.querySelectorAll('.container header');

    // Використовуючи цикл for для отриманої колекції headers, замінити заголовки h1 таким чином
    // перший залишити h1
    // другий замінити на h2
    // третій замінити на h3
    // четвертий замінити на h4 зберегти початкові атрибути id та class

        for (let i = 1; i < headers.length; i++) {

        const h1 = headers[i].querySelector('h1');// Отримати поточний заголовок h1

        const textH1 = h1.innerHTML;// строкове  HTML-коду + внутрішній HTML-контент без відkрив і закрив тегів
        const classAttribute = h1.getAttribute('class');// Отримати  атрибути класу
        const idAttribute = h1.getAttribute('id');// Отримати  атрибути  id

    // Замінити заголовок на новий тег
        let newTag;
        if (i === 1) {
            newTag = 'h2';
        } else if (i === 2) {
            newTag = 'h3';
        } else if (i === 3) {
            newTag = 'h4';
        }

    // Створити новий заголовок із включенням вмісту та атрибутів класу та id
        const newHeader = document.createElement(newTag); // Створити новий DOM елемент з заголовком

        newHeader.innerHTML = textH1; //новий DOM елемент приймає значення(контент) старого н1

        if (classAttribute) {
            newHeader.setAttribute('class', classAttribute); //додаємо клас
        }
        if (idAttribute) {
            newHeader.setAttribute('id', idAttribute); //додаємо id
        }
        headers[i].replaceChild(newHeader, h1); // старий h1 замінюємо на сформований "newHeader"
        }

// Використовуючи цикл for для колекції headers та масив classes, додати до отриманих тегів-заголовків класи таким чином
    //до h1 додати клас first
    //до h2 додати клас second
    //до h3 додати клас third
    // h4 додати клас fourth

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i].querySelector('h1, h2, h3, h4');

            // Отримуємо тип заголовка (h1, h2, h3, h4)
            const headerType = header.tagName.toLowerCase();

            // Встановлюємо відповідний клас залежно від типу заголовка
            switch (headerType) {
                case 'h1':
                    header.classList.add('first');
                    break;
                case 'h2':
                    header.classList.add('second');
                    break;
                case 'h3':
                    header.classList.add('third');
                    break;
                case 'h4':
                    header.classList.add('fourth');
                    break;
                default:
                    break; //Якщо заголовок не є жодним з очікуваних типів, не додаємо клас
            }
        }*/



