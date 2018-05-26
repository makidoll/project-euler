function isInt(n) {
	return (n%1==0)? true: false;
}

function factors(n) {
	let out = [];
	for (var i=1; i<=n; i++) {
		if (isInt(n/i)) out.push(i)
	}
	return out;
}

// function tri(n) {
// 	let out = 0;
// 	for (var i=1; i<=n; i++) {
// 		out += i;
// 	}
// 	return out;
// }

function highlyDivisibleTriangle(amountOfFactors) {
	let found = false;
	let i = 1;
	let tri = 1;
	while (!found) {
		let f = factors(tri);
		console.log(tri+": "+f.length+" factors");
		if (f.length >= amountOfFactors) {
			console.log("done!");
			found = true;
			break;
		}
		i++;
		tri += i;
	}
}

highlyDivisibleTriangle(500);