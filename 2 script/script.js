export default function script2() {
    let name = prompt("Введите имя");
    while (name === "") {
        name = prompt("Введите корректное имя");
    }
    name = name[0].toUpperCase() + name.slice(1);

    let age = prompt("Введите возраст");
    while (age === "" || age <= 0 || age > 123 || !Number.isInteger(Number(age))) {
        age = prompt("Введите корректный возраст");
    }

    alert("Привет, " + name + ", тебе уже " + age + " лет!");
}