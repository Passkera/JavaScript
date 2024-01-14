function getLastLeapYear() {
    const year = new Date().getFullYear();
    const diff = year % 4;
    return year - diff;
  }
  
console.log(getLastLeapYear());