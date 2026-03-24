let num = 10;
let bul = true;
let str = "qwerty";
let obj = { name: "Nazar", age: 18 };
let mas = [1, 2, 4];

square(5);

function square(number) {
  return number * number;
}

let Hello = function() {
  console.log("Hello");
};
const sum = (a, b) => {
  return a + b;
};

let res = sum(5,10);
console.log(res);
Hello();

let check = (n) => {
  if (n > 0) {
    console.log("Число додатне");
  } else if (n < 0) {
    console.log("Число від'ємне");
  } else {
    console.log("Це нуль");
  }
};
check (32);

const getRole = (role) => {
  switch (role) {
    case 1:
      return "Admin";
    case 2:
      return "Editor";
    case 3:
      return "User";
    default:
      return "Guest";
  }
};
console.log(getRole(1));

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} їсть...`);
  }
}
class Dog extends Animal {
  bark() {
    console.log(`${this.name} каже: Гав-гав!`);
  }
}
class Cat extends Animal {
  meow() {
    console.log(`${this.name} каже: Мяу!`);
  }
}

const myDog = new Dog("Рекс");
const myCat = new Cat("Мурчик");

myDog.bark();
myCat.meow();
myDog.eat();
