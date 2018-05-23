function isInt(number) {
	if (number%1==0) return true;
	return false;
}

function isPrime(number) {
	console.log("calculating prime: "+number)
	for (var i=number-1; i>1; i--) {
		if (isInt(number/i)) return false;
	}
	return true;
}

function nextPrime(number) {
	console.log("next prime: "+number)
	let found = false;
	while (!found) {
		number++;
		if (isPrime(number)) return number;
	}
}

function multiplyArray(array) {
	let out = array[0];
	for (var i = 1; i < array.length; i++) {
		out *= array[i];
	}
	return out;
}

function primeFactors(number) {
	// 100/2 = 50/2 = 25/5 = 5
	let original = number;
	let currentPrime = 2;
	let factors = [];
	let found = false;

	while (!found) {
		if (multiplyArray(factors) == original) {
			console.log("done!");
			found = true;
			break;
		}

		if (isInt(number/currentPrime)) {
			console.log("factor: "+currentPrime);
			factors.push(currentPrime);
			number /= currentPrime;
			continue;
		}

		currentPrime = nextPrime(currentPrime);
	}

	return factors;
}

console.log(primeFactors(600851475143));