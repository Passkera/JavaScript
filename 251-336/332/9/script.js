let currentYear = new Date().getFullYear();
let nextLeapYear = currentYear;

while (true) {
  nextLeapYear++;
  if ((nextLeapYear % 4 === 0 && nextLeapYear % 100 !== 0) || nextLeapYear % 400 === 0) {
    console.log("The next leap year is: " + nextLeapYear);
    break;
  }
}