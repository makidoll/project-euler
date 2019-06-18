function factorial(n) {
	let out = n;
	for (let i=n-1; i>0; i--) {
		out *= i;
	}
	return out;
}

let factorialMap = {0:1};
for (let d=1; d<10; d++) {
	factorialMap[d] = factorial(d);
}

let sum = 0;
for (let n=3; n<999999; n++) {
	let curious = Array.from(n+"", Number)
		.map(d=>factorialMap[d])
		.reduce((a,b)=>a+b);

	if (curious  == n) {
		sum += curious;
		console.log(curious);
	}
}

console.log("\n"+sum);