// Smallest multiple

#include <stdio.h>
#include <stdbool.h>

#define MAX 10

int main(int argc, char* argv[]) {
	
	int num = 1;
	bool found = false;

	bool cur_found = false;
	while (found == false) {
		if (cur_found) {
			printf("%d\n", num);
		} else {
			cur_found = true;
			for (int i=1; i<MAX; ++i) {
				if (num%i == 0) {
					cur_found = true;
				} else {
					cur_found = false;
					break;
				}
			}
		}
	}

	return 0;
}