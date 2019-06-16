var day = 1;
var weekDay = 1; // monday
var month = 1; // january
var year = 1900;

var weekWords = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
var monthWords = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

var monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];

let lastPrintDate;
function printDate() {
	let newPrintDate = (
		weekWords[weekDay-1]+" "+day+" "+
		monthWords[month-1]+" "+year
	);

	if (newPrintDate != lastPrintDate) {
		lastPrintDate = newPrintDate;
		console.log(newPrintDate);
	}
}

//printDate();
let count = 0;

while (day!=31 || month!=12 || year!=2000) {
	// update monthLength for leap years
	if ((year%1000!=0 || year%400==0) && year%4==0) {
		monthLength[1] = 29; // feb leap
	} else {
		monthLength[1] = 28; // feb
	}

	// new day!
	day++;
	weekDay++;

	// overflow weekday 
	if (weekDay>7) weekDay = 1;

	// overflow day, new month
	if (day>monthLength[month-1]) {
		day = 1;

		if (month == 12) {
			// new year
			month = 1;
			year++;
		} else {
			month++;
		}
	}
	
	// print leap days
	// if (month==2 && day==29) {
	// 	printDate();
	// }

	// sundays that fell on the first of the month
	if (year>1900 && weekDay==7 && day==1) {
		printDate();
		count++;
	}

	//printDate();
}

console.log(count);