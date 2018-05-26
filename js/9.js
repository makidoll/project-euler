function isInt(n) {
	if (n%1==0) return true;
	return false;
}

function pyTripSum(a, b) {
	if (a < b) {
		let c = Math.sqrt(a*a+b*b);
		//if (!isInt(c)) return false;
		return a+b+c;
	}
	return false;
}

let target = 1000;

let a = 1;
let b = 2;
let found = false;

while (!found) {
	let sum = pyTripSum(a, b);
	
	if (isInt(sum)) { // valid triplet
		let c = Math.sqrt(a*a+b*b);
		console.log([a, b, c, sum]);
		if (sum == target) { // found
			console.log("found!");
			console.log(a*b*c);
			found = true;
			break;
		}
	}

	if (sum > target) { // overshoot
		a++;
		b = a;
	}
	b++;
}