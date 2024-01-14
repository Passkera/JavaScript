let now  = new Date(); // получаем текущий момент 

let date = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate()); // получаем нашу дату 

console.log('Проблем не возникнет')
console.log(date.getDay());
