let arr = ['12', '23', '34', '45', '56'];

let res = arr.map(function(elem) {
 return elem.split("").reverse().join("");
});

console.log(res); 