/*
var Decimal = require("decimal.js");
Decimal.set({precision: 2000, rounding: 1})

for (let i=2; i<1000; i++) {
	let n = new Decimal(1).dividedBy(i);
	n = (n+"").substring(2); // stringify without 0.

	let patterns = {}; 

	let start = 0;
	let end = n.length;

	while (start!=n.length) {
		let result = n.substring(start, end);
		
		if (patterns[result] == undefined) {
			patterns[result] = 1;
		} else {
			patterns[result] += 1;
		}

		end -= 1;
		if (end==start) {
			start += 1;
			end = n.length;
		}
	}

	// get highest number from dict
	let highestAmount = 0;
	let highestResult = "";

	Object.keys(patterns).forEach(result=>{
		let amount = patterns[result];
		if (result.length > highestResult.length || amount > highestAmount) {
				highestAmount = amount;
				highestResult = result;
		}
	});

	console.log(highestResult);
	console.log(patterns);
}
*/

// https://blog.dreamshire.com/project-euler-26-solution/

function primeSieve(n) {
	let sieve = new Array(Math.floor(n/2)).fill(true);

	for (let i=3; i<Math.pow(n,0.5)+1, i+=2) {
		if (sieve[Math.floor(i/2)]) {
			sieve[i*Math.floor(i/2)]
		}
	}
}

function f(n) {
	if (n<8) return 8;
	for ()
}

console.log(f(1000));