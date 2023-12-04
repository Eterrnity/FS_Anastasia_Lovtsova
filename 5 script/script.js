// let time1 = performance.now();
//
// tmp = str.split("").reverse().join("");
// if (str.toLowerCase() == tmp.toLowerCase()) {
//     time1 = performance.now() - time1;
//     alert(str + " - палиндром!" + "\nВремя выполнения программы: " + time1);
// } else {
//     time1 = performance.now() - time1;
//     alert (str + " - не палиндром!" + "\nВремя выполнения программы: " + time1);
// }

export default function script5() {
    let str = prompt("Введите слово для проверки на палиндром");
    while (str == "") {
        str = prompt("Введите корректное слово");
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() == str[str.length - 1 - i].toLowerCase()) {
            // time2 = performance.now() - time2;
            return alert (str + " - палиндром!");
        } else {
            // time2 = performance.now() - time2;
            return alert (str + " - не палиндром!");
        }
    }
}
// let time2 = performance.now();
