const result = prompt('Сколько будет 7 + или - 15?');

switch (result) {
    case '22':
    case '-8': 
    case'Я не робот': 
    case'я не робот': 
        console.log('Успех!')
        break;
    default: console.log('Вы робот');
}