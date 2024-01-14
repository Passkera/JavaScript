let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 

let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getSeconds());

console.log((date1 - date) / 1000);