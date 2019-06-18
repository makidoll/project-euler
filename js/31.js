var combinations = 0

for (let a=0; a<=200; a+=200) {
	let sum = a;
	if (sum==200) { combinations++; continue; }
	if (sum>200) continue;

	for (let b=0; b<=200; b+=100) {
		let sum = a+b;
		if (sum==200) { combinations++; continue; }
		if (sum>200) continue;

		for (let c=0; c<=200; c+=50) {
			let sum = a+b+c;
			if (sum==200) { combinations++; continue; }
			if (sum>200) continue;

			for (let d=0; d<=200; d+=20) {
				let sum = a+b+c+d;
				if (sum==200) { combinations++; continue; }
				if (sum>200) continue;

				for (let e=0; e<=200; e+=10) {
					let sum = a+b+c+d+e
					if (sum==200) { combinations++; continue; }
					if (sum>200) continue;

					for (let f=0; f<=200; f+=5) {
						let sum = a+b+c+d+e+f;
						if (sum==200) { combinations++; continue; }
						if (sum>200) continue;

						for (let g=0; g<=200; g+=2) {
							let sum = a+b+c+d+e+f+g;
							if (sum==200) { combinations++; continue; }
							if (sum>200) continue;

							for (let h=0; h<=200; h+=1) {
								let sum = a+b+c+d+e+f+g+h;
								if (sum==200) { combinations++; continue; }
								if (sum>200) continue;
							}
						}
					}
				}
			}
		}
	}
}

console.log(combinations)