const user = {
  name: "Вася",
  surname: "Пупкин",
  age: 24,
  skills: ["Программирование", "Готовка"],
  eduBasic: "Школа 10",
  eduPro: "МФТИ",
  getFullName: function () {
    return this.name + " " + this.surname;
  },
};

console.log(user);
console.log(user.skills);
console.log(user["skills"]);
const level = "Pro";
console.log(user["edu" + level]);
console.log(user.getFullName());

// const res = prompt('Введите свойство');
// console.log(user[res]);

user["city"] = "Москва";
console.log(user);

user.age = 30;
console.log(user.age);

user["age"] = 31;
console.log(user.age);

const users = [
  { name: "Вася", age: 30 },
  { name: "Катя", age: 18 },
  { name: "Аня", age: 40 },
  { name: "Петя", age: 25 },
];

console.log(users.sort((a, b) => a.age - b.age));

const users2 = [
  {
    name: "Вася",
    surname: "Пупкин",
    age: 30,
    skills: ["Разработка", "DevOps"],
  },
  { name: "Катя", age: 18, surname: "Белова", skills: ["Дизайн"] },
];

// преобразовать пользователей до вида {fullName: 'Вася Пупкин, skillNum: 2 }

const userData = users2.map((user) => {
  return {
    fullname: `${user.name} ${user.surname}`,
    skillNum: user.skills.length,
  };
});

console.log(userData);

const wallet = {
  balance: 0,
  operations: [],
  increase: function (sum, reason) {
    this.balance += sum;
    this.operations.push({ reason, sum });
  },
  decrease: function (sum, reason) {
    if (this.balance < sum) {
      console.log("Недостаточно баланса");
      return false;
    }
    this.balance -= sum;
    this.operations.push({ reason: reason, sum: -sum });
    return true;
  },
  getOperationLength: function () {
    return `Число выполненных операций: ${this.operations.length}`;
  },
};

wallet.increase(500, "Плюс");
console.log(wallet.decrease(400, "минус"));
console.log(wallet.decrease(400, "минус"));
console.log(wallet);
console.log(wallet.getOperationLength());
console.log(wallet.balance);

const cities = {
  msk: {
    lt: 200,
    temp: 24,
  },
  spb: {
    lt: 100,
    temp: 20,
  },
};

let avgTemp = 0;
let citiesCount = Object.keys(cities).length;
let sumTemp = 0;

for (const key in cities) {
  sumTemp += cities[key].temp;
  avgTemp = sumTemp / citiesCount;
}

console.log(avgTemp);

const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(y);

let user2 = {
  name: "Вася",
  age: 24,
  city: "Moscow",
};

const { age, ...userWithoutAge } = user2;
console.log(age);
console.log(userWithoutAge);
console.log(user2);

const additionalData = {
  skills: ["Разработка", "Дизайн"],
  creditcard: "12348478454844548",
};

user2 = {
  ...user2,
  ...additionalData,
};
console.log(user2);

const cities2 = {
  msk: {
    temp: {
      celcius: 25,
    },
  },
  spb: {},
};

const city = "msk";
if (cities2[city] && cities2[city].temp) {
  console.log(cities2[city].temp.celcius);
}

console.log(cities2[city]?.temp?.celcius);

const warehouse = {
  goods: [],
  findGoodById: function (goodId) {
    return this.goods.find((g) => g.id === goodId);
  },
  addGood: function (newGood) {
    const existedGood = this.findGoodById(newGood.id);
    if (existedGood) {
      console.log("Этот товар уже есть на складе");
      return;
    }
    this.goods.push(newGood);
  },
  getWeightKg: function () {
    return this.goods.reduce((acc, el) => (acc += el.weight?.kg || 0), 0);
  },
};

/* Товары */
const car = {
  id: 1,
  weight: {
    kg: 1000,
  },
  brand: "Ford",
};

const chair = {
  id: 2,
  weight: {
    kg: 2,
  },
};

const paper = {
  id: 3,
  color: "red",
};

warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
warehouse.addGood(car);
console.log(warehouse.goods);
console.log(warehouse.findGoodById(3));
console.log(warehouse.getWeightKg());