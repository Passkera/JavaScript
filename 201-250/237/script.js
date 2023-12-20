let arr = [
	function() {return 1},
	function() {return 2},
	function() {return 3},
];

for (let func of arr) {
	console.log(func());
}

let result = arr[0]() + arr[1]() + arr[2]();
console.log(result);