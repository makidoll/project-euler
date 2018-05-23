// 10001st prime

#include <stdio.h>
#include <stdbool.h>
#define MAX 10001

bool isPrime(int num) {
	for (int i=2; i<num; ++i) {
		if (num%i == 0) return false;
	} return true;
}

int main(int argc, char* argv[]) {
	
	int index = 0;
	int prime = 2;
	while (index < MAX) {
		if (isPrime(prime)) {
			printf("%d\n", prime);
			index++;
		}
		prime++;
	}

	return 0;
}