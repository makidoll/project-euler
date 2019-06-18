var size = 1001;

var cells = [];
for (let y=0; y<size; y++) {
	cells[y] = [];
	for (let x=0; x<size; x++) {
		cells[y][x] = 0;
	}
}

function printCells() {
	cells.forEach(y=>{
		let out = "";
		y.forEach(cell=>{
			out += cell+" ";
		});
		console.log(out);
	});
	console.log("");
}

function fillSpiralCells() {
	let center = Math.floor(size/2);

	let spiralX = 0;
	let spiralY = 0;
	let spiralWidth = 1;
	let spiralHeight = 1;

	let dir = "e"; // east, south, west, north

	for (let n=1; n<=size*size; n++) {
		cells[center+spiralY][center+spiralX] = n;

		if (dir == "e") {
			spiralX += 1;
			if (spiralX>=spiralWidth) {
				dir = "s";
			}
		} else if (dir == "s") {
			spiralY += 1;
			if (spiralY>=spiralHeight) {
				dir = "w";
			}
		} else if (dir == "w") {
			spiralX -= 1;
			if (Math.abs(spiralX)>=spiralWidth) {
				dir = "n";
			}
		} else if (dir == "n") {
			spiralY -= 1;
			if (Math.abs(spiralY)>=spiralHeight) {
				dir = "e";
				spiralWidth += 1;
				spiralHeight += 1;
			}
		}

		//printCells();
	}
}

function diagonalNumbers() {
	let center = Math.floor(size/2);
	let sum = 0;

	for (let i=0; i<size; i++) {
		sum += cells[i][i];
		if (i == center) continue;
		sum +=  cells[i][size-1-i];
	}

	return sum;
}

fillSpiralCells();
console.log(diagonalNumbers());