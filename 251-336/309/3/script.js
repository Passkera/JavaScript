function func(employee) {

	let position;
	if (employee[3] !== undefined) {
	  position = employee[3];
	} else {
	  position = 'джуниор';
	}
	console.log(position);
  }
  
  func( ['John', 'Smit', 'development'] );






