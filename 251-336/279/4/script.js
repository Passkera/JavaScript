let arr = ['123', '456', '789'];

let res = arr.map(function(elem) {
    let x = [];
    x += elem.split('');
 return x;
});

console.log(res); 