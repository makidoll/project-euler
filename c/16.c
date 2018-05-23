// Power digit sum

#include <stdio.h>
#include <math.h>
#define POWER 15

void printArray(int arr[], int size) {
	for (int i=0; i<size; ++i) {
		printf("%d,", arr[i]);
	}
	printf("\n");
}

int sumArray(int arr[], int size) {
	int sum = 0;
	for (int i=0; i<size; ++i) {
		sum += arr[i];
	} return sum;
}

void split(int num) {
	int len = 0;
	for (int n=num; n>0; n/=10) len++;

	int arr[len]; len = 0;
	for (int n=num; n>0; n/=10) {
		arr[len] = n%10;
		len++;
	}

	printArray(arr, len);
	printf("%d\n", sumArray(arr, len));
} 

int longPower(int x, int y) {
	int num = x;
	for (int i=1; i<y; ++i) num *= x;
	return num;
}

int main(int argc, char* argv[]) {
		
	int digit = longPower(2, POWER); // chaning types to 'long' or 'long long' doesnt fix it ;__;

	//printf("%d\n", digit);
	split(digit);

	return 0;
}