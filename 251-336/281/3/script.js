let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1, 9];

let res = arr.filter(function(elem) {
	if (elem > 0 && elem < 10) {
		return true;
	} else {
		return false;
	}
});

console.log(res);