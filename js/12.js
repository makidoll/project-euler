function isInt(n) {
	return (n%1==0)? true: false;
}

function isPrime(n) {
	// https://en.wikipedia.org/wiki/Primality_test
	//if (n <= 1) return false; // you need to comment in this case
	if (n <= 3) return true;
	if (n%2==0 || n%3==0) return false;
	let i = 5;
	while (i*i <= n) {
		if (n%i == 0 || n%(i+2)==0) return false;
		i += 6;
	}
	return true;
}

function nextPrime(n) {
	let found = false;
	while (!found) {
		n++;
		if (isPrime(n)) return n;
	}
}

function countFactors(n) {
	//https://www.quora.com/What-algorithm-can-I-use-to-count-the-number-of-factors

	let primeFactors = {};
	let i = 2;
	while (!isPrime(n)) {
		let nN = n/i;
		if (isInt(nN)) {
			if (!primeFactors[i]) primeFactors[i]=0;
			primeFactors[i]++;
			n = nN;
		} else {
			i = nextPrime(i);
		}
	}
	if (!primeFactors[n]) primeFactors[n]=0;
	primeFactors[n]++;

	out = 1;
	primeFactors = Object.values(primeFactors);
	for (var f=0; f<primeFactors.length; f++) {
		out *= primeFactors[f]+1;
	}

	return out;
}

function highlyDivisibleTriangle(amountOfFactors) {
	let found = false;
	let i = 1;
	let tri = 1;
	while (!found) {
		let f = countFactors(tri);
		console.log(tri+": "+f+" factors");
		if (f >= amountOfFactors) {
			console.log("done!");
			found = true;
			break;
		}
		i++;
		tri += i;
	}
}

highlyDivisibleTriangle(500);