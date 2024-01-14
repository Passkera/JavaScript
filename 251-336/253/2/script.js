function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result;
}

let result = each(['123', 'abc'], function(num) {
	return num.split("").reverse().join("");
});

console.log(result);