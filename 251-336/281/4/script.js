let arr = ['Garou', 'Best', 'Monster'];

let res = arr.filter(function(elem) {
	if (elem.length >= 5) {
		return true;
	} else {
		return false;
	}
});

console.log(res);