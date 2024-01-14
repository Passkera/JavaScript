let Date1 = new Date();

let Date2 = new Date();
Date2.setHours(12, 0, 0, 0);

if (Date1.getTime() >= Date2.getTime()) {
  console.log('Полдень уже был');
} else {
  console.log('Полдень еще не наступил');
}