let registerForm = document.getElementById("registerForm");
let openRegisterForm = document.getElementById("openRegisterForm");
let closeRegisterForm = document.getElementsByClassName("btn-close")[0];

openRegisterForm.onclick = function () {
    registerForm.style.display = "block";
    firstName.value = localStorage.getItem("firstName");
    surname.value = localStorage.getItem("surname");
    email.value = localStorage.getItem("email");
    phone.value = localStorage.getItem("phone");
    message.value = localStorage.getItem("message");
};

closeRegisterForm.onclick = function () {
    registerForm.style.display = "none";
};

let userInfo = [], usersTable = [], arrayUsers = [], stringUsers;

sendRegisterForm.onclick = function () {
    let errorInput = [];
    let user = {
        firstName: document.getElementById("firstName").value,
        surname: document.getElementById("surname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    localStorage.setItem("firstName", firstName.value);
    localStorage.setItem("surname", surname.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("message", message.value);

    if(!/^[А-ЯЁA-Z][а-яёa-z]+/.test(user.firstName) || user.firstName.length > 10) {
        errorInput.push("name");
    }

    if(!/^[А-ЯЁ][а-яё]+/.test(user.surname) || user.surname.length > 20) {
        errorInput.push("surname");
    }

    if(!/^[A-Za-z]+[\w.]+@[a-z]{4,6}\.[a-z]{2,3}/.test(user.email)) {
        errorInput.push("e-mail");
    }

    if(!/^\+7\d{10}|^\s*$/.test(user.phone)) {
        errorInput.push("phone");
    }

    if(user.message === "") {
        errorInput.push("message");
    }

    if (errorInput.length !== 0) {
        alert("Поля " + errorInput + " заполнены не верно, пожалуйста, исправьте");
    } else {
        userInfo.push(user);
        setCookie();

        stringUsers = getCookie();

        console.log(stringUsers);
        console.log(arrayUsers);
        console.log(userInfo);

        if (arrayUsers.indexOf(stringUsers) > -1) {
            alert(`${ userInfo[userInfo.length-1].firstName } ${ userInfo[userInfo.length-1].surname }, ваше обращение обрабатывается!`);
        } else {
            arrayUsers = arrUsers();
            usersTable.push(user);
            document.getElementById('table-area').innerText = "";
            createTable();
            alert(`${ userInfo[userInfo.length-1].firstName } ${ userInfo[userInfo.length-1].surname }, спасибо за обращение!`);
        }
    }
};

function setCookie() {
    for(let i = 0; i < userInfo.length; i++) {
        document.cookie = "user" + i + "=" + encodeURIComponent(userInfo[i].firstName) +
        " " + encodeURIComponent(userInfo[i].surname);
    }
}

function getCookie() {
    let users = document.cookie.split("; ");
    for(let i = 0; i < users.length; i++) {
        users[i] = users[i].substring(6, );
    }
    return decodeURIComponent(users[users.length-1]);
}

function arrUsers() {
    let arrUsers = [];
    for (let i = 0; i < userInfo.length; i++) {
        arrUsers[i] = userInfo[i].firstName.toString() + " " + userInfo[i].surname.toString();
    }
    return arrUsers;
}

let tableForm = document.getElementById("tableForm");
let openTableForm = document.getElementById("openTableForm");
let closeTableForm = document.getElementsByClassName("btn-close")[1];

openTableForm.onclick = function () {
    tableForm.style.display = "block";

    let tds = document.querySelectorAll('td');
    for (let i = 0; i < tds.length; i++) {
        tds[i].addEventListener('click', function () {
            this.setAttribute('contenteditable', true);
        });
    }
};

let deleteRow = document.getElementById('deleteRow');
deleteRow.onclick = function () {
    let tr = document.querySelectorAll('tr');
    tr[tr.length-1].remove();
};

closeTableForm.onclick = function () {
    tableForm.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == tableForm) {
        tableForm.style.display = "none";
    }
}

function createTable() {
    let tablearea = document.getElementById('table-area'),
        table = document.createElement('table');

    let tr = document.createElement('tr');

    let firstName = document.createElement('th');
    let surname = document.createElement('th');
    let email = document.createElement('th');
    let phone = document.createElement('th');

    let th1 = document.createTextNode('Name');
    let th2 = document.createTextNode('Surname');
    let th3 = document.createTextNode('E-mail');
    let th4 = document.createTextNode('Phone');

    firstName.appendChild(th1);
    surname.appendChild(th2);
    email.appendChild(th3);
    phone.appendChild(th4);

    tr.appendChild(firstName);
    tr.appendChild(surname);
    tr.appendChild(email);
    tr.appendChild(phone);

    table.appendChild(tr);

    for (let i = 0; i < usersTable.length; i++) {
        let tr2 = document.createElement('tr');

        let firstName = document.createElement('td');
        let surname = document.createElement('td');
        let email = document.createElement('td');
        let phone = document.createElement('td');

        let text1 = document.createTextNode(`${usersTable[i].firstName.toString()}`);
        let text2 = document.createTextNode(`${usersTable[i].surname.toString()}`);
        let text3 = document.createTextNode(`${usersTable[i].email.toString()}`);
        let text4 = document.createTextNode(`${usersTable[i].phone.toString()}`);

        firstName.appendChild(text1);
        surname.appendChild(text2);
        email.appendChild(text3);
        phone.appendChild(text4);

        tr2.appendChild(firstName);
        tr2.appendChild(surname);
        tr2.appendChild(email);
        tr2.appendChild(phone);

        table.appendChild(tr2);
    }
    tablearea.appendChild(table);
}


