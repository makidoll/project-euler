function nEven(n) { return n/2; }
function nOdd(n) { return n*3 + 1; }
function isEven(n) { return (n%2==0)? true: false; }
function collatzTerms(n) {
	let terms = 1; 
	while (n!=1) {
		terms++;
		n = (isEven(n))?
			nEven(n): nOdd(n);
	}
	return terms;
}

function collatzLongestChain(max) {
	let biggest = [0, 0];
	for (var i=1; i<=max; i++) {
		let n = collatzTerms(i);
		console.log(i+": "+n+" terms");
		if (n>biggest[1]) {
			biggest[0] = i;
			biggest[1] = n;
		}
	}
	console.log("biggest:\n"+
		biggest[0]+": "+biggest[1]+" terms");
}

collatzLongestChain(1000000);