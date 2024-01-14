function func(options) {
	let color;
	if (options.color !== undefined) {
		color = options.color;
	} else {
		color = 'black';
	}
	console.log(color);
}

func( {color: 'red', width: 400, height: 500} );