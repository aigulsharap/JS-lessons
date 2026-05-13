function logName(name, surname) {
    console.log(`Моё имя ${name} ${surname}`);
}

logName('Айгуль', 'Шарапова');

function countDepositSum(depositInUSD, month, rate) {
    return depositInUSD * (1 + rate / 12) ** month;
}

console.log(countDepositSum(10000, 13, 0.1))

function powerOfTwo(num) {
    return num * num;
}

const powt = function (num) {
    return num * num;
}

console.log(powerOfTwo(5));
console.log(powt(6))

const poft = num => num * num;

console.log(poft(7))

const powoft = num => {
    console.log(num);
    return num * num;
}

powoft(8)
console.log(powoft(8))

function toPower(num, power = 2) {
    const res = num ** power;
    return res;
}

console.log(toPower(2,3))
console.log(toPower(2))

const toPowerArrow = (num, power) => num ** power;

console.log(toPowerArrow(2,3))

function canAccessWebsite(age) {
    if (age < 18) {
        return false;
    } else {
        return true;
    }
}

console.log(canAccessWebsite(18))

const canAccessWebsite2 = age => age < 18 ? false : true;

console.log(canAccessWebsite2(18))

// Функции в функциях

const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateW(present) {
    return present * KG_IN_USD;
}

function calculateKm(present) {
    return present * KM_IN_USD;
}

function getExchangePrice(presen1, present2, distance) {
    const price1 = calculateW(presen1);
    const price2 = calculateW(present2);
    const distancePrice = calculateKm(distance);
    return price1 + price2 + distancePrice;
}

console.log(getExchangePrice(1,2,10))

// Нужно проверить может ли пользователь купить новый MacBook за 2000$? 
// Он может брать не только свои деньги, но и взять кредит. 
// Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 100$ если ему просто больше 24-х лет и 0 в ином случае. 
// Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false.

const hasJob = true;
const haveMoney = 50000;
const age = 26;
const macBookPrice = 2000;

// function credit(age, hasJob) {
//     if (age > 24 && hasJob) {
//         return 500;
//     } else if (age > 24 && !hasJob) {
//         return 100;
//     } else {
//         return 0;
//     }
// }

const credit = (age, hasJob = false) => age > 24 && hasJob ? 500 : age > 24 && !hasJob ? 100 : 0;

function canBuyMacBook(haveMoney, age, macBookPrice, hasJob = false) {
    const creditSumm = credit(age, hasJob)
    const canBuyMacBook = (haveMoney + creditSumm) > macBookPrice;
    console.log(canBuyMacBook);
}

canBuyMacBook(2000, 26, 1000, false)