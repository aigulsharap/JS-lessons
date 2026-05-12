const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

let message;

if (budget >= bmwX3Price) {
    message = 'BMW';
} else {
    message = 'велосипед';
}

console.log(`Я куплю ${message}`)

const str = budget > bmwX3Price ? 'BMW' : 'велосипед';
console.log(`Я куплю ${str}`)