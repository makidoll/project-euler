var power = 5;
var results = [];

for (var n=2; n<Math.pow(10, power+2); n++) {
	
	let digits = (n+"").split("").map(n=>parseInt(n));

	let sum = 0;
	digits.map(digit=>{sum+=Math.pow(digit, power)});

	if (n == sum) {
		//console.log(digits)
		//console.log(digits.map(digit=>Math.pow(digit, power)));
		results.push(n);
	}
}

var sum = 0;
results.map(n=>{sum+=n});

console.log(results);
console.log(sum);