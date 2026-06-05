// const company = {
//   name: "ООО Агро",
//   employees: [
//     { 
//       name: "Света", 
//     }
//   ],
//   ceo: {
//     name: "Вася",
//   },

//   getCompanyName: function() {
//     console.log(this.name);
//   },

//   getEmployeesName: function() {
//     console.log(this.employees.map(el => el.name).join(', '))
//   },

//   getCeoName: function() {
//     console.log(this.ceo.name)
//   },
// };

// company.getCompanyName();
// company.getEmployeesName();
// company.getCeoName()

const company = {
  name: "ООО Агро",
  getName: function() {
    return this.name;
  },
  employees: [
    { 
        name: "Света",
        getName: function () {
        return this.name
        },
    }
  ],
  ceo: {
    name: "Вася",
    getName: function () {
        return this.name
    },
  }
};

console.log(company.getName());
console.log(company.ceo.getName());
console.log(company.employees.map(employee => employee.getName()));