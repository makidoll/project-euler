var fs = require("fs");
var primes = JSON.parse(fs.readFileSync("primes.1m.json", "utf8"));

function truncatablePrime(n) {
	n = n+"";
	let isTruncatablePrime = true;

	// right to left
	for (let i=0; i<n.length-1; i++) {
		let checkIfPrime = parseInt(
			n.substring(0,i+1)
		);

		if (!primes.includes(checkIfPrime)) {
			isTruncatablePrime = false;
			break;
		}
	}

	if (!isTruncatablePrime) return false;

	// left to right
	for (let i=n.length-1; i>0; i--) {
		let checkIfPrime = parseInt(
			n.substring(i,n.length)
		);

		if (!primes.includes(checkIfPrime)) {
			isTruncatablePrime = false;
			break;
		}
	}

	return isTruncatablePrime;
}

let sum = 0;

primes.forEach(n=>{
	if (n<10) return;
	if (truncatablePrime(n)) {
		console.log(n);
		sum += n;
	}
});

console.log("\n"+sum);