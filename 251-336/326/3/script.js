let now  = new Date(); // получаем текущий момент 

let date = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()); // получаем нашу дату 

console.log(date.getDay());
