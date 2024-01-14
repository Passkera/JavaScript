function func(arr) {
	for (let elem of arr) {
		if (typeof elem == 'object') {
			func(elem);
		} else {
			mass += elem + ' ';
		}
	}
}
let mass = [];
func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);
console.log(mass);