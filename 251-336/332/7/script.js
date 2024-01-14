let now  = new Date();
let date = new Date(now.getFullYear());
console.log(isLeap(date));

function isLeap() {
    if (date.getDate() == 29) {
        return true;
    } else {
        return false;
    }
}
