let Date1 = new Date();

let Date2 = new Date(2023, 10, 15);

if (Date1.getTime() >= Date2.getTime()) {
  console.log('Половина месяца уже прошла');
} else {
  console.log('Половина месяца еще не прошла');
}

