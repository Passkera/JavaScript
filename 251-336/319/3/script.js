let date1 = new Date(2000, 8, 1); // 1 сентября 2000 года
let date2 = new Date(2010, 1, 15); // 15 февраля 2010 года

let diffYears = date2.getFullYear() - date1.getFullYear(); // разница в годах
let diffMonths = date2.getMonth() - date1.getMonth(); // разница в месяцах

let totalDiff = diffYears * 12 + diffMonths; // общая разница в месяцах

console.log(totalDiff); // увидим разницу в месяцах.