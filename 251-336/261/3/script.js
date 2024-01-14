function test() {
	let num = 10;
	
	return function() {
		if (num > 0 ) {
			console.log(num);
			num--;
		}
		if (num <= 0) {
			console.log('Отсчет окончен');
		}
	};
}

let func1 = test(); // первый счетчик
func1();  //выведет 1
func1();  //выведет 2
func1();  //выведет 1
func1();  //выведет 2
func1();  //выведет 1
func1();  //выведет 2
func1();  //выведет 1
func1();  //выведет 2
func1();  //выведет 1
func1();  //выведет 2
func1();  //выведет 1
func1();  //выведет 2
