function removeArrayElements(a,b) {
    var result = a.indexOf(b);
	if(result > -1) {
	a.splice(result,1);
	}
	
	if(a.length === 0) {
		return "invalid input";
	}
	else {
		return a;
	}
}

console.log(removeArrayElements([2, 5, 9, 6], 5));