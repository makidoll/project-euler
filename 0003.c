// Largest prime factor

#include <stdio.h>
#include <stdint.h>

int isPrime(int64_t num) {
	for (int64_t i=2; i<num; ++i) {
		if (num%i == 0) return 0;
	} return 1;
}

int main(int argc, char* argv[]) {
	
	int64_t FACTORS_OF = 2000;

	for (int64_t i=FACTORS_OF; i>0; --i) {
		if (FACTORS_OF%i == 0) {
			// printf("%d\n", i); // Factors	
			if (isPrime(i)>0) printf("%ld\n", i); // Prime Factors
		}
	}

	return 0;
}