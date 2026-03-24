let obj1 = { name: "Nazar" };
let obj2 = { num: 10 };
let obj3 = { bul: true };
let obj4 = { nul: null };
let obj5 = { mas: [21, 32, 43] };

console.log(obj1);

obj1.age = 18;
obj1.name = "Nazarii"
console.log(obj1);

if (obj3.bul == true){
  obj3.bul = false;
} else {
  obj2.num = 100;
}
obj2.num2 = 10;
switch (obj2.num2) {
  case 5:
    console.log("п'ять");
    break;
  case 10:
    console.log(" десять");
    break;
  case 20:
    console.log("двадцять");
    break;
  default:
    console.log("Інше число");
}
