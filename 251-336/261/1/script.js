function test() {
	let num = 1;
	
	return function() {
		console.log(num);
		num++;
	};
}

let func1 = test(); // первый счетчик
func1();  //выведет 1
func1();  //выведет 2

let func2 = test(); // второй счетчик
func2();  //выведет 1
func2();  //выведет 2