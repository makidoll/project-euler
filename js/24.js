let numbers = new Array(10).fill(0).map((_,i)=>i);
let out = [];

function doIt(n, i) {

	if (i==numbers.length) {
		let d = n.join("");

		out.push(d);
		console.log(out.length+": "+d);

		if (out.length == 1000000) process.exit();
		return;
	}

	numbers.forEach((_,j)=>{
		let toPushToN = numbers[j];
		if (n.includes(toPushToN)) return;

		doIt(n.concat([toPushToN]), i+1);
	})
}

doIt([], 0);
console.log(out);