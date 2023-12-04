class LinkedList {
    constructor(value, previous) {
        this.value = value;
        this.previous = previous;
    }
}

class Stack {
    constructor() {
        this.last = null;
    }
    push(value) {
        this.last = new LinkedList(value, this.last);
    }
    pop() {
        let res;
        if (this.last !== null) {
            res = this.last.value;
            this.last = this.last.previous;
        }
        else res = "Стек пуст"
        return res;
    }
    getLast() {
        let res;
        if (this.last !== null) {
            res = this.last.value;
        }
        else res = "стек пуст";
        return console.log("Последний элемент: " + res);
    }
    output() {
        let res = this.last;
        while (res) {
            console.log(res.value);
            res = res.previous;
        }
    }
    getLength() {
        let length = 0, res = this.last;
        while (res) {
            length++;
            res = res.previous;
        }
        return console.log("Длина стека: " + length);
    }
}

// let stack = new Stack();
// stack.push(2);
// stack.push(6);
// stack.push(8);
// stack.push(1);
// stack.push(3);
//
// stack.getLast();
// stack.output();
// stack.getLength();

class DoublyLinkedList {
    constructor(value, previous, next) {
        this.value = value;
        this.previous = previous;
        this.next = next;
    }
}

class DoublyList {
    constructor() {
        this.first = null;
        this.last = null;
    }
    getIndex(index) {
        if(!this.first) {
            return console.log("Список пуст");
        }
        let cur = this.first;
        for(let i = 1; cur; i++) {
            if(i === index) {
                if (cur.value) return console.log(`Элемент списка с индексом ${index}: ${cur.value}`);
            }
            cur = cur.next;
        }
        return console.log("Выход за границы списка");
    }
    add(value) {
        let node = new DoublyLinkedList(value);
        if(this.last) {
            this.last.next = node; //соединение нового узла с концом списка, если он существует
        }
        node.previous = this.last; //т.к. новый узел последний, указываем в нём ссылку на предыдущий элемент
        this.last = node; //назначаем конец нового узла
        if(!this.first) {
            this.first = node; //создаём начало у списка, если его не было
        }
        return this;
    }
    addIndex(index, value) {
        if(!this.first) {
            return console.log("Список пуст");
        }
        let cur = this.first;
        for(let i = 1; cur; i++) {
            if(i === index) {
                if (cur.value) {
                    let node = new DoublyLinkedList(value, cur.previous, cur.next);
                    node.previous = cur;
                    cur.next = node;
                    return this;
                }
            }
            cur = cur.next;
        }
        return console.log("Выход за границы списка");
    }
    editIndex(index, newValue) {
        if(!this.first) {
            return console.log("Список пуст");
        }
        let cur = this.first;
        for(let i = 1; cur; i++) {
            if(i === index) {
                if (cur.value)
                {
                    let currentValue = cur.value;
                    cur.value = newValue;
                    return console.log(`Элемент списка с индексом ${index} был ${currentValue}, стал ${cur.value}`);
                }
            }
            cur = cur.next;
        }
        return console.log("Выход за границы списка");
    }
    deleteIndex(index) {
        if(!this.first) {
            return console.log("Список пуст");
        }
        let cur = this.first;
        for(let i = 1; cur; i++) {
            if(i === index) {
                if (cur.value)
                {
                    cur.next = cur.next.next;
                    return this;
                }
            }
            cur = cur.next;
        }
        return console.log("Выход за границы списка");
    }
    toArray() {
        let cur = this.first, res = [];
        while(cur) {
            res.push(cur);
            cur = cur.next;
        }
        return console.log(res);
    }
}

// let list1 = new DoublyList();
// list1.add(5);
// list1.add(8);
// list1.add(1);
// list1.addIndex(1, 9);
//
// list1.toArray();
// list1.deleteIndex(2);
// list1.toArray();
//
// let list2 = new DoublyList();
// list2.add(1);
// list2.add(2);
// list2.add(3);
// list2.editIndex(2, 6);
//
// list2.toArray();
// list2.getIndex(3);

function quickSort(arr) {
    if(arr.length === 1) {
        return arr;
    } else {
        sortArray(arr, 0, arr.length - 1);
        return arr;
    }
}

function sortArray(arr, left, right) {
    let main = arr[Math.floor((left + right) / 2)],
        i = left, j = right;
    while(i <= j) {
        while (arr[i] < main) { i++; }
        while (arr[j] > main) { j--; }
        if(i <= j) {
            let cur = arr[i];
            arr[i] = arr[j];
            arr[j] = cur;
            i++;
            j--;
        }
    }
    if(i < right) { sortArray(arr, i, right); }
    if(j > left) { sortArray(arr, left, j); }
}

// let arr = [6, 3, 2, 9, 7, 4];
// console.log(arr);
// console.log(quickSort(arr));
