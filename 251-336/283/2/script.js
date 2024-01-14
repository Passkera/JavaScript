let arr = [2, 4, 6, 8];

let result = arr.some(function(elem, index) {
	return elem * (index + 1) > 30;
});

console.log(result);