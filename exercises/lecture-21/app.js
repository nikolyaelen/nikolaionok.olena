const fruits = 'apple banana cantaloupe blueberries grapefruit';
// завдання 1. Перетворити рядок fruits у масив. Результат зберегти у масиві fruits.
/* У JavaScript, значення, присвоєне змінною, оголошеною за допомогою const,
не може бути перенадано. Це означає, що безпосередньо змінити значення змінної
fruits з типу string на тип array, не змінюючи її оголошення з const, неможливо.
Ключове слово const використовується для створення констант, значення яких не
передбачається змінювати після їхнього початкового визначення.
Можна "обійти" це обмеження:  */

            /* function arrFruits(str) {
             let fruits =str.split(' ');
             return fruits;
            }
            console.log(arrFruits(fruits));*/
 //------------------------------------------------------------------------------------------

 // завдання 2. Використовуючи цикл for, вивести на консоль список елементів з масиву fruits.
            /*function arrFruits(str) {
                let fruits =str.split(' ');
                for (let i = 0; i < fruits.length; i++) {
                    console.log(fruits[i]);
                }
            }
            arrFruits(fruits);*/
//------------------------------------------------------------------------------------------

// завдання 3. Використовуючи цикл while, вивести на консоль список елементів з масиву fruits.
            /*function arrFruits(str) {
                let fruits =str.split(' ');
                let i = 0;
                while (i < fruits.length) {
                    console.log(fruits[i]);
                    i++;
                }
            }
            arrFruits(fruits);*/
//------------------------------------------------------------------------------------------

// завдання 4. Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits.
            /*function arrFruits(str) {
                let fruits =str.split(' ');
                let i = 0;
                do {
                    console.log(fruits[i]);
                    i++;
                } while (i < fruits.length);
            }
            arrFruits(fruits);*/
//------------------------------------------------------------------------------------------

// завдання 5. Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits.
            /*function arrFruits(str) {
                let fruits =str.split(' ');
                for (const fruit of fruits) {
                    console.log(fruit);
                }
            }
            arrFruits(fruits);*/
//------------------------------------------------------------------------------------------

// завдання 6. Маємо масив Numbs.
            /*const Numbs = [1,2,3,4,5,6,7,8,9,10];
    // Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs.
            for (let i = 0; i < Numbs.length; i++) {

                if (Numbs[i] % 2 === 0) {
                    console.log(Numbs[i]);
                }
            }*/
//------------------------------------------------------------------------------------------

// завдання 7. Маємо масив names:
            /*const names = ['Batman'];
    //Додати 'Joker' в кінець масиву names:
            names.push('Joker');
            console.log(names);*/
//------------------------------------------------------------------------------------------

// завдання 8. Маємо масив names:
            /*const names = ['Batman'];
    // Додати 'Joker' на початок масиву names
            names.splice(0, 0, 'Joker');// splice(0, 0, 'Joker') означає: починаючи з індексу 0, не видаляти жодного елемента і додати 'Joker'
            console.log(names); // ['Joker', 'Batman']*/
//------------------------------------------------------------------------------------------

// завдання 9. Маємо масив names:
            /*names = ['Batman', 'Joker', 'Bane'];
    //Додати 'Catwoman' на початок масиву names, використовуючи метод unshift
            names.unshift('Catwoman');
            console.log(names);*/
//------------------------------------------------------------------------------------------

// завдання 10. Маємо масив names:
            /*names = ['Batman', 'Joker', 'Bane'];
    // Додати 'Catwoman' на початок масиву names, використовуючи оператор ...
            names = ['Catwoman', ...names]
            console.log(names);*/
//------------------------------------------------------------------------------------------

//завдання 11. Маємо масив names
            /*names = ['Batman', 'Joker', 'Bane'];
    //Додати до names елемент 'Catwoman', розмістивши його з індексом 1
            names.splice(1, 0, 'Catwoman');// splice(0, 0, 'Catwoman') означає: починаючи з індексу 0, не видаляти жодного елемента і додати 'Catwoman'
            console.log(names);*/
//------------------------------------------------------------------------------------------

// завдання 12. Маємо масив names
            /*const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
    //Видалити елементи 'Catwoman' і 'Joker' з масиву names:
            names.splice(1, 2 );// 1- з якого елемента починаємо, 2- скільки видаляємо
            console.log(names);*/
//------------------------------------------------------------------------------------------

// завдання 13. Маємо масив names:
            /*const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
    // Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names
            names.splice(1, 2, 'Alfred');// 1- з якого елемента починаємо, 2- скільки видаляємо, і на позицію першого прибраного елементу вставляється 'Alfred'
            console.log(names);*/
//------------------------------------------------------------------------------------------

// завдання 14. Маємо масив names:
            /*const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
    // Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву.
            if (!names.includes('Alfred')) {
                names.push('Alfred');
            }
            console.log(names); // ['Batman', 'Catwoman', 'Joker', 'Bane', 'Alfred']*/
//------------------------------------------------------------------------------------------

// завдання 15. Маємо масив names:
            /*const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
    // Перевірити, чи існує рядок 'Alfred' у масиві names, і якщо існує, видалити його з масиву.
            if (names.includes('Alfred')) {
                let index = names.indexOf('Alfred');
                names.splice(index, 1);
            }
            console.log(names);*/