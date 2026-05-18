const roles = ['user', 'admin', 'manager', 'superuser', 'guestuser', 'doctoruser'];
console.log(roles);
console.log(roles[0]);
console.log(roles.length);
console.log(roles[roles.length - 1]);
console.log(roles.at(-1));

const userAge = [2040 - 2022, 10 > 0 ? 5 : 1];
console.log(userAge)

const userNames = new Array('Вася', 'Петя', 'Антон');
console.log(userNames);

const users = ['Катя', 'Вика', 'Вероника'];
users[2] = 'Никита';
console.log(users)

users.push('Кристина');
console.log(users);
console.log(users.length)

const arrLength = users.push('Глеб');
console.log(users, arrLength);

users.unshift('Виталий');
console.log(users);

const el = users.pop();
console.log(el);
console.log(users);

const el2 = users.shift();
console.log(el2);
console.log(users);

const roles2 = ['admin', 'user', 'manager'];
const elIndex = roles2.indexOf('admin');
console.log(elIndex)
const elIndex2 = roles2.indexOf('superuser');
console.log(elIndex2)

if (roles2.indexOf('admin') >= 0) {
    console.log('Доступ есть');
}

console.log(roles2.includes('admin'));
console.log(roles2.includes('superuser'));

if (roles2.includes('admin')) {
    console.log('Доступ есть')
} else {
    console.log('Нет доступа');
}

const res = roles.slice(2);
console.log(res);

const res2 = roles.slice(0, 2);
console.log(res2);

const res3 = roles.slice(-1);
const res4 = roles[roles.length - 1];
console.log(res3, res4);

const res51 = roles.slice(1, -2);
console.log(res51);

// const res5 = roles.splice(5);
// const res6 = roles.splice(2, 1);
// const res7 = roles.splice(-1);
// console.log(roles)

const res8 = roles.reverse();
console.log(roles);

const newRoles = ['sysadmin', 'developer'];

const res9 = roles.concat(newRoles);
console.log(res9)

const url = 'auth/user/login';
const res10 = url.split('/')
console.log(res10);

console.log(roles.join('-'));

const userData = ['Антон', 18, 'Москва'];

const [userName, _, city] = userData;

console.log(userName, city)

const data = [1, 2, 3, 4, 5, 6];
const [one, two, ...others] = data;
console.log(one, two, others)

const url2 = 'https://purpleschool.ru/course/javascript';

function getUrlParts (url) {
    const [protocol, _, host, ...path] = url2.split('/');
    if (protocol === 'https:' || protocol === 'http:') {
        if (!host.includes('.')) {
            return;
        }
        console.log(`Протокол: ${protocol.split(':')[0]}`);
        console.log(`Доменное имя: ${host}`)
        console.log(`Путь внутри сайта: /${path.join('/')}`)
    }  
}

getUrlParts(url2)