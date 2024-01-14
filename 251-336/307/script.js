let {width: w = 400, height: h = 500} = options;

let с;
if (options.с !== undefined) {
	с = options.color;
} else {
	с = 'black';
}

console.log(w);  // выведет 2025
console.log(h); // выведет 12
console.log(c);   // выведет 31