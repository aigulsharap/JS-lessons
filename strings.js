const userName = 'Вася Пупкина';
console.log(userName);
console.log(userName[0]);
console.log(userName.charAt(1));
console.log(userName.length);
console.log(userName.indexOf('П'));
console.log(userName.lastIndexOf('а'));
console.log(userName.includes('уп'));
console.log(userName.slice(5));
console.log(userName.slice(5, 8));
console.log(userName.startsWith('В'));
console.log(userName.endsWith('н'));

const fullUserName = 'Вася aka Terminator Пупкин';

const userName1 = fullUserName.slice(0, fullUserName.indexOf(' '))
const userSurname = fullUserName.slice(fullUserName.lastIndexOf(' ') + 1);
console.log(userName1, userSurname);

console.log(userName.toLocaleLowerCase());
console.log(userName.toLocaleUpperCase());
console.log(userName.replace('П', 'Д'));
console.log(userName.replaceAll('а', 'и'));

userName2 = ' Вася Пупкина    \nd';

console.log(userName2);
console.log(userName.trim());

// Верные номера 

const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56 ';

// не верные номера

const num1Error = '89103235'
const num2Error = '+7d910d323-53-56'
const num3Error = '9+7103235356'
const num4Error = '89103q35356'

function isPhoneNumber(phoneNumber) {
    let phone = phoneNumber.replaceAll(' ', '').replaceAll('(', '').replaceAll(')', '').replaceAll('+', '').replaceAll('-', '');
    if (phone.length === 11 && !isNaN(Number(phone)) && (phone.startsWith('8') || phone.startsWith('7'))) {
        return 'Это номер телефона в РФ';
    }
    return 'Неправильный формат номера телефона';
}

console.log(isPhoneNumber(num1));
console.log(isPhoneNumber(num2));
console.log(isPhoneNumber(num3));
console.log(isPhoneNumber(num4));
console.log(isPhoneNumber(num5));
console.log(isPhoneNumber(num1Error));
console.log(isPhoneNumber(num2Error));
console.log(isPhoneNumber(num3Error));
console.log(isPhoneNumber(num4Error));

console.log(userName.split(' '));
const [firstname, surName] = userName.split(' ');
console.log(surName, firstname);

const arr = ['Ты', 'знаешь', 'JS'];
console.log(arr.join(' '));

const film = 'Звёздные Воины ';
console.log(film.padStart(50, '*'));
console.log(film.padEnd(50, '*'));
console.log(film.repeat(10));

const card = '2834234503458353';

function hideCardNumber(cardNumber) {
    return cardNumber.slice((-4)).padStart((cardNumber.length), '*');
}

console.log(hideCardNumber(card));