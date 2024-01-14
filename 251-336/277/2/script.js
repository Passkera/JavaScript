function func(arr) {
	let sum = [];
	
	for (let elem of arr) {
		if (typeof elem == 'object') {
			sum += func(elem);
		} else {
			sum += elem;
		}
	}
	
	return sum;
}

console.log(func(['a', ['b', 'c', 'd'], ['e', 'f', 
['g', ['j', 'k']]]] )); 
