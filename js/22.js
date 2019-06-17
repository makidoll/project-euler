var fs = require("fs");

var names = JSON.parse("["+fs.readFileSync("22.names.txt", "utf8")+"]");
names = names.sort();

var totalScore = 0;

names.forEach((name,i)=>{
	name.replace(/[^a-z]/gi,"").toUpperCase();
	let letterScores = [];

	name.split("").forEach(letter=>{
		letterScores.push(letter.charCodeAt(0)-64)
	});

	let sum = 0;
	letterScores.map(score=>sum+=score);

	let score = sum*(i+1);
	totalScore += score;

	console.log(name+": "+score);
});

console.log("\n"+totalScore);