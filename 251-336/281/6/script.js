let arr = [1, 2, [3, 4], 5, [6, 7]];

let res = arr.filter(function(elem) {
		if (typeof elem == 'object') {
			return false;
		} else {
			return true;
		}
});

console.log(res);
