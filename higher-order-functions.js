function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function calculate (a, b, fn) {
    console.log(fn.name);
    const res = fn(a, b);
    return res;
}

let res = calculate(3, 5, add);
console.log(res);
res = calculate(3, 5, substract);
console.log(res);

// Возврат функции

// function power(pow) {
//     return function (num) {
//         return num**pow;
//     }
// }

const power = pow => num => num**pow;

const powerOfTwo = power(2);
console.log(powerOfTwo(5));

console.log(power(5)(4));