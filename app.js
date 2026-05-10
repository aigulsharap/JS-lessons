const money = 100;
const canBuy = money >= 50;

if (canBuy) {
    console.log('Может купить наш курс');
} else if (money >= 5) {
    console.log('Может купить мини курс')
} else {
    console.log ('Недостаточно средств для покупки');
};
