

class AuthException extends Error {
    constructor(code, message) {

        this.message;
    }

    toString() {
        return this.message;
    }
}

let isAuth = (auth)  => auth ?? false;


let dialogBoxId=document.getElementById("dialogBox");



function showDialog(e){
    dialogBoxId.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            e.preventDefault();
        }
    });

    dialogBoxId.showModal();
}

function closeDialog(){
    dialogBoxId.close();
}

// завдання: Створіть змінну checkAuth, яка дорівнює результату пошуку селектора з класом check-auth у файлі index.html.
let checkAuth = document.querySelector('.check-auth');

// завдання: За допомогою addEventListener, виконайте обробку події click на змінній checkAuth.
            // Функція зворотного зв'язку обробки цієї події повинна запускати блок try { } catch(e) {}.
checkAuth.addEventListener('click', function() {
    // завдання: У блоці try { } потрібно перевіряти результат, що повертає функція isAuth().
            // Якщо результат повернення дорівнює false, за допомогою оператора throw викинути виняток AuthException('FORBIDDEN', 'You don't have access to this page').
    try {
        if (!isAuth()) {
            throw new AuthException('FORBIDDEN', "You don't have access to this page");
        } else {
            window.open('success.html', '_self');
        }
        // завдання: У блоці catch() перехопити цей виняток та передати сформоване повідомлення про помилку у діалог dialogBoxId,
        // відобразивши його у параграфі з класом ="message".
    } catch (e) {
        console.error('An error occurred:', e);
        const messageParagraph = dialogBoxId.querySelector('.message');
        if (messageParagraph) {
            messageParagraph.textContent = e.message;
        }
        showDialog();
    }
});



