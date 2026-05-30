const score = [5, 10, 0, 15];

for (const [i, el] of score.entries()) {
    console.log(`Раунд ${i + 1}: ${el}`)
}

score.forEach((scoreEl, i, arr) => {
    console.log(`Раунд ${i + 1}: ${scoreEl}`)
})

const iterator = (el) => {
    console.log(`Раунд: ${el}`)
}

score.forEach(iterator)

const transactionInUSD = [10, -7, 50, -10, 100];

const transacrionInRUB = [];
for (const transaction of transactionInUSD) {
    transacrionInRUB.push(transaction * 60);
}

console.log(transacrionInRUB)

const transacrionInRUB2 = transactionInUSD.map((transaction, i) => transaction * 60)

console.log(transacrionInRUB2)

const operations = [100, -20, 7, -20, 50];
const positiveOperations = [];
for (const operation of operations) {
    if (operation > 0) {
        positiveOperations.push(operation)
    }
}
console.log(positiveOperations)

const positiveOperations2 = operations.filter(operation => {
    return operation > 0;
})
console.log(positiveOperations2)

const positiveRUBOperations = operations
    .filter(operation => {
        return operation > 0
    })
    .map(operation => operation * 60);
console.log(positiveRUBOperations)

const prices = [[100, 200], [120, 100] , [200, 350]];

const result = prices
    .map(product => product[1] - product[0])
    .filter(price => price > 0)

console.log(result)

const finalBalance = operations.reduce((acc, operation, i) => {
    console.log(`Итерация: ${i}, acc: ${acc}, operation: ${operation}`)
    return acc += operation;
})

console.log(finalBalance)

const minElement = operations.reduce((acc, operation) => {
    if (operation > acc) {
        return acc;
    } else {
        return operation;
    }
}, 0)

console.log(minElement)

const arr = [1, 4, 4, 10, 20];

const avg = arr.reduce((acc, el, i) => {
    if (i < arr.length - 1) {
        return acc += el;
    } else {
        return (acc + el) / arr.length;
    }
}, 0)

console.log(avg)

let elGT5;
for(const el of arr) {
    if(el > 5) {
        elGT5 = el;
        break;
    }
}
console.log(elGT5)

elGT6 = arr.find(el => el > 6);
console.log(elGT6)

elGT6Index = arr.findIndex(el => el > 6);
console.log(elGT6Index)

function someFilter(arr, number) {
    return arr.filter(el => el === number).length > 0;
}

console.log(someFilter(arr, 4))

function someFind(arr, number) {
    return arr.find(el => el === number) !== undefined;
}

console.log(someFind(arr, 4))

function someFor(arr, number) {
    for (const el of arr) {
        if (el === number) {
            return true;
        }   
    }

    return false;
}

console.log(someFor(arr, 4));

console.log(arr.some(el => el ===4));

const prices2 = [[2, 4], [3, 4], [10, [20, 50]]]
const res = prices2.flat(2);
const res2 = prices2.flatMap(el => el.concat([1]));
console.log(res);
console.log(res2);

const users = ['Вася', 'Маша', 'Катя', 'Аня'];
console.log(users);
users.sort();
console.log(users);

const operations2  = [100, -300, -100, 50, 50, 480];
operations2.sort();
console.log(operations2);

operations2.sort((a, b) => a - b);

console.log(operations2)

console.log(new Array(1, 2, 3, 4, 5))
const arr2 = new Array(5);
console.log(arr2);
arr2.fill(1);
console.log(arr2);

const arr3 = Array.from({ length: 5 }, (cur, i) => i + 1);
console.log(arr3);
