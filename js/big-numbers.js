module.exports = {
	number: function(n) {
		return (n+"").split("").map(i => parseInt(i));
	},

	add: function(a, b) {
		let out = [];
		let carry = 0;

		for (var i=Math.max(a.length, b.length)-1; i>0; i--) {
			out[i] = a[i]+b[i]
		}

		return out;
	},
}