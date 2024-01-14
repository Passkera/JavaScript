let year  = 2025;
let month = 0;
let day   = 32;

let date = new Date(year, month, day);
console.log(checkDate(date));

function checkDate() {
    if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
        return true;
    } else {
        return false;
    }
}
