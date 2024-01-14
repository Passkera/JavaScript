let date = new Date(2020, 2, 0);
console.log(isLeap(date));

function isLeap() {
    if (date.getDate() == 29) {
        return true;
    } else {
        return false;
    }
}
