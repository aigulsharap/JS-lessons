const money = 100;
const canBuy = money >= 50;

if (canBuy) {
    console.log('Может купить наш курс');
} else if (money >= 5) {
    console.log('Может купить мини курс')
} else {
    console.log ('Недостаточно средств для покупки');
};


// Задача: Рассчитать, сможет ли Вася купить дом стоимостью 13 500 долларов через 2 года, положив на счет 12 000 долларов под 7% годовых с ежемесячной капитализацией процентов.
// Формула сложных процентов: Итоговая сумма = Вклад * (1 + ставка/12) ^ срок(в месяцах).

const depositeAmount = 12000;
const housePrice = 13500;
const depositYears = 2;
const depositMonths = depositYears * 12;
const rate = 0.07;
const amountOfSavings = depositeAmount * (1 + rate / 12) ** depositMonths;
const balanceOfMoney = amountOfSavings - housePrice;

if (amountOfSavings >= housePrice) {
    console.log(`Вася сможет купить дом стоимостью ${housePrice}$ через ${depositYears} лет, положив под ${rate * 100}% годовых с ежемесячной капитализацией процентов. Остаток денег после покупки дома составит ${balanceOfMoney}$`)
} else {
    console.log(`Вася не сможет купить дом стоимостью ${housePrice}$ через ${depositYears} лет, положив под ${rate * 100}% годовых с ежемесячной капитализацией процентов`)
}

const secretNumber = 7;

if (Number(secretNumber) === 7) {
    console.log('Угадал')
}

const q = Number(prompt('Введите число'));

if (q === 2) {
    console.log('Угадал')
}