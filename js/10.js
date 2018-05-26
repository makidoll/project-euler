function isPrime(n) {
	// https://en.wikipedia.org/wiki/Primality_test
	if (n <= 1) return false;
	if (n <= 3) return true;
	if (n%2==0 || n%3==0) return false;
	let i = 5;
	while (i*i <= n) {
		if (n%i == 0 || n%(i+2)==0) return false;
		i += 6;
	}
	return true;
}

function nextPrime(number) {
	//console.log("next prime: "+number)
	let found = false;
	while (!found) {
		number++;
		if (isPrime(number)) return number;
		if (number > maxPrime) return false;
	}
}

var maxPrime = 2000000;
var sum = 0;

var n = 1;
while (n = nextPrime(n)) {
	sum += n;
	console.log("new prime: "+n)
}

console.log("sum: "+sum);