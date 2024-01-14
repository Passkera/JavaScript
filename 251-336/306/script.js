let options = {
	width:  400,
	height: 500,
};
let {width, height} = options;

let color;
if (options.color !== undefined) {
	color = options.color;
} else {
	color = 'black';
}

console.log(width);  // выведет 2025
console.log(height); // выведет 12
console.log(color);   // выведет 31