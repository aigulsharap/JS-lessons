'use strict';

const b = 1;

const a = {
    b,
    getB: function() {
        return this.b;
    },
    getBAlt() {
        return this.b;
    },
}

console.log(a.getBAlt());

const audi = {
    make: "Audi",
    model: 'A3',
    year: 2021,
    damages: [],
    addDamage(part, rate) {
        console.log(`У авто ${this.make} ${this.model} ${this.year} добавлено: повреждение ${part} о степенью ${rate}.`)
        this.damages.push({
            part,
            rate
        })
    },
}

audi.addDamage('Капот', 1);

const bmw = {
    make: 'BMW',
    model: 'X5',
    year: 2022,
    damages: [],
}

bmw.addDamage = audi.addDamage;

bmw.addDamage('Бампер', 2);

const addDamageFunc = audi.addDamage;
addDamageFunc.call(bmw, 'Фары', 2);
addDamageFunc.apply(audi, ['Фары', 1]);

const carManipualtion = {
    addDamage(part, rate) {
        this.damages.push({part, rate});
        console.log(`Добавить повреждение на ${this.make} ${this.model}`);
    }
}

const addDamageAudi = carManipualtion.addDamage.bind(audi);
addDamageAudi('Крыло', 3);

const addDamageAudiRoof = carManipualtion.addDamage.bind(audi, 'Крыша');
addDamageAudiRoof(5);
console.log(audi);

const user = {
  login: 'example@mail.com',
  password: '12345'
};

function removePassword(reset) {
  if (reset) {
    this.password = undefined;
  }
}

const removeUserPassword = removePassword.bind(user, true)

removeUserPassword();
console.log(user);

(function() {
    console.log('Start IIFO')
})();

function d() {
    let c = 1;
    return function b() {
        return c++;
    }
}
d()();
console.log(d()());