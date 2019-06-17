var fs = require("fs");

function sumOfDivs(n) {
	let sum = 0;
	for (let i=1; i<n; i++) {
		if (n%i != 0) continue;
		sum += i;
	}

	return sum;
}


// find abundant numbers up to 28123
let abundants = [];

for (let n=1; n<=28123; n++) {
	console.log(n);

	let a = sumOfDivs(n);
	if (a==n) continue; // perfect
	if (a<n) continue; // deficient

	if (!abundants.includes(n))
		abundants.push(n);
}

// find all abundant sums under 28123
let abundantSums = [];

abundants.forEach((a,i)=>{
	console.log(i);
	abundants.forEach(b=>{
		let sum = a+b;
		if (sum>28123) return;

		if (!abundantSums.includes(sum))
			abundantSums.push(sum);
	});
});

// fs.writeFileSync("23.data.json", JSON.stringify({
// 	abundants: abundants.sort((a,b)=>a-b),
// 	abundantSums: abundantSums.sort((a,b)=>a-b),
// }, null, 4));

// sum all numbers that arent in abundantSums under 28123
let sum = 0;

for (let i=1; i<=28123; i++) {
	if (abundantSums.includes(i)) continue;
	sum += i;
}

console.log(sum)