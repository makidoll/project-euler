function isInt(n) {
	if (n%1==0) return true;
	return false;
}

function isDivisibleBetween(num, low, high) {
	for (var i=low; i<=high; i++) {
		if (!isInt(num/i)) return false;
	}
	return true;
}

function smallestMultiple(low, high) {
	let found = false;
	let number = 230000000;
	while (!found) {
		console.log("trying: "+number)
		if (isDivisibleBetween(number, low, high)) {
			found = true;
			break;
		}
		number += high;
	}
	console.log("found: "+number);
}

smallestMultiple(1, 20);