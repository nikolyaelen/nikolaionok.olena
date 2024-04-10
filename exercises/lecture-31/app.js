const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
  <h3>${item.title}</h3>
  <div>${item.body}</div>
  <p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

const xhrPromise = (method, url) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send();

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };

        xhr.onerror = () => {
            reject('Something went wrong!');
        };
    });

    return promise;
};
xhrPromise("GET",url )
    .then(response => {
        const posts = JSON.parse(response);
        let result = '';
        posts.forEach(item => {
            result += template(item);
        });
        document.getElementById("blog").innerHTML = result;

        // Створюємо масив  для запитів імен користувачів відносно масива  posts
        const userPromises = posts.map(post => {
            return xhrPromise("GET", `https://jsonplaceholder.typicode.com/users/${post.userId}`);
        });

        return Promise.all(userPromises);// дозволяє кільком асинхронним операціям дочекатися завершення всіх з них, перш ніж продовжити виконання наступного коду.
    })
    .then(userResponses => { // userResponses - масив відповідей від сервера про користувачів.
        userResponses.forEach(userResponse => {
            const user = JSON.parse(userResponse);//змінна user містить об'єкт із даними користувача.
            const authorElements = document.querySelectorAll(`.author[data-id="${user.id}"]`);//масив - всі елементи на сторінці, які репрезентують авторів відповідних постів.
            authorElements.forEach(authorElement => {// перебор усіх знайдених елементів із класом "author".
                authorElement.textContent = user.name; // Для кожного знайденого елемента встановлюємо текстовий вміст на ім'я користувача
            });
        });
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
