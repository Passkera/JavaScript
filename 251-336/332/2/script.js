let now = new Date();
let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
let secondsLeft = Math.floor((endOfDay - now) / 1000);
console.log("Seconds left until the end of the day: " + secondsLeft);