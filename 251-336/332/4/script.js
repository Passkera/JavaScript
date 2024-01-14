let count = 0;
let now  = new Date();
let year = now.getFullYear();
for (let month = 0; month < 12; month++) {
  let date = new Date(year, month, 13);
  if (date.getDay() == 5) { 
    count++;
  }
}
console.log("Number of Friday the 13th this year: " + count);