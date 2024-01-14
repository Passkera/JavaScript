let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 

let now1  = new Date();
let date1 = new Date(now1.getFullYear(), now1.getMonth(), now1.getDate(), now1.getHours());

console.log(Math.floor((date1 - date) / (1000 * 60 * 60)));