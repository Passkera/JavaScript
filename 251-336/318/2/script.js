let now  = new Date();
let date = new Date(2023, 8, 25, 23, 59, 59);


let diff = now.getTime() - date.getTime();
console.log(Math.ceil(((diff / (1000 * 60 * 60)) / 24) / 31));