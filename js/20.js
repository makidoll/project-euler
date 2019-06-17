function n(num) {
	num = BigInt(num);
	for (let i=num-1n; i>0n; i--) {
		num *= i;
	}
	return num
}

let sum = 0;
(n(100)+"").split("").map(x=>{sum+=parseInt(x)});
console.log(sum)