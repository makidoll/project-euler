var fs = require("fs");

var primes = [];

if (!fs.existsSync("primes.1m.json")) {
	var max = 1000000; // one million
	for (let n=2; n<max; n++) {
		if (n%2 == 0) continue;
		if (n%5 == 0) continue;

		// progress
		if (n%1000 == 0)
			console.log(((n/max)*100).toFixed(2)+"%");

		let isPrime = true;

		for (let test=n-1; test>1; test--) {
			if (n%test==0) { // divides evenly
				isPrime = false;
				break;
			}
		}

		if (isPrime) {
			primes.push(n);
		}
	}

	fs.writeFileSync("primes.1m.json", JSON.stringify(primes));
} else {
	primes = JSON.parse(fs.readFileSync("primes.1m.json", "utf8"));
}

var circularPrimes = [];

primes.forEach(prime=>{
	let isCircularPrime = false;

	primeArray = Array.from(prime+"");
	for (let i=1; i<primeArray.length; i++) {
		// move left character to the right
		primeArray.push(primeArray.shift());

		if (!primes.includes(
			parseInt(primeArray.join(""))
		)) {
			return; // not circular
		}
	}

	circularPrimes.push(prime);
	console.log(prime);	
});

console.log(circularPrimes);
console.log(circularPrimes.length);