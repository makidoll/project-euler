function pow(n, power) {
	let out = n;

	for (let i=1n; i<power; i++) {
		out *= n;
	}

	return out;
}

let result = 0;

(pow(2n, 1000n)+"").split("").map(x=>{
	result += parseInt(x);
})

console.log(result);