export default function script6() {
    const hiddenNum = Math.round(Math.random() * 1000);
    let count = 0;
    while (true) {
        let str = prompt("Введите число");
        let userNum = Number.parseInt(str, 10);

        if(!userNum) {
            alert("Введите число!");
            continue;
        }

        count++;
        if (userNum < hiddenNum) {
            alert("Искомое число больше!");
        } else if (userNum > hiddenNum) {
            alert("Искомое число меньше!");
        } else {
            let res = confirm("Вы угадали! Количество попыток: " + count + "\nНачать заново?");
            if (res == true) {
                game();
            }
            break;
        }
    }
}