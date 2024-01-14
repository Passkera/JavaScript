function test() {
	let num = 10;
	
	return function() {
		console.log(num);
		num--;
	};
}

let func1 = test(); // первый счетчик
func1();  //выведет 1
func1();  //выведет 2

