for(let i =1; i < 10; i++) {
    console.log(`Наш баланс ${i}$`)
}

const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];

for(let i = 0; i < tasks.length; i++) {
    if(tasks[i] === 'Задача 2') {
        continue;
    }
    console.log(tasks[i]);
}

for(let i = 0; i < tasks.length; i++) {
    if(tasks[i] === 'Задача 2') {
        break;
    }
    console.log(tasks[i]);
}

const arr = ["!", "js", "люблю", "я"];
const resultArray = [];


for(let i = arr.length - 1; i >= 0; i--) {
    resultArray.push(arr[i]);
}

console.log(resultArray.join(' '))

console.log(arr.reverse().join(' '))

for (let i = 1; i < 5; i++) {
    console.log(`Цикл 1 - ${i}`)
    for (let j = 1; j < 5; j++) {
        console.log(`Цикл 2 - ${j}`)
    }
}

const tasks2 = [[1, 'Задача 1'], [2, "Задача 2"]]

for (let i = 0; i < tasks2.length; i++) {
    for (let j = 0; j < tasks2[i].length; j++) {
        console.log(tasks2[i][j])
    }
}

for (let i = 1; i < 5; i++) {
    console.log(`Вывод - ${i}`);
}

let i = 1;
while (i < 5) {
    console.log(`Вывод - ${i}`);
    i++;
}

const arr2 = [1, 4 , 8, 7];

for (let i = 0; i < arr2.length; i++) {
    if(arr2[i] > 5) {
        break;
    }
    console.log(arr2[i]);
}

let k = 0;
while(arr2[k] <= 5 && k < arr2.length) {
    console.log(arr2[k]);
    k++;
}

let l = 0;
do {
    console.log(l);
    l++;
} while (l < 0)

for (let element of arr2) {
    console.log(element);
}

for (let index in arr2) {
    console.log(arr2[index]);
}

const operations = [1000, -700, 300, -500, 10000];
let startingBalance = 100;

function getBalance(arrayOfOperations, initialBalance) {
    let balance = initialBalance;
    for (const element of arrayOfOperations) {
        balance += element;
    }
    return balance;
}

console.log(getBalance(operations, startingBalance))

function checkOperations(arrayOfOperations, initialBalance) {
    let balance = initialBalance;
    let isOk = true;

    for (const element of arrayOfOperations) {
        balance += element;
        if (balance < 0) {
            isOk = false;
            break;
        }
    }
    return isOk;
}

console.log(checkOperations(operations, startingBalance))

function averageOperations(arrayOfOperations) {
    let positiveCount = 0;
    let positiveSum = 0;
    let negativeCount = 0;
    let negativeSum = 0;

    for (const element of arrayOfOperations) {
        if (element > 0) {
            positiveCount++;
            positiveSum += element;
        } 
        if (element < 0) {
            negativeCount ++;
            negativeSum += element;
        }
    }
    return [positiveSum / positiveCount, negativeSum / negativeCount]
}

console.log(averageOperations(operations))