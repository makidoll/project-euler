let numbers = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen",

	20: "twenty",
	30: "thirty",
	40: "forty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninety",
};

// fill 1 to 99
function numbersFromTenth(tenth) {
	// 1 to 9 
	for (let i=1; i<10; i++) {
		numbers[tenth+i] = numbers[tenth]+"-"+numbers[i];
	}
}

for (let tenth=20; tenth<100; tenth+=10) {
	numbersFromTenth(tenth);
}

// fill to 100 to 999
function numbersFromHundreth(hundreth) {
	numbers[hundreth] = numbers[Math.floor(hundreth/100)]+" hundred"; 

	// 1 to 99
	for (let i=1; i<100; i++) {
		numbers[hundreth+i] = numbers[hundreth]+" and "+numbers[i]
	}
}

for (let hundreth=100; hundreth<1000; hundreth+=100) {
	numbersFromHundreth(hundreth);
}

// fill 1000
numbers[1000] = "one thousand";

// get letter count
var count = 0;

Object.values(numbers).forEach(number=>{
	count += number.replace(/[^a-z]/gi, "").length;
});

console.log(count);