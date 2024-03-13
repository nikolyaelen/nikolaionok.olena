// завдання 1 Чи мають рядки str1 та str2 однакову довжину. Перевірити на рівність (недбалу та строгу) рядки str1 та str2.
            /*let str1 = 'I\'m a string!';
            let str2 = "I'm a string!";
            console.log(str1.length); //13
            console.log(str2.length); //13*/
// довжина однакова, становить 13 символів тому що (\')- рахується за один символ
    // Недбале порівняння
            //console.log(str1 == str2); //  true
    // Строге порівняння
            //console.log(str1 === str2); // true,  значення, і типи однакові
//----------------------------------------------------------------------

//завдання 2. Повернути перший символ рядка string5. Виконайте завдання, використовуючи індекс та метод charAt.
            /*let string5 = 'Hello World';
            let first1 = string5[0]; // метод індекс
            console.log(first1);
            let firstChar = string5.charAt(0); // метод charAt.
            console.log(firstChar); // Виведе 'H'*/
//----------------------------------------------------------------------

// завдання 3. повернути символ J рядка str3:
            /*let str3 = "Hello Javascript";
            let newChar = str3.charAt(6);//метод charAt()
            console.log(newChar); // Виведе 'J'*/
//----------------------------------------------------------------------

//завдання 4. Використовуючи індекс, отримати доступ до останнього символу рядка двома способами
    //1 спосіб метод charAt
            /*let str3 = "Hello Javascript";
            let lastChar1 = str3.charAt(str3.length - 1);
            console.log(lastChar1); // Виведе 't'*/
    //2 спосіб метод індекс
            /*let lastChar2 = str3[str3.length - 1];
            console.log(lastChar2); // Виведе 't'*/
//----------------------------------------------------------------------

// завдання 5. Напишіть три варіанти функції lastChar, що повертає останній символ рядка
            //let str3 = "Hello Javascript";
    //1 за допомогою метода slice()
            /*function lastChar(str) {
                return str.slice(-1);
              }
              console.log(lastChar(str3));*/

    //2 за допомогою метода charAt()
            /*function lastChar(str) {
              return str.charAt(str.length - 1);
            }
            console.log(lastChar(str3));*/

    //3  індекс -1
            /*function lastChar(str) {
              return str[str.length - 1];
            }
            console.log(lastChar(str3));*/
//-----------------------------------------------------------------------

// завдання 6. Використовуючи метод concat, вивести на консоль: When candles are out, all cats are grey
            /*let a = 'When candles are out,';
            let b = 'all cats are grey.';
            let string1 =a.concat(' '+ b);
            console.log(string1);*/
//----------------------------------------------------------------------

// завдання 7. Використовуючи змінні a, b, fact, змінити значення fact та вивести його на консоль, щоб результат виглядав так: Fifteen is the same as 15
            /*let fact = "Fifteen is the same as"
            let a = 5;
            let b = 10;

            fact = fact.concat(' ' +(a + b));
            console.log(fact);*/
//----------------------------------------------------------------------

// завдання 8. Напишіть функцію getFullName, що повертає результат: "Tom Cat"
            /*let firstName = "Tom";
            let lastName = "Cat";

            function getFullName (nam1,nam2) {
                return ('"'+nam1+' '+nam2+'"');
            }
            console.log(getFullName(firstName,lastName));*/
//----------------------------------------------------------------------

// завдання 9. Напишіть функцію greeting, що використовує виклик функції getFullName та повертає такий результат: Hello, Tom Cat!
            /*let firstName = "Tom";
            let lastName = "Cat";
            function getFullName (nam1,nam2) {
                return ('"'+nam1+' '+nam2+'"');
            }
            function greeting (name3) {
              let namProm= name3.slice(1,8);
              return ('Hello,'+' '+namProm+'!');
            }
            console.log(greeting(getFullName(firstName,lastName)));*/
//----------------------------------------------------------------------

//завдання 10. Використовуючи функцію greeting, створити такий шаблон: <div><h1>Hello, Tom Cat!</h1></div>
            /*let firstName = "Tom";
            let lastName = "Cat";
            function getFullName (nam1,nam2) {
                return ('"'+nam1+' '+nam2+'"');
            }
            function greeting (name3) {
                let namProm= name3.slice(1,8);
                return ('Hello,'+' '+namProm+'!');
            }
            let zer = '<div><h1>';
            let zer1 = '</h1></div>';
            function boxRez(rez,rez1) {
                let box1 = greeting(getFullName(firstName, lastName));
                return console.log(rez + box1 + rez1);
            }
            boxRez(zer,zer1);*/
//----------------------------------------------------------------------

// завдання 11. Маємо наступний код:
            //let string1 = "  The name of our game  ";
    // Потрібно отримати такі результати:
    //1 - "The name of our game"
            /*let trimmedString = string1.trim();//trim() видаляє пробіли з початку та кінця рядка
            let result = `"${trimmedString}"`;*/

    //2 - "The name of our game  "
            /*let trimmedString = string1.trimStart(); //trimStart() для видалення пробілів на початку рядка
            let result = `"${trimmedString}"`;*/

    //3 - "  The name of our game"
            /*let trimmedString = string1.trimEnd();
            let result = `"${trimmedString}"`; // trimEnd() для видалення пробілу з правого кінця рядка
            console.log(result);*/
//----------------------------------------------------------------------
    // Маємо наступний код:
            //const phoneNumber = '\t  555-123\n ';
    // Потрібно отримати такі результат: => '555-123'
            /*const cleanedPhoneNumber = phoneNumber.trim();
            const result =`=> '${cleanedPhoneNumber}'`;*/

    // Потрібно отримати такі результат: => '555-123 \n'
            /*const result = `=> '${phoneNumber.trim()} /n'`;*/
//----------------------------------------------------------------------

// завдання 12. Маємо наступний код:
            //let sentence = 'Always look on the bright side of life';
    //Перевірити, чи містить рядок значення 'look up'
            /*if (sentence.match('look up')) {
                console.log("рядок містить значення 'look up'");
            } else {
                console.log("рядок не містить значення 'look up'");
            }*/
    // Перевірити, чи містить рядок значення 'look on'
            /*if (sentence.match('look on')) {
                console.log("рядок містить значення 'look on'");
            } else {
                console.log("рядок не містить значення 'look on'");
            }*/
    // Перевірити, чи містить рядок значення 'look on', починаючи з 8-ї позиції
            /*let subStr = sentence.substring(7); // 7 - це індекс- 8-а позиція в рядку
            if (subStr.includes('look on')) {
                console.log("рядок містить значення з 8 поз.'look on'");
            } else {
                console.log("рядок не містить значення з 8 поз.'look on'");
            }*/
//----------------------------------------------------------------------

// завдання 13. Маємо наступний код:
            //let sentence = 'Always look on the bright side of life';
    //Знайти індекс символу 'l'
            /*let index = sentence.indexOf('l');
            console.log("Iндекс символу 'l':", index); // індекс 1 */

    //Знайти індекс символу 'l', починаючи з 3-ї позиції
            /*let index = sentence.indexOf('l', 3);
            console.log("Індекс символу 'l' з 3 поз:", index);*/

    // Знайти індекс символу 'L'
            /*let index = sentence.indexOf('L');
            console.log("Iндекс символу 'L':", index); //Iндекс символу 'L': -1*/
//----------------------------------------------------------------------

// завдання 14. Маємо наступний код:
            //let sentence = 'Always look on the bright side of life';

    //Отримати підрядок 'look on the bright side of life'
            /*let subStr = sentence.match(/look on.*$/);
            console.log(subStr[0]); //  'look on the bright side of life'*/

    //Отримати підрядок 'Always'
            /*let substring2 = sentence.slice(0, 6); // 'Always'
            console.log(substring2);*/

    //Отримати підрядок 'look'
            /*let substring3 = sentence.slice(7, 11); // 'look'
            console.log(substring3);*/
//----------------------------------------------------------------------

// завдання 15. Створити регулярний вираз, який призначений для перевірки імені користувача, що може містити цифри,
    //      літери у нижньому регістрі та символи - і _. Довжину імені користувача встановити від 8 до 16 знаків.
            /*let usernameReg = /^[a-z0-9_-]{8,16}$/i;
            function checkUserName(username) {
                if (usernameReg.test(username)) {
                    alert(`Ім'я :'${username}' допустимо.`);
                } else {
                    alert(`Ім'я :'${username}' не допустимо.`);
                }
            }
            checkUserName("Olena_Nikola");*/
//----------------------------------------------------------------------

// завдання 16. Створити регулярний вираз, який призначений для перевірки email на коректність.
            /*let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            function checemailReg(useremail) {
                if (emailReg.test(useremail)) {
                    alert(`Адреса :'${useremail}' допустима.`);
                } else {
                    alert(`Адреса :'${useremail}' не допустима.`);
                }
            }
            checemailReg("12sdf34567@cjm.com");*/
//----------------------------------------------------------------------

// завдання 17. Маємо наступний код:
            //let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

    //Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substring
            /*function truncateText(text) {
                if (text.length <= 50) {
                    return text;
                } else {
                    return text.substring(0, 50) ;
                }
            }
            alert(truncateText(sentence));*/

    // Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substr
            /*function truncateText(text) {
                if (text.length <= 50) {
                    return text;
                } else {
                    return text.substr(0, 50) ;
                }
            }
            alert(truncateText(sentence));*/