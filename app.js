// Створити клас Employee, у якому будуть такі характеристики - name (ім'я), age (вік), salary (зарплата).
// Зробіть так, щоб ці характеристики заповнювалися під час створення об'єкта.
//
// Створіть гетери та сеттери для цих властивостей.
//
// Створіть клас Programmer, який успадковуватиметься від класу Employee, і який матиме властивість lang (список мов).
//
// Для класу Programmer перезапишіть гетер для властивості salary. Нехай він повертає властивість salary, помножену на 3.
//
// Створіть кілька екземплярів об'єкта Programmer, виведіть їх у консоль.

class Employee {
  #name;
  #age;
  #salary;
  constructor() {
    this.#name = prompt("Input name:") || "no name";
    this.#age = prompt("Input age:") || "no age";
    this.#salary = prompt("Input salary:") || "no salary";
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    this.#age = newAge;
  }

  get salary() {
    return this.#salary;
  }

  set salary(newSalary) {
    this.#salary = newSalary;
  }
}

class Programmer extends Employee {
  #lang;
  constructor(lang) {
    super();
    this.#lang = lang || "no lang";
  }

  get salary() {
    return super.salary * 3;
  }

  set salary(newSalary) {
    super.salary = newSalary;
  }

  get lang() {
    return this.#lang;
  }

  set lang(newLang) {
    this.#lang = newLang;
  }
}

const rst = new Programmer(2);
console.group(rst.name);
console.log("Age: ", rst.age);
console.log("Languages: ", rst.lang);
console.log("Salary: ", rst.salary);
console.groupEnd();

const ol = new Employee();
console.group(ol.name);
console.log("Age: ", ol.age);
console.log("Salary: ", ol.salary);
console.groupEnd();

rst.salary = 10000;
ol.salary = 10000;

console.log(rst);
console.log(ol);

const john = new Programmer(3);
console.log(john);
