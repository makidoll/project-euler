// Multiples of 3 and 5

#include <stdio.h>

#define MAX 1000

int main(int argc, char* argv[]) {
	
	int sum = 0;
	for (int i=0; i<MAX; ++i) {
		if (i%3==0) { sum += i; continue; } // OR?...
		if (i%5==0) sum += i;
	}
	printf("%d\n", sum);

	return 0;
}