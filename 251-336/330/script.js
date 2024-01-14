let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0); 

let now1  = new Date();
let date1 = new Date(now1.getFullYear(), now1.getMonth(), now1.getDate(), now1.getHours());

console.log(Math.floor((date - date1) / (1000 * 60 * 60)));