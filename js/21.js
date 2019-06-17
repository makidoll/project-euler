function d(n) {
	n = BigInt(n);

	let sum = 0n;
	for (let i=1n; i<n; i++) {
		if (n%i == 0n) {
			sum += i;
		}
	}

	return sum;
}

var found = [];

for (let n=1n; n<10000n; n++) {
	console.log(n);
	if (found.includes(n)) continue;

	let a = d(n);
	let b = d(a);

	if (a == b) continue;
	if (b == n) {
		if (!found.includes(a)) found.push(a);
		if (!found.includes(b)) found.push(b);
	}
}

console.log(found);

let sum = 0n;
found.map(x=>sum+=x);
console.log(sum)