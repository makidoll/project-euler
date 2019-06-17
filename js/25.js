let last = 1n;
let current = 1n;
let currentIndex = 2n;

while (true) {
	let newCurrent = last+current;
	last = current;
	current = newCurrent;
	currentIndex++;

	if ((current+"").length>=1000) {
		console.log(currentIndex);
		process.exit();
	}
}