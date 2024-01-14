let arr = [1, 2, 3, 4, 5];

function func(arr) {
	console.log(arr.shift());
	
	if (arr.length != 0) {
		func(arr);
	}
}

func(arr);
