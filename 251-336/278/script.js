function func(arr) {
	let sum = [];
	
	for (let elem of arr) {
		if (typeof elem == 'object') {
			sum += func(elem);
		} else {
			sum += elem ** 2 + ' ';
		}
	}
	
	return sum;
}

console.log(func([1, [2, 7, 8], [3, 4], [5, [6, 7]]])); 
