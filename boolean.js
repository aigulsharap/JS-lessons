let balanceRub = 1500
let balaceBonus = 0;
let isBanned = true;
let firstGame = true;
let inStock = true;

const canBuy = (balanceRub > 1000 || balaceBonus > 100) && !isBanned && firstGame && inStock;

console.log(`Могу купить игру: ${canBuy ? 'Да' : 'Нет'}`)