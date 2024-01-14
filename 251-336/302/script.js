let arr = [,, 12];
let [year = func(), month = func1(), day] = arr;

function func() {
	if (arr[0] == undefined) {
		return (new Date).getFullYear();
	}
	
}

function func1() {
	if (arr[1] == undefined) {
		return (new Date).getMonth() + 1;
	}
}

console.log(year, month, day);
