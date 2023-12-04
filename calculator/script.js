let getValue = function(id) {
    let num = document.getElementById(id).value;
    return parseFloat(num);
}

let operationsHistory = [];

let getString = function (arr) {
    result = "";
    for (let i in arr) {
        if(arr[i].number1 && arr[i].number2) {
            result += arr[i].number1.toString() + arr[i].symbol + arr[i].number2.toString() +
                "=" + arr[i].result.toString() + ", ";
        } else if (arr[i].number1 && !isNaN(arr[i].number2)) {
            result += arr[i].symbol + arr[i].number1.toString() +
                "=" + arr[i].result.toString() + ", ";
        } else if(arr[i].number2 && !isNaN(arr[i].number1)) {
            result += arr[i].symbol + arr[i].number2.toString() +
                "=" + arr[i].result.toString() + ", ";
        }
    }
    return result;
}

function plus() {
    num1 = getValue("num1");
    num2 = getValue("num2");
    if (num1 && num2 || (num1 == 0 || num2 == 0)) {
        document.getElementById('output').innerHTML = num1 + num2;
    } else document.getElementById('output').innerHTML = "Введите корректные числа";

    let operation = {
        number1: num1,
        symbol: "+",
        number2: num2,
        result: num1 + num2
    }

    operationsHistory.push(operation);
    document.getElementById('operations-history').innerHTML = getString(operationsHistory);
}

function minus() {
    num1 = getValue("num1");
    num2 = getValue("num2");

    if (num1 && num2 || (num1 == 0 || num2 == 0)) {
        document.getElementById('output').innerHTML = num1 - num2;
    } else document.getElementById('output').innerHTML = "Введите корректные числа";

    let operation = {
        number1: num1,
        symbol: "-",
        number2: num2,
        result: num1 - num2
    }

    operationsHistory.push(operation);
    document.getElementById('operations-history').innerHTML = getString(operationsHistory);
}

function multiply(num1) {
    let x = num1;
    return function(num2) {
        return x * num2;
    };
}

function multiplication() {
    num1 = getValue("num1");
    num2 = getValue("num2");

    if (num1 && num2 || (num1 == 0 || num2 == 0)) {
        res = multiply(num1);
        document.getElementById('output').innerHTML = res(num2);
    } else document.getElementById('output').innerHTML = "Введите корректные числа";

    let operation = {
        number1: num1,
        symbol: "*",
        number2: num2,
        result: res(num2)
    }

    operationsHistory.push(operation);
    document.getElementById('operations-history').innerHTML = getString(operationsHistory);
}

function division() {
    num1 = getValue("num1");
    num2 = getValue("num2");

    if (num1 && num2 || (num1 == 0 && num2 != 0)) {
        document.getElementById('output').innerHTML = num1 / num2;
    } else document.getElementById('output').innerHTML = "Введите корректные числа";

    let operation = {
        number1: num1,
        symbol: "/",
        number2: num2,
        result: num1 / num2
    }

    operationsHistory.push(operation);
    document.getElementById('operations-history').innerHTML = getString(operationsHistory);
}

function exponentiation() {
    num1 = getValue("num1");
    num2 = getValue("num2");

    if (num1 && num2 || (num1 == 0 || num2 == 0)) {
        res = Math.pow(num1, num2);
        document.getElementById('output').innerHTML = res;
    } else document.getElementById('output').innerHTML = "Введите корректные числа";

    let operation = {
        number1: num1,
        symbol: "^",
        number2: num2,
        result: res
    }

    operationsHistory.push(operation);
    document.getElementById('operations-history').innerHTML = getString(operationsHistory);
}

function squareRoot() {
    num1 = getValue("num1");
    num2 = getValue("num2");

    if (num1 && num1 >= 0) {
        res = Math.sqrt(num1);
        document.getElementById('output').innerHTML = res;
        operation = {
            number1: num1,
            symbol: "√",
            result: res
        }

        operationsHistory.push(operation);
        document.getElementById('operations-history').innerHTML = getString(operationsHistory);

    } else if (num2 && num2 >= 0) {
        res = Math.sqrt(num2);
        document.getElementById('output').innerHTML = res;
        operation = {
            symbol: "√",
            number2: num2,
            result: res
        }

        operationsHistory.push(operation);
        document.getElementById('operations-history').innerHTML = getString(operationsHistory);

    } else  document.getElementById('output').innerHTML = "Введите корректное число в одно из окон";
}

let removal = () => {
    document.getElementById('num1').value = "",
    document.getElementById('num2').value = "",
    document.getElementById('output').innerHTML = "",
    document.getElementById('operations-history').innerHTML = "",
    operationsHistory = [];
}

function cancellation() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    operationsHistory.pop();

    let last = Object.values(operationsHistory)[Object.values(operationsHistory).length - 1]; //последний объект {}
    document.getElementById('output').innerHTML = JSON.stringify(
        Object.values(last)[Object.values(last).length - 1]); //последний элемент объекта - result
    document.getElementById('operations-history').innerHTML = getString(operationsHistory);
}

