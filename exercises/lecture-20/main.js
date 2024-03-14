// завдання 1. Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа. Надати значення цим властивостям.
            const person = {
                name: 'Igor',
                age: 35,
            };
    //Вивести значення властивостей об'єкту на консоль
            console.log(person.name);
            console.log(person.age);
//-------------------------------------------------------------------------

// завдання 2. Змінити тип властивості name з рядка на об'єкт, з ключами firstName та lastName.
    //Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль.
            const person = {
                name: {
                    firstName:'Igor',
                    lastName:'Petrenko',
                },
                age: 35,
            };
    // Вивести значення властивостей об'єкту на консоль.
            console.log(person.name.firstName);
            console.log(person.name.lastName);
            console.log(person.age);
//-------------------------------------------------------------------------

//завдання 3. Створити метод об'єкту bio(), що виводить на консоль ім'я, прізвище та вік person.
            const person = {
                name: {
                    firstName:'Igor',
                    lastName:'Petrenko',
                },
                age: 35,
                bio(){
                    console.log(person.name.firstName);
                    console.log(person.name.lastName);
                    console.log(person.age);
                }
            };
            person.bio();
//-------------------------------------------------------------------------

// завдання 4. Створити метод об'єкту introduceSelf, що виводить на консоль Hi! I'm firstName.
            const person = {
                name: {
                    firstName:'Igor',
                    lastName:'Petrenko',
                },
                age: 35,
                introduceSelf() {
                    console.log('Hi! I\'m '+this.name.firstName);
                }
            };
            person.introduceSelf();
//-------------------------------------------------------------------------

// завдання 5. Створити функцію-шаблон createPerson, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf.
            function createPerson(name) {
                return {
                    name: name,
                    introduceSelf: function(){
                        console.log(`Hi! I'm ${this.name}`)}

                };
            }
    // Створити за допомогою createPerson 2 екземпляри об'єкта.
            const person1 = createPerson("Anna");
            person1.introduceSelf();
            const person2 = createPerson("Jon");
            person2.introduceSelf();
//-------------------------------------------------------------------------

// завдання 6. Створити функцію-конструктор Person, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf.
            function Person(name) {
                this.name = name;
                this.introduceSelf = function() {
                    console.log(`Hi! I'm ${this.name}!`);
                };
            }
    //Створити за допомогою Person 2 екземпляри об'єкта mary та tom.
            const mary = new Person("Mary");
            mary.introduceSelf();
            const tom = new Person("Том");
            tom.introduceSelf();

    // визначити, чи містить об'єкт mary властивість під назвою prop.
            if ('prop' in mary) {
                console.log("Властивість 'prop' існує в об'єкті mary або його прототипі.");
            } else {
                console.log("Властивість 'prop' не існує в об'єкті mary або його прототипі.");
            };
//-------------------------------------------------------------------------

// завдання 7. Брудний мартіні – ідеальний коктейль для любителів оливкового. Його можна приготувати на горілці чи джині за таким рецептом.
    /*ingredients:
    6 fluid ounces gin
    1 dash dry vermouth
    1 fluid ounce brine from olive jar
    4 stuffed green olives
fluid ounces - одиниця ваги avoirdupois - одна шістнадцята фунта (28.4131 грамів).
Офіційно dash становить приблизно 1 мл, 10 крапель або 1/5 чайної ложки.*/
// Створіть об'єкт DirtyMartini, що має 2 методи english_please() та excuse_my_french()
// При виклику методу excuse_my_french(), на консоль виводиться:
    /*ingrédients:
    170.4786 ml de gin
    1 trait de vermouth sec (0.0351951ml)
    28.4131 ml de saumure du pot d'olive
    4 olives vertes farcies
//При виклику методу english_please(), на консоль виводиться:
    ingredients:
    6 fluid ounces gin
    1 dash dry vermouth (0.0351951ml)
    1 fluid ounce brine from olive jar
    4 stuffed green olives */

            const DirtyMartini = {
                english_please: function() {
                    console.log(`ingredients:
                    6 fluid ounces gin
                    1 dash dry vermouth (0.0351951ml) 
                    1 fluid ounce brine from olive jar
                    4 stuffed green olives`);
                },
                excuse_my_french: function() {
                    console.log(`ingrédients:
                    170.4786 ml de gin
                    1 trait de vermouth sec (0.0351951ml) 
                    28.4131 ml de saumure du pot d'olive
                    4 olives vertes farcies`);
                }
            };
    // Вызов метода english_please
            DirtyMartini.english_please();

    // Вызов метода excuse_my_french
            DirtyMartini.excuse_my_french();




