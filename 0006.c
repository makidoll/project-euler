// Sum square difference

#include <stdio.h>
#include <stdlib.h>
#define MAX 100

int sumSquare(int max) {
	int sum = 0;
	for (int i=1; i<=max; i++) {
		sum += i*i;
	} return sum;
}

int squareSum(int max) {
	int sum = 0;
	for (int i=1; i<=max; ++i) {
		sum += i;
	} return sum*sum;
}

int main(int argc, char* argv[]) {

	printf("%d\n", abs(sumSquare(MAX)-squareSum(MAX)));
	return 0;
}