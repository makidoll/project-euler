// Even Fibonacci numbers

#include <stdio.h>

#define MAX 4000000

int main(int argc, char* argv[]) {

	int a = 1;
	int b = a+a;
	int c; // holding

	int sum = 0;
	while (a < MAX) {
		if (b%2==0) sum += b;
		c = b; 
		b = a+b;
		a = c;
	}
	printf("%d\n", sum);

	return 0;
}