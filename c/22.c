// Names scores

#include <stdio.h>

#define FILE "22.txt"

void findWordScoreSum() {
	FILE* file;
	file = fopen(FILE, "r");

	int c;
	int index = 1;
	int sum = 0;
	int score = 0;

	if (file) {
		while ((c = getc(file)) != EOF) {
		
			// Ignore speech marks (34)
			if (c>=65 && c<=90) {
				//printf("%d: %d\n", index, c-64);
				score += c-64;
			} // A-Z

			if (c == 44) {
				sum += score*index;
				//printf("Score of word: %d\n", score*index);
				score = 0;
				index++;
			} // Comma

		} fclose(file);
	}

	printf("Sum of all scores: %d\n", sum);
}

void sortWordsWrite() {
	
}

int main(int argc, char* argv[]) {
	
	sortWordsWrite();
	findWordScoreSum();
	return 0;
}