function isPalindromic(n) {
	n = (n+"").split("");

	if (n.length%2==1) return false; // even only

	let left = "";
	let right = "";

	for (var i=0; i<n.length/2; i++) {
		left += n[i]
	}

	for (var i=n.length-1; i>=n.length/2; i--) {
		right += n[i]
	}

	if (left == right) return true;
	return false;
}

function largestPalindromeProduct(digits) {
	let small = Math.pow(10, digits-1);
	let big = Math.pow(10, digits);

	let biggest = [0, 0, 0];

	for (var i=small; i<big; i++) {
		for (var j=small; j<big; j++) {
			let n = i*j;
			if (isPalindromic(n)) {
				if (n>biggest[0]) {
					biggest[0] = n;
					biggest[1] = i; 
					biggest[2] = j;
				} 
				console.log(n+": "+i+"*"+j);
			}
		}
	}

	console.log("\nbiggest:\n"+
		biggest[0]+": "+
		biggest[1]+"*"+biggest[2]
	);
}

largestPalindromeProduct(3);