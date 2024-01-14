let date = new Date(2000, 3, 1, 23, 59, 59);
let date1 = new Date(1988, 11, 10, 23, 59, 59);

let diff = date.getTime() - date1.getTime();
console.log(Math.floor((diff / (1000 * 60 * 60)) / 24));