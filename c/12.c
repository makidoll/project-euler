// Highly divisible triangular number

#include <stdio.h>
#define MAX 500

int triangle(int max) {
	int sum = 0;
	for (int i=1; i<=max; ++i) {
		sum += i;
	} return sum;
}

void printFactors(int num) {
	for (int i=1; i<=num; ++i) {
		if (num%i==0) printf("%d,", i);
	}
}

int amountOfFactors(int num) {
	int amount = 0;
	for (int i=1; i<=num; ++i) {
		if (num%i==0) amount++;
	} return amount;
}

int main(int argc, char* argv[]) {
	
	int tri, factors = 0;
	int i = 58996953;  
	while (factors <= MAX) {
		
		tri =  triangle(i);
		factors = amountOfFactors(tri);
		printf("%d: %d factors\n", tri, factors);
		//printFactors(tri); printf("\n");
		i++;
	}

	return 0;
}