let arr = ['123', '456', '789'];

let res = arr.map(function(elem, index) {
    let x = [];
    x += elem * index;
 return x;
});

console.log(res); 