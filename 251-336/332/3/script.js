let now = new Date();
let newyear = new Date(2023, 11, 32);
let noow = new Date(now.getFullYear(), now.getMonth(), now.getDate());

console.log((newyear - noow) / (1000 * 60 * 60 * 24));