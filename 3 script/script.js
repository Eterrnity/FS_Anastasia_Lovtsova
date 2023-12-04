function sort (arr, route) {
    if (route.toLowerCase() === "asc") {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
    } else if (route.toLowerCase() === "desc") {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j] < arr[j + 1]) {
                    let tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
    }
    return arr;
}

function sumOfSquares (tmp) {
    let totalSum = tmp.reduce((sum, current, index) => sum += index % 2 ? 0 : Math.pow(current, 2), 0);
    // for (let i = 1; i < arr.length; i++) {
    //     (i % 2 != 0) ? sum += Math.pow(arr[i - 1], 2) : 0;
    //     // if (i % 2 != 0) {
    //     //     sum += Math.pow(arr[i - 1], 2);
    //     // }
    // }
    return totalSum;
}

export default function script3() {
    let route = "", arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.round(Math.random() * 10);
    }
    let tmp = arr.slice();

    while (route == "") {
        route = prompt("Введите направление сортировки (asc или desc)");
    }
    sort(arr, route);

    let arrSort = arr.slice();
    if (route === "asc" || route === "desc") {
        alert("Исходный массив: [" + tmp + "]" + "\nМассив после " + route + " сортировки: [" + arrSort +"]"
            + "\nСумма квадратов нечётных элементов: " + sumOfSquares(tmp));
    } else {
        alert("Вы ввели некорректное направление сортировки");
    }
}