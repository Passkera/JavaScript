let date = new Date();
console.log(date.getDay());

if (date.getDay() > 0 && date.getDay() <= 5) {
    console.log('Рабочий день');
} else {
    console.log('Выходной день');
}

let x = 7;
let z = 0;

console.log(z = x - date.getDay());
