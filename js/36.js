function palindrome(n) {
	n = n+"";

	let mid = Math.ceil(n.length/2);

	let a = n.substring(0, mid);
	let b = n.substring(
		// odd numbers
		((n.length%2==0)? mid: mid-1),
		n.length
	);

	b = b.split("").reverse().join("");

	return (a===b);
}

var sum = 0;

for (let n=1; n<1000000; n++) {
	if (!palindrome(n)) continue;
	if (!palindrome(n.toString(2))) continue;
	console.log(n);
	sum += n;
}

console.log("\n"+sum);