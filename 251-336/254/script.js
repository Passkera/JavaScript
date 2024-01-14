function square(num) {
	return num ** 3;
   }
   
   function each(arr, callback) {
	 let result = [];
	 for (let i = 0; i < arr.length; i++) {
	   result.push(callback(arr[i]));
	 }
	 return result;
   }
   
   let result = each([1, 2, 3, 4, 5], square);
   console.log(result);