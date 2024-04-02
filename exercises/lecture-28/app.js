// завдання: Написати JavaScript-код для обробки надсилання форми та виконання перевірки на стороні клієнта.
document.addEventListener("DOMContentLoaded", function() { // код виконується після повного завантаження DOM-дерева
    let form = document.getElementById("registrationForm"); // отримуємо форму за її ідентифікатором

// завдання: Перевірка форми: потрібно отримати значення імені користувача, електронної пошти та пароля.
        // додаємо обробник події відправлення форми
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // запобігаємо надсилання форми за замовчуванням

        // отримуємо значення введених даних із полів форми
        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let errorMessages = document.getElementById("errorMessages");

        // очищаємо повідомлення про помилки перед новою перевіркою
        errorMessages.innerHTML = "";

        // завдання: Виконати базову перевірку:
                        // ім’я користувача не може бути пустим
        if (username.trim() === "") {
            displayErrorMessage("Username is required.");
            return;
        }

                        // електронна адреса має бути у правильному форматі
        if (email.trim() === "") {
            displayErrorMessage("Email is required."); // перевіряємо, що поле "Email" не порожнє
            return;
        }
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // перевіряємо, що поле "Email" заповнене в правильному форматі
        if (!emailPattern.test(email)) {
            displayErrorMessage("Invalid email format.");
            return;
        }

                        // пароль має містити принаймні 8 символів
        if (password.trim() === "") {
            displayErrorMessage("Password is required."); // перевіряємо, що поле "Password" не порожнє
            return;
        }
        if (password.trim().length < 8) {
            displayErrorMessage("Password must be at least 8 characters long."); // перевірка паролю на кількість символів
            return;
        }

                        // перевіряємо, що пароль містить мінімум одну заголовну літеру, одну малу літеру, одну цифру та один спеціальний символ
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]*$/;
        if (!passwordPattern.test(password)) {
            displayErrorMessage("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
            return;
        }

        // якщо всі перевірки пройшли успішно, можна надіслати форму, показуємо повідомлення про успішну реєстрацію
        alert("Registration successful!");

    // завдання: Скидання форми: після успішної реєстрації потрібно скинути значення полів форми.
        form.reset();
    });

// завдання: Обробка помилок: якщо будь-яка перевірка не вдасться, потрібно показати відповідне повідомлення про помилку.
        // Повідомлення про помилки відображаються в розділі errorMessages.
   function displayErrorMessage(message) {
        let errorMessage = document.createElement("div");
        errorMessage.textContent = message;
        errorMessages.appendChild(errorMessage);
    }
});









